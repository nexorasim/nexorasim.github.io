"""MCP-style CLI implementation for deployment automation and package management."""

import os
import sys
import json
import argparse
import subprocess
from pathlib import Path
from typing import Dict, Any, List
from .package_manager import PackageManager


class MCPCLI:
    """Model Context Protocol style CLI for deployment and operations."""

    def __init__(self, root_path: str = None):
        """Initialize MCP CLI.
        
        Args:
            root_path: Root path of the repository
        """
        self.root_path = Path(root_path or os.getcwd())
        self.environments = ["dev", "staging", "prod"]
        self.package_manager = PackageManager(str(self.root_path))

    def apply_config(self, env: str, config_path: str = None) -> bool:
        """Apply environment-specific configuration.
        
        Args:
            env: Environment name (dev, staging, prod)
            config_path: Optional path to config file
            
        Returns:
            True if successful
        """
        if env not in self.environments:
            print(f"Error: Invalid environment '{env}'. Must be one of: {self.environments}")
            return False
        
        env_file = self.root_path / "agent" / f".env.{env}"
        target_env = self.root_path / "agent" / ".env"
        
        if not env_file.exists():
            print(f"Warning: Environment file not found: {env_file}")
            return False
        
        try:
            import shutil
            shutil.copy(env_file, target_env)
            print(f"Applied {env} configuration")
            return True
        except Exception as e:
            print(f"Error applying config: {e}")
            return False

    def trigger_workflow(self, workflow: str, inputs: Dict[str, Any] = None) -> bool:
        """Trigger GitHub Actions workflow.
        
        Args:
            workflow: Workflow name or file
            inputs: Optional workflow inputs
            
        Returns:
            True if successful
        """
        try:
            cmd = [
                "gh", "workflow", "run", workflow
            ]
            
            if inputs:
                for key, value in inputs.items():
                    cmd.extend(["-f", f"{key}={value}"])
            
            result = subprocess.run(cmd, capture_output=True, text=True, cwd=self.root_path)
            
            if result.returncode == 0:
                print(f"Triggered workflow: {workflow}")
                return True
            else:
                print(f"Error triggering workflow: {result.stderr}")
                return False
                
        except FileNotFoundError:
            print("Error: GitHub CLI (gh) not installed")
            return False
        except Exception as e:
            print(f"Error: {e}")
            return False

    def run_tests(self, component: str = "all") -> bool:
        """Run tests for specified component.
        
        Args:
            component: Component to test (agent, gui, web, all)
            
        Returns:
            True if tests pass
        """
        components = {
            "agent": self.root_path / "agent",
            "gui": self.root_path / "gui",
            "web": self.root_path / "web",
        }
        
        if component == "all":
            test_paths = components.values()
        elif component in components:
            test_paths = [components[component]]
        else:
            print(f"Error: Unknown component '{component}'")
            return False
        
        all_passed = True
        
        for path in test_paths:
            if not path.exists():
                continue
            
            print(f"Testing {path.name}...")
            
            if path.name == "agent":
                result = subprocess.run(
                    ["python", "-m", "pytest", "tests/"],
                    cwd=path,
                    capture_output=True,
                    text=True
                )
            elif path.name == "web":
                result = subprocess.run(
                    ["npm", "test", "--", "--watchAll=false"],
                    cwd=path,
                    capture_output=True,
                    text=True
                )
            else:
                continue
            
            if result.returncode != 0:
                print(f"Tests failed for {path.name}")
                print(result.stdout)
                all_passed = False
            else:
                print(f"Tests passed for {path.name}")
        
        return all_passed

    def health_check(self, endpoint: str) -> bool:
        """Run health check against deployed endpoint.
        
        Args:
            endpoint: URL to check
            
        Returns:
            True if healthy
        """
        try:
            import requests
            response = requests.get(f"{endpoint}/health", timeout=10)
            
            if response.status_code == 200:
                print(f"Health check passed: {endpoint}")
                return True
            else:
                print(f"Health check failed: {endpoint} (status: {response.status_code})")
                return False
                
        except Exception as e:
            print(f"Health check error: {e}")
            return False

    def package_init(self) -> bool:
        """Initialize NPM package."""
        try:
            result = self.package_manager.init_package()
            print(json.dumps(result, indent=2))
            return True
        except Exception as e:
            print(f"Package init failed: {e}")
            return False

    def package_version(self, bump_type: str = 'patch') -> bool:
        """Bump package version."""
        try:
            result = self.package_manager.version_bump(bump_type)
            print(json.dumps(result, indent=2))
            return True
        except Exception as e:
            print(f"Version bump failed: {e}")
            return False

    def package_publish(self, dry_run: bool = False) -> bool:
        """Publish package to NPM."""
        try:
            result = self.package_manager.publish_package(dry_run)
            print(json.dumps(result, indent=2))
            return True
        except Exception as e:
            print(f"Package publish failed: {e}")
            return False

    def package_audit(self) -> bool:
        """Audit package for compliance and security."""
        try:
            result = self.package_manager.audit_package()
            print(json.dumps(result, indent=2))
            return result['status'] == 'passed'
        except Exception as e:
            print(f"Package audit failed: {e}")
            return False


def main():
    """Main MCP CLI entry point."""
    parser = argparse.ArgumentParser(
        description="Nexora MCP CLI - Deployment and operations automation"
    )
    
    subparsers = parser.add_subparsers(dest="command", help="Available commands")
    
    # Package management commands
    package_parser = subparsers.add_parser("package", help="Package management")
    package_subparsers = package_parser.add_subparsers(dest="package_command")
    
    package_subparsers.add_parser("init", help="Initialize package")
    
    version_parser = package_subparsers.add_parser("version", help="Bump package version")
    version_parser.add_argument("--type", choices=["patch", "minor", "major"], default="patch")
    
    publish_parser = package_subparsers.add_parser("publish", help="Publish package")
    publish_parser.add_argument("--dry-run", action="store_true", help="Dry run")
    
    package_subparsers.add_parser("audit", help="Audit package")
    
    # Existing commands
    deploy_parser = subparsers.add_parser("deploy", help="Deploy configuration")
    deploy_parser.add_argument("--env", "-e", required=True, choices=["dev", "staging", "prod"])
    deploy_parser.add_argument("--config", "-c", help="Path to config file")
    
    workflow_parser = subparsers.add_parser("workflow", help="Trigger GitHub Actions workflow")
    workflow_parser.add_argument("name", help="Workflow name")
    workflow_parser.add_argument("--inputs", "-i", help="Workflow inputs (JSON)")
    
    test_parser = subparsers.add_parser("test", help="Run tests")
    test_parser.add_argument("--component", "-c", default="all", help="Component to test")
    
    health_parser = subparsers.add_parser("health", help="Run health check")
    health_parser.add_argument("endpoint", help="Endpoint URL")
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        return 1
    
    cli = MCPCLI()
    
    try:
        if args.command == "package":
            if args.package_command == "init":
                success = cli.package_init()
            elif args.package_command == "version":
                success = cli.package_version(args.type)
            elif args.package_command == "publish":
                success = cli.package_publish(args.dry_run)
            elif args.package_command == "audit":
                success = cli.package_audit()
            else:
                print("Unknown package command")
                return 1
            return 0 if success else 1
        
        elif args.command == "deploy":
            success = cli.apply_config(args.env, args.config)
            return 0 if success else 1
        
        elif args.command == "workflow":
            inputs = json.loads(args.inputs) if args.inputs else None
            success = cli.trigger_workflow(args.name, inputs)
            return 0 if success else 1
        
        elif args.command == "test":
            success = cli.run_tests(args.component)
            return 0 if success else 1
        
        elif args.command == "health":
            success = cli.health_check(args.endpoint)
            return 0 if success else 1
    
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
