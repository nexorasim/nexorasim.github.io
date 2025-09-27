#!/usr/bin/env python3
import os
import sys
import json
from datetime import datetime

def fix_git_config():
    """Fix Git configuration issues"""
    try:
        os.system('export HOME=/tmp && git config --global user.name "NexoraSIM Developer"')
        os.system('export HOME=/tmp && git config --global user.email "developer@nexorasim.com"')
        return True, "Git configuration fixed"
    except Exception as e:
        return False, f"Git config failed: {str(e)}"

def fix_file_permissions():
    """Fix file permission issues"""
    try:
        scripts = [
            'deploy-github-pages.sh',
            'deploy-to-github.sh',
            'update-apis.sh',
            'quick-update.sh'
        ]
        
        for script in scripts:
            if os.path.exists(script):
                os.chmod(script, 0o755)
        
        return True, "File permissions fixed"
    except Exception as e:
        return False, f"Permission fix failed: {str(e)}"

def validate_repository_structure():
    """Validate repository structure"""
    required_files = [
        'README.md',
        'index.html',
        'package.json',
        'nexorasim-complete-infrastructure.yaml'
    ]
    
    missing_files = []
    for file_path in required_files:
        if not os.path.exists(file_path):
            missing_files.append(file_path)
    
    if missing_files:
        return False, f"Missing files: {missing_files}"
    
    return True, "Repository structure valid"

def update_deployment_config():
    """Update deployment configuration"""
    try:
        config = {
            'deployment_time': datetime.utcnow().isoformat(),
            'status': 'ready',
            'version': '1.0.0',
            'components': [
                'infrastructure',
                'developer-portal',
                'api-documentation',
                'compliance-validation'
            ]
        }
        
        with open('.deployment-status', 'w') as f:
            json.dump(config, f, indent=2)
        
        return True, "Deployment config updated"
    except Exception as e:
        return False, f"Config update failed: {str(e)}"

def main():
    print("Fixing NexoraSIM deployment errors...")
    
    fixes = [
        ("Git Configuration", fix_git_config),
        ("File Permissions", fix_file_permissions),
        ("Repository Structure", validate_repository_structure),
        ("Deployment Config", update_deployment_config)
    ]
    
    failed_fixes = []
    
    for fix_name, fix_func in fixes:
        try:
            success, result = fix_func()
            if success:
                print(f"FIXED: {fix_name} - {result}")
            else:
                print(f"FAILED: {fix_name} - {result}")
                failed_fixes.append(fix_name)
        except Exception as e:
            print(f"ERROR: {fix_name} - {str(e)}")
            failed_fixes.append(fix_name)
    
    if failed_fixes:
        print(f"Failed fixes: {failed_fixes}")
        sys.exit(1)
    else:
        print("All deployment errors fixed - NexoraSIM ready")
        sys.exit(0)

if __name__ == "__main__":
    main()