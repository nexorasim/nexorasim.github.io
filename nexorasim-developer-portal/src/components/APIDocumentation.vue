<template>
  <div class="api-docs">
    <div class="docs-header">
      <h1>NexoraSIM API Documentation</h1>
      <div class="api-info">
        <span class="version">v1.0.0</span>
        <span class="base-url">Base URL: {{ baseUrl }}</span>
      </div>
    </div>

    <div class="docs-nav">
      <button 
        v-for="section in sections" 
        :key="section.id"
        @click="activeSection = section.id"
        :class="{ active: activeSection === section.id }"
        class="nav-button"
      >
        {{ section.name }}
      </button>
    </div>

    <div class="docs-content">
      <!-- Authentication Section -->
      <div v-if="activeSection === 'auth'" class="section">
        <h2>Authentication</h2>
        <p>All API requests require authentication using Bearer tokens.</p>
        
        <div class="code-block">
          <div class="code-header">
            <span>Request Headers</span>
            <button @click="copyCode('auth-header')" class="copy-btn">Copy</button>
          </div>
          <pre id="auth-header"><code>Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json</code></pre>
        </div>
      </div>

      <!-- EID Validation Section -->
      <div v-if="activeSection === 'eid'" class="section">
        <h2>EID Validation</h2>
        
        <div class="endpoint">
          <div class="endpoint-header">
            <span class="method post">POST</span>
            <span class="path">/api/compliance/validate-eid</span>
          </div>
          
          <div class="endpoint-description">
            <p>Validates eSIM EID format and manufacturer code compliance with GSMA standards.</p>
          </div>

          <div class="endpoint-section">
            <h4>Request Body</h4>
            <div class="code-block">
              <div class="code-header">
                <span>JSON</span>
                <button @click="copyCode('eid-request')" class="copy-btn">Copy</button>
              </div>
              <pre id="eid-request"><code>{
  "eid": "ABCD0123456789ABCDEF0123456789AB",
  "iccid": "89014103211118510720"
}</code></pre>
            </div>
          </div>

          <div class="endpoint-section">
            <h4>Response</h4>
            <div class="code-block">
              <div class="code-header">
                <span>JSON</span>
                <button @click="copyCode('eid-response')" class="copy-btn">Copy</button>
              </div>
              <pre id="eid-response"><code>{
  "valid": true,
  "manufacturer_code": "ABCD",
  "message": "Valid EID format",
  "compliance_level": "SAS-SM_v3.4.2"
}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Device Compatibility Section -->
      <div v-if="activeSection === 'devices'" class="section">
        <h2>Device Compatibility</h2>
        
        <div class="endpoint">
          <div class="endpoint-header">
            <span class="method get">GET</span>
            <span class="path">/api/devices/{device_model}/compatibility</span>
          </div>
          
          <div class="endpoint-description">
            <p>Retrieves EAL6+ compatibility information for specified device model.</p>
          </div>

          <div class="endpoint-section">
            <h4>Parameters</h4>
            <table class="params-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Type</th>
                  <th>Required</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>device_model</td>
                  <td>string</td>
                  <td>Yes</td>
                  <td>Device model identifier</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="endpoint-section">
            <h4>Response</h4>
            <div class="code-block">
              <div class="code-header">
                <span>JSON</span>
                <button @click="copyCode('device-response')" class="copy-btn">Copy</button>
              </div>
              <pre id="device-response"><code>{
  "device_model": "iPhone_14_Pro",
  "compatibility": [
    {
      "eUICC_version": "2.1",
      "certification_status": "CERTIFIED",
      "eal_level": "EAL6+",
      "supported_protocols": ["SAS-SM_v3.4.2", "SGP.22_v3.3"]
    }
  ]
}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Compliance Metrics Section -->
      <div v-if="activeSection === 'compliance'" class="section">
        <h2>Compliance Metrics</h2>
        
        <div class="endpoint">
          <div class="endpoint-header">
            <span class="method get">GET</span>
            <span class="path">/api/compliance/metrics</span>
          </div>
          
          <div class="endpoint-description">
            <p>Returns real-time compliance metrics and audit status.</p>
          </div>

          <div class="endpoint-section">
            <h4>Response</h4>
            <div class="code-block">
              <div class="code-header">
                <span>JSON</span>
                <button @click="copyCode('metrics-response')" class="copy-btn">Copy</button>
              </div>
              <pre id="metrics-response"><code>{
  "compliance_score": 99.5,
  "eid_validation_rate": 98.2,
  "sas_sm_compliance": true,
  "last_audit_date": "2024-01-15T10:30:00Z",
  "total_devices": 247,
  "certified_devices": 245
}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Error Codes Section -->
      <div v-if="activeSection === 'errors'" class="section">
        <h2>Error Codes</h2>
        
        <table class="error-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>400</td>
              <td>Bad Request</td>
              <td>Invalid request format or missing required fields</td>
            </tr>
            <tr>
              <td>401</td>
              <td>Unauthorized</td>
              <td>Invalid or missing authentication token</td>
            </tr>
            <tr>
              <td>403</td>
              <td>Forbidden</td>
              <td>Insufficient permissions for requested operation</td>
            </tr>
            <tr>
              <td>404</td>
              <td>Not Found</td>
              <td>Requested resource does not exist</td>
            </tr>
            <tr>
              <td>422</td>
              <td>Validation Error</td>
              <td>EID format validation failed</td>
            </tr>
            <tr>
              <td>500</td>
              <td>Internal Server Error</td>
              <td>Unexpected server error occurred</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'APIDocumentation',
  setup() {
    const activeSection = ref('auth')
    const baseUrl = ref('https://api.nexorasim.com')
    
    const sections = [
      { id: 'auth', name: 'Authentication' },
      { id: 'eid', name: 'EID Validation' },
      { id: 'devices', name: 'Device Compatibility' },
      { id: 'compliance', name: 'Compliance Metrics' },
      { id: 'errors', name: 'Error Codes' }
    ]

    const copyCode = (elementId) => {
      const element = document.getElementById(elementId)
      const text = element.textContent
      navigator.clipboard.writeText(text).then(() => {
        // Show success feedback
        const button = element.parentElement.querySelector('.copy-btn')
        const originalText = button.textContent
        button.textContent = 'Copied!'
        setTimeout(() => {
          button.textContent = originalText
        }, 2000)
      })
    }

    return {
      activeSection,
      baseUrl,
      sections,
      copyCode
    }
  }
}
</script>

<style scoped>
.api-docs {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.docs-header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.docs-header h1 {
  margin: 0 0 10px 0;
  color: #1976d2;
}

.api-info {
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
  color: #666;
}

.version {
  background: #e3f2fd;
  color: #1976d2;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.docs-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
}

.nav-button {
  padding: 12px 20px;
  border: none;
  background: none;
  color: #666;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.nav-button:hover {
  color: #1976d2;
}

.nav-button.active {
  color: #1976d2;
  border-bottom-color: #1976d2;
}

.section {
  margin-bottom: 40px;
}

.section h2 {
  margin: 0 0 20px 0;
  color: #333;
}

.endpoint {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 30px;
  overflow: hidden;
}

.endpoint-header {
  background: #f5f5f5;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.method {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
}

.method.get {
  background: #e8f5e8;
  color: #2e7d32;
}

.method.post {
  background: #e3f2fd;
  color: #1976d2;
}

.path {
  font-family: 'Courier New', monospace;
  font-weight: 500;
}

.endpoint-description {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.endpoint-section {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.endpoint-section:last-child {
  border-bottom: none;
}

.endpoint-section h4 {
  margin: 0 0 16px 0;
  color: #333;
}

.code-block {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.code-header {
  background: #e9ecef;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #666;
}

.copy-btn {
  background: #1976d2;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 0.75rem;
  cursor: pointer;
}

.copy-btn:hover {
  background: #1565c0;
}

pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
}

code {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.4;
}

.params-table,
.error-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}

.params-table th,
.params-table td,
.error-table th,
.error-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.params-table th,
.error-table th {
  background: #f5f5f5;
  font-weight: 600;
}

.params-table td:nth-child(2),
.params-table td:nth-child(3) {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}
</style>