"""Command-line interface for Nexora Agent."""

import sys
import argparse
import json
from pathlib import Path

from .core.agent import NexoraAgent
from .config.config_loader import ConfigLoader


def main():
    """Main CLI entry point."""
    parser = argparse.ArgumentParser(
        description="Nexora AI Agent - Multi-provider AI orchestration"
    )
    
    subparsers = parser.add_subparsers(dest="command", help="Available commands")
    
    run_parser = subparsers.add_parser("run", help="Run agent with a prompt")
    run_parser.add_argument("prompt", help="Prompt to send to the agent")
    run_parser.add_argument("--provider", "-p", help="Specific provider to use")
    run_parser.add_argument("--model", "-m", help="Model to use")
    run_parser.add_argument("--config", "-c", help="Path to config file")
    
    test_parser = subparsers.add_parser("test-provider", help="Test a specific provider")
    test_parser.add_argument("--provider", "-p", required=True, help="Provider to test")
    test_parser.add_argument("--config", "-c", help="Path to config file")
    
    status_parser = subparsers.add_parser("status", help="Show provider status")
    status_parser.add_argument("--config", "-c", help="Path to config file")
    
    list_parser = subparsers.add_parser("list", help="List available providers")
    list_parser.add_argument("--config", "-c", help="Path to config file")
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        return 1
    
    try:
        config = ConfigLoader(args.config if hasattr(args, "config") else None)
        agent = NexoraAgent(config)
        
        if args.command == "run":
            kwargs = {}
            if args.model:
                kwargs["model"] = args.model
            
            response = agent.execute(args.prompt, provider=args.provider, **kwargs)
            
            if response.success:
                print(f"\n[{response.provider}] Response:\n")
                print(response.text)
                print(f"\nMetadata: {json.dumps(response.metadata, indent=2)}")
                return 0
            else:
                print(f"Error: {response.error}", file=sys.stderr)
                return 1
        
        elif args.command == "test-provider":
            test_prompt = "Say hello and confirm you are working correctly."
            response = agent.execute(test_prompt, provider=args.provider)
            
            if response.success:
                print(f"Provider {args.provider} is working correctly.")
                print(f"Response: {response.text[:100]}...")
                return 0
            else:
                print(f"Provider {args.provider} failed: {response.error}", file=sys.stderr)
                return 1
        
        elif args.command == "status":
            status = agent.get_provider_status()
            print("\nProvider Status:")
            print(json.dumps(status, indent=2))
            return 0
        
        elif args.command == "list":
            providers = agent.list_providers()
            print("\nAvailable Providers:")
            for provider in providers:
                print(f"  - {provider}")
            return 0
    
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
