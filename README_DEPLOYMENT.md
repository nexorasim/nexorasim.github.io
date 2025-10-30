# NexoraSIM Deployment Guide

## Quick Start

### Automated Deployment (Recommended)
```bash
# Push to main branch - GitHub Actions will handle everything
git add .
git commit -m "Deploy update"
git push origin main
```

### Manual Deployment
```bash
# Run complete health check
npm run site:health

# Deploy to GitHub Pages
npm run deploy
```

## Complete Deployment Pipeline

### Step 1: Pre-Deployment Validation
```bash
# Install dependencies
npm ci

# Run all validation checks
npm run ci:check

# Run comprehensive health check
npm run site:health
```

### Step 2: Build and Deploy
```bash
# Build the site
npm run build

# Deploy to GitHub Pages
npm run deploy:github
```

### Step 3: Verify Deployment
Visit: https://nexorasim.github.io

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production site |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run error:check` | Run error validation |
| `npm run validate:all` | Validate all operations |
| `npm run health:check` | System health check |
| `npm run site:health` | Comprehensive site health check |
| `npm run ci:check` | Run all CI checks |
| `npm run test:all` | Run complete test suite |

## GitHub Actions Workflow

The repository includes automated CI/CD:

1. **On Push to Main**: Automatically builds and deploys
2. **On Pull Request**: Runs validation checks
3. **Manual Trigger**: Can be triggered from Actions tab

### Workflow Steps
1. Checkout code
2. Setup Node.js 20
3. Install dependencies
4. Run validation checks (error:check, validate:all, health:check)
5. Build site
6. Deploy to GitHub Pages

## Health Check Script

Run comprehensive health check:
```bash
./scripts/site_health_check.sh
```

This script performs:
- Dependency installation verification
- Build process validation
- Output directory verification
- Link checking
- HTML structure validation
- Asset verification
- Security configuration checks
- System validation

Progress is reported from 1% to 100%.

## Deployment Checklist

See [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) for complete checklist.

Quick checklist:
- [ ] All validation checks pass
- [ ] Build completes successfully
- [ ] Health check shows 100%
- [ ] No console errors
- [ ] All assets load correctly

## Configuration

### Git Configuration
```bash
git config user.name "NexoraSIM Bot"
git config user.email "bot@nexorasim.com"
```

### GitHub Pages Settings
- Source: Deploy from a branch
- Branch: gh-pages / (root)
- Custom domain: nexorasim.github.io (or custom)

## Troubleshooting

### Build Fails
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Fails
```bash
# Check GitHub Actions logs
# Verify gh-pages branch exists
# Ensure GitHub Pages is enabled in settings
```

### Site Not Updating
```bash
# Clear browser cache
# Wait 1-2 minutes for GitHub Pages to update
# Check GitHub Actions for deployment status
```

## API Keys (Provided)

Global API Key: `988c9075d2bca1789ef9ae99020afae064`
Origin CA Key: `v1.0-e69f887855af38e874a3b32a-e7fd6395ff44ffe93d28247b8965992bc3fcab9d886912a5186724dba62fc0bafe1c843b9c58f18ca4beb4b7076d3c89bcf5a5717ebcca8465dfa83b5e2525a3b6c58afc20aa2e90`

Store these securely in GitHub Secrets if needed for deployment.

## Monitoring

### Uptime Monitoring
- Set up UptimeRobot for https://nexorasim.github.io
- Configure alerts for downtime

### Error Tracking
- Consider Sentry for client-side error monitoring
- Monitor GitHub Actions for build failures

## Support

For issues:
1. Check GitHub Actions logs
2. Run health check script
3. Review DEPLOYMENT_CHECKLIST.md
4. Check console for errors

---

Last Updated: 2024
Deployment Status: Automated via GitHub Actions