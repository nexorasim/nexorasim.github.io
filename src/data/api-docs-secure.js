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
            client_id: "<CLIENT_ID>",
            client_secret: "<CLIENT_SECRET>", 
            grant_type: "client_credentials"
          },
          response: {
            access_token: "<ACCESS_TOKEN>",
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
            Authorization: "Bearer <ACCESS_TOKEN>",
            "Content-Type": "application/json"
          },
          parameters: {
            operator: "mpt|mytel|atom|u9",
            device_id: "<DEVICE_ID>",
            plan_id: "<PLAN_ID>"
          },
          response: {
            iccid: "<ICCID>",
            status: "provisioned",
            activation_code: "<ACTIVATION_CODE>"
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
            Authorization: "Bearer <ACCESS_TOKEN>"
          },
          response: {
            devices: "array",
            total: "number",
            page: "number"
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