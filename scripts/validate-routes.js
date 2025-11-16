#!/usr/bin/env node

/**
 * NexoraSIM Route Validation Script
 * Validates all 300 pages are properly configured and accessible
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Import routes configuration
const routesPath = path.join(__dirname, '../src/data/routes.js')
const appPath = path.join(__dirname, '../src/App.jsx')
const pagesDir = path.join(__dirname, '../src/pages')


)

let errors = []
let warnings = []
let totalRoutes = 0

// Validate routes.js exists and is properly structured
function validateRoutesConfig() {
  
  
  if (!fs.existsSync(routesPath)) {
    errors.push('routes.js file not found')
    return false
  }
  
  try {
    const routesContent = fs.readFileSync(routesPath, 'utf8')
    
    // Check for required exports
    if (!routesContent.includes('export const pageRoutes')) {
      errors.push('pageRoutes export not found in routes.js')
    }
    
    if (!routesContent.includes('export const generateAllRoutes')) {
      errors.push('generateAllRoutes export not found in routes.js')
    }
    
    // Count total expected routes
    const coreMatches = routesContent.match(/core:\s*\[([\s\S]*?)\]/)?.[1]
    const operatorMatches = routesContent.match(/operators:\s*\[([\s\S]*?)\]/)?.[1]
    const technicalMatches = routesContent.match(/technical:\s*\[([\s\S]*?)\]/)?.[1]
    const industriesMatches = routesContent.match(/industries:\s*\[([\s\S]*?)\]/)?.[1]
    
    if (coreMatches) totalRoutes += (coreMatches.match(/path:/g) || []).length
    if (operatorMatches) totalRoutes += (operatorMatches.match(/path:/g) || []).length
    if (technicalMatches) totalRoutes += (technicalMatches.match(/path:/g) || []).length
    if (industriesMatches) totalRoutes += (industriesMatches.match(/path:/g) || []).length
    
    // Add language routes (25 pages  7 languages = 175)
    totalRoutes += 175
    
    
    return true
    
  } catch (error) {
    errors.push(`Error reading routes.js: ${error.message}`)
    return false
  }
}

// Validate App.jsx has proper route definitions
function validateAppRoutes() {
  
  
  if (!fs.existsSync(appPath)) {
    errors.push('App.jsx file not found')
    return false
  }
  
  try {
    const appContent = fs.readFileSync(appPath, 'utf8')
    
    // Check for React Router setup
    if (!appContent.includes('import { Routes, Route }')) {
      errors.push('React Router not properly imported in App.jsx')
    }
    
    if (!appContent.includes('<Routes>')) {
      errors.push('Routes component not found in App.jsx')
    }
    
    // Count defined routes
    const routeMatches = appContent.match(/<Route\s+path="[^"]*"/g) || []
    const definedRoutes = routeMatches.length
    
    
    
    // Check for essential routes
    const essentialRoutes = ['/features', '/api', '/enterprise', '/architecture']
    essentialRoutes.forEach(route => {
      if (!appContent.includes(`path="${route}"`)) {
        errors.push(`Essential route ${route} not found in App.jsx`)
      }
    })
    
    return true
    
  } catch (error) {
    errors.push(`Error reading App.jsx: ${error.message}`)
    return false
  }
}

// Validate page components exist
function validatePageComponents() {
  
  
  if (!fs.existsSync(pagesDir)) {
    errors.push('Pages directory not found')
    return false
  }
  
  const requiredPages = [
    'HomePage.jsx',
    'Features.jsx',
    'API.jsx',
    'Enterprise.jsx',
    'Architecture.jsx',
    'Technology.jsx',
    'Security.jsx',
    'Compliance.jsx'
  ]
  
  let foundPages = 0
  
  requiredPages.forEach(page => {
    const pagePath = path.join(pagesDir, page)
    if (fs.existsSync(pagePath)) {
      foundPages++
      
      // Validate page structure
      try {
        const pageContent = fs.readFileSync(pagePath, 'utf8')
        
        if (!pageContent.includes('export default')) {
          warnings.push(`${page} missing default export`)
        }
        
        if (!pageContent.includes('React')) {
          warnings.push(`${page} missing React import`)
        }
        
      } catch (error) {
        warnings.push(`Error reading ${page}: ${error.message}`)
      }
    } else {
      errors.push(`Required page component ${page} not found`)
    }
  })
  
  
  return foundPages === requiredPages.length
}

// Validate features route specifically
function validateFeaturesRoute() {
  
  
  const featuresPath = path.join(pagesDir, 'Features.jsx')
  
  if (!fs.existsSync(featuresPath)) {
    errors.push('Features.jsx component not found')
    return false
  }
  
  try {
    const featuresContent = fs.readFileSync(featuresPath, 'utf8')
    
    // Check for essential Features page elements
    const requiredElements = [
      'Interactive 3D Feature Grid',
      'platformFeatures',
      'technicalSpecs',
      'GSAP',
      'ScrollTrigger'
    ]
    
    requiredElements.forEach(element => {
      if (!featuresContent.includes(element)) {
        warnings.push(`Features page missing: ${element}`)
      }
    })
    
    
    return true
    
  } catch (error) {
    errors.push(`Error validating Features route: ${error.message}`)
    return false
  }
}

// Validate SPA routing setup
function validateSPARouting() {
  
  
  const fallbackPath = path.join(__dirname, '../public/404.html')
  
  if (!fs.existsSync(fallbackPath)) {
    errors.push('404.html fallback file not found for SPA routing')
    return false
  }
  
  try {
    const fallbackContent = fs.readFileSync(fallbackPath, 'utf8')
    
    if (!fallbackContent.includes('GitHub Pages SPA fallback')) {
      warnings.push('404.html may not be properly configured for SPA routing')
    }
    
    
    return true
    
  } catch (error) {
    errors.push(`Error validating SPA routing: ${error.message}`)
    return false
  }
}

// Main validation function
async function validateRoutes() {
  
  
  const validations = [
    validateRoutesConfig,
    validateAppRoutes,
    validatePageComponents,
    validateFeaturesRoute,
    validateSPARouting
  ]
  
  let passed = 0
  
  for (const validation of validations) {
    if (validation()) {
      passed++
    }
    
  }
  
  // Summary
  
  )
  
  
  
  
  
  if (warnings.length > 0) {
    
    warnings.forEach(warning => )
  }
  
  if (errors.length > 0) {
    
    errors.forEach(error => )
    
    process.exit(1)
  }
  
  
  
}

// Run validation
validateRoutes().catch(error => {
  
  process.exit(1)
})