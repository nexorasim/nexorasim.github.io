#!/usr/bin/env python3
import boto3
import json
import sys
from datetime import datetime

def check_api_health():
    """Check all NexoraSIM API endpoints for errors"""
    errors = []
    
    # CloudWatch client for metrics
    cloudwatch = boto3.client('cloudwatch')
    
    try:
        # Check API Gateway errors
        response = cloudwatch.get_metric_statistics(
            Namespace='AWS/ApiGateway',
            MetricName='4XXError',
            StartTime=datetime.utcnow().replace(hour=0, minute=0, second=0),
            EndTime=datetime.utcnow(),
            Period=3600,
            Statistics=['Sum']
        )
        
        if response['Datapoints']:
            error_count = sum(point['Sum'] for point in response['Datapoints'])
            if error_count > 10:
                errors.append(f"High API Gateway 4XX errors: {error_count}")
    
    except Exception as e:
        errors.append(f"CloudWatch check failed: {str(e)}")
    
    # Check DynamoDB throttling
    try:
        response = cloudwatch.get_metric_statistics(
            Namespace='AWS/DynamoDB',
            MetricName='ThrottledRequests',
            StartTime=datetime.utcnow().replace(hour=0, minute=0, second=0),
            EndTime=datetime.utcnow(),
            Period=3600,
            Statistics=['Sum']
        )
        
        if response['Datapoints']:
            throttle_count = sum(point['Sum'] for point in response['Datapoints'])
            if throttle_count > 0:
                errors.append(f"DynamoDB throttling detected: {throttle_count}")
                
    except Exception as e:
        errors.append(f"DynamoDB check failed: {str(e)}")
    
    # Check Lambda function errors
    try:
        response = cloudwatch.get_metric_statistics(
            Namespace='AWS/Lambda',
            MetricName='Errors',
            StartTime=datetime.utcnow().replace(hour=0, minute=0, second=0),
            EndTime=datetime.utcnow(),
            Period=3600,
            Statistics=['Sum']
        )
        
        if response['Datapoints']:
            lambda_errors = sum(point['Sum'] for point in response['Datapoints'])
            if lambda_errors > 5:
                errors.append(f"Lambda function errors: {lambda_errors}")
                
    except Exception as e:
        errors.append(f"Lambda check failed: {str(e)}")
    
    return errors

def update_deployment_status(status, errors=None):
    """Update deployment status in DynamoDB"""
    dynamodb = boto3.resource('dynamodb')
    
    try:
        table = dynamodb.Table('nexorasim-deployments')
        table.put_item(
            Item={
                'deployment_id': f"deploy-{datetime.utcnow().strftime('%Y%m%d-%H%M%S')}",
                'timestamp': datetime.utcnow().isoformat(),
                'status': status,
                'errors': errors or [],
                'api_version': 'v1.0.0'
            }
        )
    except Exception as e:
        print(f"Failed to update deployment status: {e}")

if __name__ == "__main__":
    print("Checking NexoraSIM API health...")
    
    errors = check_api_health()
    
    if errors:
        print("Errors detected:")
        for error in errors:
            print(f"  - {error}")
        update_deployment_status("FAILED", errors)
        sys.exit(1)
    else:
        print("All APIs healthy")
        update_deployment_status("SUCCESS")
        sys.exit(0)