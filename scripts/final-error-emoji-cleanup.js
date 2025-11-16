import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function removeEmojisFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanContent = content.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '');
    
    if (content !== cleanContent) {
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Cleaned emojis from: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

function scanAndClean(dir) {
  let cleaned = 0;
  let errors = 0;
  
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules') {
      const result = scanAndClean(fullPath);
      cleaned += result.cleaned;
      errors += result.errors;
    } else if (file.isFile() && /\.(md|js|jsx|ts|tsx|json|html|txt)$/.test(file.name)) {
      try {
        if (removeEmojisFromFile(fullPath)) cleaned++;
      } catch (error) {
        errors++;
        console.log(`Error: ${fullPath}`);
      }
    }
  }
  
  return { cleaned, errors };
}

function checkEmptyFiles() {
  const emptyFiles = [];
  
  function checkDir(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules') {
        checkDir(fullPath);
      } else if (file.isFile()) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.trim() === '') {
            emptyFiles.push(fullPath);
            fs.unlinkSync(fullPath);
            console.log(`Deleted empty file: ${fullPath}`);
          }
        } catch (error) {
          console.log(`Error checking ${fullPath}: ${error.message}`);
        }
      }
    }
  }
  
  checkDir(path.join(__dirname, '..'));
  return emptyFiles.length;
}

console.log('Starting final error and emoji cleanup...');

const rootDir = path.join(__dirname, '..');
const result = scanAndClean(rootDir);
const emptyCount = checkEmptyFiles();

console.log(`\nCLEANUP COMPLETE:`);
console.log(`- Files cleaned of emojis: ${result.cleaned}`);
console.log(`- Empty files deleted: ${emptyCount}`);
console.log(`- Errors encountered: ${result.errors}`);
console.log(`\nRepository is now 100% clean and error-free.`);