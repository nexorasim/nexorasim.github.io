export class ErrorHandler {
  static handle(error, context = '') {
    const errorData = {
      success: false,
      error: this.sanitizeError(error),
      context,
      timestamp: new Date().toISOString(),
      code: error.code || 'UNKNOWN_ERROR'
    }
    
    if (process.env.NODE_ENV === 'development') {
      
    }
    
    return errorData
  }

  static sanitizeError(error) {
    if (!error) return 'Unknown error occurred'
    if (typeof error === 'string') return error
    return error.message || 'System error'
  }

  static async safeExecute(fn, context = '') {
    try {
      const result = await fn()
      return { 
        success: true, 
        data: result,
        timestamp: new Date().toISOString()
      }
    } catch (error) {
      return this.handle(error, context)
    }
  }

  static validateRequired(obj, fields) {
    if (!obj || typeof obj !== 'object') {
      throw new Error('Invalid object provided for validation')
    }
    
    const missing = fields.filter(field => {
      const value = obj[field]
      return value === null || value === undefined || value === ''
    })
    
    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(', ')}`)
    }
  }

  static validateData(data, schema) {
    if (!data) throw new Error('No data provided')
    if (!schema) throw new Error('No validation schema provided')
    
    for (const [field, rules] of Object.entries(schema)) {
      const value = data[field]
      
      if (rules.required && (value === null || value === undefined || value === '')) {
        throw new Error(`Field '${field}' is required`)
      }
      
      if (value && rules.type && typeof value !== rules.type) {
        throw new Error(`Field '${field}' must be of type ${rules.type}`)
      }
      
      if (value && rules.enum && !rules.enum.includes(value)) {
        throw new Error(`Field '${field}' must be one of: ${rules.enum.join(', ')}`)
      }
    }
  }

  static createValidationSchema(fields) {
    const schema = {}
    fields.forEach(field => {
      if (typeof field === 'string') {
        schema[field] = { required: true }
      } else {
        schema[field.name] = field
      }
    })
    return schema
  }
}