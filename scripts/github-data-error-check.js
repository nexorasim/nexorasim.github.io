import { execSync } from 'child_process';

function checkGitHubData() {
  console.log('GITHUB DATA ERROR CHECK - COMPREHENSIVE SCAN\n');
  
  const errors = [];
  const warnings = [];
  
  // 1. Repository Status
  try {
    const repoData = JSON.parse(execSync('gh repo view nexorasim/nexorasim.github.io --json name,visibility,isPrivate,hasIssuesEnabled,diskUsage', { encoding: 'utf8' }));
    console.log('✓ Repository: ACCESSIBLE');
    console.log(`  - Name: ${repoData.name}`);
    console.log(`  - Visibility: ${repoData.visibility}`);
    console.log(`  - Size: ${repoData.diskUsage} KB`);
  } catch (error) {
    errors.push('Repository access failed');
  }
  
  // 2. Git Status
  try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    if (gitStatus.trim()) {
      warnings.push(`Uncommitted changes: ${gitStatus.split('\n').length - 1} files`);
    } else {
      console.log('✓ Git Status: CLEAN');
    }
  } catch (error) {
    errors.push('Git status check failed');
  }
  
  // 3. Remote Sync
  try {
    execSync('git fetch origin', { encoding: 'utf8' });
    const behind = execSync('git rev-list HEAD..origin/main --count', { encoding: 'utf8' }).trim();
    const ahead = execSync('git rev-list origin/main..HEAD --count', { encoding: 'utf8' }).trim();
    
    if (behind > 0) {
      warnings.push(`${behind} commits behind origin`);
    }
    if (ahead > 0) {
      warnings.push(`${ahead} commits ahead of origin`);
    }
    if (behind == 0 && ahead == 0) {
      console.log('✓ Remote Sync: UP TO DATE');
    }
  } catch (error) {
    errors.push('Remote sync check failed');
  }
  
  // 4. GitHub Pages
  try {
    const response = execSync('curl -I https://nexorasim.github.io/', { encoding: 'utf8' });
    if (response.includes('200 OK')) {
      console.log('✓ GitHub Pages: LIVE');
    } else {
      errors.push('GitHub Pages not responding correctly');
    }
  } catch (error) {
    errors.push('GitHub Pages check failed');
  }
  
  // 5. Repository Files
  try {
    const fileCount = parseInt(execSync('git ls-files | find /c /v ""', { encoding: 'utf8' }).trim());
    const commitCount = parseInt(execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim());
    console.log(`✓ Repository Files: ${fileCount} files, ${commitCount} commits`);
  } catch (error) {
    errors.push('File count check failed');
  }
  
  // Results
  console.log('\n=== GITHUB DATA ERROR CHECK RESULTS ===');
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
    console.log('✓ ALL GITHUB DATA CHECKS PASSED - NO ERRORS');
    return true;
  }
  
  return errors.length === 0;
}

const isHealthy = checkGitHubData();
process.exit(isHealthy ? 0 : 1);