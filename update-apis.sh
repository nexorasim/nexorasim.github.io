#!/bin/bash
set -e

echo "Updating NexoraSIM APIs..."

# Error checking
echo "Running error checks..."
python api-error-checker.py

# Deploy infrastructure updates
echo "Deploying infrastructure..."
aws cloudformation deploy \
  --template-file nexorasim-complete-stack.yaml \
  --stack-name nexorasim-prod \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides EnvironmentType=prod

# Update data APIs
echo "Updating data APIs..."
python update-data-apis.py

# Update Lambda functions
echo "Updating Lambda functions..."
aws lambda update-function-code \
  --function-name nexorasim-compliance-auditor \
  --zip-file fileb://compliance-auditor.zip

# Deploy API Gateway
echo "Deploying API Gateway..."
API_ID=$(aws apigateway get-rest-apis --query "items[?name=='nexorasim-api'].id" --output text)
aws apigateway create-deployment \
  --rest-api-id $API_ID \
  --stage-name prod

# Verify deployment
echo "Verifying deployment..."
python verify-deployment.py

# Final health check
echo "Final health check..."
python api-error-checker.py

echo "NexoraSIM APIs updated successfully"