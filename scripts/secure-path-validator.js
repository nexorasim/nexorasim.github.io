const path = require('path');
const fs = require('fs');

class SecurePathValidator {
  static validatePath(inputPath) {
    if (typeof inputPath !== 'string') {
      throw new Error('Path must be a string');
    }
    
    const cleanPath = inputPath.replace(/\0/g, '').normalize();
    const resolved = path.resolve(cleanPath);
    const basePath = path.resolve('./');
    
    if (!resolved.startsWith(basePath)) {
      throw new Error('Path traversal detected');
    }
    
    return resolved;
  }

  static safeReadFile(filePath) {
    try {
      const safePath = this.validatePath(filePath);
      return fs.readFileSync(safePath, 'utf8');
    } catch (error) {
      throw new Error(`Secure read failed: ${error.message}`);
    }
  }

  static safeWriteFile(filePath, content) {
    try {
      const safePath = this.validatePath(filePath);
      return fs.writeFileSync(safePath, content, 'utf8');
    } catch (error) {
      throw new Error(`Secure write failed: ${error.message}`);
    }
  }
}

module.exports = { SecurePathValidator };