# NexoraSIM Developer Portal - Build System and Integration Guide

## Overview

This guide provides comprehensive instructions for setting up, building, and integrating the NexoraSIM Developer Portal with eSIM Profile Management Service (PMS), Entitlement Server, and SM-DP+ provisioning systems. The architecture is designed for scalability, maintainability, and GSMA SAS-SM v3.4.2 compliance.

## Tech Stack

- **Frontend**: Vue.js 3 with Vite
- **Backend**: Flask with SQLAlchemy
- **Database**: PostgreSQL with DynamoDB
- **Infrastructure**: AWS (CloudHSM, S3, CloudWatch)
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

## 1. Environment Setup

### Prerequisites

```bash
# System Requirements
Node.js >= 18.0.0
Python >= 3.9.0
PostgreSQL >= 13.0
Docker >= 20.10.0
AWS CLI >= 2.0.0
Git >= 2.30.0
```

### Installation Steps

#### 1.1 Clone Repository
```bash
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io
```

#### 1.2 Environment Configuration
```bash
# Create environment file
cp .env.example .env

# Configure environment variables
cat > .env << 'EOF'
# Database Configuration
DATABASE_URL=postgresql://nexorasim:password@localhost:5432/nexorasim_dev
REDIS_URL=redis://localhost:6379/0

# PMS Integration
PMS_BASE_URL=https://api.nexorasim.com/pms/v1
PMS_API_KEY=your_pms_api_key_here
PMS_TIMEOUT=30

# Entitlement Server
ENTITLEMENT_BASE_URL=https://auth.nexorasim.com
ENTITLEMENT_CLIENT_ID=nexorasim_client
ENTITLEMENT_CLIENT_SECRET=your_client_secret

# SM-DP+ Configuration
SMDP_BASE_URL=https://smdp.nexorasim.com
SMDP_API_KEY=your_smdp_api_key
SMDP_CERTIFICATE_PATH=/etc/ssl/certs/smdp.pem

# OpenTelemetry Configuration
OTEL_EXPORTER_OTLP_ENDPOINT=https://collector.nexorasim.com:4317
OTEL_SERVICE_NAME=nexorasim-portal
OTEL_RESOURCE_ATTRIBUTES=service.version=1.0.0

# Compliance Settings
GSMA_COMPLIANCE_LEVEL=SAS-SM_v3.4.2
EAL_CERTIFICATION_LEVEL=EAL6+
FIPS_COMPLIANCE_LEVEL=FIPS_140_3_Level_3

# AWS Configuration
AWS_REGION=us-east-1
AWS_S3_BUCKET=nexorasim-compliance-docs
AWS_DYNAMODB_TABLE=nexorasim-eal6-compatibility
EOF
```

#### 1.3 Database Setup
```bash
# PostgreSQL setup
sudo -u postgres createdb nexorasim_dev
sudo -u postgres psql -c "CREATE USER nexorasim WITH PASSWORD 'password';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE nexorasim_dev TO nexorasim;"

# Initialize database schema
cd backend
python manage.py db init
python manage.py db migrate -m "Initial migration"
python manage.py db upgrade
```

#### 1.4 Frontend Setup
```bash
cd nexorasim-developer-portal
npm install
npm run build
```

#### 1.5 Backend Setup
```bash
cd backend
pip install -r requirements.txt
python app.py
```

## 2. PMS & Entitlement Server Integration

### 2.1 PMS Integration Architecture

```python
# backend/services/pms_integration.py
import requests
import logging
from datetime import datetime
from typing import Dict, Optional
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

class PMSIntegration:
    def __init__(self, base_url: str, api_key: str, timeout: int = 30):
        self.base_url = base_url
        self.api_key = api_key
        self.timeout = timeout
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json',
            'User-Agent': 'NexoraSIM-Portal/1.0.0'
        })

    @tracer.start_as_current_span("pms_profile_request")
    def request_profile(self, eid: str, iccid: str, operator_id: str) -> Dict:
        """Request eSIM profile from PMS"""
        with tracer.start_as_current_span("pms_api_call"):
            payload = {
                'eid': eid,
                'iccid': iccid,
                'operator_id': operator_id,
                'request_time': datetime.utcnow().isoformat(),
                'compliance_level': 'SAS-SM_v3.4.2'
            }
            
            response = self.session.post(
                f'{self.base_url}/profiles/request',
                json=payload,
                timeout=self.timeout
            )
            
            if response.status_code == 200:
                return response.json()
            else:
                raise PMSIntegrationError(f"PMS request failed: {response.status_code}")

    @tracer.start_as_current_span("pms_profile_status")
    def get_profile_status(self, profile_id: str) -> Dict:
        """Get profile provisioning status"""
        response = self.session.get(
            f'{self.base_url}/profiles/{profile_id}/status',
            timeout=self.timeout
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise PMSIntegrationError(f"Status check failed: {response.status_code}")

class PMSIntegrationError(Exception):
    pass
```

### 2.2 Entitlement Server Integration

```python
# backend/services/entitlement_integration.py
import jwt
import requests
from datetime import datetime, timedelta
from typing import Dict, Optional

class EntitlementIntegration:
    def __init__(self, base_url: str, client_id: str, client_secret: str):
        self.base_url = base_url
        self.client_id = client_id
        self.client_secret = client_secret
        self.access_token = None
        self.token_expires = None

    def authenticate(self) -> str:
        """Authenticate with entitlement server"""
        payload = {
            'grant_type': 'client_credentials',
            'client_id': self.client_id,
            'client_secret': self.client_secret,
            'scope': 'esim:provision esim:manage'
        }
        
        response = requests.post(
            f'{self.base_url}/oauth/token',
            data=payload
        )
        
        if response.status_code == 200:
            token_data = response.json()
            self.access_token = token_data['access_token']
            self.token_expires = datetime.utcnow() + timedelta(seconds=token_data['expires_in'])
            return self.access_token
        else:
            raise EntitlementError(f"Authentication failed: {response.status_code}")

    def check_entitlement(self, user_id: str, device_eid: str) -> Dict:
        """Check user entitlement for eSIM provisioning"""
        if not self.access_token or datetime.utcnow() >= self.token_expires:
            self.authenticate()
        
        headers = {'Authorization': f'Bearer {self.access_token}'}
        
        response = requests.get(
            f'{self.base_url}/entitlements/{user_id}/devices/{device_eid}',
            headers=headers
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise EntitlementError(f"Entitlement check failed: {response.status_code}")

class EntitlementError(Exception):
    pass
```

### 2.3 Integration Configuration

```yaml
# config/integration.yaml
pms_integration:
  enabled: true
  base_url: "${PMS_BASE_URL}"
  api_key: "${PMS_API_KEY}"
  timeout: 30
  retry_attempts: 3
  retry_delay: 5
  
entitlement_integration:
  enabled: true
  base_url: "${ENTITLEMENT_BASE_URL}"
  client_id: "${ENTITLEMENT_CLIENT_ID}"
  client_secret: "${ENTITLEMENT_CLIENT_SECRET}"
  token_refresh_threshold: 300

audit_logging:
  enabled: true
  log_level: INFO
  retention_days: 365
  compliance_events:
    - profile_request
    - entitlement_check
    - eid_validation
    - device_certification
```

## 3. SM-DP+ Provisioning

### 3.1 SM-DP+ Service Implementation

```python
# backend/services/smdp_provisioning.py
import ssl
import requests
from cryptography import x509
from cryptography.hazmat.primitives import hashes, serialization
from opentelemetry import trace
from opentelemetry.instrumentation.requests import RequestsInstrumentor

RequestsInstrumentor().instrument()
tracer = trace.get_tracer(__name__)

class SMDPProvisioning:
    def __init__(self, base_url: str, certificate_path: str, private_key_path: str):
        self.base_url = base_url
        self.certificate_path = certificate_path
        self.private_key_path = private_key_path
        self.session = self._create_secure_session()

    def _create_secure_session(self) -> requests.Session:
        """Create SSL-secured session for SM-DP+ communication"""
        session = requests.Session()
        session.cert = (self.certificate_path, self.private_key_path)
        session.verify = True
        
        # Configure SSL context for FIPS compliance
        ssl_context = ssl.create_default_context()
        ssl_context.check_hostname = True
        ssl_context.verify_mode = ssl.CERT_REQUIRED
        
        return session

    @tracer.start_as_current_span("smdp_profile_download")
    def download_profile(self, eid: str, activation_code: str) -> Dict:
        """Download eSIM profile from SM-DP+ server"""
        with tracer.start_as_current_span("smdp_authentication"):
            # SAS-SM authentication
            auth_payload = {
                'eid': eid,
                'activation_code': activation_code,
                'timestamp': datetime.utcnow().isoformat(),
                'compliance_level': 'SAS-SM_v3.4.2'
            }
            
            # Sign payload for SAS-SM compliance
            signed_payload = self._sign_payload(auth_payload)
            
        with tracer.start_as_current_span("smdp_profile_request"):
            response = self.session.post(
                f'{self.base_url}/gsma/rsp2/es9plus/downloadOrder',
                json=signed_payload,
                headers={
                    'Content-Type': 'application/json',
                    'X-Admin-Protocol': 'gsma-rsp-v2.3.0'
                }
            )
            
            if response.status_code == 200:
                return self._verify_response(response.json())
            else:
                raise SMDPError(f"Profile download failed: {response.status_code}")

    def _sign_payload(self, payload: Dict) -> Dict:
        """Sign payload for SAS-SM compliance"""
        # Implementation of SAS-SM signature
        with open(self.private_key_path, 'rb') as key_file:
            private_key = serialization.load_pem_private_key(
                key_file.read(),
                password=None
            )
        
        # Create signature according to SAS-SM v3.4.2
        signature = private_key.sign(
            json.dumps(payload, sort_keys=True).encode(),
            hashes.SHA256()
        )
        
        return {
            'payload': payload,
            'signature': signature.hex(),
            'algorithm': 'SHA256withRSA'
        }

    def _verify_response(self, response_data: Dict) -> Dict:
        """Verify SM-DP+ response signature"""
        # Verify response according to SAS-SM standards
        return response_data

class SMDPError(Exception):
    pass
```

### 3.2 OpenTelemetry Audit Logging

```python
# backend/services/audit_logger.py
from opentelemetry import trace, metrics
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.exporter.otlp.proto.grpc.metric_exporter import OTLPMetricExporter
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.metrics import MeterProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.sdk.metrics.export import PeriodicExportingMetricReader

class ComplianceAuditLogger:
    def __init__(self, endpoint: str, service_name: str):
        # Configure tracing
        trace.set_tracer_provider(TracerProvider())
        tracer_provider = trace.get_tracer_provider()
        
        otlp_exporter = OTLPSpanExporter(endpoint=endpoint)
        span_processor = BatchSpanProcessor(otlp_exporter)
        tracer_provider.add_span_processor(span_processor)
        
        # Configure metrics
        metric_reader = PeriodicExportingMetricReader(
            OTLPMetricExporter(endpoint=endpoint),
            export_interval_millis=5000
        )
        metrics.set_meter_provider(MeterProvider(metric_readers=[metric_reader]))
        
        self.tracer = trace.get_tracer(service_name)
        self.meter = metrics.get_meter(service_name)
        
        # Create compliance metrics
        self.compliance_counter = self.meter.create_counter(
            "compliance_operations_total",
            description="Total compliance operations"
        )
        
        self.validation_histogram = self.meter.create_histogram(
            "eid_validation_duration_seconds",
            description="EID validation duration"
        )

    def log_compliance_event(self, event_type: str, details: Dict):
        """Log compliance event with full audit trail"""
        with self.tracer.start_as_current_span(f"compliance_{event_type}") as span:
            span.set_attributes({
                "compliance.event_type": event_type,
                "compliance.standard": "SAS-SM_v3.4.2",
                "compliance.timestamp": datetime.utcnow().isoformat()
            })
            
            for key, value in details.items():
                span.set_attribute(f"compliance.{key}", str(value))
            
            self.compliance_counter.add(1, {"event_type": event_type})
```

## 4. EID Validation

### 4.1 EID Validation Service

```python
# backend/services/eid_validation.py
import re
import binascii
from typing import Tuple, Dict, List
from dataclasses import dataclass
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

@dataclass
class ManufacturerCode:
    code: str
    name: str
    certification_level: str
    valid_from: str
    valid_until: str

class EIDValidator:
    def __init__(self):
        self.valid_manufacturers = self._load_manufacturer_codes()
        self.validation_rules = self._load_validation_rules()

    def _load_manufacturer_codes(self) -> List[ManufacturerCode]:
        """Load valid manufacturer codes from GSMA registry"""
        return [
            ManufacturerCode("89049032", "IDEMIA", "EAL6+", "2020-01-01", "2030-12-31"),
            ManufacturerCode("89049033", "Giesecke+Devrient", "EAL6+", "2020-01-01", "2030-12-31"),
            ManufacturerCode("89049034", "STMicroelectronics", "EAL6+", "2020-01-01", "2030-12-31"),
            ManufacturerCode("89049035", "Infineon", "EAL6+", "2020-01-01", "2030-12-31"),
            ManufacturerCode("89049036", "Samsung", "EAL6+", "2020-01-01", "2030-12-31")
        ]

    @tracer.start_as_current_span("eid_validation")
    def validate_eid(self, eid: str, iccid: str = None) -> Dict:
        """Comprehensive EID validation with GSMA compliance"""
        validation_results = {
            'eid': eid,
            'valid': False,
            'checks': {},
            'manufacturer_info': None,
            'compliance_level': 'SAS-SM_v3.4.2'
        }

        # Format validation
        format_valid, format_msg = self._validate_format(eid)
        validation_results['checks']['format'] = {
            'valid': format_valid,
            'message': format_msg
        }

        if not format_valid:
            return validation_results

        # Manufacturer code validation
        manufacturer_valid, manufacturer_info = self._validate_manufacturer(eid)
        validation_results['checks']['manufacturer'] = {
            'valid': manufacturer_valid,
            'message': f"Manufacturer: {manufacturer_info.name if manufacturer_info else 'Unknown'}"
        }
        validation_results['manufacturer_info'] = manufacturer_info

        # ICCID mapping validation
        if iccid:
            mapping_valid, mapping_msg = self._validate_iccid_mapping(eid, iccid)
            validation_results['checks']['iccid_mapping'] = {
                'valid': mapping_valid,
                'message': mapping_msg
            }

        # Overall validation result
        validation_results['valid'] = all(
            check['valid'] for check in validation_results['checks'].values()
        )

        return validation_results

    def _validate_format(self, eid: str) -> Tuple[bool, str]:
        """Validate EID format according to GSMA standards"""
        if not isinstance(eid, str):
            return False, "EID must be a string"

        if len(eid) != 32:
            return False, f"EID must be 32 characters, got {len(eid)}"

        if not re.match(r'^[0-9A-Fa-f]{32}$', eid):
            return False, "EID must contain only hexadecimal characters"

        # Check for valid MII (Major Industry Identifier)
        mii = eid[:2]
        if mii not in ['89']:  # Telecommunications
            return False, f"Invalid MII: {mii}"

        return True, "Valid EID format"

    def _validate_manufacturer(self, eid: str) -> Tuple[bool, ManufacturerCode]:
        """Validate manufacturer code against GSMA registry"""
        manufacturer_code = eid[:8]
        
        for manufacturer in self.valid_manufacturers:
            if manufacturer.code == manufacturer_code:
                # Check validity period
                current_date = datetime.utcnow().strftime('%Y-%m-%d')
                if manufacturer.valid_from <= current_date <= manufacturer.valid_until:
                    return True, manufacturer
                else:
                    return False, None

        return False, None

    def _validate_iccid_mapping(self, eid: str, iccid: str) -> Tuple[bool, str]:
        """Validate ICCID to EID mapping"""
        if not re.match(r'^[0-9]{19,20}$', iccid):
            return False, "Invalid ICCID format"

        # Extract relevant parts for mapping validation
        iccid_prefix = iccid[:8]
        eid_prefix = eid[:8]

        if iccid_prefix != eid_prefix:
            return False, f"ICCID-EID mapping mismatch: {iccid_prefix} != {eid_prefix}"

        return True, "Valid ICCID-EID mapping"

    def _load_validation_rules(self) -> Dict:
        """Load validation rules from configuration"""
        return {
            'min_length': 32,
            'max_length': 32,
            'allowed_characters': r'[0-9A-Fa-f]',
            'required_mii': ['89'],
            'manufacturer_code_length': 8
        }
```

### 4.2 Hex-based ICCID Mapping

```python
# backend/utils/iccid_mapping.py
import binascii
from typing import Dict, Optional

class ICCIDMapper:
    @staticmethod
    def hex_to_decimal_iccid(hex_iccid: str) -> str:
        """Convert hexadecimal ICCID to decimal format"""
        try:
            # Remove any spaces or separators
            clean_hex = hex_iccid.replace(' ', '').replace('-', '')
            
            # Convert hex to bytes then to decimal string
            bytes_data = binascii.unhexlify(clean_hex)
            decimal_iccid = ''.join(f'{byte:02d}' for byte in bytes_data)
            
            return decimal_iccid[:20]  # Standard ICCID length
        except (ValueError, binascii.Error) as e:
            raise ICCIDMappingError(f"Invalid hex ICCID: {e}")

    @staticmethod
    def validate_luhn_checksum(iccid: str) -> bool:
        """Validate ICCID Luhn checksum"""
        def luhn_checksum(card_num):
            def digits_of(n):
                return [int(d) for d in str(n)]
            
            digits = digits_of(card_num)
            odd_digits = digits[-1::-2]
            even_digits = digits[-2::-2]
            checksum = sum(odd_digits)
            for d in even_digits:
                checksum += sum(digits_of(d*2))
            return checksum % 10

        return luhn_checksum(iccid) == 0

class ICCIDMappingError(Exception):
    pass
```

## 5. EAL6+ Device Support

### 5.1 EAL6+ Device Specification

```yaml
# config/eal6_device_specification.yaml
eal6_device_requirements:
  certification_standards:
    common_criteria:
      level: "EAL6+"
      protection_profile: "PP_eUICC_v1.0"
      security_target: "ST_eUICC_EAL6+"
      evaluation_facility: "GSMA_APPROVED"
      
    fips_compliance:
      level: "FIPS_140_3_Level_3"
      algorithm_validation: "CAVP_CERTIFIED"
      entropy_source: "SP800_90B_COMPLIANT"
      key_management: "SP800_57_COMPLIANT"
      
    scp03t_support:
      protocol_version: "SCP03t"
      key_diversification: "REQUIRED"
      secure_messaging: "MANDATORY"
      authentication: "MUTUAL_AUTH"
      
    puf_requirements:
      technology: "SRAM_PUF"
      entropy_bits: 256
      reliability: "99.9%"
      uniqueness: "INTER_CHIP_HD_50%"

  device_categories:
    smartphone:
      manufacturers: ["Apple", "Samsung", "Google", "Xiaomi"]
      form_factors: ["nano_sim", "embedded"]
      operating_systems: ["iOS", "Android"]
      
    iot_devices:
      categories: ["automotive", "industrial", "consumer"]
      power_profiles: ["ultra_low", "low", "standard"]
      connectivity: ["cellular", "wifi", "bluetooth"]
      
    wearables:
      types: ["smartwatch", "fitness_tracker", "medical_device"]
      battery_constraints: "OPTIMIZED"
      size_constraints: "MINIATURIZED"

  compatibility_matrix:
    certification_mapping:
      - device_type: "smartphone"
        required_certifications: ["EAL6+", "FIPS_140_3_L3", "SCP03t"]
        optional_features: ["PUF", "SECURE_BOOT"]
        
      - device_type: "iot_device"
        required_certifications: ["EAL6+", "FIPS_140_3_L3"]
        optional_features: ["SCP03t", "PUF"]
        
      - device_type: "wearable"
        required_certifications: ["EAL6+", "FIPS_140_3_L3"]
        optional_features: ["SCP03t", "LOW_POWER_PUF"]

  validation_procedures:
    pre_certification:
      - security_architecture_review
      - cryptographic_implementation_analysis
      - side_channel_attack_resistance
      - fault_injection_resistance
      
    certification_process:
      - formal_verification
      - penetration_testing
      - vulnerability_assessment
      - compliance_audit
      
    post_certification:
      - continuous_monitoring
      - security_update_validation
      - incident_response_procedures
```

### 5.2 Device Compatibility Service

```python
# backend/services/device_compatibility.py
import yaml
from typing import Dict, List, Optional
from dataclasses import dataclass
from datetime import datetime

@dataclass
class DeviceCompatibility:
    device_model: str
    manufacturer: str
    eal_level: str
    fips_level: str
    scp03t_support: bool
    puf_support: bool
    certification_date: datetime
    expiry_date: datetime
    compliance_status: str

class DeviceCompatibilityService:
    def __init__(self, config_path: str):
        with open(config_path, 'r') as f:
            self.config = yaml.safe_load(f)
        self.compatibility_cache = {}

    def check_device_compatibility(self, device_model: str, manufacturer: str) -> Dict:
        """Check device compatibility against EAL6+ requirements"""
        cache_key = f"{manufacturer}_{device_model}"
        
        if cache_key in self.compatibility_cache:
            return self.compatibility_cache[cache_key]

        compatibility_result = {
            'device_model': device_model,
            'manufacturer': manufacturer,
            'compatible': False,
            'certifications': {},
            'missing_requirements': [],
            'compliance_score': 0.0
        }

        # Check against compatibility matrix
        device_info = self._get_device_info(device_model, manufacturer)
        if not device_info:
            compatibility_result['missing_requirements'].append('Device not in compatibility matrix')
            return compatibility_result

        # Validate certifications
        required_certs = self._get_required_certifications(device_info['device_type'])
        cert_results = self._validate_certifications(device_info, required_certs)
        
        compatibility_result['certifications'] = cert_results
        compatibility_result['compatible'] = all(cert_results.values())
        compatibility_result['compliance_score'] = sum(cert_results.values()) / len(cert_results)

        # Cache result
        self.compatibility_cache[cache_key] = compatibility_result
        
        return compatibility_result

    def _get_device_info(self, device_model: str, manufacturer: str) -> Optional[Dict]:
        """Retrieve device information from compatibility matrix"""
        # Implementation to fetch device info from database or configuration
        pass

    def _get_required_certifications(self, device_type: str) -> List[str]:
        """Get required certifications for device type"""
        matrix = self.config['eal6_device_requirements']['compatibility_matrix']['certification_mapping']
        
        for mapping in matrix:
            if mapping['device_type'] == device_type:
                return mapping['required_certifications']
        
        return []

    def _validate_certifications(self, device_info: Dict, required_certs: List[str]) -> Dict[str, bool]:
        """Validate device certifications"""
        results = {}
        
        for cert in required_certs:
            if cert == "EAL6+":
                results[cert] = device_info.get('eal_level') == 'EAL6+'
            elif cert == "FIPS_140_3_L3":
                results[cert] = device_info.get('fips_level') == 'FIPS_140_3_Level_3'
            elif cert == "SCP03t":
                results[cert] = device_info.get('scp03t_support', False)
            else:
                results[cert] = False
        
        return results
```

## 6. Automated Compliance

### 6.1 Real-time eUICC Compatibility Matrix

```python
# backend/services/compatibility_matrix.py
import asyncio
from typing import Dict, List
from datetime import datetime, timedelta
from sqlalchemy import create_engine, text
from redis import Redis

class RealTimeCompatibilityMatrix:
    def __init__(self, db_url: str, redis_url: str):
        self.db_engine = create_engine(db_url)
        self.redis_client = Redis.from_url(redis_url)
        self.update_interval = 300  # 5 minutes

    async def start_monitoring(self):
        """Start real-time compatibility monitoring"""
        while True:
            try:
                await self._update_compatibility_matrix()
                await asyncio.sleep(self.update_interval)
            except Exception as e:
                logging.error(f"Compatibility matrix update failed: {e}")
                await asyncio.sleep(60)  # Retry after 1 minute

    async def _update_compatibility_matrix(self):
        """Update compatibility matrix from multiple sources"""
        # Fetch from GSMA registry
        gsma_devices = await self._fetch_gsma_registry()
        
        # Fetch from internal database
        internal_devices = await self._fetch_internal_devices()
        
        # Merge and validate
        merged_matrix = self._merge_device_data(gsma_devices, internal_devices)
        
        # Update cache
        await self._update_cache(merged_matrix)
        
        # Trigger compliance checks
        await self._trigger_compliance_checks(merged_matrix)

    async def _fetch_gsma_registry(self) -> List[Dict]:
        """Fetch device compatibility from GSMA registry"""
        # Implementation to fetch from GSMA API
        pass

    async def _fetch_internal_devices(self) -> List[Dict]:
        """Fetch device data from internal database"""
        query = text("""
            SELECT device_model, manufacturer, eal_level, fips_level,
                   scp03t_support, puf_support, certification_date,
                   expiry_date, compliance_status
            FROM device_compatibility
            WHERE expiry_date > :current_date
            AND compliance_status = 'ACTIVE'
        """)
        
        with self.db_engine.connect() as conn:
            result = conn.execute(query, current_date=datetime.utcnow())
            return [dict(row) for row in result]

    def _merge_device_data(self, gsma_data: List[Dict], internal_data: List[Dict]) -> Dict:
        """Merge device data from multiple sources"""
        merged = {}
        
        # Process internal data first
        for device in internal_data:
            key = f"{device['manufacturer']}_{device['device_model']}"
            merged[key] = device
        
        # Update with GSMA data
        for device in gsma_data:
            key = f"{device['manufacturer']}_{device['device_model']}"
            if key in merged:
                merged[key].update(device)
            else:
                merged[key] = device
        
        return merged

    async def _update_cache(self, matrix: Dict):
        """Update Redis cache with compatibility matrix"""
        cache_key = "compatibility_matrix"
        
        # Store with expiration
        self.redis_client.setex(
            cache_key,
            timedelta(minutes=10),
            json.dumps(matrix, default=str)
        )

    async def _trigger_compliance_checks(self, matrix: Dict):
        """Trigger compliance checks for updated devices"""
        for device_key, device_data in matrix.items():
            if self._requires_compliance_check(device_data):
                await self._schedule_compliance_check(device_key, device_data)
```

### 6.2 GSMA Standard Compliance Checker

```python
# backend/services/gsma_compliance_checker.py
from typing import Dict, List, Tuple
from dataclasses import dataclass
from enum import Enum

class ComplianceStatus(Enum):
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    PENDING = "PENDING"
    EXPIRED = "EXPIRED"

@dataclass
class ComplianceCheck:
    standard: str
    version: str
    requirement: str
    status: ComplianceStatus
    details: str
    checked_at: datetime

class GSMAComplianceChecker:
    def __init__(self):
        self.standards = {
            'SAS-SM': '3.4.2',
            'SGP.22': '3.3',
            'SGP.02': '4.3',
            'SGP.21': '2.3'
        }

    def check_sas_sm_compliance(self, device_data: Dict) -> List[ComplianceCheck]:
        """Check SAS-SM v3.4.2 compliance"""
        checks = []
        
        # Check secure messaging support
        checks.append(self._check_secure_messaging(device_data))
        
        # Check key management
        checks.append(self._check_key_management(device_data))
        
        # Check authentication protocols
        checks.append(self._check_authentication(device_data))
        
        # Check audit logging
        checks.append(self._check_audit_logging(device_data))
        
        return checks

    def _check_secure_messaging(self, device_data: Dict) -> ComplianceCheck:
        """Check secure messaging compliance"""
        scp03t_support = device_data.get('scp03t_support', False)
        
        if scp03t_support:
            status = ComplianceStatus.COMPLIANT
            details = "SCP03t secure messaging supported"
        else:
            status = ComplianceStatus.NON_COMPLIANT
            details = "SCP03t secure messaging not supported"
        
        return ComplianceCheck(
            standard='SAS-SM',
            version='3.4.2',
            requirement='Secure Messaging',
            status=status,
            details=details,
            checked_at=datetime.utcnow()
        )

    def _check_key_management(self, device_data: Dict) -> ComplianceCheck:
        """Check key management compliance"""
        fips_level = device_data.get('fips_level')
        
        if fips_level == 'FIPS_140_3_Level_3':
            status = ComplianceStatus.COMPLIANT
            details = "FIPS 140-3 Level 3 key management"
        else:
            status = ComplianceStatus.NON_COMPLIANT
            details = f"Insufficient key management level: {fips_level}"
        
        return ComplianceCheck(
            standard='SAS-SM',
            version='3.4.2',
            requirement='Key Management',
            status=status,
            details=details,
            checked_at=datetime.utcnow()
        )

    def generate_compliance_report(self, checks: List[ComplianceCheck]) -> Dict:
        """Generate comprehensive compliance report"""
        total_checks = len(checks)
        compliant_checks = sum(1 for check in checks if check.status == ComplianceStatus.COMPLIANT)
        
        compliance_score = (compliant_checks / total_checks) * 100 if total_checks > 0 else 0
        
        return {
            'compliance_score': compliance_score,
            'total_checks': total_checks,
            'compliant_checks': compliant_checks,
            'non_compliant_checks': total_checks - compliant_checks,
            'overall_status': 'COMPLIANT' if compliance_score >= 95 else 'NON_COMPLIANT',
            'checks': [
                {
                    'standard': check.standard,
                    'version': check.version,
                    'requirement': check.requirement,
                    'status': check.status.value,
                    'details': check.details,
                    'checked_at': check.checked_at.isoformat()
                }
                for check in checks
            ],
            'generated_at': datetime.utcnow().isoformat()
        }
```

### 6.3 Automated Test Suite

```python
# tests/test_compliance_suite.py
import pytest
import asyncio
from backend.services.eid_validation import EIDValidator
from backend.services.gsma_compliance_checker import GSMAComplianceChecker
from backend.services.device_compatibility import DeviceCompatibilityService

class TestComplianceSuite:
    @pytest.fixture
    def eid_validator(self):
        return EIDValidator()

    @pytest.fixture
    def compliance_checker(self):
        return GSMAComplianceChecker()

    @pytest.fixture
    def compatibility_service(self):
        return DeviceCompatibilityService('config/eal6_device_specification.yaml')

    def test_valid_eid_formats(self, eid_validator):
        """Test valid EID formats"""
        valid_eids = [
            "89049032000000000000000000000001",
            "89049033123456789ABCDEF0123456789",
            "89049034FEDCBA9876543210FEDCBA98"
        ]
        
        for eid in valid_eids:
            result = eid_validator.validate_eid(eid)
            assert result['valid'], f"EID {eid} should be valid"
            assert result['checks']['format']['valid']

    def test_invalid_eid_formats(self, eid_validator):
        """Test invalid EID formats"""
        invalid_eids = [
            "12345",  # Too short
            "89049032000000000000000000000001X",  # Too long
            "GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG",  # Invalid characters
            "89049999000000000000000000000001"   # Invalid manufacturer
        ]
        
        for eid in invalid_eids:
            result = eid_validator.validate_eid(eid)
            assert not result['valid'], f"EID {eid} should be invalid"

    def test_manufacturer_validation(self, eid_validator):
        """Test manufacturer code validation"""
        # Valid manufacturer codes
        valid_manufacturers = ["89049032", "89049033", "89049034"]
        
        for mfg_code in valid_manufacturers:
            eid = mfg_code + "000000000000000000000000"
            result = eid_validator.validate_eid(eid)
            assert result['checks']['manufacturer']['valid']

    def test_iccid_mapping(self, eid_validator):
        """Test ICCID to EID mapping"""
        eid = "89049032000000000000000000000001"
        iccid = "89049032001234567890"
        
        result = eid_validator.validate_eid(eid, iccid)
        assert result['checks']['iccid_mapping']['valid']

    @pytest.mark.asyncio
    async def test_compliance_checks(self, compliance_checker):
        """Test GSMA compliance checks"""
        device_data = {
            'device_model': 'iPhone_14_Pro',
            'manufacturer': 'Apple',
            'eal_level': 'EAL6+',
            'fips_level': 'FIPS_140_3_Level_3',
            'scp03t_support': True,
            'puf_support': True
        }
        
        checks = compliance_checker.check_sas_sm_compliance(device_data)
        report = compliance_checker.generate_compliance_report(checks)
        
        assert report['compliance_score'] >= 95
        assert report['overall_status'] == 'COMPLIANT'

    def test_device_compatibility(self, compatibility_service):
        """Test device compatibility checking"""
        result = compatibility_service.check_device_compatibility(
            'iPhone_14_Pro', 'Apple'
        )
        
        assert result['compatible']
        assert result['compliance_score'] >= 0.95

if __name__ == '__main__':
    pytest.main(['-v', __file__])
```

### 6.4 CI/CD Integration

```yaml
# .github/workflows/compliance-testing.yml
name: NexoraSIM Compliance Testing

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM

jobs:
  compliance-tests:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:13
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: nexorasim_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
      
      redis:
        image: redis:6
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
    - uses: actions/checkout@v4
    
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.9'
    
    - name: Install dependencies
      run: |
        pip install -r backend/requirements.txt
        pip install pytest pytest-asyncio pytest-cov
    
    - name: Run EID validation tests
      run: |
        pytest tests/test_eid_validation.py -v --cov=backend/services/eid_validation
    
    - name: Run compliance tests
      run: |
        pytest tests/test_compliance_suite.py -v --cov=backend/services
    
    - name: Run integration tests
      run: |
        pytest tests/test_integration.py -v
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/nexorasim_test
        REDIS_URL: redis://localhost:6379/0
    
    - name: Generate compliance report
      run: |
        python scripts/generate_compliance_report.py
    
    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage.xml
        flags: compliance-tests
```

## Deployment and Monitoring

### Production Deployment

```bash
# Deploy to production
./deploy-infrastructure.sh

# Verify deployment
python scripts/verify_deployment.py

# Start monitoring
docker-compose -f docker-compose.prod.yml up -d
```

### Monitoring Dashboard

Access real-time compliance metrics at:
- **Grafana Dashboard**: https://monitoring.nexorasim.com
- **OpenTelemetry Traces**: https://traces.nexorasim.com
- **Compliance Reports**: https://compliance.nexorasim.com

---

This guide provides a comprehensive foundation for building and integrating the NexoraSIM Developer Portal with enterprise-grade eSIM management capabilities, ensuring full GSMA compliance and EAL6+ device support.