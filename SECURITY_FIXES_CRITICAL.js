// CRITICAL SECURITY FIXES - APPLY IMMEDIATELY
// NexoraSIM Website Security Vulnerabilities Remediation

// 1. Input Sanitization Utility
export const SecurityUtils = {
  // Sanitize object property access to prevent injection
  safeObjectAccess: (obj, path) => {
    if (!obj || typeof path !== 'string') return null;
    
    const keys = path.split('.').filter(key => 
      /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) // Only allow valid identifiers
    );
    
    return keys.reduce((current, key) => {
      return current && typeof current === 'object' && key in current 
        ? current[key] 
        : null;
    }, obj);
  },

  // Sanitize user input
  sanitizeInput: (input) => {
    if (typeof input !== 'string') return '';
    
    return input
      .replace(/[<>\"'&]/g, (match) => {
        const entities = {
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
          '&': '&amp;'
        };
        return entities[match];
      })
      .trim()
      .slice(0, 1000); // Limit length
  },

  // Validate route parameters
  validateRouteParam: (param) => {
    if (typeof param !== 'string') return false;
    return /^[a-zA-Z0-9\-_\/]+$/.test(param) && param.length <= 100;
  },

  // Sanitize error messages
  sanitizeError: (error) => {
    if (!error) return 'Unknown error';
    
    const message = typeof error === 'string' ? error : error.message || 'System error';
    return SecurityUtils.sanitizeInput(message);
  }
};

// 2. Fixed DataErrorValidator.js
export const SecureDataValidator = {
  validateProfileData: (data) => {
    if (!data || typeof data !== 'object') {
      return { valid: false, error: 'Invalid data format' };
    }

    const allowedFields = ['iccid', 'imsi', 'profileId', 'status', 'carrier'];
    const sanitizedData = {};

    for (const field of allowedFields) {
      if (field in data) {
        sanitizedData[field] = SecurityUtils.sanitizeInput(String(data[field]));
      }
    }

    return { valid: true, data: sanitizedData };
  }
};

// 3. Fixed ePMSystem.js - Secure Profile Management
export const SecureProfileManager = {
  processProfile: (profileData, carrier) => {
    try {
      // Validate inputs
      const validation = SecureDataValidator.validateProfileData(profileData);
      if (!validation.valid) {
        throw new Error(validation.error);
      }

      // Secure carrier validation
      const allowedCarriers = ['MPT', 'MYTEL', 'ATOM', 'U9'];
      if (!allowedCarriers.includes(carrier)) {
        throw new Error('Invalid carrier specified');
      }

      // Process with sanitized data
      return {
        success: true,
        profile: validation.data,
        carrier: carrier
      };
    } catch (error) {
      return {
        success: false,
        error: SecurityUtils.sanitizeError(error)
      };
    }
  }
};

// 4. Fixed Routes.js - Secure Route Handling
export const SecureRouteHandler = {
  generateRoute: (basePath, params) => {
    if (!SecurityUtils.validateRouteParam(basePath)) {
      return '/';
    }

    if (!params || typeof params !== 'object') {
      return basePath;
    }

    const sanitizedParams = Object.keys(params)
      .filter(key => /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key))
      .reduce((acc, key) => {
        const value = params[key];
        if (typeof value === 'string' && SecurityUtils.validateRouteParam(value)) {
          acc[key] = value;
        }
        return acc;
      }, {});

    const queryString = Object.keys(sanitizedParams)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(sanitizedParams[key])}`)
      .join('&');

    return queryString ? `${basePath}?${queryString}` : basePath;
  }
};

// 5. Fixed ErrorHandler.js - Secure Error Processing
export const SecureErrorHandler = {
  logError: (error, context = {}) => {
    const sanitizedError = SecurityUtils.sanitizeError(error);
    const sanitizedContext = {};

    // Only allow specific context fields
    const allowedContextFields = ['component', 'action', 'userId', 'timestamp'];
    
    for (const field of allowedContextFields) {
      if (field in context) {
        sanitizedContext[field] = SecurityUtils.sanitizeInput(String(context[field]));
      }
    }

    // Log to secure endpoint (not console in production)
    if (process.env.NODE_ENV === 'production') {
      // Send to monitoring service
      return {
        error: sanitizedError,
        context: sanitizedContext,
        timestamp: new Date().toISOString()
      };
    } else {
      console.error('Development Error:', sanitizedError, sanitizedContext);
    }
  },

  handleApiError: (error, request) => {
    const sanitizedError = SecurityUtils.sanitizeError(error);
    
    // Don't expose internal details
    const publicError = {
      message: 'An error occurred processing your request',
      code: 'SYSTEM_ERROR',
      timestamp: new Date().toISOString()
    };

    // Log full details securely
    SecureErrorHandler.logError(error, {
      component: 'API',
      action: request?.action || 'unknown',
      timestamp: new Date().toISOString()
    });

    return publicError;
  }
};

// 6. Fixed SEOHelpers.js - Secure Meta Generation
export const SecureSEOHelpers = {
  generateMetaTags: (pageData) => {
    if (!pageData || typeof pageData !== 'object') {
      return {};
    }

    const allowedFields = ['title', 'description', 'keywords', 'image', 'url'];
    const metaTags = {};

    for (const field of allowedFields) {
      if (field in pageData && typeof pageData[field] === 'string') {
        metaTags[field] = SecurityUtils.sanitizeInput(pageData[field]);
      }
    }

    // Validate URLs
    if (metaTags.url && !/^https?:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}/.test(metaTags.url)) {
      delete metaTags.url;
    }

    if (metaTags.image && !/^https?:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}/.test(metaTags.image)) {
      delete metaTags.image;
    }

    return metaTags;
  }
};

// 7. Content Security Policy Enhancement
export const CSPConfig = {
  directives: {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'", // Remove in production, use nonces
      "https://unpkg.com",
      "https://cdnjs.cloudflare.com"
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'", // Remove in production, use nonces
      "https://fonts.googleapis.com"
    ],
    'img-src': [
      "'self'",
      "data:",
      "https:"
    ],
    'font-src': [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    'connect-src': [
      "'self'",
      "https:"
    ],
    'frame-ancestors': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'upgrade-insecure-requests': []
  },

  generateCSPHeader: () => {
    return Object.entries(CSPConfig.directives)
      .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
      .join('; ');
  }
};

// 8. Implementation Instructions
export const SecurityImplementation = {
  // Replace all instances of direct object property access
  // OLD: data[userInput]
  // NEW: SecurityUtils.safeObjectAccess(data, userInput)

  // Replace all user input handling
  // OLD: const value = input
  // NEW: const value = SecurityUtils.sanitizeInput(input)

  // Replace all error handling
  // OLD: console.error(error)
  // NEW: SecureErrorHandler.logError(error, context)

  // Add to all components that handle user input
  applyToComponents: [
    'src/components/Header.jsx',
    'src/components/Footer.jsx', 
    'src/pages/HomePage.jsx',
    'src/pages/EntitlementServer.jsx',
    'src/utils/errorHandler.js',
    'src/utils/seoHelpers.js',
    'src/data/routes.js',
    'src/core/ePMSystem.js',
    'src/core/DataErrorValidator.js'
  ]
};

// IMMEDIATE ACTION REQUIRED:
// 1. Import this file into affected components
// 2. Replace vulnerable code with secure alternatives
// 3. Test all functionality
// 4. Deploy security fixes within 24 hours

export default {
  SecurityUtils,
  SecureDataValidator,
  SecureProfileManager,
  SecureRouteHandler,
  SecureErrorHandler,
  SecureSEOHelpers,
  CSPConfig,
  SecurityImplementation
};