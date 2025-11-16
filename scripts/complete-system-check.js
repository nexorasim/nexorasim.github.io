import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function runCheck(name, command) {
  try {
    const result = execSync(command, { encoding: 'utf8', timeout: 10000 });
    console.log(`✓ ${name}: OK`);
    return true;
  } catch (error) {
    console.log(`✗ ${name}: ERROR`);
    return false;
  }
}

function checkSystem() {
  console.log('COMPLETE SYSTEM CHECK - ALL COMPONENTS\n');
  
  let passed = 0;
  let total = 0;
  
  // Development Tools
  total++; if (runCheck('Node.js', 'node --version')) passed++;
  total++; if (runCheck('npm', 'npm --version')) passed++;
  total++; if (runCheck('Git', 'git --version')) passed++;
  total++; if (runCheck('GitHub CLI', 'gh --version')) passed++;
  total++; if (runCheck('AWS CLI', 'aws --version')) passed++;
  
  // Build System
  total++; if (runCheck('npm build', 'npm run build')) passed++;
  
  // Repository Status
  total++; if (runCheck('Git status', 'git status --porcelain')) passed++;
  
  // Live Website
  total++; if (runCheck('Website', 'curl -I https://nexorasim.github.io/')) passed++;
  total++; if (runCheck('Sitemap', 'curl -I https://nexorasim.github.io/sitemap.xml')) passed++;
  total++; if (runCheck('Robots', 'curl -I https://nexorasim.github.io/robots.txt')) passed++;
  
  // File System
  const criticalFiles = ['package.json', 'index.html', 'vite.config.js'];
  criticalFiles.forEach(file => {
    total++;
    if (fs.existsSync(path.join(__dirname, '..', file))) {
      console.log(`✓ File ${file}: EXISTS`);
      passed++;
    } else {
      console.log(`✗ File ${file}: MISSING`);
    }
  });
  
  console.log(`\n=== SYSTEM CHECK RESULTS ===`);
  console.log(`Passed: ${passed}/${total} (${Math.round(passed/total*100)}%)`);
  
  if (passed === total) {
    console.log('✓ ALL SYSTEMS OPERATIONAL - 100% HEALTHY');
    return true;
  } else {
    console.log(`⚠ ${total - passed} ISSUES DETECTED`);
    return false;
  }
}

const isHealthy = checkSystem();
process.exit(isHealthy ? 0 : 1);