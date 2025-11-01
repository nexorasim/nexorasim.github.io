#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

class GitErrorChecker {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.passed = 0;
        this.total = 20;
    }

    exec(command) {
        try {
            return execSync(command, { encoding: 'utf8', stdio: 'pipe' });
        } catch (error) {
            this.errors.push(`Command failed: ${command} - ${error.message}`);
            return null;
        }
    }

    check(name, condition, errorMsg) {
        if (condition) {
            this.passed++;
            console.log(`[PASS] ${name}`);
        } else {
            this.errors.push(`[FAIL] ${name}: ${errorMsg}`);
            console.log(`[FAIL] ${name}: ${errorMsg}`);
        }
    }

    async runChecks() {
        console.log('Git/GitHub Error Check - Starting Validation...\n');

        // 1. Git Installation
        const gitVersion = this.exec('git --version');
        this.check('Git Installation', gitVersion, 'Git not installed');

        // 2. Repository Status
        const status = this.exec('git status --porcelain');
        this.check('Working Tree Clean', status !== null, 'Cannot check git status');

        // 3. Remote Configuration
        const remotes = this.exec('git remote -v');
        this.check('Remote Repository', remotes && remotes.includes('origin'), 'No origin remote configured');

        // 4. User Configuration
        const userName = this.exec('git config user.name');
        const userEmail = this.exec('git config user.email');
        this.check('Git User Config', userName && userEmail, 'Git user not configured');

        // 5. Branch Status
        const branch = this.exec('git branch --show-current');
        this.check('Current Branch', branch && branch.trim() === 'main', 'Not on main branch');

        // 6. Upstream Tracking
        const upstream = this.exec('git rev-parse --abbrev-ref @{upstream}');
        this.check('Upstream Tracking', upstream, 'No upstream branch configured');

        // 7. Repository Integrity
        const fsck = this.exec('git fsck --no-progress');
        this.check('Repository Integrity', fsck !== null, 'Repository integrity check failed');

        // 8. File Permissions
        this.check('Package.json Exists', fs.existsSync('package.json'), 'package.json missing');

        // 9. Node Modules
        this.check('Node Modules', fs.existsSync('node_modules'), 'node_modules missing');

        // 10. Build Directory
        this.check('Dist Directory', fs.existsSync('dist'), 'dist directory missing');

        // 11. GitHub Pages Files
        this.check('Index.html', fs.existsSync('index.html'), 'index.html missing');

        // 12. Sitemap
        this.check('Sitemap', fs.existsSync('public/sitemap.xml'), 'sitemap.xml missing');

        // 13. Robots.txt
        this.check('Robots.txt', fs.existsSync('public/robots.txt'), 'robots.txt missing');

        // 14. Source Directory
        this.check('Source Directory', fs.existsSync('src'), 'src directory missing');

        // 15. Core Components
        this.check('Core Components', fs.existsSync('src/core'), 'src/core directory missing');

        // 16. API Documentation
        this.check('API Docs', fs.existsSync('src/data/api-docs.js'), 'API documentation missing');

        // 17. Deployment Scripts
        this.check('Deploy Script', fs.existsSync('deploy.sh'), 'deploy.sh missing');

        // 18. Vite Config
        this.check('Vite Config', fs.existsSync('vite.config.js'), 'vite.config.js missing');

        // 19. README
        this.check('README', fs.existsSync('README.md'), 'README.md missing');

        // 20. Git Hooks
        const hooksDir = fs.existsSync('.git/hooks');
        this.check('Git Hooks Directory', hooksDir, '.git/hooks directory missing');

        this.displayResults();
    }

    displayResults() {
        console.log('\n' + '='.repeat(50));
        console.log('GIT/GITHUB ERROR CHECK RESULTS');
        console.log('='.repeat(50));
        console.log(`PASSED: ${this.passed}/${this.total}`);
        console.log(`SUCCESS RATE: ${Math.round((this.passed / this.total) * 100)}%`);
        
        if (this.errors.length > 0) {
            console.log('\nERRORS FOUND:');
            this.errors.forEach(error => console.log(`- ${error}`));
        }
        
        if (this.warnings.length > 0) {
            console.log('\nWARNINGS:');
            this.warnings.forEach(warning => console.log(`- ${warning}`));
        }

        if (this.passed === this.total) {
            console.log('\nSTATUS: ALL CHECKS PASSED - SYSTEM READY');
        } else {
            console.log('\nSTATUS: ERRORS DETECTED - REVIEW REQUIRED');
        }
    }
}

const checker = new GitErrorChecker();
checker.runChecks().catch(console.error);