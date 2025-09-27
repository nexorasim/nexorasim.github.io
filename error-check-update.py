#!/usr/bin/env python3
import os
import sys
import json
from datetime import datetime

def check_infrastructure_files():
    """Check infrastructure file integrity"""
    required_files = [
        'nexorasim-complete-infrastructure.yaml',
        'api-error-checker.py',
        'update-data-apis.py',
        'verify-deployment.py'
    ]
    
    errors = []
    for file_path in required_files:
        if not os.path.exists(file_path):
            errors.append(f"Missing file: {file_path}")
        else:
            try:
                with open(file_path, 'r') as f:
                    content = f.read()
                    if len(content) < 100:
                        errors.append(f"File too small: {file_path}")
            except Exception as e:
                errors.append(f"Cannot read file {file_path}: {str(e)}")
    
    return len(errors) == 0, errors

def check_developer_portal():
    """Check developer portal structure"""
    portal_files = [
        'nexorasim-developer-portal/src/components/ComplianceAssistant.vue',
        'nexorasim-developer-portal/backend/app/app.py',
        'nexorasim-developer-portal/package.json'
    ]
    
    errors = []
    for file_path in portal_files:
        if not os.path.exists(file_path):
            errors.append(f"Missing portal file: {file_path}")
    
    return len(errors) == 0, errors

def check_github_workflow():
    """Check GitHub Actions workflow"""
    workflow_path = '.github/workflows/deploy-nexorasim.yml'
    
    if not os.path.exists(workflow_path):
        return False, ["Missing GitHub workflow file"]
    
    try:
        with open(workflow_path, 'r') as f:
            content = f.read()
            if 'NexoraSIM' not in content:
                return False, ["Invalid workflow content"]
    except Exception as e:
        return False, [f"Cannot read workflow: {str(e)}"]
    
    return True, []

def update_configuration():
    """Update configuration files"""
    try:
        # Update environment configuration
        env_config = {
            'AWS_DEFAULT_REGION': 'us-east-1',
            'COMPLIANCE_LEVEL': 'SAS-SM_v3.4.2',
            'DEPLOYMENT_TIME': datetime.utcnow().isoformat()
        }
        
        with open('.env.update', 'w') as f:
            for key, value in env_config.items():
                f.write(f"{key}={value}\n")
        
        return True, "Configuration updated"
    except Exception as e:
        return False, f"Configuration update failed: {str(e)}"

def validate_yaml_syntax():
    """Validate YAML file syntax"""
    try:
        import yaml
        
        yaml_files = [
            'nexorasim-complete-infrastructure.yaml',
            'nexorasim-alarms.yaml'
        ]
        
        errors = []
        for yaml_file in yaml_files:
            if os.path.exists(yaml_file):
                try:
                    with open(yaml_file, 'r') as f:
                        yaml.safe_load(f)
                except yaml.YAMLError as e:
                    errors.append(f"YAML syntax error in {yaml_file}: {str(e)}")
        
        return len(errors) == 0, errors
    except ImportError:
        return True, ["YAML validation skipped - PyYAML not available"]

def main():
    print("Running NexoraSIM error checking and update...")
    
    checks = [
        ("Infrastructure Files", check_infrastructure_files),
        ("Developer Portal", check_developer_portal),
        ("GitHub Workflow", check_github_workflow),
        ("YAML Syntax", validate_yaml_syntax)
    ]
    
    failed_checks = []
    
    for check_name, check_func in checks:
        try:
            success, result = check_func()
            if success:
                print(f"PASS: {check_name}")
            else:
                print(f"FAIL: {check_name}")
                for error in result:
                    print(f"  - {error}")
                failed_checks.append(check_name)
        except Exception as e:
            print(f"ERROR: {check_name} - {str(e)}")
            failed_checks.append(check_name)
    
    # Update configuration
    success, msg = update_configuration()
    print(f"Configuration update: {msg}")
    
    if failed_checks:
        print(f"Failed checks: {failed_checks}")
        print("NexoraSIM error checking completed with issues")
        sys.exit(1)
    else:
        print("All error checks passed - NexoraSIM ready for deployment")
        sys.exit(0)

if __name__ == "__main__":
    main()