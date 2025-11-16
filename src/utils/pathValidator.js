// Path Validation Utilities
import path from 'path';

export const validatePath = {
  // Sanitize file paths to prevent traversal attacks
  sanitizePath: (inputPath) => {
    if (typeof inputPath !== 'string') {
      throw new Error('Path must be a string');
    }
    
    // Remove null bytes and normalize
    const cleanPath = inputPath.replace(/\0/g, '').normalize();
    
    // Resolve to absolute path and check for traversal
    const resolved = path.resolve(cleanPath);
    const basePath = path.resolve('./');
    
    if (!resolved.startsWith(basePath)) {
      throw new Error('Path traversal detected');
    }
    
    return resolved;
  },

  // Validate file extensions
  validateExtension: (filename, allowedExtensions) => {
    const ext = path.extname(filename).toLowerCase();
    return allowedExtensions.includes(ext);
  },

  // Safe path join
  safeJoin: (...segments) => {
    const joined = path.join(...segments);
    return validatePath.sanitizePath(joined);
  }
};

export const fileValidator = {
  // Validate file upload
  validateFile: (file, options = {}) => {
    const {
      maxSize = 5242880, // 5MB
      allowedTypes = ['image/jpeg', 'image/png', 'image/webp'],
      allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp']
    } = options;

    if (!file) {
      throw new Error('No file provided');
    }

    if (file.size > maxSize) {
      throw new Error(`File size exceeds ${maxSize} bytes`);
    }

    if (!allowedTypes.includes(file.type)) {
      throw new Error(`File type ${file.type} not allowed`);
    }

    const ext = path.extname(file.name).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      throw new Error(`File extension ${ext} not allowed`);
    }

    return true;
  }
};