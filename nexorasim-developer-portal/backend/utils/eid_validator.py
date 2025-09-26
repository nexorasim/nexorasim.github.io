import re
import binascii

class EIDValidator:
    def __init__(self):
        self.valid_manufacturers = [
            'ABCD', 'EF01', '98C2',  # IDEMIA
            '5A01', 'B2C3', 'D4E5'   # STMicroelectronics
        ]

    def validate_hex_format(self, eid):
        """Validate EID hexadecimal format"""
        if not re.match(r'^[0-9A-Fa-f]{32}$', eid):
            return False, "Invalid EID format: must be 32-character hex string"
        return True, "Valid format"

    def validate_manufacturer_code(self, eid):
        """Validate manufacturer code"""
        manufacturer_code = eid[:4].upper()
        if manufacturer_code not in self.valid_manufacturers:
            return False, f"Invalid manufacturer code: {manufacturer_code}"
        return True, "Valid manufacturer"

    def validate_iccid_mapping(self, iccid, eid):
        """Validate ICCID to EID mapping"""
        if not re.match(r'^[0-9]{19,20}$', iccid):
            return False, "Invalid ICCID format"
        
        # Convert ICCID to hex format
        iccid_hex = binascii.hexlify(iccid.encode()).decode().upper()
        expected_eid = iccid_hex.ljust(32, '0')[:32]
        
        if expected_eid != eid.upper():
            return False, "ICCID-EID mapping mismatch"
        
        return True, "Valid mapping"