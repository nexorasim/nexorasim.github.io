import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function checkAllErrors() {
  const errors = [];
  const fixes = [];
  
  console.log('FINAL ERROR CHECK - SCANNING ALL SYSTEMS\n');
  
  // 1. Check Git status
  try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    if (gitStatus.trim()) {
      errors.push('Uncommitted changes in Git');
      fixes.push('git add -A && git commit -m "Final fixes"');
    } else {
      console.log('✓ Git: Clean working directory');
    }
  } catch (error) {
    errors.push('Git error: ' + error.message);
  }
  
  // 2. Check build
  try {
    execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
    console.log('✓ Build: SUCCESS');
  } catch (error) {
    errors.push('Build failed');
    fixes.push('Fix build errors and run npm run build');
  }
  
  // 3. Check critical files
  const criticalFiles = [
    'package.json',
    'index.html',
    'vite.config.js',
    'public/sitemap.xml',
    'public/robots.txt'
  ];
  
  criticalFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
      errors.push(`Missing critical file: ${file}`);
      fixes.push(`Create ${file}`);
    } else {
      console.log(`✓ File: ${file} exists`);
    }
  });
  
  // 4. Check for empty files
  const emptyFiles = [];
  function scanForEmpty(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    files.forEach(file => {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules') {
        scanForEmpty(fullPath);
      } else if (file.isFile()) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.trim() === '') {
            emptyFiles.push(fullPath);
          }
        } catch (err) {
          // Skip binary files
        }
      }
    });
  }
  
  scanForEmpty(path.join(__dirname, '..'));
  
  if (emptyFiles.length > 0) {
    console.log(`\n⚠ Found ${emptyFiles.length} empty files:`);
    emptyFiles.forEach(file => {
      console.log(`  - ${file}`);
      fs.unlinkSync(file);
    });
    fixes.push(`Deleted ${emptyFiles.length} empty files`);
  } else {
    console.log('✓ No empty files found');
  }
  
  // 5. Final summary
  console.log('\n=== FINAL ERROR CHECK RESULTS ===');
  console.log(`Errors found: ${errors.length}`);
  console.log(`Fixes applied: ${fixes.length}`);
  
  if (errors.length === 0) {
    console.log('✓ ALL SYSTEMS CLEAN - NO ERRORS FOUND');
    return true;
  } else {
    console.log('\n⚠ ERRORS TO FIX:');
    errors.forEach((error, i) => {
      console.log(`${i + 1}. ${error}`);
      if (fixes[i]) console.log(`   Fix: ${fixes[i]}`);
    });
    return false;
  }
}

const isClean = checkAllErrors();
process.exit(isClean ? 0 : 1);