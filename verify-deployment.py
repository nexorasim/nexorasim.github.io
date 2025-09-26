#!/usr/bin/env python3
import boto3
import requests
import sys
import time

def verify_cloudformation_stack():
    """Verify CloudFormation stack deployment"""
    cf = boto3.client('cloudformation')
    
    try:
        response = cf.describe_stacks(StackName='nexorasim-prod')
        stack_status = response['Stacks'][0]['StackStatus']
        
        if stack_status == 'CREATE_COMPLETE' or stack_status == 'UPDATE_COMPLETE':
            print(f"CloudFormation stack: {stack_status}")
            return True
        else:
            print(f"CloudFormation stack failed: {stack_status}")
            return False
            
    except Exception as e:
        print(f"CloudFormation verification failed: {e}")
        return False

def verify_api_endpoints():
    """Verify API Gateway endpoints"""
    apigateway = boto3.client('apigateway')
    
    try:
        apis = apigateway.get_rest_apis()
        nexorasim_api = next((api for api in apis['items'] if api['name'] == 'nexorasim-api'), None)
        
        if nexorasim_api:
            print(f"API Gateway found: {nexorasim_api['id']}")
            return True
        else:
            print("API Gateway not found")
            return False
            
    except Exception as e:
        print(f"API Gateway verification failed: {e}")
        return False

def verify_data_services():
    """Verify data services are running"""
    dynamodb = boto3.resource('dynamodb')
    
    try:
        table = dynamodb.Table('nexorasim-eal6-compatibility-prod')
        table.load()
        
        if table.table_status == 'ACTIVE':
            print(f"DynamoDB table: ACTIVE")
            return True
        else:
            print(f"DynamoDB table: {table.table_status}")
            return False
            
    except Exception as e:
        print(f"DynamoDB verification failed: {e}")
        return False

def verify_compliance_monitoring():
    """Verify compliance monitoring is active"""
    cloudwatch = boto3.client('cloudwatch')
    
    try:
        alarms = cloudwatch.describe_alarms(
            AlarmNames=[
                'HighEIDValidationFailureRate-prod',
                'SAS-SM-Compliance-Breach-prod'
            ]
        )
        
        active_alarms = len(alarms['MetricAlarms'])
        print(f"CloudWatch alarms active: {active_alarms}")
        
        return active_alarms >= 2
        
    except Exception as e:
        print(f"CloudWatch verification failed: {e}")
        return False

if __name__ == "__main__":
    print("Verifying NexoraSIM deployment...")
    
    verifications = [
        verify_cloudformation_stack,
        verify_api_endpoints,
        verify_data_services,
        verify_compliance_monitoring
    ]
    
    failed_verifications = []
    
    for verification in verifications:
        if not verification():
            failed_verifications.append(verification.__name__)
    
    if failed_verifications:
        print(f"Failed verifications: {failed_verifications}")
        sys.exit(1)
    else:
        print("All deployment verifications passed")
        sys.exit(0)