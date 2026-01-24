"""
MCP-style package management CLI for NexoraSIM
"""

import os
import json
import subprocess
import semver
from typing import Dict, Any, Optional
from pathlib import Path


class PackageManager:
    """Enterprise package management with semantic versioning"""
    
    def __init__(self, workspace_root: str = "."):
        self.workspace_root = Path(workspace_root)
        self.npm_package_dir = self.workspace_root / "npm-package"
        self.agent_dir = self.workspace_root / "agent"
        
    def init_package(self) -> Dict[str, Any]:
        """Initialize NPM package structure"""
        if not self.npm_package_dir.exists():
            raise Exception("NPM package directory not found")
        
        package_json_path = self.npm_package_dir / "package.json"
        if not package_json_path.exists():
            raise Exception("package.json not found")
        
        with open(package_json_path, 'r') as f:
            package_data = json.load(f)
        
        # Validate MIT License
        if package_data.get('license') != 'MIT':
            raise Exception("Package must use MIT License")
        
        # Validate required fields
        required_fields = ['name', 'version', 'description', 'main', 'types']
        missing_fields = [field for field in required_fields if not package_data.get(field)]
        
        if missing_fields:
            raise Exception(f"Missing required fields: {', '.join(missing_fields)}")
        
        return {
            'status': 'initialized',
            'package': package_data['name'],
            'version': package_data['version'],
            'license': package_data['license']
        }
    
    def version_bump(self, bump_type: str = 'patch') -> Dict[str, Any]:
        """Bump package version using semantic versioning"""
        if bump_type not in ['patch', 'minor', 'major']:
            raise Exception("Bump type must be 'patch', 'minor', or 'major'")
        
        package_json_path = self.npm_package_dir / "package.json"
        
        with open(package_json_path, 'r') as f:
            package_data = json.load(f)
        
        current_version = package_data['version']
        
        # Bump version
        if bump_type == 'patch':
            new_version = semver.bump_patch(current_version)
        elif bump_type == 'minor':
            new_version = semver.bump_minor(current_version)
        else:  # major
            new_version = semver.bump_major(current_version)
        
        package_data['version'] = new_version
        
        # Write updated package.json
        with open(package_json_path, 'w') as f:
            json.dump(package_data, f, indent=2)
        
        # Update CHANGELOG.md
        self._update_changelog(new_version)
        
        # Create git tag
        self._create_git_tag(new_version)
        
        return {
            'status': 'version_bumped',
            'old_version': current_version,
            'new_version': new_version,
            'bump_type': bump_type
        }
    
    def publish_package(self, dry_run: bool = False) -> Dict[str, Any]:
        """Publish package to NPM registry"""
        # Validate package
        validation_result = self._validate_package()
        if not validation_result['valid']:
            raise Exception(f"Package validation failed: {validation_result['errors']}")
        
        # Build package
        build_result = self._build_package()
        if not build_result['success']:
            raise Exception(f"Package build failed: {build_result['error']}")
        
        # Run tests
        test_result = self._run_tests()
        if not test_result['success']:
            raise Exception(f"Tests failed: {test_result['error']}")
        
        # Security audit
        audit_result = self._security_audit()
        if not audit_result['success']:
            raise Exception(f"Security audit failed: {audit_result['error']}")
        
        # Publish
        cmd = ['npm', 'publish']
        if dry_run:
            cmd.append('--dry-run')
        
        try:
            result = subprocess.run(
                cmd,
                cwd=self.npm_package_dir,
                capture_output=True,
                text=True,
                check=True
            )
            
            return {
                'status': 'published' if not dry_run else 'dry_run_success',
                'output': result.stdout,
                'dry_run': dry_run
            }
            
        except subprocess.CalledProcessError as e:
            raise Exception(f"NPM publish failed: {e.stderr}")
    
    def audit_package(self) -> Dict[str, Any]:
        """Run comprehensive package audit"""
        results = {
            'license_compliance': self._check_license_compliance(),
            'security_audit': self._security_audit(),
            'dependency_check': self._check_dependencies(),
            'integrity_verification': self._verify_integrity(),
            'provenance_check': self._check_provenance()
        }
        
        all_passed = all(result.get('success', False) for result in results.values())
        
        return {
            'status': 'passed' if all_passed else 'failed',
            'results': results,
            'timestamp': self._get_timestamp()
        }
    
    def _validate_package(self) -> Dict[str, Any]:
        """Validate package structure and metadata"""
        errors = []
        
        # Check required files
        required_files = ['package.json', 'README.md', 'LICENSE', 'CHANGELOG.md']
        for file in required_files:
            if not (self.npm_package_dir / file).exists():
                errors.append(f"Missing required file: {file}")
        
        # Check TypeScript build
        if not (self.npm_package_dir / "dist").exists():
            errors.append("TypeScript build output not found")
        
        # Check package.json fields
        package_json_path = self.npm_package_dir / "package.json"
        with open(package_json_path, 'r') as f:
            package_data = json.load(f)
        
        if package_data.get('license') != 'MIT':
            errors.append("Package must use MIT License")
        
        if not package_data.get('repository'):
            errors.append("Repository field is required")
        
        return {
            'valid': len(errors) == 0,
            'errors': errors
        }
    
    def _build_package(self) -> Dict[str, Any]:
        """Build TypeScript package"""
        try:
            result = subprocess.run(
                ['npm', 'run', 'build'],
                cwd=self.npm_package_dir,
                capture_output=True,
                text=True,
                check=True
            )
            
            return {
                'success': True,
                'output': result.stdout
            }
            
        except subprocess.CalledProcessError as e:
            return {
                'success': False,
                'error': e.stderr
            }
    
    def _run_tests(self) -> Dict[str, Any]:
        """Run package tests"""
        try:
            result = subprocess.run(
                ['npm', 'test'],
                cwd=self.npm_package_dir,
                capture_output=True,
                text=True,
                check=True
            )
            
            return {
                'success': True,
                'output': result.stdout
            }
            
        except subprocess.CalledProcessError as e:
            return {
                'success': False,
                'error': e.stderr
            }
    
    def _security_audit(self) -> Dict[str, Any]:
        """Run NPM security audit"""
        try:
            result = subprocess.run(
                ['npm', 'audit', '--audit-level', 'moderate'],
                cwd=self.npm_package_dir,
                capture_output=True,
                text=True,
                check=True
            )
            
            return {
                'success': True,
                'output': result.stdout
            }
            
        except subprocess.CalledProcessError as e:
            return {
                'success': False,
                'error': e.stderr
            }
    
    def _check_license_compliance(self) -> Dict[str, Any]:
        """Check license compliance"""
        license_file = self.npm_package_dir / "LICENSE"
        
        if not license_file.exists():
            return {'success': False, 'error': 'LICENSE file not found'}
        
        with open(license_file, 'r') as f:
            license_content = f.read()
        
        if 'MIT License' not in license_content:
            return {'success': False, 'error': 'Not MIT License'}
        
        return {'success': True, 'license': 'MIT'}
    
    def _check_dependencies(self) -> Dict[str, Any]:
        """Check dependency versions and security"""
        try:
            result = subprocess.run(
                ['npm', 'outdated', '--json'],
                cwd=self.npm_package_dir,
                capture_output=True,
                text=True
            )
            
            outdated = json.loads(result.stdout) if result.stdout else {}
            
            return {
                'success': True,
                'outdated_count': len(outdated),
                'outdated_packages': list(outdated.keys())
            }
            
        except Exception as e:
            return {
                'success': False,
                'error': str(e)
            }
    
    def _verify_integrity(self) -> Dict[str, Any]:
        """Verify package integrity"""
        try:
            # Check if package-lock.json exists and is valid
            lock_file = self.npm_package_dir / "package-lock.json"
            if not lock_file.exists():
                return {'success': False, 'error': 'package-lock.json not found'}
            
            # Verify npm ci works (integrity check)
            result = subprocess.run(
                ['npm', 'ci', '--dry-run'],
                cwd=self.npm_package_dir,
                capture_output=True,
                text=True,
                check=True
            )
            
            return {'success': True, 'message': 'Integrity verified'}
            
        except subprocess.CalledProcessError as e:
            return {'success': False, 'error': e.stderr}
    
    def _check_provenance(self) -> Dict[str, Any]:
        """Check package provenance settings"""
        package_json_path = self.npm_package_dir / "package.json"
        
        with open(package_json_path, 'r') as f:
            package_data = json.load(f)
        
        publish_config = package_data.get('publishConfig', {})
        provenance = publish_config.get('provenance', False)
        
        return {
            'success': provenance,
            'provenance_enabled': provenance
        }
    
    def _update_changelog(self, version: str) -> None:
        """Update CHANGELOG.md with new version"""
        changelog_path = self.npm_package_dir / "CHANGELOG.md"
        
        if changelog_path.exists():
            with open(changelog_path, 'r') as f:
                content = f.read()
            
            # Insert new version entry
            new_entry = f"\n## [{version}] - {self._get_date()}\n\n### Changed\n- Version bump to {version}\n"
            
            # Find the position to insert (after [Unreleased])
            unreleased_pos = content.find("## [Unreleased]")
            if unreleased_pos != -1:
                next_section = content.find("\n## [", unreleased_pos + 1)
                if next_section != -1:
                    content = content[:next_section] + new_entry + content[next_section:]
                else:
                    content += new_entry
            else:
                content += new_entry
            
            with open(changelog_path, 'w') as f:
                f.write(content)
    
    def _create_git_tag(self, version: str) -> None:
        """Create git tag for version"""
        try:
            subprocess.run(['git', 'add', '.'], check=True)
            subprocess.run(['git', 'commit', '-m', f'Release v{version}'], check=True)
            subprocess.run(['git', 'tag', f'v{version}'], check=True)
        except subprocess.CalledProcessError:
            pass  # Git operations are optional
    
    def _get_timestamp(self) -> str:
        """Get current timestamp"""
        from datetime import datetime
        return datetime.utcnow().isoformat() + 'Z'
    
    def _get_date(self) -> str:
        """Get current date"""
        from datetime import datetime
        return datetime.utcnow().strftime('%Y-%m-%d')