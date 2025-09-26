#!/usr/bin/env python3
import boto3
import json
from datetime import datetime

def update_lambda_functions():
    """Update Lambda functions for data APIs"""
    lambda_client = boto3.client('lambda')
    
    functions = [
        'nexorasim-compliance-auditor',
        'nexorasim-eid-validator',
        'nexorasim-profile-manager'
    ]
    
    for function_name in functions:
        try:
            lambda_client.update_function_configuration(
                FunctionName=function_name,
                Environment={
                    'Variables': {
                        'DEPLOYMENT_TIME': datetime.utcnow().isoformat(),
                        'API_VERSION': 'v1.0.0'
                    }
                }
            )
            print(f"Updated Lambda function: {function_name}")
        except Exception as e:
            print(f"Failed to update {function_name}: {e}")

def update_api_gateway():
    """Update API Gateway configuration"""
    apigateway = boto3.client('apigateway')
    
    try:
        # Get REST API ID
        apis = apigateway.get_rest_apis()
        nexorasim_api = next((api for api in apis['items'] if api['name'] == 'nexorasim-api'), None)
        
        if nexorasim_api:
            api_id = nexorasim_api['id']
            
            # Create new deployment
            apigateway.create_deployment(
                restApiId=api_id,
                stageName='prod',
                description=f"Deployment at {datetime.utcnow().isoformat()}"
            )
            print(f"Updated API Gateway: {api_id}")
        else:
            print("NexoraSIM API not found")
            
    except Exception as e:
        print(f"Failed to update API Gateway: {e}")

def update_dynamodb_streams():
    """Update DynamoDB stream configurations"""
    dynamodb = boto3.client('dynamodb')
    
    try:
        # Update table configuration
        dynamodb.update_table(
            TableName='nexorasim-eal6-compatibility-prod',
            StreamSpecification={
                'StreamEnabled': True,
                'StreamViewType': 'NEW_AND_OLD_IMAGES'
            }
        )
        print("Updated DynamoDB streams")
        
    except Exception as e:
        print(f"Failed to update DynamoDB streams: {e}")

if __name__ == "__main__":
    print("Updating NexoraSIM data APIs...")
    
    update_lambda_functions()
    update_api_gateway()
    update_dynamodb_streams()
    
    print("Data API updates completed")