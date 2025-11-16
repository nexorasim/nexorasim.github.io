import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function checkAllFiles() {
  const errors = [];
  const emptyFiles = [];
  
  const checkFile = (filePath) => {
    try {
      if (!fs.existsSync(filePath)) {
        errors.push(`Missing: ${filePath}`);
        return;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.trim() === '') {
        emptyFiles.push(filePath);
      }
    } catch (err) {
      errors.push(`Error reading ${filePath}: ${err.message}`);
    }
  };

  const criticalFiles = [
    '../dist/index.html',
    '../package.json',
    '../vite.config.js',
    '../tsconfig.json'
  ];

  criticalFiles.forEach(file => {
    checkFile(path.join(__dirname, file));
  });

  if (emptyFiles.length > 0) {
    console.log('EMPTY FILES FOUND:');
    emptyFiles.forEach(file => {
      console.log(`- ${file}`);
      fs.unlinkSync(file);
      console.log(`  DELETED: ${file}`);
    });
  }

  if (errors.length > 0) {
    console.log('ERRORS FOUND:');
    errors.forEach(error => console.log(`- ${error}`));
  }

  if (errors.length === 0 && emptyFiles.length === 0) {
    console.log('ALL FILES VERIFIED - NO ERRORS FOUND');
  }

  return { errors: errors.length, emptyFiles: emptyFiles.length };
}

const result = checkAllFiles();
console.log(`\nSUMMARY: ${result.errors} errors, ${result.emptyFiles} empty files processed`);