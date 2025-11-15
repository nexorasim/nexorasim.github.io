#!/usr/bin/env node

/**
 * NexoraSIM Health Check Script
 * Comprehensive health monitoring for production deployment
 */

import https from 'https'
import { performance } from 'perf_hooks'

const SITE_URL = 'https://nexorasim.github.io'
const TIMEOUT = 10000 // 10 seconds

// Critical pages to monitor
const criticalPages = [
  '/',
  '/features',
  '/api',
  '/enterprise',
  '/architecture',
  '/technology',
  '/security',
  '/operators/mpt',
  '/tech/esim-architecture'
]

// Performance thresholds
const thresholds = {
  responseTime: 2000, // 2 seconds
  availability: 99.9,  // 99.9% uptime
  errorRate: 1.0       // Max 1% error rate
}

class HealthChecker {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      overall: 'UNKNOWN',
      checks: [],
      metrics: {
        totalChecks: 0,
        passedChecks: 0,
        failedChecks: 0,
        averageResponseTime: 0,
        availability: 0
      }
    }
  }

  async checkUrl(url, timeout = TIMEOUT) {
    return new Promise((resolve) => {
      const startTime = performance.now()
      
      const req = https.get(url, { timeout }, (res) => {
        const endTime = performance.now()
        const responseTime = Math.round(endTime - startTime)
        
        let data = ''
        res.on('data', chunk => data += chunk)
        res.on('end', () => {
          resolve({
            url,
            status: res.statusCode,
            responseTime,
            contentLength: data.length,
            headers: res.headers,
            success: res.statusCode >= 200 && res.statusCode < 400
          })
        })
      })

      req.on('timeout', () => {
        req.destroy()
        resolve({
          url,
          status: 0,
          responseTime: timeout,
          error: 'TIMEOUT',
          success: false
        })
      })

      req.on('error', (error) => {
        const endTime = performance.now()
        resolve({
          url,
          status: 0,
          responseTime: Math.round(endTime - startTime),
          error: error.message,
          success: false
        })
      })
    })
  }

  async checkSEO(url) {
    try {
      const result = await this.checkUrl(url)
      if (!result.success) return { seo: false, issues: ['Page not accessible'] }

      // For a full SEO check, we'd need to parse the HTML
      // This is a simplified version
      return {
        seo: true,
        issues: []
      }
    } catch (error) {
      return { seo: false, issues: [error.message] }
    }
  }

  async checkSecurity(url) {
    try {
      const result = await this.checkUrl(url)
      if (!result.success) return { secure: false, issues: ['Page not accessible'] }

      const issues = []
      const headers = result.headers || {}

      // Check security headers
      if (!headers['strict-transport-security']) {
        issues.push('Missing HSTS header')
      }
      if (!headers['x-frame-options'] && !headers['content-security-policy']) {
        issues.push('Missing clickjacking protection')
      }
      if (!headers['x-content-type-options']) {
        issues.push('Missing MIME type sniffing protection')
      }

      return {
        secure: issues.length === 0,
        issues
      }
    } catch (error) {
      return { secure: false, issues: [error.message] }
    }
  }

  async runHealthCheck() {
    console.log('🏥 NexoraSIM Health Check Starting...')
    console.log('=' .repeat(60))
    console.log(`🌐 Target: ${SITE_URL}`)
    console.log(`⏱️  Timeout: ${TIMEOUT}ms`)
    console.log(`📊 Pages to check: ${criticalPages.length}`)
    console.log('')

    const startTime = performance.now()
    let totalResponseTime = 0

    // Check each critical page
    for (const page of criticalPages) {
      const url = `${SITE_URL}${page}`
      console.log(`🔍 Checking: ${page}`)

      const result = await this.checkUrl(url)
      const seoCheck = await this.checkSEO(url)
      const securityCheck = await this.checkSecurity(url)

      totalResponseTime += result.responseTime

      const check = {
        page,
        url,
        status: result.status,
        responseTime: result.responseTime,
        success: result.success,
        error: result.error,
        seo: seoCheck.seo,
        seoIssues: seoCheck.issues,
        security: securityCheck.secure,
        securityIssues: securityCheck.issues,
        timestamp: new Date().toISOString()
      }

      this.results.checks.push(check)
      this.results.metrics.totalChecks++

      if (result.success) {
        this.results.metrics.passedChecks++
        console.log(`  ✅ ${result.status} - ${result.responseTime}ms`)
      } else {
        this.results.metrics.failedChecks++
        console.log(`  ❌ ${result.status || 'ERROR'} - ${result.error || 'Unknown error'}`)
      }

      if (!seoCheck.seo && seoCheck.issues.length > 0) {
        console.log(`  ⚠️  SEO Issues: ${seoCheck.issues.join(', ')}`)
      }

      if (!securityCheck.secure && securityCheck.issues.length > 0) {
        console.log(`  🔒 Security Issues: ${securityCheck.issues.join(', ')}`)
      }

      console.log('')
    }

    // Calculate metrics
    const endTime = performance.now()
    this.results.metrics.averageResponseTime = Math.round(totalResponseTime / criticalPages.length)
    this.results.metrics.availability = (this.results.metrics.passedChecks / this.results.metrics.totalChecks) * 100
    this.results.metrics.totalDuration = Math.round(endTime - startTime)

    // Determine overall health
    if (this.results.metrics.availability >= thresholds.availability && 
        this.results.metrics.averageResponseTime <= thresholds.responseTime) {
      this.results.overall = 'HEALTHY'
    } else if (this.results.metrics.availability >= 95) {
      this.results.overall = 'DEGRADED'
    } else {
      this.results.overall = 'UNHEALTHY'
    }

    this.displayResults()
    return this.results
  }

  displayResults() {
    console.log('📊 HEALTH CHECK RESULTS')
    console.log('=' .repeat(60))
    console.log(`🎯 Overall Status: ${this.getStatusEmoji()} ${this.results.overall}`)
    console.log(`📈 Availability: ${this.results.metrics.availability.toFixed(1)}%`)
    console.log(`⚡ Average Response Time: ${this.results.metrics.averageResponseTime}ms`)
    console.log(`✅ Passed: ${this.results.metrics.passedChecks}/${this.results.metrics.totalChecks}`)
    console.log(`❌ Failed: ${this.results.metrics.failedChecks}/${this.results.metrics.totalChecks}`)
    console.log(`⏱️  Total Duration: ${this.results.metrics.totalDuration}ms`)
    console.log('')

    // Performance assessment
    if (this.results.metrics.averageResponseTime > thresholds.responseTime) {
      console.log(`⚠️  WARNING: Average response time (${this.results.metrics.averageResponseTime}ms) exceeds threshold (${thresholds.responseTime}ms)`)
    }

    if (this.results.metrics.availability < thresholds.availability) {
      console.log(`⚠️  WARNING: Availability (${this.results.metrics.availability.toFixed(1)}%) below threshold (${thresholds.availability}%)`)
    }

    // Failed checks details
    const failedChecks = this.results.checks.filter(check => !check.success)
    if (failedChecks.length > 0) {
      console.log('\n❌ FAILED CHECKS:')
      failedChecks.forEach(check => {
        console.log(`   ${check.page}: ${check.error || 'Unknown error'}`)
      })
    }

    // SEO issues
    const seoIssues = this.results.checks.filter(check => !check.seo && check.seoIssues.length > 0)
    if (seoIssues.length > 0) {
      console.log('\n⚠️  SEO ISSUES:')
      seoIssues.forEach(check => {
        console.log(`   ${check.page}: ${check.seoIssues.join(', ')}`)
      })
    }

    // Security issues
    const securityIssues = this.results.checks.filter(check => !check.security && check.securityIssues.length > 0)
    if (securityIssues.length > 0) {
      console.log('\n🔒 SECURITY ISSUES:')
      securityIssues.forEach(check => {
        console.log(`   ${check.page}: ${check.securityIssues.join(', ')}`)
      })
    }

    console.log('')
    console.log('🏥 Health check completed!')
    
    if (this.results.overall === 'UNHEALTHY') {
      console.log('🚨 CRITICAL: Site is experiencing significant issues')
      process.exit(1)
    } else if (this.results.overall === 'DEGRADED') {
      console.log('⚠️  WARNING: Site performance is degraded')
    } else {
      console.log('✅ SUCCESS: Site is healthy and performing well')
    }
  }

  getStatusEmoji() {
    switch (this.results.overall) {
      case 'HEALTHY': return '✅'
      case 'DEGRADED': return '⚠️'
      case 'UNHEALTHY': return '❌'
      default: return '❓'
    }
  }
}

// Run health check if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const checker = new HealthChecker()
  checker.runHealthCheck().catch(error => {
    console.error('❌ Health check failed:', error)
    process.exit(1)
  })
}

export { HealthChecker }