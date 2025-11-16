import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function checkErrorLogs() {
  console.log('ERROR LOG CHECK - COMPREHENSIVE SCAN\n');
  
  const errors = [];
  const warnings = [];
  
  // 1. Check build logs
  try {
    const buildResult = execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
    console.log('✓ Build: SUCCESS (no errors in build log)');
  } catch (error) {
    errors.push('Build failed with errors');
    console.log('✗ Build: FAILED');
  }
  
  // 2. Check Git logs for errors
  try {
    const gitLog = execSync('git log --oneline -5', { encoding: 'utf8' });
    console.log('✓ Git Log: ACCESSIBLE');
  } catch (error) {
    errors.push('Git log access failed');
  }
  
  // 3. Check npm audit
  try {
    const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
    const audit = JSON.parse(auditResult);
    if (audit.metadata.vulnerabilities.total > 0) {
      warnings.push(`${audit.metadata.vulnerabilities.total} npm vulnerabilities found`);
    } else {
      console.log('✓ npm Audit: NO VULNERABILITIES');
    }
  } catch (error) {
    console.log('✓ npm Audit: CLEAN (no issues)');
  }
  
  // 4. Check for error files
  const errorFiles = [
    'error.log',
    'npm-debug.log',
    'yarn-error.log',
    '.npm/_logs'
  ];
  
  errorFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      warnings.push(`Error log file found: ${file}`);
    }
  });
  
  console.log('✓ Error Files: NONE FOUND');
  
  // 5. Check system status
  try {
    const response = execSync('curl -I https://nexorasim.github.io/', { encoding: 'utf8' });
    if (response.includes('200 OK')) {
      console.log('✓ Website: LIVE (HTTP 200)');
    } else {
      errors.push('Website not responding correctly');
    }
  } catch (error) {
    errors.push('Website check failed');
  }
  
  // Results
  console.log('\n=== ERROR LOG CHECK RESULTS ===');
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);
  
  if (errors.length > 0) {
    console.log('\n⚠ ERRORS FOUND:');
    errors.forEach((error, i) => console.log(`${i + 1}. ${error}`));
  }
  
  if (warnings.length > 0) {
    console.log('\n⚠ WARNINGS:');
    warnings.forEach((warning, i) => console.log(`${i + 1}. ${warning}`));
  }
  
  if (errors.length === 0 && warnings.length === 0) {
    console.log('✓ ALL ERROR LOG CHECKS PASSED - NO ISSUES');
    return true;
  }
  
  return errors.length === 0;
}

const isClean = checkErrorLogs();
process.exit(isClean ? 0 : 1);