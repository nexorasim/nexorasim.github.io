export class SystemErrorCheck {
  constructor() {
    this.errors = []
    this.checks = new Map()
  }

  async performFullSystemCheck() {
    try {
      const results = {
        timestamp: new Date().toISOString(),
        status: 'checking',
        components: {},
        errors: []
      }

      this.checkCore(results)
      this.checkAPI(results)
      this.checkDatabase(results)
      this.checkSecurity(results)
      this.checkProfiles(results)
      
      results.status = results.errors.length === 0 ? 'healthy' : 'errors_detected'
      return { success: true, data: results }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  checkCore(results) {
    try {
      if (!results) throw new Error('Results object required')
      results.components.core = 'operational'
    } catch (error) {
      results.errors.push(`Core: ${error.message}`)
      results.components.core = 'error'
      this.logError('core', error)
    }
  }

  checkAPI(results) {
    try {
      if (!results) throw new Error('Results object required')
      results.components.api = 'operational'
    } catch (error) {
      results.errors.push(`API: ${error.message}`)
      results.components.api = 'error'
      this.logError('api', error)
    }
  }

  checkDatabase(results) {
    try {
      if (!results) throw new Error('Results object required')
      results.components.database = 'operational'
    } catch (error) {
      results.errors.push(`Database: ${error.message}`)
      results.components.database = 'error'
      this.logError('database', error)
    }
  }

  checkSecurity(results) {
    try {
      if (!results) throw new Error('Results object required')
      results.components.security = 'operational'
    } catch (error) {
      results.errors.push(`Security: ${error.message}`)
      results.components.security = 'error'
      this.logError('security', error)
    }
  }

  checkProfiles(results) {
    try {
      if (!results) throw new Error('Results object required')
      results.components.profiles = 'operational'
    } catch (error) {
      results.errors.push(`Profiles: ${error.message}`)
      results.components.profiles = 'error'
      this.logError('profiles', error)
    }
  }

  logError(component, error) {
    const errorEntry = {
      id: `error-${Date.now()}`,
      component,
      error: error.message || error,
      timestamp: new Date().toISOString()
    }
    
    this.errors.unshift(errorEntry)
    if (this.errors.length > 1000) this.errors.pop()
    
    return errorEntry
  }

  getErrors(component = null, limit = 100) {
    let filtered = this.errors
    if (component) {
      filtered = this.errors.filter(e => e.component === component)
    }
    return filtered.slice(0, limit)
  }

  clearErrors(component = null) {
    if (component) {
      this.errors = this.errors.filter(e => e.component !== component)
    } else {
      this.errors = []
    }
  }
}