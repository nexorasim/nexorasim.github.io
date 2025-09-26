import unittest
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'backend'))

from backend.utils.eid_validator import EIDValidator

class TestEIDValidation(unittest.TestCase):
    def setUp(self):
        self.validator = EIDValidator()

    def test_valid_eid_format(self):
        valid_eid = "ABCD0123456789ABCDEF0123456789AB"
        is_valid, message = self.validator.validate_hex_format(valid_eid)
        self.assertTrue(is_valid)

    def test_invalid_eid_format(self):
        invalid_eid = "INVALID123"
        is_valid, message = self.validator.validate_hex_format(invalid_eid)
        self.assertFalse(is_valid)

    def test_valid_manufacturer(self):
        valid_eid = "ABCD0123456789ABCDEF0123456789AB"
        is_valid, message = self.validator.validate_manufacturer_code(valid_eid)
        self.assertTrue(is_valid)

    def test_invalid_manufacturer(self):
        invalid_eid = "XXXX0123456789ABCDEF0123456789AB"
        is_valid, message = self.validator.validate_manufacturer_code(invalid_eid)
        self.assertFalse(is_valid)

if __name__ == '__main__':
    unittest.main()