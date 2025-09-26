import boto3

def create_gsma_data_source(application_id, index_id):
    """Create Q Business data source for GSMA compliance documents"""
    client = boto3.client('qbusiness')
    
    response = client.create_data_source(
        applicationId=application_id,
        indexId=index_id,
        displayName="gsma-compliance-docs",
        type="S3",
        configuration={
            "connectionConfiguration": {
                "repositoryEndpointMetadata": {
                    "BucketName": "nexorasim-compliance-bucket"
                }
            },
            "repositoryConfigurations": {
                "document": {
                    "fieldMappings": [
                        {
                            "dataSourceFieldName": "_source_uri",
                            "indexFieldName": "source_uri",
                            "indexFieldType": "STRING"
                        }
                    ]
                }
            },
            "inclusionPatterns": ["*.pdf", "*.docx", "*.xml"],
            "exclusionPatterns": ["drafts/*"]
        },
        description="GSMA SAS-SM v3.4.2, SGP.22 v3.3 compliance documentation",
        tags=[
            {"Key": "ComplianceStandard", "Value": "GSMA"},
            {"Key": "Version", "Value": "3.4.2"}
        ]
    )
    
    return response['dataSourceId']

def sync_compliance_docs(application_id, data_source_id):
    """Trigger sync for compliance documents"""
    client = boto3.client('qbusiness')
    
    return client.start_data_source_sync_job(
        applicationId=application_id,
        dataSourceId=data_source_id
    )

# Usage
if __name__ == "__main__":
    APP_ID = "your-app-id"
    INDEX_ID = "your-index-id"
    
    data_source_id = create_gsma_data_source(APP_ID, INDEX_ID)
    sync_job = sync_compliance_docs(APP_ID, data_source_id)
    
    print(f"Data source created: {data_source_id}")
    print(f"Sync job started: {sync_job['executionId']}")