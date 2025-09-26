#!/bin/bash
set -e

echo "Deploying NexoraSIM to GitHub..."

# Root error checking
echo "Running root error checks..."
sudo python3 root-error-checker.py

# Configure Git
echo "Configuring Git..."
git config --global user.name "NexoraSIM Developer"
git config --global user.email "developer@nexorasim.com"

# Initialize repository if needed
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "Adding files to Git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "NexoraSIM complete deployment - $(date)"

# Error check all data APIs
echo "Error checking data APIs..."
python3 api-error-checker.py

# Update data APIs
echo "Updating data APIs..."
python3 update-data-apis.py

# Validate CloudFormation
echo "Validating CloudFormation templates..."
aws cloudformation validate-template --template-body file://nexorasim-complete-stack.yaml

# Test data APIs
echo "Testing data APIs..."
python3 test-data-apis.py

# Push to GitHub if remote exists
if git remote get-url origin 2>/dev/null; then
    echo "Pushing to GitHub..."
    git push origin main
else
    echo "No GitHub remote configured. Add with:"
    echo "git remote add origin https://github.com/username/nexorasim.git"
    echo "git push -u origin main"
fi

# Verify deployment
echo "Verifying deployment..."
python3 verify-deployment.py

echo "NexoraSIM deployment to GitHub completed successfully"