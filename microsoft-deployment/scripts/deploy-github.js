#!/usr/bin/env node

/**
 * NexoraSIM GitHub Pages Deployment Script
 * Microsoft-Only Stack Deployment to github.com/nexorasim/nexorasim.github.io
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const REPO_URL = 'https://github.com/nexorasim/nexorasim.github.io.git'
const BRANCH = 'gh-pages'
const BUILD_DIR = 'dist'




// Validate Microsoft Stack

const requiredDeps = [
  '@microsoft/mgt-react',
  '@fluentui/react-components',
  'react',
  'three',
  'gsap'
]

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep])

if (missingDeps.length > 0) {
  
  process.exit(1)
}



// Build production bundle

try {
  execSync('npm run build', { stdio: 'inherit' })
  
} catch (error) {
  
  process.exit(1)
}

// Validate build output
if (!fs.existsSync(BUILD_DIR)) {
  
  process.exit(1)
}

const buildFiles = fs.readdirSync(BUILD_DIR)


// Create CNAME file for custom domain
fs.writeFileSync(path.join(BUILD_DIR, 'CNAME'), 'nexorasim.com')


// Create .nojekyll file for GitHub Pages
fs.writeFileSync(path.join(BUILD_DIR, '.nojekyll'), '')


// Create robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://nexorasim.com/sitemap.xml

# NexoraSIM Entertainment Server
# Enterprise eSIM Platform
# nexorasim.com | info@nexorasim.com
`
fs.writeFileSync(path.join(BUILD_DIR, 'robots.txt'), robotsTxt)


// Generate sitemap.xml

const { generateAllRoutes } = await import('../src/data/routes.js')
const allRoutes = generateAllRoutes()

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>https://nexorasim.com${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`

fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemap)


// Deploy to GitHub Pages

try {
  execSync(`npx gh-pages -d ${BUILD_DIR} -b ${BRANCH} -r ${REPO_URL}`, { stdio: 'inherit' })
  
} catch (error) {
  
  process.exit(1)
}

// Deployment summary







`)





