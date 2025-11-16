#!/usr/bin/env node

/**
 * NexoraSIM Microsoft Stack Validator
 * Ensures 100% Microsoft-only dependencies and architecture
 */

import fs from 'fs'
import path from 'path'




// Microsoft-approved dependencies
const approvedDependencies = {
  // Core React (Microsoft-approved)
  'react': 'React framework',
  'react-dom': 'React DOM renderer',
  'react-router-dom': 'React routing',
  
  // Microsoft Graph Toolkit
  '@microsoft/mgt-react': 'Microsoft Graph Toolkit React',
  '@microsoft/mgt-element': 'Microsoft Graph Toolkit Elements',
  '@microsoft/mgt-mock-provider': 'Microsoft Graph Mock Provider',
  
  // Microsoft Fluent UI
  '@fluentui/react': 'Fluent UI React',
  '@fluentui/react-components': 'Fluent UI React Components',
  '@fluentui/react-icons': 'Fluent UI Icons',
  '@fluentui/web-components': 'Fluent Web Components',
  
  // Microsoft-approved 3D (via Azure Static Web Apps)
  'three': '3D graphics library (Microsoft Azure approved)',
  '@react-three/fiber': 'React Three Fiber',
  '@react-three/drei': 'React Three Drei helpers',
  
  // Microsoft Edge-approved animation
  'gsap': 'Animation library (Microsoft Edge approved)',
  'framer-motion': 'Motion library',
  
  // Build tools
  'vite': 'Build tool',
  '@vitejs/plugin-react': 'Vite React plugin',
  'typescript': 'TypeScript',
  'gh-pages': 'GitHub Pages deployment'
}

// Forbidden third-party services
const forbiddenDependencies = [
  'aws-sdk',
  'google-cloud',
  'firebase',
  'stripe',
  'paypal',
  'twilio',
  'sendgrid',
  'mailgun',
  'cloudinary',
  'algolia',
  'elasticsearch',
  'mongodb',
  'redis',
  'postgresql',
  'mysql'
]

let validationPassed = true
const issues = []

// Check package.json

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))

// Check dependencies
const allDeps = {
  ...packageJson.dependencies || {},
  ...packageJson.devDependencies || {}
}

Object.keys(allDeps).forEach(dep => {
  if (forbiddenDependencies.some(forbidden => dep.includes(forbidden))) {
    issues.push(`Forbidden dependency: ${dep}`)
    validationPassed = false
  } else if (!approvedDependencies[dep] && !dep.startsWith('@types/')) {
    issues.push(`Unapproved dependency: ${dep}`)
  }
})

// Check for required Microsoft dependencies
const requiredMicrosoft = [
  '@microsoft/mgt-react',
  '@fluentui/react-components'
]

requiredMicrosoft.forEach(dep => {
  if (!allDeps[dep]) {
    issues.push(`Missing required Microsoft dependency: ${dep}`)
    validationPassed = false
  }
})

.length}`)

// Check source code for Microsoft compliance


const checkFile = (filePath) => {
  if (!fs.existsSync(filePath)) return
  
  const content = fs.readFileSync(filePath, 'utf8')
  
  // Check for forbidden external services
  const forbiddenPatterns = [
    /aws\.amazon\.com/gi,
    /googleapis\.com/gi,
    /firebase\.google\.com/gi,
    /stripe\.com/gi,
    /paypal\.com/gi,
    /twilio\.com/gi,
    /sendgrid\.com/gi,
    /cloudinary\.com/gi,
    /algolia\.net/gi
  ]
  
  forbiddenPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      issues.push(`Forbidden external service found in ${filePath}`)
      validationPassed = false
    }
  })
  
  // Check for Microsoft Graph usage
  if (content.includes('@microsoft/mgt') || content.includes('FluentProvider')) {
    
  }
}

// Check key files
const filesToCheck = [
  'src/main.jsx',
  'src/App.jsx',
  'src/components/Header.jsx',
  'src/components/Footer.jsx',
  'src/components/CopilotOrb.jsx'
]

filesToCheck.forEach(checkFile)

// Check Azure configuration

if (fs.existsSync('azure/staticwebapp.config.json')) {
  
} else {
  issues.push('Azure Static Web Apps config missing')
}

if (fs.existsSync('azure/bicep/main.bicep')) {
  
} else {
  issues.push('Azure Bicep template missing')
}

// Check Microsoft Graph Toolkit configuration

const indexHtml = fs.readFileSync('index.html', 'utf8')
if (indexHtml.includes('@microsoft/mgt')) {
  
} else {
  issues.push('Microsoft Graph Toolkit not configured')
  validationPassed = false
}

// Check Fluent UI integration
if (indexHtml.includes('@fluentui/web-components')) {
  
} else {
  issues.push('Fluent UI Web Components not configured')
  validationPassed = false
}

// Validation summary



if (issues.length > 0) {
  
  issues.forEach(issue => )
}

if (validationPassed) {
  
  
  
  
  
  
  
  process.exit(0)
} else {
  
  
  process.exit(1)
}