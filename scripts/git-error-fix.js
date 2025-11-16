#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Remove emojis and fix git issues
const removeEmojis = (text) => {
  return text.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '');
};

const fixFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleaned = removeEmojis(content);
    if (content !== cleaned) {
      fs.writeFileSync(filePath, cleaned, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  }
};

// Fix all source files
const sourceFiles = [
  'src/App.jsx',
  'src/components/Header.jsx',
  'src/components/Footer.jsx',
  'src/pages/HomePage.jsx',
  'src/pages/EntitlementServer.jsx',
  'README.md',
  'package.json'
];

sourceFiles.forEach(fixFile);

console.log('Git error check complete - emojis removed');