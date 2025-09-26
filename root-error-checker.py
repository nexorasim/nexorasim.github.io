#!/usr/bin/env python3
import os
import sys
import subprocess
import json
from pathlib import Path

def check_root_permissions():
    """Check if running with root permissions"""
    if os.geteuid() != 0:
        return False, "Script must be run as root"
    return True, "Root permissions verified"

def check_system_dependencies():
    """Check system-level dependencies"""
    errors = []
    
    # Check Docker
    try:
        subprocess.run(['docker', '--version'], check=True, capture_output=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        errors.append("Docker not installed or not accessible")
    
    # Check Git
    try:
        subprocess.run(['git', '--version'], check=True, capture_output=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        errors.append("Git not installed")
    
    # Check AWS CLI
    try:
        subprocess.run(['aws', '--version'], check=True, capture_output=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        errors.append("AWS CLI not installed")
    
    return len(errors) == 0, errors

def check_file_permissions():
    """Check file permissions for deployment files"""
    critical_files = [
        'nexorasim-complete-stack.yaml',
        'api-error-checker.py',
        'update-data-apis.py',
        'verify-deployment.py'
    ]
    
    errors = []
    for file_path in critical_files:
        if not os.path.exists(file_path):
            errors.append(f"Missing file: {file_path}")
        elif not os.access(file_path, os.R_OK):
            errors.append(f"No read permission: {file_path}")
    
    return len(errors) == 0, errors

def check_network_connectivity():
    """Check network connectivity to required services"""
    import socket
    
    services = [
        ('github.com', 443),
        ('amazonaws.com', 443)
    ]
    
    errors = []
    for host, port in services:
        try:
            socket.create_connection((host, port), timeout=5)
        except (socket.error, socket.timeout):
            errors.append(f"Cannot connect to {host}:{port}")
    
    return len(errors) == 0, errors

def update_system_packages():
    """Update system packages"""
    try:
        subprocess.run(['apt-get', 'update'], check=True, capture_output=True)
        subprocess.run(['apt-get', 'upgrade', '-y'], check=True, capture_output=True)
        return True, "System packages updated"
    except subprocess.CalledProcessError as e:
        return False, f"Package update failed: {e}"

def fix_permissions():
    """Fix file permissions for deployment"""
    try:
        # Fix script permissions
        scripts = ['update-apis.sh', 'git-config.sh']
        for script in scripts:
            if os.path.exists(script):
                os.chmod(script, 0o755)
        
        # Fix directory permissions
        os.chmod('/app', 0o755)
        
        return True, "Permissions fixed"
    except Exception as e:
        return False, f"Permission fix failed: {e}"

def main():
    print("Running root-level error checking for NexoraSIM deployment...")
    
    checks = [
        ("Root Permissions", check_root_permissions),
        ("System Dependencies", check_system_dependencies),
        ("File Permissions", check_file_permissions),
        ("Network Connectivity", check_network_connectivity)
    ]
    
    failed_checks = []
    
    for check_name, check_func in checks:
        try:
            success, result = check_func()
            if success:
                print(f"PASS: {check_name}")
            else:
                print(f"FAIL: {check_name} - {result}")
                failed_checks.append(check_name)
        except Exception as e:
            print(f"ERROR: {check_name} - {str(e)}")
            failed_checks.append(check_name)
    
    # Attempt fixes
    if failed_checks:
        print("Attempting to fix issues...")
        
        # Update packages
        success, msg = update_system_packages()
        print(f"Package update: {msg}")
        
        # Fix permissions
        success, msg = fix_permissions()
        print(f"Permission fix: {msg}")
    
    if failed_checks:
        print(f"Failed checks: {failed_checks}")
        sys.exit(1)
    else:
        print("All root-level checks passed")
        sys.exit(0)

if __name__ == "__main__":
    main()