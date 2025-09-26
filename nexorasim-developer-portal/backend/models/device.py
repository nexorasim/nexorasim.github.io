from dataclasses import dataclass
from typing import List, Optional
from datetime import datetime

@dataclass
class Device:
    device_model: str
    eUICC_version: str
    manufacturer: str
    certification_status: str
    eal_level: str
    gsma_compliance: bool
    created_at: datetime
    updated_at: datetime

@dataclass
class EIDValidation:
    eid: str
    manufacturer_code: str
    is_valid: bool
    validation_timestamp: datetime
    error_message: Optional[str] = None

@dataclass
class ComplianceMetrics:
    compliance_score: float
    eid_validation_rate: float
    sas_sm_compliance: bool
    last_audit_date: datetime
    total_devices: int
    certified_devices: int