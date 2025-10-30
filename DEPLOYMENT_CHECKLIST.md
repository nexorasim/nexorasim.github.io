# NexoraSIM Deployment Checklist

## Pre-Deployment Checks (Local)

### 1. Repository Configuration
- [ ] Verify GitHub Pages is enabled in repository settings
- [ ] Confirm source branch is set to `gh-pages` or `main/docs`
- [ ] Check custom domain configuration (if applicable)
- [ ] Verify CNAME file exists (if using custom domain)

### 2. Build Verification
- [ ] Run `npm ci` to install dependencies
- [ ] Run `npm run build` successfully
- [ ] Verify `dist/` directory contains all files
- [ ] Check `dist/index.html` exists and is valid

### 3. Quality Checks
- [ ] Run `npm run error:check` - all systems validated
- [ ] Run `npm run validate:all` - all operations validated
- [ ] Run `npm run health:check` - 100% health status
- [ ] Run `./scripts/site_health_check.sh` - complete health check

### 4. Static File Verification
- [ ] No 404 errors on assets
- [ ] All images load correctly
- [ ] CSS and JS files are minified
- [ ] robots.txt present
- [ ] sitemap.xml present

### 5. SEO and Meta Tags
- [ ] Valid Open Graph tags
- [ ] Proper title and description
- [ ] Canonical URLs set correctly
- [ ] Favicon present

### 6. Accessibility
- [ ] Run Lighthouse audit (target: 90+ performance, 90+ accessibility)
- [ ] Test with screen reader
- [ ] Verify keyboard navigation
- [ ] Check color contrast ratios

### 7. Security
- [ ] HTTPS enabled
- [ ] Security headers configured (if using Cloudflare)
- [ ] No exposed API keys or secrets
- [ ] CSP headers set (if applicable)

## Deployment Process

### Option 1: Manual Deployment
```bash
# Run health check
./scripts/site_health_check.sh

# Deploy to GitHub Pages
npm run deploy
```

### Option 2: Automated Deployment (GitHub Actions)
```bash
# Push to main branch
git add .
git commit -m "Deploy site"
git push origin main

# GitHub Actions will automatically:
# 1. Run all validation checks
# 2. Build the site
# 3. Deploy to gh-pages branch
```

### Option 3: Complete Pipeline
```bash
# Run complete deployment pipeline
./deploy.sh all

# Then deploy
./deploy.sh deploy
```

## Post-Deployment Verification

### 1. Site Accessibility
- [ ] Visit https://nexorasim.github.io
- [ ] Verify homepage loads correctly
- [ ] Test all navigation links
- [ ] Check mobile responsiveness

### 2. Functionality Tests
- [ ] Test language switcher (if applicable)
- [ ] Verify API documentation links
- [ ] Test all interactive elements
- [ ] Check console for errors

### 3. Performance
- [ ] Run Lighthouse audit on live site
- [ ] Check page load times
- [ ] Verify asset caching
- [ ] Test on slow connections

### 4. Monitoring Setup
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Configure error tracking (Sentry)
- [ ] Set up analytics (if applicable)
- [ ] Create alerts for downtime

## Troubleshooting Common Issues

### 404 Page After Deploy
1. Check Pages source in Settings > Pages
2. Verify gh-pages branch exists and has content
3. Confirm base URL in vite.config.js
4. Clear browser cache

### Assets Not Loading
1. Check asset paths (relative vs absolute)
2. Verify base URL configuration
3. Check browser console for 404s
4. Ensure assets are in dist/ directory

### Build Fails in CI
1. Check GitHub Actions logs
2. Verify Node version matches local
3. Run `npm ci` locally to test
4. Check for missing environment variables

### Custom Domain Issues
1. Verify DNS records point to GitHub Pages
2. Check CNAME file exists
3. Wait for TLS certificate provisioning (can take hours)
4. If using Cloudflare, set TLS to "Full (strict)"

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Run all checks
npm run test:all

# Build site
npm run build

# Deploy to GitHub Pages
npm run deploy

# Run health check
./scripts/site_health_check.sh

# Start development server
npm run dev

# Run complete pipeline
./deploy.sh all
```

## Deployment Status

- **Last Deployment**: Check GitHub Actions
- **Site URL**: https://nexorasim.github.io
- **Build Status**: Check Actions tab
- **Health Status**: Run `npm run health:check`

## Support

For issues or questions:
1. Check GitHub Actions logs
2. Review this checklist
3. Run health check script
4. Check deployment documentation

---

**Note**: Always run the health check script before deploying to production.