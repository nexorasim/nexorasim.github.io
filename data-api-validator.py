#!/usr/bin/env python3
import boto3
import json
import sys
import requests
from datetime import datetime

class DataAPIValidator:
    def __init__(self):
        self.errors = []
        self.dynamodb = boto3.resource('dynamodb')
        self.s3 = boto3.client('s3')
        self.cloudwatch = boto3.client('cloudwatch')
        self.apigateway = boto3.client('apigateway')

    def validate_dynamodb_apis(self):
        """Validate DynamoDB data APIs"""
        try:
            # Test table access
            table = self.dynamodb.Table('nexorasim-eal6-compatibility-prod')
            table.load()
            
            # Test write operation
            table.put_item(
                Item={
                    'device_model': 'TEST_VALIDATION',
                    'eUICC_version': '1.0.0',
                    'validation_timestamp': datetime.utcnow().isoformat()
                }
            )
            
            # Test read operation
            response = table.get_item(
                Key={
                    'device_model': 'TEST_VALIDATION',
                    'eUICC_version': '1.0.0'
                }
            )
            
            if 'Item' not in response:
                self.errors.append("DynamoDB read operation failed")
                
        except Exception as e:
            self.errors.append(f"DynamoDB validation failed: {str(e)}")

    def validate_s3_apis(self):
        """Validate S3 data APIs"""
        try:
            # Test bucket access
            self.s3.head_bucket(Bucket='nexorasim-compliance-bucket-prod')
            
            # Test object operations
            test_data = json.dumps({'validation': 'test', 'timestamp': datetime.utcnow().isoformat()})
            
            self.s3.put_object(
                Bucket='nexorasim-compliance-bucket-prod',
                Key='validation/api-test.json',
                Body=test_data
            )
            
            response = self.s3.get_object(
                Bucket='nexorasim-compliance-bucket-prod',
                Key='validation/api-test.json'
            )
            
            if not response['Body'].read():
                self.errors.append("S3 read operation failed")
                
        except Exception as e:
            self.errors.append(f"S3 validation failed: {str(e)}")

    def validate_cloudwatch_apis(self):
        """Validate CloudWatch data APIs"""
        try:
            # Test metric publishing
            self.cloudwatch.put_metric_data(
                Namespace='NexoraSIM/Validation',
                MetricData=[
                    {
                        'MetricName': 'APIValidation',
                        'Value': 1,
                        'Unit': 'Count',
                        'Timestamp': datetime.utcnow()
                    }
                ]
            )
            
            # Test metric retrieval
            response = self.cloudwatch.list_metrics(
                Namespace='NexoraSIM/Validation',
                MetricName='APIValidation'
            )
            
            if not response['Metrics']:
                self.errors.append("CloudWatch metric retrieval failed")
                
        except Exception as e:
            self.errors.append(f"CloudWatch validation failed: {str(e)}")

    def validate_api_gateway(self):
        """Validate API Gateway endpoints"""
        try:
            # List REST APIs
            response = self.apigateway.get_rest_apis()
            
            nexorasim_apis = [api for api in response['items'] if 'nexorasim' in api['name'].lower()]
            
            if not nexorasim_apis:
                self.errors.append("No NexoraSIM API Gateway found")
            else:
                # Test API deployment
                for api in nexorasim_apis:
                    deployments = self.apigateway.get_deployments(restApiId=api['id'])
                    if not deployments['items']:
                        self.errors.append(f"No deployments found for API {api['name']}")
                        
        except Exception as e:
            self.errors.append(f"API Gateway validation failed: {str(e)}")

    def validate_lambda_functions(self):
        """Validate Lambda function APIs"""
        try:
            lambda_client = boto3.client('lambda')
            
            # List NexoraSIM functions
            response = lambda_client.list_functions()
            nexorasim_functions = [f for f in response['Functions'] if 'nexorasim' in f['FunctionName'].lower()]
            
            if not nexorasim_functions:
                self.errors.append("No NexoraSIM Lambda functions found")
            else:
                # Test function invocation
                for func in nexorasim_functions[:1]:  # Test first function only
                    try:
                        lambda_client.invoke(
                            FunctionName=func['FunctionName'],
                            InvocationType='Event',
                            Payload=json.dumps({'test': 'validation'})
                        )
                    except Exception as e:
                        self.errors.append(f"Lambda function {func['FunctionName']} invocation failed: {str(e)}")
                        
        except Exception as e:
            self.errors.append(f"Lambda validation failed: {str(e)}")

    def run_validation(self):
        """Run all data API validations"""
        print("Validating NexoraSIM data APIs...")
        
        validations = [
            ("DynamoDB APIs", self.validate_dynamodb_apis),
            ("S3 APIs", self.validate_s3_apis),
            ("CloudWatch APIs", self.validate_cloudwatch_apis),
            ("API Gateway", self.validate_api_gateway),
            ("Lambda Functions", self.validate_lambda_functions)
        ]
        
        for name, validation_func in validations:
            try:
                validation_func()
                print(f"PASS: {name}")
            except Exception as e:
                self.errors.append(f"{name} validation error: {str(e)}")
                print(f"FAIL: {name}")
        
        return len(self.errors) == 0

def main():
    validator = DataAPIValidator()
    
    if validator.run_validation():
        print("All data API validations passed")
        sys.exit(0)
    else:
        print("Data API validation errors:")
        for error in validator.errors:
            print(f"  - {error}")
        sys.exit(1)

if __name__ == "__main__":
    main()