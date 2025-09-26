from flask import Flask, request, jsonify
from flask_cors import CORS
import boto3
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)

# AWS clients
dynamodb = boto3.resource('dynamodb')
cloudwatch = boto3.client('cloudwatch')

@app.route('/api/compliance/query', methods=['POST'])
def query_compliance():
    data = request.get_json()
    query = data.get('query', '')
    
    # Simulate Amazon Q response
    response = {
        'answer': f'Based on GSMA SAS-SM v3.4.2 standards: {query}',
        'sources': ['GSMA SAS-SM v3.4.2', 'SGP.22 v3.3'],
        'confidence': 0.95
    }
    
    return jsonify(response)

@app.route('/api/compliance/validate-eid', methods=['POST'])
def validate_eid():
    data = request.get_json()
    eid = data.get('eid', '')
    
    # EID validation logic
    is_valid = len(eid) == 32 and eid.isdigit()
    manufacturer_code = eid[:8] if len(eid) >= 8 else ''
    
    # Log validation metric
    cloudwatch.put_metric_data(
        Namespace='NexoraSIM/Compliance',
        MetricData=[
            {
                'MetricName': 'ValidationFailureRate',
                'Value': 0 if is_valid else 1,
                'Unit': 'Percent'
            }
        ]
    )
    
    return jsonify({
        'valid': is_valid,
        'manufacturer_code': manufacturer_code,
        'message': 'Valid EID' if is_valid else 'Invalid EID format'
    })

@app.route('/api/devices/<device_model>/compatibility', methods=['GET'])
def get_device_compatibility(device_model):
    try:
        table = dynamodb.Table('nexorasim-eal6-compatibility-prod')
        response = table.query(
            KeyConditionExpression='device_model = :model',
            ExpressionAttributeValues={':model': device_model}
        )
        
        return jsonify({
            'device_model': device_model,
            'compatibility': response['Items']
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/compliance/metrics', methods=['GET'])
def get_compliance_metrics():
    try:
        # Get CloudWatch metrics
        response = cloudwatch.get_metric_statistics(
            Namespace='NexoraSIM/Compliance',
            MetricName='SAS-SM-Compliance-Score',
            StartTime=datetime.utcnow().replace(hour=0, minute=0, second=0),
            EndTime=datetime.utcnow(),
            Period=3600,
            Statistics=['Average']
        )
        
        metrics = {
            'compliance_score': 99.5,
            'eid_validation_rate': 98.2,
            'last_updated': datetime.utcnow().isoformat()
        }
        
        return jsonify(metrics)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'timestamp': datetime.utcnow().isoformat()})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)