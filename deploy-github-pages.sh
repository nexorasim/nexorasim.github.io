#!/bin/bash
set -e

echo "Deploying NexoraSIM to GitHub Pages..."

# Configure Git
export HOME=/tmp
git config --global user.name "NexoraSIM Developer"
git config --global user.email "developer@nexorasim.com"

# Build application
echo "Building application..."
cd nexorasim-developer-portal
npm install
npm run build
cd ..

# Prepare deployment
echo "Preparing GitHub Pages deployment..."
cp -r nexorasim-developer-portal/dist/* .
cp README.md index.html 2>/dev/null || echo "README copied as fallback"

# Create index.html if not exists
if [ ! -f "index.html" ]; then
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexoraSIM™ - eSIM Profile Management Platform</title>
    <meta name="description" content="Complete eSIM Profile Management System with GSMA SAS-SM v3.4.2 Compliance">
</head>
<body>
    <div id="app">
        <h1>NexoraSIM™ Developer Portal</h1>
        <p>Complete eSIM Profile Management System with GSMA SAS-SM v3.4.2 Compliance</p>
        <a href="nexorasim-developer-portal/">Launch Developer Portal</a>
    </div>
</body>
</html>
EOF
fi

# Stage and commit
git add .
git commit -m "Deploy NexoraSIM to GitHub Pages - $(date)"

# Push to main branch
git push origin main

echo "NexoraSIM deployed to GitHub Pages successfully!"
echo "Visit: https://nexorasim.github.io"