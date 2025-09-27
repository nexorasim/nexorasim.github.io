# NexoraSIM™ Deployment Guide

## GitHub Pages Deployment

### 1. Prepare Repository
```bash
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io
```

### 2. Build Application
```bash
cd nexorasim-developer-portal
npm install
npm run build
```

### 3. Deploy to GitHub Pages
```bash
# Create gh-pages branch
git checkout -b gh-pages

# Copy build files
cp -r dist/* .

# Commit and push
git add .
git commit -m "Deploy NexoraSIM to GitHub Pages"
git push origin gh-pages
```

## Vercel Deployment

### 1. Connect Repository
- Login to Vercel dashboard
- Import GitHub repository: `nexorasim/nexorasim.github.io`

### 2. Configure Build Settings
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Environment Variables
```
VUE_APP_API_BASE_URL=https://api.nexorasim.com
COMPLIANCE_LEVEL=SAS-SM_v3.4.2
```

## Custom Domain Setup
```bash
# Add CNAME record
nexorasim.com -> nexorasim.github.io
```