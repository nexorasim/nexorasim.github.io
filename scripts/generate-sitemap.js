#!/usr/bin/env node

/**
 * NexoraSIM Sitemap Generator
 * Generates comprehensive sitemap.xml for all 300 pages
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SITE_URL = 'https://nexorasim.github.io'
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml')

// All 300 pages structure
const allPages = {
  // Core Platform Pages (25 pages)
  core: [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/entitlement-server', priority: '0.9', changefreq: 'weekly' },
    { path: '/features', priority: '0.9', changefreq: 'weekly' },
    { path: '/architecture', priority: '0.8', changefreq: 'weekly' },
    { path: '/technology', priority: '0.8', changefreq: 'weekly' },
    { path: '/devices', priority: '0.7', changefreq: 'weekly' },
    { path: '/transfer', priority: '0.7', changefreq: 'weekly' },
    { path: '/migration', priority: '0.7', changefreq: 'weekly' },
    { path: '/roaming', priority: '0.7', changefreq: 'weekly' },
    { path: '/5g', priority: '0.8', changefreq: 'weekly' },
    { path: '/volte', priority: '0.8', changefreq: 'weekly' },
    { path: '/security', priority: '0.8', changefreq: 'weekly' },
    { path: '/compliance', priority: '0.8', changefreq: 'weekly' },
    { path: '/partners', priority: '0.7', changefreq: 'monthly' },
    { path: '/enterprise', priority: '0.9', changefreq: 'weekly' },
    { path: '/api', priority: '0.9', changefreq: 'weekly' },
    { path: '/contact', priority: '0.6', changefreq: 'monthly' },
    { path: '/support', priority: '0.7', changefreq: 'weekly' },
    { path: '/faq', priority: '0.6', changefreq: 'monthly' },
    { path: '/about', priority: '0.5', changefreq: 'monthly' },
    { path: '/team', priority: '0.5', changefreq: 'monthly' },
    { path: '/careers', priority: '0.6', changefreq: 'monthly' },
    { path: '/news', priority: '0.7', changefreq: 'daily' },
    { path: '/blog', priority: '0.7', changefreq: 'weekly' },
    { path: '/press', priority: '0.6', changefreq: 'monthly' }
  ],

  // Resource Pages (10 pages)
  resources: [
    { path: '/whitepaper', priority: '0.6', changefreq: 'monthly' },
    { path: '/brochure', priority: '0.5', changefreq: 'monthly' },
    { path: '/flyer', priority: '0.5', changefreq: 'monthly' },
    { path: '/datasheet', priority: '0.6', changefreq: 'monthly' },
    { path: '/case-studies', priority: '0.7', changefreq: 'monthly' },
    { path: '/testimonials', priority: '0.6', changefreq: 'monthly' },
    { path: '/awards', priority: '0.5', changefreq: 'yearly' },
    { path: '/certifications', priority: '0.6', changefreq: 'yearly' },
    { path: '/partnerships', priority: '0.6', changefreq: 'monthly' },
    { path: '/roadmap', priority: '0.7', changefreq: 'monthly' }
  ],

  // Network Operator Pages (20 pages)
  operators: [
    { path: '/operators/mpt', priority: '0.8', changefreq: 'weekly' },
    { path: '/operators/mpt/coverage', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/mpt/plans', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/mpt/5g', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/mpt/enterprise', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/mytel', priority: '0.8', changefreq: 'weekly' },
    { path: '/operators/mytel/coverage', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/mytel/plans', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/mytel/5g', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/mytel/enterprise', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/atom', priority: '0.8', changefreq: 'weekly' },
    { path: '/operators/atom/coverage', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/atom/iot', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/atom/nb-iot', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/atom/enterprise', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/u9', priority: '0.8', changefreq: 'weekly' },
    { path: '/operators/u9/coverage', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/u9/lte-m', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/u9/plans', priority: '0.7', changefreq: 'weekly' },
    { path: '/operators/u9/enterprise', priority: '0.7', changefreq: 'weekly' }
  ],

  // Technical Deep-Dive Pages (30 pages)
  technical: [
    { path: '/tech/esim-architecture', priority: '0.8', changefreq: 'monthly' },
    { path: '/tech/gsma-standards', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/sm-dp-plus', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/sm-sr', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/lpa', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/euicc', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/profile-lifecycle', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/provisioning', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/authentication', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/encryption', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/5g-integration', priority: '0.8', changefreq: 'monthly' },
    { path: '/tech/volte-implementation', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/streaming-optimization', priority: '0.8', changefreq: 'monthly' },
    { path: '/tech/network-slicing', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/edge-computing', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/cdn-integration', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/load-balancing', priority: '0.6', changefreq: 'monthly' },
    { path: '/tech/monitoring', priority: '0.6', changefreq: 'monthly' },
    { path: '/tech/analytics', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/ai-optimization', priority: '0.8', changefreq: 'monthly' },
    { path: '/tech/blockchain', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/quantum-security', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/zero-trust', priority: '0.8', changefreq: 'monthly' },
    { path: '/tech/cloudflare-integration', priority: '0.6', changefreq: 'monthly' },
    { path: '/tech/azure-integration', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/api-gateway', priority: '0.7', changefreq: 'monthly' },
    { path: '/tech/microservices', priority: '0.6', changefreq: 'monthly' },
    { path: '/tech/containerization', priority: '0.6', changefreq: 'monthly' },
    { path: '/tech/devops', priority: '0.6', changefreq: 'monthly' },
    { path: '/tech/disaster-recovery', priority: '0.6', changefreq: 'monthly' }
  ],

  // Industry & Use Cases Pages (40 pages)
  industries: [
    { path: '/industries/telecommunications', priority: '0.8', changefreq: 'monthly' },
    { path: '/industries/entertainment', priority: '0.8', changefreq: 'monthly' },
    { path: '/industries/streaming', priority: '0.8', changefreq: 'monthly' },
    { path: '/industries/gaming', priority: '0.7', changefreq: 'monthly' },
    { path: '/industries/iot', priority: '0.7', changefreq: 'monthly' },
    { path: '/industries/automotive', priority: '0.7', changefreq: 'monthly' },
    { path: '/industries/healthcare', priority: '0.7', changefreq: 'monthly' },
    { path: '/industries/manufacturing', priority: '0.6', changefreq: 'monthly' },
    { path: '/industries/logistics', priority: '0.6', changefreq: 'monthly' },
    { path: '/industries/retail', priority: '0.6', changefreq: 'monthly' },
    { path: '/industries/finance', priority: '0.7', changefreq: 'monthly' },
    { path: '/industries/education', priority: '0.6', changefreq: 'monthly' },
    { path: '/industries/government', priority: '0.6', changefreq: 'monthly' },
    { path: '/industries/smart-cities', priority: '0.7', changefreq: 'monthly' },
    { path: '/industries/agriculture', priority: '0.6', changefreq: 'monthly' },
    { path: '/industries/energy', priority: '0.6', changefreq: 'monthly' },
    { path: '/use-cases/international-roaming', priority: '0.7', changefreq: 'monthly' },
    { path: '/use-cases/travel', priority: '0.7', changefreq: 'monthly' },
    { path: '/use-cases/business-travel', priority: '0.6', changefreq: 'monthly' },
    { path: '/use-cases/remote-work', priority: '0.7', changefreq: 'monthly' },
    { path: '/use-cases/digital-nomads', priority: '0.7', changefreq: 'monthly' },
    { path: '/use-cases/emergency-services', priority: '0.6', changefreq: 'monthly' },
    { path: '/use-cases/disaster-response', priority: '0.6', changefreq: 'monthly' },
    { path: '/use-cases/military', priority: '0.5', changefreq: 'monthly' },
    { path: '/use-cases/maritime', priority: '0.5', changefreq: 'monthly' },
    { path: '/use-cases/aviation', priority: '0.5', changefreq: 'monthly' },
    { path: '/use-cases/mining', priority: '0.5', changefreq: 'monthly' },
    { path: '/use-cases/oil-gas', priority: '0.5', changefreq: 'monthly' },
    { path: '/use-cases/construction', priority: '0.5', changefreq: 'monthly' },
    { path: '/use-cases/events', priority: '0.6', changefreq: 'monthly' },
    { path: '/use-cases/conferences', priority: '0.6', changefreq: 'monthly' },
    { path: '/use-cases/exhibitions', priority: '0.5', changefreq: 'monthly' },
    { path: '/use-cases/sports', priority: '0.6', changefreq: 'monthly' },
    { path: '/use-cases/media', priority: '0.6', changefreq: 'monthly' },
    { path: '/use-cases/journalism', priority: '0.5', changefreq: 'monthly' },
    { path: '/use-cases/content-creation', priority: '0.6', changefreq: 'monthly' },
    { path: '/use-cases/live-streaming', priority: '0.7', changefreq: 'monthly' },
    { path: '/use-cases/social-media', priority: '0.6', changefreq: 'monthly' },
    { path: '/use-cases/influencers', priority: '0.6', changefreq: 'monthly' },
    { path: '/use-cases/startups', priority: '0.6', changefreq: 'monthly' }
  ]
}

// Language codes for multi-language support (175 pages = 25  7 languages)
const languages = ['en', 'zh', 'th', 'vi', 'id', 'ms', 'mm']

function generateSitemap() {
  
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`

  let totalUrls = 0
  const currentDate = new Date().toISOString().split('T')[0]

  // Add all page categories
  Object.values(allPages).forEach(category => {
    category.forEach(page => {
      xml += `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
      totalUrls++
    })
  })

  // Add language-specific pages (175 pages)
  languages.forEach(lang => {
    if (lang === 'en') return // Skip English as it's the default
    
    allPages.core.forEach(page => {
      const langPath = `/${lang}${page.path === '/' ? '' : page.path}`
      xml += `  <url>
    <loc>${SITE_URL}${langPath}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${(parseFloat(page.priority) * 0.8).toFixed(1)}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${page.path}"/>
`
      // Add alternate language links
      languages.forEach(altLang => {
        if (altLang !== lang) {
          const altPath = altLang === 'en' ? page.path : `/${altLang}${page.path === '/' ? '' : page.path}`
          xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${SITE_URL}${altPath}"/>
`
        }
      })
      xml += `  </url>
`
      totalUrls++
    })
  })

  xml += `</urlset>`

  // Write sitemap file
  fs.writeFileSync(OUTPUT_PATH, xml, 'utf8')
  
  
  
  
  
  
  // Generate robots.txt
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /.git/
Disallow: /node_modules/

# Allow all content for search engines
Allow: /features
Allow: /api
Allow: /enterprise
Allow: /architecture
Allow: /operators/
Allow: /tech/
Allow: /industries/
Allow: /use-cases/
`

  const robotsPath = path.join(__dirname, '../public/robots.txt')
  fs.writeFileSync(robotsPath, robotsContent, 'utf8')
  
  
  return totalUrls
}

// Run sitemap generation
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    const totalUrls = generateSitemap()
    
    
  } catch (error) {
    
    process.exit(1)
  }
}

export { generateSitemap }