import React, { useState, useEffect } from 'react'
import { Button, Card, CardHeader, CardPreview, Badge, Input, Textarea, Select } from '@fluentui/react-components'
import { Code24Regular, Play24Regular, Copy24Regular, CheckmarkCircle24Regular } from '@fluentui/react-icons'

const API = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('profiles')
  const [requestBody, setRequestBody] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const apiEndpoints = [
    {
      id: 'profiles',
      method: 'GET',
      path: '/api/v1/profiles',
      title: 'List eSIM Profiles',
      description: 'Retrieve all eSIM profiles with filtering and pagination',
      parameters: [
        { name: 'operator', type: 'string', description: 'Filter by operator (mpt, mytel, atom, u9)' },
        { name: 'status', type: 'string', description: 'Filter by status (active, inactive, suspended)' },
        { name: 'limit', type: 'integer', description: 'Number of results per page (max 100)' },
        { name: 'offset', type: 'integer', description: 'Pagination offset' }
      ],
      example: {
        request: 'GET /api/v1/profiles?operator=mpt&status=active&limit=10',
        response: {
          profiles: [
            {
              id: 'prof_12345',
              iccid: '8959501234567890123',
              operator: 'mpt',
              status: 'active',
              created_at: '2025-01-01T00:00:00Z',
              device_info: {
                model: 'iPhone 15 Pro',
                os_version: 'iOS 17.2'
              }
            }
          ],
          total: 1,
          has_more: false
        }
      }
    },
    {
      id: 'provision',
      method: 'POST',
      path: '/api/v1/profiles/provision',
      title: 'Provision eSIM Profile',
      description: 'Create and provision a new eSIM profile for a device',
      parameters: [
        { name: 'operator', type: 'string', required: true, description: 'Target operator (mpt, mytel, atom, u9)' },
        { name: 'device_id', type: 'string', required: true, description: 'Unique device identifier' },
        { name: 'plan_id', type: 'string', required: true, description: 'Selected plan identifier' },
        { name: 'customer_info', type: 'object', required: true, description: 'Customer information object' }
      ],
      example: {
        request: {
          operator: 'mpt',
          device_id: 'dev_67890',
          plan_id: 'plan_unlimited_5g',
          customer_info: {
            name: 'John Doe',
            phone: '+959123456789',
            email: 'john@example.com'
          }
        },
        response: {
          profile_id: 'prof_12346',
          iccid: '8959501234567890124',
          activation_code: 'LPA:1$smdp.example.com$12345',
          qr_code: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...',
          status: 'pending_activation',
          expires_at: '2025-01-08T00:00:00Z'
        }
      }
    },
    {
      id: 'transfer',
      method: 'POST',
      path: '/api/v1/profiles/transfer',
      title: 'Transfer eSIM Profile',
      description: 'Transfer eSIM profile between devices or operators',
      parameters: [
        { name: 'profile_id', type: 'string', required: true, description: 'Profile to transfer' },
        { name: 'target_device', type: 'string', required: true, description: 'Target device identifier' },
        { name: 'target_operator', type: 'string', description: 'Target operator (optional)' },
        { name: 'preserve_data', type: 'boolean', description: 'Preserve existing data plan' }
      ],
      example: {
        request: {
          profile_id: 'prof_12345',
          target_device: 'dev_67891',
          target_operator: 'mytel',
          preserve_data: true
        },
        response: {
          transfer_id: 'xfer_78901',
          status: 'in_progress',
          estimated_completion: '2025-01-01T00:05:00Z',
          new_profile_id: 'prof_12347'
        }
      }
    },
    {
      id: 'analytics',
      method: 'GET',
      path: '/api/v1/analytics/usage',
      title: 'Usage Analytics',
      description: 'Retrieve real-time usage analytics and network performance metrics',
      parameters: [
        { name: 'profile_id', type: 'string', description: 'Specific profile analytics' },
        { name: 'operator', type: 'string', description: 'Operator-specific metrics' },
        { name: 'timeframe', type: 'string', description: 'Time period (1h, 24h, 7d, 30d)' },
        { name: 'metrics', type: 'array', description: 'Specific metrics to retrieve' }
      ],
      example: {
        request: 'GET /api/v1/analytics/usage?operator=mpt&timeframe=24h',
        response: {
          operator: 'mpt',
          timeframe: '24h',
          metrics: {
            data_usage: {
              total_mb: 1024,
              upload_mb: 256,
              download_mb: 768
            },
            network_performance: {
              avg_speed_mbps: 45.2,
              latency_ms: 12,
              uptime_percentage: 99.8
            },
            active_profiles: 15420,
            new_activations: 234
          }
        }
      }
    }
  ]

  const handleTryEndpoint = async () => {
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const endpoint = apiEndpoints.find(ep => ep.id === selectedEndpoint)
      setResponse(JSON.stringify(endpoint.example.response, null, 2))
      setIsLoading(false)
    }, 1000)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const currentEndpoint = apiEndpoints.find(ep => ep.id === selectedEndpoint)

  return (
    <div className="api-page">
      <section className="hero-section parallax-section">
        <div className="section-content">
          <div className="hero-content">
            <Badge appearance="filled" color="brand" size="large">
              Interactive API Playground
            </Badge>
            <h1 className="hero-title">NexoraSIM API Documentation</h1>
            <p className="hero-subtitle">
              Comprehensive RESTful API with 45 endpoints for complete eSIM lifecycle management, 
              real-time analytics, and enterprise integration
            </p>
            <div className="api-stats">
              <div className="stat-item">
                <div className="stat-number">45</div>
                <div className="stat-label">API Endpoints</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000</div>
                <div className="stat-label">Requests/Min</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="api-playground-section parallax-section">
        <div className="section-content">
          <div className="playground-container">
            <div className="endpoints-sidebar">
              <h3>API Endpoints</h3>
              <div className="endpoints-list">
                {apiEndpoints.map((endpoint) => (
                  <div
                    key={endpoint.id}
                    className={`endpoint-item ${selectedEndpoint === endpoint.id ? 'active' : ''}`}
                    onClick={() => setSelectedEndpoint(endpoint.id)}
                  >
                    <Badge appearance="outline" className={`method-badge ${endpoint.method.toLowerCase()}`}>
                      {endpoint.method}
                    </Badge>
                    <div className="endpoint-info">
                      <div className="endpoint-title">{endpoint.title}</div>
                      <div className="endpoint-path">{endpoint.path}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="playground-main">
              <Card className="endpoint-details glass-card">
                <CardHeader>
                  <div className="endpoint-header">
                    <Badge appearance="filled" className={`method-badge ${currentEndpoint.method.toLowerCase()}`}>
                      {currentEndpoint.method}
                    </Badge>
                    <h2>{currentEndpoint.title}</h2>
                  </div>
                  <p className="endpoint-description">{currentEndpoint.description}</p>
                </CardHeader>
                <CardPreview>
                  <div className="endpoint-content">
                    <div className="parameters-section">
                      <h4>Parameters</h4>
                      <div className="parameters-list">
                        {currentEndpoint.parameters.map((param, index) => (
                          <div key={index} className="parameter-item">
                            <div className="parameter-header">
                              <span className="parameter-name">{param.name}</span>
                              <Badge appearance="outline" size="small">{param.type}</Badge>
                              {param.required && <Badge appearance="filled" color="danger" size="small">Required</Badge>}
                            </div>
                            <div className="parameter-description">{param.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="try-section">
                      <div className="try-header">
                        <h4>Try it out</h4>
                        <Button
                          appearance="primary"
                          icon={<Play24Regular />}
                          onClick={handleTryEndpoint}
                          disabled={isLoading}
                        >
                          {isLoading ? 'Sending...' : 'Send Request'}
                        </Button>
                      </div>
                      
                      {currentEndpoint.method === 'POST' && (
                        <div className="request-body">
                          <label>Request Body (JSON)</label>
                          <Textarea
                            value={requestBody || JSON.stringify(currentEndpoint.example.request, null, 2)}
                            onChange={(e) => setRequestBody(e.target.value)}
                            rows={8}
                            className="json-textarea"
                          />
                        </div>
                      )}

                      <div className="response-section">
                        <div className="response-header">
                          <label>Response</label>
                          <Button
                            appearance="subtle"
                            icon={<Copy24Regular />}
                            onClick={() => copyToClipboard(response)}
                            size="small"
                          >
                            Copy
                          </Button>
                        </div>
                        <pre className="response-body">
                          {response || JSON.stringify(currentEndpoint.example.response, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardPreview>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .api-page {
          min-height: 100vh;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin: var(--space-lg) 0;
          background: linear-gradient(135deg, var(--black) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: var(--graphite);
          margin-bottom: var(--space-xl);
          line-height: 1.6;
        }

        .api-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-lg);
          max-width: 400px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent);
          display: block;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--graphite);
          margin-top: var(--space-xs);
        }

        .playground-container {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: var(--space-xl);
          min-height: 800px;
        }

        .endpoints-sidebar {
          background: var(--glass);
          border-radius: var(--radius-large);
          padding: var(--space-lg);
          backdrop-filter: var(--blur-subtle);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .endpoints-sidebar h3 {
          margin-bottom: var(--space-lg);
          color: var(--black);
        }

        .endpoints-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .endpoint-item {
          padding: var(--space-md);
          border-radius: var(--radius-medium);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .endpoint-item:hover,
        .endpoint-item.active {
          background: rgba(0,209,255,0.1);
          border-color: var(--accent);
        }

        .endpoint-info {
          margin-top: var(--space-sm);
        }

        .endpoint-title {
          font-weight: 600;
          color: var(--black);
          font-size: 0.9rem;
        }

        .endpoint-path {
          font-size: 0.8rem;
          color: var(--graphite);
          font-family: monospace;
        }

        .method-badge.get { background: #10B981; color: white; }
        .method-badge.post { background: #3B82F6; color: white; }
        .method-badge.put { background: #F59E0B; color: white; }
        .method-badge.delete { background: #EF4444; color: white; }

        .endpoint-details {
          padding: var(--space-xl);
          height: fit-content;
        }

        .endpoint-header {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-md);
        }

        .endpoint-header h2 {
          margin: 0;
          color: var(--black);
        }

        .endpoint-description {
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
        }

        .parameters-section {
          margin-bottom: var(--space-xl);
        }

        .parameters-section h4 {
          margin-bottom: var(--space-md);
          color: var(--black);
        }

        .parameters-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .parameter-item {
          padding: var(--space-md);
          background: rgba(0,0,0,0.02);
          border-radius: var(--radius-medium);
        }

        .parameter-header {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-xs);
        }

        .parameter-name {
          font-weight: 600;
          font-family: monospace;
          color: var(--black);
        }

        .parameter-description {
          font-size: 0.9rem;
          color: var(--graphite);
        }

        .try-section {
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: var(--space-lg);
        }

        .try-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-lg);
        }

        .try-header h4 {
          margin: 0;
          color: var(--black);
        }

        .request-body {
          margin-bottom: var(--space-lg);
        }

        .request-body label {
          display: block;
          margin-bottom: var(--space-sm);
          font-weight: 600;
          color: var(--black);
        }

        .json-textarea {
          width: 100%;
          font-family: monospace;
          font-size: 0.9rem;
        }

        .response-section {
          margin-top: var(--space-lg);
        }

        .response-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-sm);
        }

        .response-header label {
          font-weight: 600;
          color: var(--black);
        }

        .response-body {
          background: var(--black);
          color: #00ff00;
          padding: var(--space-lg);
          border-radius: var(--radius-medium);
          font-family: monospace;
          font-size: 0.85rem;
          overflow-x: auto;
          white-space: pre-wrap;
        }

        @media (max-width: 1024px) {
          .playground-container {
            grid-template-columns: 1fr;
          }

          .endpoints-sidebar {
            order: 2;
          }
        }

        @media (max-width: 768px) {
          .api-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default API