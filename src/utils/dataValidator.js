import { ErrorHandler } from './errorHandler.js'
import { OPERATORS, PROFILE_STATES, DEVICE_TYPES } from './constants.js'

export class DataValidator {
  static validateESIMRequest(data) {
    const schema = {
      operator: { required: true, type: 'string', enum: Object.values(OPERATORS) },
      device_id: { required: true, type: 'string' },
      plan_id: { required: true, type: 'string' }
    }
    ErrorHandler.validateData(data, schema)
  }

  static validateDeviceRegistration(data) {
    const schema = {
      device_id: { required: true, type: 'string' },
      device_type: { required: true, type: 'string', enum: Object.values(DEVICE_TYPES) },
      operator: { required: true, type: 'string', enum: Object.values(OPERATORS) }
    }
    ErrorHandler.validateData(data, schema)
  }

  static validateProfileData(data) {
    const schema = {
      operator: { required: true, type: 'string', enum: Object.values(OPERATORS) },
      plan_type: { required: true, type: 'string', enum: Object.values(DEVICE_TYPES) },
      activation_code: { required: true, type: 'string' }
    }
    ErrorHandler.validateData(data, schema)
  }

  static validateICCID(iccid) {
    if (!iccid || typeof iccid !== 'string') {
      throw new Error('ICCID must be a valid string')
    }
    if (!/^[0-9]{19,20}$/.test(iccid)) {
      throw new Error('ICCID must be 19-20 digits')
    }
  }

  static validateDateRange(startDate, endDate) {
    if (!startDate || !endDate) {
      throw new Error('Start date and end date are required')
    }
    
    const start = new Date(startDate)
    const end = new Date(endDate)
    
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      throw new Error('Invalid date format')
    }
    
    if (start >= end) {
      throw new Error('Start date must be before end date')
    }
  }

  static sanitizeInput(input) {
    if (typeof input !== 'string') return input
    return input.trim().replace(/[<>\"'&]/g, '')
  }

  static validateSystemData(systemData) {
    if (!systemData || typeof systemData !== 'object') {
      throw new Error('Invalid system data')
    }
    
    const requiredFields = ['status', 'timestamp', 'components']
    ErrorHandler.validateRequired(systemData, requiredFields)
    
    if (systemData.components && typeof systemData.components !== 'object') {
      throw new Error('Components must be an object')
    }
  }
}