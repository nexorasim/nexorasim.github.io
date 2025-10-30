export const apiDocs = {
  version: "2.5",
  title: "NexoraSIM Enterprise eSIM API",
  description: "Secure REST API for enterprise eSIM provisioning, device management, and analytics",
  baseUrl: "https://api.nexorasim.com",
  security: "OAuth 2.0 + TLS 1.3",
  documentation: "https://nexorasim.github.io/#/developers",
  dataValidation: "Comprehensive input validation and error handling",
  
  endpoints: {
    authentication: {
      title: "Authentication",
      description: "OAuth 2.0 authentication for secure API access",
      methods: [
        {
          method: "POST",
          path: "/auth/token",
          description: "Obtain access token",
          parameters: {
            client_id: "string",
            client_secret: "string", 
            grant_type: "client_credentials"
          },
          response: {
            access_token: "string",
            token_type: "Bearer",
            expires_in: 3600
          },
          errors: {
            "400": "Bad Request - Invalid parameters",
            "401": "Unauthorized - Invalid credentials",
            "500": "Internal Server Error"
          }
        }
      ]
    },
    
    esim: {
      title: "eSIM Management",
      description: "Provision and manage eSIM profiles",
      methods: [
        {
          method: "POST",
          path: "/v2/esim/provision",
          description: "Provision new eSIM profile",
          headers: {
            Authorization: "Bearer {token}",
            "Content-Type": "application/json"
          },
          parameters: {
            operator: "mpt|mytel|atom|u9",
            device_id: "string",
            plan_id: "string"
          },
          response: {
            iccid: "string",
            status: "provisioned",
            activation_code: "string"
          },
          errors: {
            "400": "Bad Request - Invalid operator or parameters",
            "401": "Unauthorized - Invalid or expired token",
            "404": "Not Found - Plan not found",
            "500": "Internal Server Error"
          }
        },
        {
          method: "GET", 
          path: "/v2/esim/{iccid}/status",
          description: "Get eSIM status",
          headers: {
            Authorization: "Bearer {token}"
          },
          response: {
            iccid: "string",
            status: "enabled|disabled|deleted",
            operator: "string"
          },
          errors: {
            "401": "Unauthorized - Invalid or expired token",
            "404": "Not Found - eSIM not found",
            "500": "Internal Server Error"
          }
        }
      ]
    },
    
    devices: {
      title: "Device Management", 
      description: "Manage IoT devices and connectivity",
      methods: [
        {
          method: "GET",
          path: "/v2/devices",
          description: "List all devices",
          headers: {
            Authorization: "Bearer {token}"
          },
          response: {
            devices: "array",
            total: "number",
            page: "number"
          }
        },
        {
          method: "POST",
          path: "/v2/devices",
          description: "Register new device",
          headers: {
            Authorization: "Bearer {token}",
            "Content-Type": "application/json"
          },
          parameters: {
            device_id: "string",
            device_type: "string",
            operator: "string"
          },
          response: {
            device_id: "string",
            status: "registered",
            created_at: "ISO 8601 date"
          }
        }
      ]
    },
    
    analytics: {
      title: "Analytics & Reporting",
      description: "Real-time usage analytics and reporting",
      methods: [
        {
          method: "GET",
          path: "/v2/analytics/usage",
          description: "Get usage statistics",
          headers: {
            Authorization: "Bearer {token}"
          },
          parameters: {
            device_id: "string (optional)",
            start_date: "ISO 8601 date",
            end_date: "ISO 8601 date"
          },
          response: {
            usage_data: "array",
            total_bytes: "number",
            period: "string"
          }
        }
      ]
    },
    
    profiles: {
      title: "Profile Management",
      description: "Manage eSIM profiles and lifecycle",
      methods: [
        {
          method: "POST",
          path: "/v2/profiles/install",
          description: "Install new profile",
          headers: {
            Authorization: "Bearer {token}",
            "Content-Type": "application/json"
          },
          parameters: {
            operator: "string",
            plan_type: "consumer|iot|enterprise",
            activation_code: "string"
          },
          response: {
            profile_id: "string",
            iccid: "string",
            status: "installed"
          }
        },
        {
          method: "POST",
          path: "/v2/profiles/{profile_id}/register",
          description: "Register profile to device",
          headers: {
            Authorization: "Bearer {token}",
            "Content-Type": "application/json"
          },
          parameters: {
            device_id: "string"
          },
          response: {
            profile_id: "string",
            status: "registered"
          }
        },
        {
          method: "POST",
          path: "/v2/profiles/{profile_id}/download",
          description: "Download profile",
          headers: {
            Authorization: "Bearer {token}"
          },
          response: {
            profile_id: "string",
            activation_code: "string",
            status: "downloaded"
          }
        },
        {
          method: "POST",
          path: "/v2/profiles/{profile_id}/run",
          description: "Run profile",
          headers: {
            Authorization: "Bearer {token}"
          },
          response: {
            profile_id: "string",
            status: "running"
          }
        },
        {
          method: "PUT",
          path: "/v2/profiles/{profile_id}/enable",
          description: "Enable profile",
          headers: {
            Authorization: "Bearer {token}"
          },
          response: {
            profile_id: "string",
            status: "enabled"
          }
        }
      ]
    },
    
    system: {
      title: "System Error Check",
      description: "System health and error checking",
      methods: [
        {
          method: "GET",
          path: "/v2/system/health",
          description: "Full system health check",
          headers: {
            Authorization: "Bearer {token}"
          },
          response: {
            status: "healthy|errors_detected",
            components: "object",
            errors: "array",
            timestamp: "ISO 8601 date"
          }
        },
        {
          method: "GET",
          path: "/v2/system/errors",
          description: "Get system errors",
          headers: {
            Authorization: "Bearer {token}"
          },
          parameters: {
            component: "string (optional)",
            limit: "number (optional)"
          },
          response: {
            errors: "array",
            total: "number"
          }
        }
      ]
    }
  },
  
  operators: {
    mpt: {
      name: "MPT (Myanmar Posts and Telecommunications)",
      coverage: "95%",
      technology: "4G/5G",
      api_endpoint: "/operators/mpt"
    },
    mytel: {
      name: "MYTEL",
      coverage: "90%", 
      technology: "4G/5G",
      api_endpoint: "/operators/mytel"
    },
    atom: {
      name: "ATOM",
      coverage: "85%",
      technology: "4G/NB-IoT", 
      api_endpoint: "/operators/atom"
    },
    u9: {
      name: "U9",
      coverage: "80%",
      technology: "4G/LTE-M",
      api_endpoint: "/operators/u9"
    }
  },
  
  security: {
    authentication: "OAuth 2.0 with PKCE",
    encryption: "TLS 1.3",
    rate_limiting: "1000 requests per minute",
    cors: "Configured for production domains"
  }
};