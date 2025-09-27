#!/bin/bash
set -e

echo "Deploying NexoraSIM Infrastructure..."

# Validate template first
echo "Validating CloudFormation template..."
aws cloudformation validate-template \
  --template-body file://nexorasim-complete-infrastructure.yaml

# Deploy infrastructure
echo "Deploying to AWS..."
aws cloudformation deploy \
  --template-file nexorasim-complete-infrastructure.yaml \
  --stack-name nexorasim-prod \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides EnvironmentType=prod

# Check deployment status
echo "Checking deployment status..."
aws cloudformation describe-stacks \
  --stack-name nexorasim-prod \
  --query 'Stacks[0].StackStatus' \
  --output text

echo "NexoraSIM infrastructure deployment completed"