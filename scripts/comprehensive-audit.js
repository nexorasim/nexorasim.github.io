#!/usr/bin/env node

// NexoraSIM Comprehensive Website Audit System
const fs = require('fs');
const path = require('path');

class WebsiteAuditor {
  constructor() {
    this.auditResults = {
      codeQuality: [],
      performance: [],
      seo: [],
      accessibility: [],
      security: [],
      design: []
    };
    this.startTime = Date.now();
  }

  // Phase 1: Code Audit and Cleanup
  auditCodeQuality() {
        
    // Check HTML files
    this.auditHTMLFiles();
    
    // Check CSS files
    this.auditCSSFiles();
    
    // Check JS files
    this.auditJSFiles();
    
    // Remove emojis and non-standard characters
    this.cleanNonStandardCharacters();
    
    return this.auditResults.codeQuality;
  }

  auditHTMLFiles() {
    const htmlFiles = this.findFiles('.', '.html');
    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for semantic HTML
      if (!content.includes('<main>') && !content.includes('role="main"')) {
        this.auditResults.codeQuality.push({
          file,
          issue: 'Missing semantic main element',
          severity: 'medium'
        });
      }
      
      // Check for proper heading hierarchy
      const headings = content.match(/<h[1-6][^>]*>/g) || [];
      if (headings.length === 0) {
        this.auditResults.codeQuality.push({
          file,
          issue: 'No heading elements found',
          severity: 'high'
        });
      }
      
      // Check for alt attributes on images
      const images = content.match(/<img[^>]*>/g) || [];
      images.forEach(img => {
        if (!img.includes('alt=')) {
          this.auditResults.codeQuality.push({
            file,
            issue: 'Image missing alt attribute',
            severity: 'high'
          });
        }
      });
    });
  }

  auditCSSFiles() {
    const cssFiles = this.findFiles('.', '.css');
    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for unused CSS (basic check)
      if (content.length > 50000) {
        this.auditResults.codeQuality.push({
          file,
          issue: 'Large CSS file - consider optimization',
          severity: 'medium'
        });
      }
      
      // Check for vendor prefixes
      if (content.includes('-webkit-') || content.includes('-moz-')) {
        this.auditResults.codeQuality.push({
          file,
          issue: 'Consider using autoprefixer for vendor prefixes',
          severity: 'low'
        });
      }
    });
  }

  auditJSFiles() {
    const jsFiles = this.findFiles('.', '.js');
    jsFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for console.log statements
      if (content.includes('console.log')) {
        this.auditResults.codeQuality.push({
          file,
          issue: 'Console.log statements found - remove for production',
          severity: 'low'
        });
      }
      
      // Check for eval usage
      if (content.includes('/* eval removed for security */) {
        this.auditResults.codeQuality.push({
          file,
          issue: '/* eval removed for security */ usage detected - security risk',
          severity: 'critical'
        });
      }
    });
  }

  cleanNonStandardCharacters() {
    const textFiles = [
      ...this.findFiles('.', '.html'),
      ...this.findFiles('.', '.css'),
      ...this.findFiles('.', '.js'),
      ...this.findFiles('.', '.jsx'),
      ...this.findFiles('.', '.md')
    ];

    textFiles.forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      const originalLength = content.length;
      
      // Remove emojis and non-standard characters
      content = content.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]/gu, '');
      content = content.replace(/[^\x00-\x7F]/g, '');
      
      if (content.length !== originalLength) {
        fs.writeFileSync(file, content, 'utf8');
        this.auditResults.codeQuality.push({
          file,
          issue: 'Non-standard characters removed',
          severity: 'info'
        });
      }
    });
  }

  // Phase 2: Performance Optimization
  auditPerformance() {
        
    // Check file sizes
    this.checkFileSizes();
    
    // Check for minification opportunities
    this.checkMinification();
    
    return this.auditResults.performance;
  }

  checkFileSizes() {
    const jsFiles = this.findFiles('.', '.js');
    const cssFiles = this.findFiles('.', '.css');
    
    [...jsFiles, ...cssFiles].forEach(file => {
      const stats = fs.statSync(file);
      if (stats.size > 100000) { // 100KB
        this.auditResults.performance.push({
          file,
          issue: `Large file size: ${(stats.size / 1024).toFixed(2)}KB`,
          severity: 'medium'
        });
      }
    });
  }

  checkMinification() {
    const jsFiles = this.findFiles('.', '.js');
    jsFiles.forEach(file => {
      if (!file.includes('.min.') && !file.includes('node_modules')) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('  ') || content.includes('\n\n')) {
          this.auditResults.performance.push({
            file,
            issue: 'File not minified',
            severity: 'low'
          });
        }
      }
    });
  }

  // Phase 3: SEO and Metadata
  auditSEO() {
        
    this.checkMetaTags();
    this.checkHeadingStructure();
    this.generateSitemap();
    
    return this.auditResults.seo;
  }

  checkMetaTags() {
    const htmlFiles = this.findFiles('.', '.html');
    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      if (!content.includes('<title>')) {
        this.auditResults.seo.push({
          file,
          issue: 'Missing title tag',
          severity: 'critical'
        });
      }
      
      if (!content.includes('name="description"')) {
        this.auditResults.seo.push({
          file,
          issue: 'Missing meta description',
          severity: 'high'
        });
      }
      
      if (!content.includes('property="og:')) {
        this.auditResults.seo.push({
          file,
          issue: 'Missing Open Graph tags',
          severity: 'medium'
        });
      }
    });
  }

  checkHeadingStructure() {
    const htmlFiles = this.findFiles('.', '.html');
    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const h1Count = (content.match(/<h1[^>]*>/g) || []).length;
      
      if (h1Count === 0) {
        this.auditResults.seo.push({
          file,
          issue: 'Missing H1 tag',
          severity: 'high'
        });
      } else if (h1Count > 1) {
        this.auditResults.seo.push({
          file,
          issue: 'Multiple H1 tags found',
          severity: 'medium'
        });
      }
    });
  }

  generateSitemap() {
    const pages = [
      'https://nexorasim.github.io/',
      'https://nexorasim.github.io/entitlement-server',
      'https://nexorasim.github.io/features',
      'https://nexorasim.github.io/api',
      'https://nexorasim.github.io/contact'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync('./public/sitemap.xml', sitemap);
    
    const robots = `User-agent: *
Allow: /
Sitemap: https://nexorasim.github.io/sitemap.xml`;

    fs.writeFileSync('./public/robots.txt', robots);
  }

  // Utility methods
  findFiles(dir, extension) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...this.findFiles(fullPath, extension));
      } else if (stat.isFile() && item.endsWith(extension)) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  // Generate comprehensive report
  generateReport() {
    const endTime = Date.now();
    const duration = Math.round((endTime - this.startTime) / 1000);
    
    const report = {
      auditDate: new Date().toISOString(),
      duration: `${duration} seconds`,
      summary: {
        codeQuality: this.auditResults.codeQuality.length,
        performance: this.auditResults.performance.length,
        seo: this.auditResults.seo.length,
        accessibility: this.auditResults.accessibility.length,
        security: this.auditResults.security.length,
        design: this.auditResults.design.length
      },
      details: this.auditResults
    };

    fs.writeFileSync('./AUDIT_REPORT.json', JSON.stringify(report, null, 2));
    
            .flat().length}`);
        
    return report;
  }

  // Run complete audit
  runCompleteAudit() {
        
    this.auditCodeQuality();
    this.auditPerformance();
    this.auditSEO();
    
    return this.generateReport();
  }
}

// Execute audit if run directly
if (require.main === module) {
  const auditor = new WebsiteAuditor();
  auditor.runCompleteAudit();
}

module.exports = WebsiteAuditor;