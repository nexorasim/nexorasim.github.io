#!/usr/bin/env python3
import boto3
import json
import sys

def test_dynamodb_apis():
    """Test DynamoDB data APIs"""
    dynamodb = boto3.resource('dynamodb')
    
    try:
        # Test compatibility table
        table = dynamodb.Table('nexorasim-eal6-compatibility-prod')
        response = table.scan(Limit=1)
        print(f"DynamoDB compatibility table: OK")
        
        # Test put item
        table.put_item(
            Item={
                'device_model': 'TEST_DEVICE',
                'eUICC_version': '1.0.0',
                'certification_status': 'ACTIVE'
            }
        )
        print(f"DynamoDB write operation: OK")
        
    except Exception as e:
        print(f"DynamoDB test failed: {e}")
        return False
    
    return True

def test_cloudwatch_apis():
    """Test CloudWatch metrics APIs"""
    cloudwatch = boto3.client('cloudwatch')
    
    try:
        # Test put metric
        cloudwatch.put_metric_data(
            Namespace='NexoraSIM/Test',
            MetricData=[
                {
                    'MetricName': 'APITest',
                    'Value': 1,
                    'Unit': 'Count'
                }
            ]
        )
        print(f"CloudWatch metrics API: OK")
        
    except Exception as e:
        print(f"CloudWatch test failed: {e}")
        return False
    
    return True

def test_s3_apis():
    """Test S3 data APIs"""
    s3 = boto3.client('s3')
    
    try:
        # Test bucket access
        s3.head_bucket(Bucket='nexorasim-compliance-bucket')
        print(f"S3 bucket access: OK")
        
        # Test put object
        s3.put_object(
            Bucket='nexorasim-compliance-bucket',
            Key='test/api-test.json',
            Body=json.dumps({'test': 'data'})
        )
        print(f"S3 write operation: OK")
        
    except Exception as e:
        print(f"S3 test failed: {e}")
        return False
    
    return True

if __name__ == "__main__":
    print("Testing NexoraSIM data APIs...")
    
    tests = [
        test_dynamodb_apis,
        test_cloudwatch_apis,
        test_s3_apis
    ]
    
    failed_tests = []
    
    for test in tests:
        if not test():
            failed_tests.append(test.__name__)
    
    if failed_tests:
        print(f"Failed tests: {failed_tests}")
        sys.exit(1)
    else:
        print("All data API tests passed")
        sys.exit(0)