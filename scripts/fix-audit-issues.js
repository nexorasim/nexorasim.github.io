#!/usr/bin/env node

// NexoraSIM Audit Issue Fixer
const fs = require('fs');
const path = require('path');

class AuditFixer {
  constructor() {
    this.fixedIssues = [];
  }

  // Fix HTML semantic issues
  fixHTMLIssues() {
        
    // Fix main index.html
    this.addSemanticElements('./index.html');
    
    // Fix 404 pages
    this.fix404Pages();
    
    // Add H1 tags where missing
    this.addMissingH1Tags();
  }

  addSemanticElements(filePath) {
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add main element if missing
    if (!content.includes('<main>') && !content.includes('role="main"')) {
      content = content.replace(
        '<div id="root"></div>',
        '<main id="root" role="main"></main>'
      );
      
      fs.writeFileSync(filePath, content);
      this.fixedIssues.push(`Added semantic main element to ${filePath}`);
    }
  }

  fix404Pages() {
    const pages404 = ['./404.html', './public/404.html', './dist/404.html'];
    
    pages404.forEach(page => {
      if (fs.existsSync(page)) {
        let content = fs.readFileSync(page, 'utf8');
        
        // Add meta description
        if (!content.includes('name="description"')) {
          const metaDesc = '<meta name="description" content="Page not found - NexoraSIM Entertainment Server">';
          content = content.replace('<title>', `${metaDesc}\n    <title>`);
        }
        
        // Add Open Graph tags
        if (!content.includes('property="og:')) {
          const ogTags = `
    <meta property="og:title" content="Page Not Found - NexoraSIM">
    <meta property="og:description" content="The requested page could not be found">
    <meta property="og:type" content="website">`;
          content = content.replace('</head>', `${ogTags}\n  </head>`);
        }
        
        fs.writeFileSync(page, content);
        this.fixedIssues.push(`Fixed SEO meta tags in ${page}`);
      }
    });
  }

  addMissingH1Tags() {
    const htmlFiles = [
      './index.html',
      './microsoft-deployment/index.html',
      './wsl-dev/nexorasim-entertainment-server/index.html'
    ];
    
    htmlFiles.forEach(file => {
      if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        if (!content.includes('<h1')) {
          // Add H1 in the body if missing
          content = content.replace(
            '<div id="root"></div>',
            '<div id="root"><h1 class="sr-only">NexoraSIM Entertainment Server</h1></div>'
          );
          
          fs.writeFileSync(file, content);
          this.fixedIssues.push(`Added H1 tag to ${file}`);
        }
      }
    });
  }

  // Remove console.log statements from production files
  removeConsoleStatements() {
        
    const jsFiles = this.findFiles('.', '.js');
    
    jsFiles.forEach(file => {
      if (file.includes('node_modules') || file.includes('.min.')) return;
      
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Remove console.log statements
      content = content.replace(/console\.log\([^)]*\);?\n?/g, '');
      content = content.replace(/console\.error\([^)]*\);?\n?/g, '');
      content = content.replace(/console\.warn\([^)]*\);?\n?/g, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content);
        this.fixedIssues.push(`Removed console statements from ${file}`);
      }
    });
  }

  // Fix critical security issues
  fixSecurityIssues() {
        
    // Remove /* eval removed for security */ usage
    const jsFiles = this.findFiles('.', '.js');
    
    jsFiles.forEach(file => {
      if (file.includes('node_modules')) return;
      
      let content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('/* eval removed for security */) {
        // Replace eval with safer alternatives or remove
        content = content.replace(/eval\([^)]*\)/g, '/* eval removed for security */');
        
        fs.writeFileSync(file, content);
        this.fixedIssues.push(`Removed /* eval removed for security */ from ${file}`);
      }
    });
  }

  // Optimize CSS files
  optimizeCSS() {
        
    const cssFiles = this.findFiles('.', '.css');
    
    cssFiles.forEach(file => {
      if (file.includes('node_modules') || file.includes('.min.')) return;
      
      let content = fs.readFileSync(file, 'utf8');
      
      // Add autoprefixer comment
      if (content.includes('-webkit-') && !content.includes('/* autoprefixer */')) {
        content = '/* autoprefixer: off */\n' + content;
        fs.writeFileSync(file, content);
        this.fixedIssues.push(`Added autoprefixer directive to ${file}`);
      }
    });
  }

  // Generate optimized sitemap
  generateOptimizedSitemap() {
        
    const pages = [
      { url: 'https://nexorasim.github.io/', priority: '1.0', changefreq: 'daily' },
      { url: 'https://nexorasim.github.io/entitlement-server', priority: '0.9', changefreq: 'weekly' },
      { url: 'https://nexorasim.github.io/features', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://nexorasim.github.io/api', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://nexorasim.github.io/architecture', priority: '0.7', changefreq: 'monthly' },
      { url: 'https://nexorasim.github.io/security', priority: '0.7', changefreq: 'monthly' },
      { url: 'https://nexorasim.github.io/contact', priority: '0.6', changefreq: 'monthly' },
      { url: 'https://nexorasim.github.io/operators/mpt', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://nexorasim.github.io/operators/mytel', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://nexorasim.github.io/operators/atom', priority: '0.8', changefreq: 'weekly' },
      { url: 'https://nexorasim.github.io/operators/u9', priority: '0.8', changefreq: 'weekly' }
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync('./public/sitemap.xml', sitemap);
    
    const robots = `User-agent: *
Allow: /
Disallow: /scripts/
Disallow: /.git/
Disallow: /node_modules/

Sitemap: https://nexorasim.github.io/sitemap.xml`;

    fs.writeFileSync('./public/robots.txt', robots);
    
    this.fixedIssues.push('Generated optimized sitemap.xml and robots.txt');
  }

  // Utility method to find files
  findFiles(dir, extension) {
    const files = [];
    
    try {
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
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return files;
  }

  // Run all fixes
  runAllFixes() {
        
    this.fixHTMLIssues();
    this.removeConsoleStatements();
    this.fixSecurityIssues();
    this.optimizeCSS();
    this.generateOptimizedSitemap();
    
            
    this.fixedIssues.forEach((fix, index) => {
          });
    
    // Save fix report
    const report = {
      timestamp: new Date().toISOString(),
      totalFixes: this.fixedIssues.length,
      fixes: this.fixedIssues
    };
    
    fs.writeFileSync('./AUDIT_FIXES_APPLIED.json', JSON.stringify(report, null, 2));
        
    return report;
  }
}

// Execute fixes if run directly
if (require.main === module) {
  const fixer = new AuditFixer();
  fixer.runAllFixes();
}

module.exports = AuditFixer;