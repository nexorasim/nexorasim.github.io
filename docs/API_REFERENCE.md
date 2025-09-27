# NexoraSIM API Reference

## Base URL
```
https://api.nexorasim.com
```

## Authentication
All API requests require authentication using Bearer tokens in the Authorization header.

```http
Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json
```

## Endpoints

### EID Validation

#### POST /api/compliance/validate-eid
Validates eSIM EID format and manufacturer code compliance with GSMA standards.

**Request Body:**
```json
{
  "eid": "ABCD0123456789ABCDEF0123456789AB",
  "iccid": "89014103211118510720"
}
```

**Response:**
```json
{
  "valid": true,
  "manufacturer_code": "ABCD",
  "message": "Valid EID format",
  "compliance_level": "SAS-SM_v3.4.2",
  "validation_details": {
    "format_check": "PASS",
    "manufacturer_check": "PASS",
    "iccid_mapping": "PASS"
  }
}
```

**Error Response:**
```json
{
  "valid": false,
  "error": "Invalid EID format",
  "code": "EID_FORMAT_ERROR",
  "details": "EID must be 32-character hexadecimal string"
}
```

### Device Compatibility

#### GET /api/devices/{device_model}/compatibility
Retrieves EAL6+ compatibility information for specified device model.

**Parameters:**
- `device_model` (string, required): Device model identifier

**Response:**
```json
{
  "device_model": "iPhone_14_Pro",
  "manufacturer": "Apple",
  "compatibility": [
    {
      "eUICC_version": "2.1",
      "certification_status": "CERTIFIED",
      "eal_level": "EAL6+",
      "certification_date": "2023-08-15",
      "supported_protocols": [
        "SAS-SM_v3.4.2",
        "SGP.22_v3.3"
      ],
      "security_features": [
        "FIPS_140_3_Level_3",
        "Hardware_Security_Module"
      ]
    }
  ]
}
```

#### GET /api/devices
Lists all certified devices with EAL6+ compatibility.

**Query Parameters:**
- `manufacturer` (string, optional): Filter by manufacturer
- `eal_level` (string, optional): Filter by EAL certification level
- `limit` (integer, optional): Number of results to return (default: 50)
- `offset` (integer, optional): Pagination offset (default: 0)

**Response:**
```json
{
  "devices": [
    {
      "device_model": "iPhone_14_Pro",
      "manufacturer": "Apple",
      "eal_level": "EAL6+",
      "certification_status": "CERTIFIED"
    }
  ],
  "total": 247,
  "limit": 50,
  "offset": 0
}
```

### Compliance Metrics

#### GET /api/compliance/metrics
Returns real-time compliance metrics and audit status.

**Response:**
```json
{
  "compliance_score": 99.5,
  "eid_validation_rate": 98.2,
  "sas_sm_compliance": true,
  "sgp22_compliance": true,
  "last_audit_date": "2024-01-15T10:30:00Z",
  "total_devices": 247,
  "certified_devices": 245,
  "metrics": {
    "daily_validations": 1250,
    "success_rate": 98.5,
    "average_response_time": 45
  }
}
```

#### GET /api/compliance/audit-log
Retrieves compliance audit log entries.

**Query Parameters:**
- `start_date` (string, optional): Start date (ISO 8601 format)
- `end_date` (string, optional): End date (ISO 8601 format)
- `operation` (string, optional): Filter by operation type
- `limit` (integer, optional): Number of results (default: 100)

**Response:**
```json
{
  "audit_entries": [
    {
      "id": "audit_001",
      "timestamp": "2024-01-15T10:30:00Z",
      "operation": "eid_validation",
      "user_id": "user_123",
      "status": "SUCCESS",
      "details": {
        "eid": "ABCD***",
        "validation_time": 42,
        "compliance_checks": ["format", "manufacturer", "mapping"]
      }
    }
  ],
  "total": 1500,
  "limit": 100
}
```

### Profile Management

#### POST /api/profiles/download
Initiates eSIM profile download from SM-DP+ server.

**Request Body:**
```json
{
  "eid": "ABCD0123456789ABCDEF0123456789AB",
  "iccid": "89014103211118510720",
  "activation_code": "LPA:1$smdp.example.com$04386-AGYFT-A74Y8-3F815"
}
```

**Response:**
```json
{
  "download_id": "dl_001",
  "status": "INITIATED",
  "profile_metadata": {
    "iccid": "89014103211118510720",
    "profile_name": "NexoraSIM Profile",
    "operator": "Example Operator"
  },
  "estimated_completion": "2024-01-15T10:35:00Z"
}
```

#### GET /api/profiles/{download_id}/status
Checks the status of a profile download operation.

**Response:**
```json
{
  "download_id": "dl_001",
  "status": "COMPLETED",
  "progress": 100,
  "completion_time": "2024-01-15T10:34:22Z",
  "profile_data": {
    "size": 2048,
    "checksum": "sha256:abc123..."
  }
}
```

### Health Check

#### GET /health
Returns API health status and system information.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00Z",
  "version": "1.0.0",
  "services": {
    "database": "healthy",
    "smdp_connection": "healthy",
    "hsm_cluster": "healthy"
  },
  "metrics": {
    "uptime": 86400,
    "requests_per_minute": 150,
    "error_rate": 0.1
  }
}
```

## Error Codes

| Code | Status | Description |
|------|--------|-------------|
| 400 | Bad Request | Invalid request format or missing required fields |
| 401 | Unauthorized | Invalid or missing authentication token |
| 403 | Forbidden | Insufficient permissions for requested operation |
| 404 | Not Found | Requested resource does not exist |
| 422 | Validation Error | EID format validation failed or compliance check failed |
| 429 | Rate Limited | Too many requests, please retry after specified time |
| 500 | Internal Server Error | Unexpected server error occurred |
| 502 | Bad Gateway | SM-DP+ server connection failed |
| 503 | Service Unavailable | Service temporarily unavailable for maintenance |

## Rate Limiting

API requests are limited to:
- **Authentication**: 10 requests per minute
- **EID Validation**: 100 requests per minute
- **Device Queries**: 200 requests per minute
- **Profile Operations**: 50 requests per minute

Rate limit headers are included in all responses:
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642248600
```

## SDK Examples

### Python
```python
import requests

class NexoraSIMAPI:
    def __init__(self, api_token):
        self.base_url = "https://api.nexorasim.com"
        self.headers = {
            "Authorization": f"Bearer {api_token}",
            "Content-Type": "application/json"
        }
    
    def validate_eid(self, eid, iccid=None):
        payload = {"eid": eid}
        if iccid:
            payload["iccid"] = iccid
            
        response = requests.post(
            f"{self.base_url}/api/compliance/validate-eid",
            json=payload,
            headers=self.headers
        )
        return response.json()
```

### JavaScript
```javascript
class NexoraSIMAPI {
    constructor(apiToken) {
        this.baseUrl = 'https://api.nexorasim.com';
        this.headers = {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        };
    }
    
    async validateEID(eid, iccid = null) {
        const payload = { eid };
        if (iccid) payload.iccid = iccid;
        
        const response = await fetch(`${this.baseUrl}/api/compliance/validate-eid`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(payload)
        });
        
        return response.json();
    }
}
```

### cURL
```bash
# EID Validation
curl -X POST https://api.nexorasim.com/api/compliance/validate-eid \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"eid": "ABCD0123456789ABCDEF0123456789AB"}'

# Device Compatibility
curl -X GET https://api.nexorasim.com/api/devices/iPhone_14_Pro/compatibility \
  -H "Authorization: Bearer YOUR_API_TOKEN"

# Compliance Metrics
curl -X GET https://api.nexorasim.com/api/compliance/metrics \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

## Webhooks

NexoraSIM supports webhooks for real-time notifications of compliance events.

### Webhook Events
- `eid.validation.completed`
- `device.certification.updated`
- `compliance.audit.failed`
- `profile.download.completed`

### Webhook Payload Example
```json
{
  "event": "eid.validation.completed",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "eid": "ABCD***",
    "validation_result": "SUCCESS",
    "compliance_level": "SAS-SM_v3.4.2"
  }
}
```

---

**NexoraSIM API v1.0.0** - Complete eSIM Profile Management with GSMA SAS-SM v3.4.2 Compliance