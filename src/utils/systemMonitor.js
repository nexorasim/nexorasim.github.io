import { ErrorHandler } from './errorHandler.js'

export class SystemMonitor {
  constructor() {
    this.metrics = new Map()
    this.alerts = []
    this.healthChecks = new Map()
  }

  recordMetric(name, value, timestamp = new Date().toISOString()) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, [])
    }
    
    this.metrics.get(name).push({
      value: Number(value) || 0,
      timestamp
    })
    
    if (this.metrics.get(name).length > 1000) {
      this.metrics.get(name).shift()
    }
  }

  async performHealthCheck(component, checkFn) {
    return await ErrorHandler.safeExecute(async () => {
      const result = await checkFn()
      const status = {
        component,
        healthy: result.success || false,
        timestamp: new Date().toISOString(),
        details: result.data || result.error
      }
      
      this.healthChecks.set(component, status)
      return status
    }, `Health Check: ${component}`)
  }

  getSystemHealth() {
    const checks = Array.from(this.healthChecks.values())
    const healthy = checks.filter(check => check.healthy).length
    const total = checks.length
    
    return {
      overall: total > 0 ? (healthy / total) >= 0.8 : false,
      components: checks,
      healthScore: total > 0 ? Math.round((healthy / total) * 100) : 0,
      timestamp: new Date().toISOString()
    }
  }

  addAlert(level, message, component = 'system') {
    const alert = {
      id: `alert-${Date.now()}`,
      level,
      message,
      component,
      timestamp: new Date().toISOString()
    }
    
    this.alerts.unshift(alert)
    
    if (this.alerts.length > 100) {
      this.alerts.pop()
    }
    
    return alert
  }

  getMetrics(name, limit = 100) {
    const data = this.metrics.get(name) || []
    return data.slice(-limit)
  }

  clearMetrics(name) {
    if (name) {
      this.metrics.delete(name)
    } else {
      this.metrics.clear()
    }
  }
}