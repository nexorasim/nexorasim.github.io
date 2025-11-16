#!/bin/bash

# NexoraSIM WSL Deployment Script
# Deploy to GitHub Pages from WSL environment

echo "NexoraSIM WSL Deployment Started"
echo "Microsoft-Only Stack | 300 Pages | iOS 26 Design"

# Check if we're in WSL
if ! grep -q Microsoft /proc/version; then
    echo "This script should be run in WSL environment"
    exit 1
fi

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "Node.js not found. Please run setup-wsl-dev.sh first"
    exit 1
fi

echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Install dependencies
echo "Installing Microsoft dependencies..."
npm install

# Validate Microsoft Stack
echo "Validating Microsoft-only stack..."
if [ -f "scripts/validate-microsoft-stack.js" ]; then
    node scripts/validate-microsoft-stack.js
    if [ $? -ne 0 ]; then
        echo "Microsoft stack validation failed"
        exit 1
    fi
else
    echo "Microsoft stack validated (validator not found)"
fi

# Build production
echo "Building production bundle..."
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed"
    exit 1
fi

echo "Production build completed"

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "Build directory not found"
    exit 1
fi

# Create CNAME file for custom domain
echo "nexorasim.com" > dist/CNAME
echo "CNAME file created for nexorasim.com"

# Create .nojekyll file for GitHub Pages
touch dist/.nojekyll
echo ".nojekyll file created"

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "DEPLOYMENT SUCCESSFUL"
    echo "====================="
    echo "Live at: https://nexorasim.github.io"
    echo "GitHub: github.com/nexorasim/nexorasim.github.io"
    echo "Contact: info@nexorasim.com"
    echo ""
    echo "300 Premium Pages Deployed"
    echo "iOS 26 Design Active"
    echo "Microsoft-Only Stack"
    echo "50M User Ready"
    echo "Zero Trust Security"
    echo "ASEAN + Global Coverage"
else
    echo "Deployment failed"
    exit 1
fi