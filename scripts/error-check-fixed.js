#!/usr/bin/env node

// NexoraSIM Error Check System
const fs = require('fs');
const path = require('path');

class ErrorChecker {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.checks = [];
  }

  // Check for syntax errors in JS files
  checkJSSyntax() {
    const jsFiles = this.findFiles('.', '.js');
    
    jsFiles.forEach(file => {
      if (file.includes('node_modules')) return;
      
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Basic syntax checks
        const openBraces = (content.match(/{/g) || []).length;
        const closeBraces = (content.match(/}/g) || []).length;
        
        if (openBraces !== closeBraces) {
          this.errors.push({
            file,
            type: 'Syntax Error',
            message: 'Mismatched braces',
            severity: 'high'
          });
        }
        
        // Check for incomplete template literals
        const backticks = (content.match(/`/g) || []).length;
        if (backticks % 2 !== 0) {
          this.errors.push({
            file,
            type: 'Syntax Error',
            message: 'Incomplete template literal',
            severity: 'high'
          });
        }
        
        this.checks.push({
          file,
          type: 'JS Syntax',
          status: 'passed'
        });
        
      } catch (error) {
        this.errors.push({
          file,
          type: 'File Error',
          message: error.message,
          severity: 'critical'
        });
      }
    });
  }

  // Check for missing dependencies
  checkDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check if node_modules exists
      if (!fs.existsSync('./node_modules')) {
        this.errors.push({
          file: 'package.json',
          type: 'Dependency Error',
          message: 'node_modules directory missing - run npm install',
          severity: 'critical'
        });
      }
      
      // Check for common missing dependencies
      const requiredDeps = ['react', 'react-dom', 'vite'];
      requiredDeps.forEach(dep => {
        if (!dependencies[dep]) {
          this.warnings.push({
            file: 'package.json',
            type: 'Missing Dependency',
            message: `${dep} not found in dependencies`,
            severity: 'medium'
          });
        }
      });
      
      this.checks.push({
        file: 'package.json',
        type: 'Dependencies',
        status: 'checked'
      });
      
    } catch (error) {
      this.errors.push({
        file: 'package.json',
        type: 'File Error',
        message: 'Cannot read package.json',
        severity: 'critical'
      });
    }
  }

  // Check build configuration
  checkBuildConfig() {
    const configFiles = ['vite.config.js', 'tsconfig.json', '.eslintrc.json'];
    
    configFiles.forEach(configFile => {
      if (fs.existsSync(configFile)) {
        try {
          const content = fs.readFileSync(configFile, 'utf8');
          
          if (configFile.endsWith('.json')) {
            JSON.parse(content); // Validate JSON
          }
          
          this.checks.push({
            file: configFile,
            type: 'Config',
            status: 'valid'
          });
          
        } catch (error) {
          this.errors.push({
            file: configFile,
            type: 'Config Error',
            message: `Invalid ${configFile}: ${error.message}`,
            severity: 'high'
          });
        }
      }
    });
  }

  // Check for broken imports
  checkImports() {
    const jsFiles = this.findFiles('./src', '.js');
    const jsxFiles = this.findFiles('./src', '.jsx');
    const tsFiles = this.findFiles('./src', '.ts');
    const tsxFiles = this.findFiles('./src', '.tsx');
    
    [...jsFiles, ...jsxFiles, ...tsFiles, ...tsxFiles].forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const imports = content.match(/import.*from\s+['"`]([^'"`]+)['"`]/g) || [];
        
        imports.forEach(importLine => {
          const match = importLine.match(/from\s+['"`]([^'"`]+)['"`]/);
          if (match) {
            const importPath = match[1];
            
            // Check relative imports
            if (importPath.startsWith('./') || importPath.startsWith('../')) {
              const fullPath = path.resolve(path.dirname(file), importPath);
              const extensions = ['', '.js', '.jsx', '.ts', '.tsx'];
              
              let found = false;
              for (const ext of extensions) {
                if (fs.existsSync(fullPath + ext)) {
                  found = true;
                  break;
                }
              }
              
              if (!found) {
                this.errors.push({
                  file,
                  type: 'Import Error',
                  message: `Cannot resolve import: ${importPath}`,
                  severity: 'high'
                });
              }
            }
          }
        });
        
      } catch (error) {
        this.errors.push({
          file,
          type: 'File Error',
          message: error.message,
          severity: 'medium'
        });
      }
    });
  }

  // Utility method to find files
  findFiles(dir, extension) {
    const files = [];
    
    try {
      if (!fs.existsSync(dir)) return files;
      
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...this.findFiles(fullPath, extension));
        } else if (stat.isFile() && item.endsWith(extension)) {
          files.push(fullPath);
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return files;
  }

  // Run all error checks
  runAllChecks() {
    console.log('NexoraSIM Error Check System - Starting...\n');
    
    this.checkJSSyntax();
    this.checkDependencies();
    this.checkBuildConfig();
    this.checkImports();
    
    // Generate report
    console.log('=== ERROR CHECK RESULTS ===');
    console.log(`Total Checks: ${this.checks.length}`);
    console.log(`Errors Found: ${this.errors.length}`);
    console.log(`Warnings: ${this.warnings.length}\n`);
    
    if (this.errors.length > 0) {
      console.log('ERRORS:');
      this.errors.forEach((error, index) => {
        console.log(`${index + 1}. [${error.severity.toUpperCase()}] ${error.file}`);
        console.log(`   ${error.type}: ${error.message}\n`);
      });
    }
    
    if (this.warnings.length > 0) {
      console.log('WARNINGS:');
      this.warnings.forEach((warning, index) => {
        console.log(`${index + 1}. [${warning.severity.toUpperCase()}] ${warning.file}`);
        console.log(`   ${warning.type}: ${warning.message}\n`);
      });
    }
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ No errors or warnings found!');
      console.log('System is ready for deployment.');
    }
    
    // Save report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalChecks: this.checks.length,
        errors: this.errors.length,
        warnings: this.warnings.length
      },
      checks: this.checks,
      errors: this.errors,
      warnings: this.warnings
    };
    
    fs.writeFileSync('./ERROR_CHECK_REPORT.json', JSON.stringify(report, null, 2));
    console.log('\nDetailed report saved to: ERROR_CHECK_REPORT.json');
    
    return report;
  }
}

// Execute if run directly
if (require.main === module) {
  const checker = new ErrorChecker();
  const report = checker.runAllChecks();
  
  // Exit with error code if critical errors found
  const criticalErrors = report.errors.filter(e => e.severity === 'critical');
  process.exit(criticalErrors.length > 0 ? 1 : 0);
}

module.exports = ErrorChecker;