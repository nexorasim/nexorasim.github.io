export class ErrorHandler {
  static handle(error, context = '') {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error in ${context}:`, error)
    }
    
    return {
      success: false,
      error: error.message || 'An unexpected error occurred',
      context
    }
  }

  static async safeExecute(fn, context = '') {
    try {
      const result = await fn()
      return { success: true, data: result }
    } catch (error) {
      return this.handle(error, context)
    }
  }

  static validateRequired(obj, fields) {
    const missing = fields.filter(field => !obj[field])
    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(', ')}`)
    }
  }
}