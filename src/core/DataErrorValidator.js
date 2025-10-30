export class DataErrorValidator {
  static validate(data, rules) {
    const errors = []
    
    if (!data) {
      errors.push('Data is required')
      return { valid: false, errors }
    }
    
    for (const [field, rule] of Object.entries(rules)) {
      const value = data[field]
      
      if (rule.required && (!value || value === '')) {
        errors.push(`${field} is required`)
      }
      
      if (value && rule.type && typeof value !== rule.type) {
        errors.push(`${field} must be ${rule.type}`)
      }
      
      if (value && rule.enum && !rule.enum.includes(value)) {
        errors.push(`${field} must be one of: ${rule.enum.join(', ')}`)
      }
    }
    
    return { valid: errors.length === 0, errors }
  }
  
  static validateProfile(data) {
    return this.validate(data, {
      operator: { required: true, type: 'string', enum: ['mpt', 'mytel', 'atom', 'u9'] },
      plan_type: { required: true, type: 'string', enum: ['consumer', 'iot', 'enterprise'] }
    })
  }
  
  static validateDevice(data) {
    return this.validate(data, {
      device_id: { required: true, type: 'string' },
      device_type: { required: true, type: 'string' },
      operator: { required: true, type: 'string' }
    })
  }
}