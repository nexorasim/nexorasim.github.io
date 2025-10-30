export const apiDocs = {
  version: "2.0",
  title: "NexoraSIM API Documentation",
  description: "Complete REST API documentation for eSIM provisioning, device management, and analytics",
  
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
            Authorization: "Bearer <ACCESS_TOKEN>"
          },
          parameters: {
            operator: "mpt|mytel|atom|u9",
            device_id: "<DEVICE_ID>",
            plan_id: "<PLAN_ID>"
          }
        },
        {
          method: "GET", 
          path: "/v2/esim/{iccid}/status",
          description: "Get eSIM status",
          headers: {
            Authorization: "Bearer <ACCESS_TOKEN>"
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
          }
        },
        {
          method: "POST",
          path: "/v2/devices",
          description: "Register new device",
          headers: {
            Authorization: "Bearer <ACCESS_TOKEN>"
          },
          parameters: {
            device_id: "<DEVICE_ID>",
            device_type: "<DEVICE_TYPE>",
            operator: "<OPERATOR>"
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
            Authorization: "Bearer <ACCESS_TOKEN>"
          },
          parameters: {
            device_id: "<DEVICE_ID> (optional)",
            start_date: "ISO 8601 date",
            end_date: "ISO 8601 date"
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
  }
};