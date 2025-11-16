import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function cleanupErrors() {
  const filesToFix = [
    'src/App.jsx',
    'src/main.jsx', 
    'index.html',
    'public/404.html'
  ];

  filesToFix.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.trim() === '') {
        fs.unlinkSync(filePath);
        console.log(`Deleted empty file: ${file}`);
      }
    }
  });

  const reportsToDelete = [
    'COMPREHENSIVE_LIVE_AUDIT.md',
    'LIVE_AUDIT_FIXES.md',
    'live-analysis.html'
  ];

  reportsToDelete.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${file}`);
    }
  });

  console.log('Error cleanup complete');
}

cleanupErrors();