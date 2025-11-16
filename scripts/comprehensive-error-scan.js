#!/usr/bin/env node

/**
 * NexoraSIM Comprehensive Error Scan - 1 to 100%
 * Complete system validation and error detection
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class ComprehensiveErrorScanner {
  constructor() {
    this.errors = []
    this.warnings = []
    this.fixes = []
    this.progress = 0
    this.totalChecks = 20
  }

  updateProgress(step, message) {
    this.progress = Math.round((step / this.totalChecks) * 100)
      }

  // 1. File Structure Validation (5%)
  validateFileStructure() {
    this.updateProgress(1, 'Validating file structure...')
    
    const requiredFiles = [
      'package.json',
      'index.html',
      'src/main.jsx',
      'src/NexoraCoreApp.tsx',
      'public/404.html',
      'public/manifest.json',
      'public/sw.js'
    ]

    requiredFiles.forEach(file => {
      const filePath = path.join(__dirname, '..', file)
      if (!fs.existsSync(filePath)) {
        this.errors.push(`Missing required file: ${file}`)
      }
    })
  }

  // 2. Package Dependencies Check (10%)
  validateDependencies() {
    this.updateProgress(2, 'Checking package dependencies...')
    
    try {
      const packagePath = path.join(__dirname, '..', 'package.json')
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
      
      const requiredDeps = [
        'react',
        'react-dom',
        'react-router-dom',
        '@fluentui/react-components',
        'three',
        '@react-three/fiber',
        'gsap'
      ]

      requiredDeps.forEach(dep => {
        if (!packageJson.dependencies[dep]) {
          this.errors.push(`Missing dependency: ${dep}`)
        }
      })
    } catch (error) {
      this.errors.push(`Package.json validation failed: ${error.message}`)
    }
  }

  // 3. TypeScript Configuration (15%)
  validateTypeScript() {
    this.updateProgress(3, 'Validating TypeScript configuration...')
    
    const tsConfigPath = path.join(__dirname, '..', 'tsconfig.json')
    if (!fs.existsSync(tsConfigPath)) {
      this.errors.push('Missing tsconfig.json')
      return
    }

    try {
      const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'))
      if (!tsConfig.compilerOptions?.strict) {
        this.warnings.push('TypeScript strict mode not enabled')
      }
    } catch (error) {
      this.errors.push(`TypeScript config invalid: ${error.message}`)
    }
  }

  // 4. Component Import Validation (20%)
  validateComponentImports() {
    this.updateProgress(4, 'Validating component imports...')
    
    const srcDir = path.join(__dirname, '..', 'src')
    this.scanDirectoryForImportErrors(srcDir)
  }

  scanDirectoryForImportErrors(dir) {
    const files = fs.readdirSync(dir)
    
    files.forEach(file => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      
      if (stat.isDirectory()) {
        this.scanDirectoryForImportErrors(filePath)
      } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
        this.validateFileImports(filePath)
      }
    })
  }

  validateFileImports(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      const lines = content.split('\n')
      
      lines.forEach((line, index) => {
        if (line.includes('import') && line.includes('from')) {
          // Check for relative import issues
          if (line.includes('../') && line.split('../').length > 4) {
            this.warnings.push(`Deep relative import in ${filePath}:${index + 1}`)
          }
          
          // Check for missing file extensions in relative imports
          if (line.includes('./') && !line.includes('.js') && !line.includes('.ts') && !line.includes('.jsx') && !line.includes('.tsx')) {
            const importPath = line.match(/from ['"](.+)['"]/)?.[1]
            if (importPath && importPath.startsWith('.')) {
              this.warnings.push(`Missing file extension in ${filePath}:${index + 1}`)
            }
          }
        }
      })
    } catch (error) {
      this.errors.push(`Failed to read ${filePath}: ${error.message}`)
    }
  }

  // 5. Route Configuration Check (25%)
  validateRoutes() {
    this.updateProgress(5, 'Validating route configuration...')
    
    const routesPath = path.join(__dirname, '..', 'src', 'data', 'routes.js')
    const appPath = path.join(__dirname, '..', 'src', 'NexoraCoreApp.tsx')
    
    if (!fs.existsSync(routesPath)) {
      this.errors.push('Routes configuration file missing')
      return
    }

    if (!fs.existsSync(appPath)) {
      this.errors.push('Main app file missing')
      return
    }

    try {
      const appContent = fs.readFileSync(appPath, 'utf8')
      const essentialRoutes = ['/features', '/api', '/enterprise', '/operators/mpt']
      
      essentialRoutes.forEach(route => {
        if (!appContent.includes(`path="${route}"`)) {
          this.errors.push(`Missing route definition: ${route}`)
        }
      })
    } catch (error) {
      this.errors.push(`Route validation failed: ${error.message}`)
    }
  }

  // 6. Build Configuration Check (30%)
  validateBuildConfig() {
    this.updateProgress(6, 'Validating build configuration...')
    
    const viteConfigPath = path.join(__dirname, '..', 'vite.config.js')
    if (!fs.existsSync(viteConfigPath)) {
      this.errors.push('Vite configuration missing')
      return
    }

    try {
      const viteConfig = fs.readFileSync(viteConfigPath, 'utf8')
      if (!viteConfig.includes("base: './'")) {
        this.errors.push('Vite base path not configured for GitHub Pages')
      }
    } catch (error) {
      this.errors.push(`Build config validation failed: ${error.message}`)
    }
  }

  // 7. Asset Validation (35%)
  validateAssets() {
    this.updateProgress(7, 'Validating assets and public files...')
    
    const publicDir = path.join(__dirname, '..', 'public')
    const requiredAssets = ['404.html', 'manifest.json', 'sw.js', 'robots.txt', 'sitemap.xml']
    
    requiredAssets.forEach(asset => {
      const assetPath = path.join(publicDir, asset)
      if (!fs.existsSync(assetPath)) {
        this.errors.push(`Missing public asset: ${asset}`)
      }
    })
  }

  // 8. Security Headers Check (40%)
  validateSecurityHeaders() {
    this.updateProgress(8, 'Validating security headers...')
    
    const headersPath = path.join(__dirname, '..', 'public', '_headers')
    if (!fs.existsSync(headersPath)) {
      this.errors.push('Security headers file missing')
      return
    }

    try {
      const headers = fs.readFileSync(headersPath, 'utf8')
      const requiredHeaders = [
        'Content-Security-Policy',
        'X-Frame-Options',
        'X-Content-Type-Options',
        'Strict-Transport-Security'
      ]

      requiredHeaders.forEach(header => {
        if (!headers.includes(header)) {
          this.errors.push(`Missing security header: ${header}`)
        }
      })
    } catch (error) {
      this.errors.push(`Security headers validation failed: ${error.message}`)
    }
  }

  // 9. Component Syntax Check (45%)
  validateComponentSyntax() {
    this.updateProgress(9, 'Validating component syntax...')
    
    const componentsDir = path.join(__dirname, '..', 'src', 'components')
    if (fs.existsSync(componentsDir)) {
      this.validateDirectorySyntax(componentsDir)
    }
    
    const pagesDir = path.join(__dirname, '..', 'src', 'pages')
    if (fs.existsSync(pagesDir)) {
      this.validateDirectorySyntax(pagesDir)
    }
  }

  validateDirectorySyntax(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true })
    
    files.forEach(file => {
      if (file.isDirectory()) {
        this.validateDirectorySyntax(path.join(dir, file.name))
      } else if (file.name.endsWith('.tsx') || file.name.endsWith('.jsx')) {
        this.validateFileSyntax(path.join(dir, file.name))
      }
    })
  }

  validateFileSyntax(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      
      // Check for common syntax issues
      if (!content.includes('export default')) {
        this.warnings.push(`No default export in ${filePath}`)
      }
      
      if (content.includes('React') && !content.includes("import React")) {
        this.warnings.push(`React used but not imported in ${filePath}`)
      }
      
      // Check for unclosed JSX tags
      const openTags = (content.match(/<[^/][^>]*>/g) || []).length
      const closeTags = (content.match(/<\/[^>]*>/g) || []).length
      const selfClosing = (content.match(/<[^>]*\/>/g) || []).length
      
      if (openTags !== closeTags + selfClosing) {
        this.warnings.push(`Potential JSX tag mismatch in ${filePath}`)
      }
    } catch (error) {
      this.errors.push(`Syntax validation failed for ${filePath}: ${error.message}`)
    }
  }

  // 10. Style Validation (50%)
  validateStyles() {
    this.updateProgress(10, 'Validating styles and CSS...')
    
    const stylesDir = path.join(__dirname, '..', 'src', 'styles')
    if (fs.existsSync(stylesDir)) {
      const styleFiles = fs.readdirSync(stylesDir)
      styleFiles.forEach(file => {
        if (file.endsWith('.css')) {
          this.validateCSSFile(path.join(stylesDir, file))
        }
      })
    }
  }

  validateCSSFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      
      // Check for CSS syntax issues
      const openBraces = (content.match(/{/g) || []).length
      const closeBraces = (content.match(/}/g) || []).length
      
      if (openBraces !== closeBraces) {
        this.errors.push(`CSS brace mismatch in ${filePath}`)
      }
      
      // Check for required CSS variables
      if (filePath.includes('nexoracore.css')) {
        const requiredVars = ['--pearl', '--black', '--accent', '--graphite']
        requiredVars.forEach(cssVar => {
          if (!content.includes(cssVar)) {
            this.errors.push(`Missing CSS variable ${cssVar} in ${filePath}`)
          }
        })
      }
    } catch (error) {
      this.errors.push(`CSS validation failed for ${filePath}: ${error.message}`)
    }
  }

  // 11. Environment Configuration (55%)
  validateEnvironment() {
    this.updateProgress(11, 'Validating environment configuration...')
    
    const envFiles = ['.env.example', '.env.local', '.env.production']
    let hasEnvConfig = false
    
    envFiles.forEach(envFile => {
      const envPath = path.join(__dirname, '..', envFile)
      if (fs.existsSync(envPath)) {
        hasEnvConfig = true
      }
    })
    
    if (!hasEnvConfig) {
      this.warnings.push('No environment configuration files found')
    }
  }

  // 12. GitHub Actions Validation (60%)
  validateGitHubActions() {
    this.updateProgress(12, 'Validating GitHub Actions workflow...')
    
    const workflowsDir = path.join(__dirname, '..', '.github', 'workflows')
    if (!fs.existsSync(workflowsDir)) {
      this.warnings.push('No GitHub Actions workflows found')
      return
    }

    const workflows = fs.readdirSync(workflowsDir)
    if (workflows.length === 0) {
      this.warnings.push('No workflow files in .github/workflows')
    }

    workflows.forEach(workflow => {
      if (workflow.endsWith('.yml') || workflow.endsWith('.yaml')) {
        this.validateWorkflowFile(path.join(workflowsDir, workflow))
      }
    })
  }

  validateWorkflowFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      
      if (!content.includes('npm install') && !content.includes('npm ci')) {
        this.warnings.push(`Workflow ${filePath} missing dependency installation`)
      }
      
      if (!content.includes('npm run build')) {
        this.warnings.push(`Workflow ${filePath} missing build step`)
      }
    } catch (error) {
      this.errors.push(`Workflow validation failed for ${filePath}: ${error.message}`)
    }
  }

  // 13. Accessibility Check (65%)
  validateAccessibility() {
    this.updateProgress(13, 'Validating accessibility compliance...')
    
    const indexPath = path.join(__dirname, '..', 'index.html')
    if (fs.existsSync(indexPath)) {
      try {
        const content = fs.readFileSync(indexPath, 'utf8')
        
        if (!content.includes('lang=')) {
          this.warnings.push('HTML lang attribute missing')
        }
        
        if (!content.includes('alt=') && content.includes('<img')) {
          this.warnings.push('Images may be missing alt attributes')
        }
      } catch (error) {
        this.errors.push(`Accessibility validation failed: ${error.message}`)
      }
    }
  }

  // 14. SEO Validation (70%)
  validateSEO() {
    this.updateProgress(14, 'Validating SEO configuration...')
    
    const indexPath = path.join(__dirname, '..', 'index.html')
    if (fs.existsSync(indexPath)) {
      try {
        const content = fs.readFileSync(indexPath, 'utf8')
        
        const seoElements = [
          '<title>',
          'meta name="description"',
          'meta property="og:title"',
          'meta property="og:description"'
        ]

        seoElements.forEach(element => {
          if (!content.includes(element)) {
            this.warnings.push(`Missing SEO element: ${element}`)
          }
        })
      } catch (error) {
        this.errors.push(`SEO validation failed: ${error.message}`)
      }
    }
  }

  // 15. Performance Check (75%)
  validatePerformance() {
    this.updateProgress(15, 'Validating performance configuration...')
    
    const distDir = path.join(__dirname, '..', 'dist')
    if (fs.existsSync(distDir)) {
      try {
        const stats = this.calculateBundleSize(distDir)
        if (stats.totalSize > 5 * 1024 * 1024) { // 5MB
          this.warnings.push(`Bundle size (${Math.round(stats.totalSize / 1024 / 1024)}MB) exceeds recommended 5MB`)
        }
      } catch (error) {
        this.warnings.push(`Performance validation failed: ${error.message}`)
      }
    } else {
      this.warnings.push('No build output found - run npm run build first')
    }
  }

  calculateBundleSize(dir) {
    let totalSize = 0
    const files = fs.readdirSync(dir)
    
    files.forEach(file => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      
      if (stat.isDirectory()) {
        totalSize += this.calculateBundleSize(filePath).totalSize
      } else {
        totalSize += stat.size
      }
    })
    
    return { totalSize }
  }

  // 16. Security Scan (80%)
  validateSecurity() {
    this.updateProgress(16, 'Performing security scan...')
    
    // Check for common security issues
    this.scanForSecurityIssues()
  }

  scanForSecurityIssues() {
    const srcDir = path.join(__dirname, '..', 'src')
    this.scanDirectoryForSecurity(srcDir)
  }

  scanDirectoryForSecurity(dir) {
    const files = fs.readdirSync(dir)
    
    files.forEach(file => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      
      if (stat.isDirectory()) {
        this.scanDirectoryForSecurity(filePath)
      } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
        this.scanFileForSecurity(filePath)
      }
    })
  }

  scanFileForSecurity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      
      // Check for potential security issues
      const securityPatterns = [
        { pattern: /eval\s*\(/, message: 'Use of /* eval removed for security */ detected' },
        { pattern: /innerHTML\s*=/, message: 'Use of innerHTML detected' },
        { pattern: /document\.write/, message: 'Use of document.write detected' },
        { pattern: /dangerouslySetInnerHTML/, message: 'Use of dangerouslySetInnerHTML detected' }
      ]

      securityPatterns.forEach(({ pattern, message }) => {
        if (pattern.test(content)) {
          this.warnings.push(`${message} in ${filePath}`)
        }
      })
    } catch (error) {
      this.errors.push(`Security scan failed for ${filePath}: ${error.message}`)
    }
  }

  // 17. Emoji Detection (85%)
  validateEmojiPolicy() {
    this.updateProgress(17, 'Enforcing zero emoji policy...')
    
    const rootDir = path.join(__dirname, '..')
    this.scanForEmojis(rootDir)
  }

  scanForEmojis(dir) {
    const files = fs.readdirSync(dir)
    
    files.forEach(file => {
      if (file.startsWith('.') || file === 'node_modules' || file === 'dist') {
        return
      }
      
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      
      if (stat.isDirectory()) {
        this.scanForEmojis(filePath)
      } else if (file.endsWith('.md') || file.endsWith('.txt') || file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
        this.scanFileForEmojis(filePath)
      }
    })
  }

  scanFileForEmojis(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      
      // Unicode emoji ranges
      const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu
      
      const matches = content.match(emojiRegex)
      if (matches) {
        this.errors.push(`Emoji characters found in ${filePath}: ${matches.join(', ')}`)
      }
    } catch (error) {
      this.warnings.push(`Emoji scan failed for ${filePath}: ${error.message}`)
    }
  }

  // 18. Link Validation (90%)
  validateLinks() {
    this.updateProgress(18, 'Validating internal links...')
    
    const srcDir = path.join(__dirname, '..', 'src')
    this.scanForBrokenLinks(srcDir)
  }

  scanForBrokenLinks(dir) {
    const files = fs.readdirSync(dir)
    
    files.forEach(file => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      
      if (stat.isDirectory()) {
        this.scanForBrokenLinks(filePath)
      } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        this.validateFileLinks(filePath)
      }
    })
  }

  validateFileLinks(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      
      // Find Link components with 'to' props
      const linkMatches = content.match(/to=["']([^"']+)["']/g)
      if (linkMatches) {
        linkMatches.forEach(match => {
          const path = match.match(/to=["']([^"']+)["']/)[1]
          if (path.startsWith('/') && !this.isValidRoute(path)) {
            this.warnings.push(`Potentially broken internal link: ${path} in ${filePath}`)
          }
        })
      }
    } catch (error) {
      this.warnings.push(`Link validation failed for ${filePath}: ${error.message}`)
    }
  }

  isValidRoute(route) {
    const validRoutes = [
      '/', '/features', '/api', '/enterprise', '/architecture', '/technology',
      '/operators/mpt', '/tech/esim-architecture', '/industries/telecommunications'
    ]
    return validRoutes.includes(route)
  }

  // 19. Documentation Check (95%)
  validateDocumentation() {
    this.updateProgress(19, 'Validating documentation...')
    
    const requiredDocs = ['README.md', 'package.json']
    
    requiredDocs.forEach(doc => {
      const docPath = path.join(__dirname, '..', doc)
      if (!fs.existsSync(docPath)) {
        this.errors.push(`Missing documentation: ${doc}`)
      }
    })
  }

  // 20. Final Validation (100%)
  performFinalValidation() {
    this.updateProgress(20, 'Performing final validation...')
    
    // Check if critical errors would prevent deployment
    const criticalErrors = this.errors.filter(error => 
      error.includes('Missing required file') ||
      error.includes('Missing dependency') ||
      error.includes('Route definition')
    )

    if (criticalErrors.length > 0) {
      this.errors.push('CRITICAL: Deployment-blocking errors detected')
    }
  }

  // Generate fixes for common issues
  generateFixes() {
    this.errors.forEach(error => {
      if (error.includes('Missing required file: package.json')) {
        this.fixes.push('Run: npm init -y to create package.json')
      }
      if (error.includes('Missing dependency:')) {
        const dep = error.split('Missing dependency: ')[1]
        this.fixes.push(`Run: npm install ${dep}`)
      }
      if (error.includes('Missing route definition:')) {
        const route = error.split('Missing route definition: ')[1]
        this.fixes.push(`Add route ${route} to NexoraCoreApp.tsx`)
      }
    })

    this.warnings.forEach(warning => {
      if (warning.includes('TypeScript strict mode not enabled')) {
        this.fixes.push('Enable strict mode in tsconfig.json')
      }
      if (warning.includes('Bundle size') && warning.includes('exceeds')) {
        this.fixes.push('Optimize bundle size with code splitting and lazy loading')
      }
    })
  }

  // Run complete scan
  async runCompleteScan() {
        )

    this.validateFileStructure()
    this.validateDependencies()
    this.validateTypeScript()
    this.validateComponentImports()
    this.validateRoutes()
    this.validateBuildConfig()
    this.validateAssets()
    this.validateSecurityHeaders()
    this.validateComponentSyntax()
    this.validateStyles()
    this.validateEnvironment()
    this.validateGitHubActions()
    this.validateAccessibility()
    this.validateSEO()
    this.validatePerformance()
    this.validateSecurity()
    this.validateEmojiPolicy()
    this.validateLinks()
    this.validateDocumentation()
    this.performFinalValidation()

    this.generateFixes()

    // Display results
        )
                
    if (this.errors.length > 0) {
            this.errors.forEach((error, index) => {
              })
    }

    if (this.warnings.length > 0) {
            this.warnings.forEach((warning, index) => {
              })
    }

    if (this.fixes.length > 0) {
            this.fixes.forEach((fix, index) => {
              })
    }

    // Final status
        )
    
    if (this.errors.length === 0) {
          } else {
          }

    if (this.warnings.length === 0) {
          } else {
          }

        
    return {
      errors: this.errors.length,
      warnings: this.warnings.length,
      fixes: this.fixes.length,
      status: this.errors.length === 0 ? 'READY' : 'NEEDS_FIXES'
    }
  }
}

// Run scan if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const scanner = new ComprehensiveErrorScanner()
  scanner.runCompleteScan().then(result => {
    process.exit(result.errors > 0 ? 1 : 0)
  }).catch(error => {
        process.exit(1)
  })
}

export { ComprehensiveErrorScanner }