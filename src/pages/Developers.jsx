import React from 'react'
import { apiDocs } from '../data/api-docs.js'

const Developers = () => {
  return (
    <div className="container">
      <div className="page-content">
        <h1 className="page-title text-gradient">API Documentation</h1>
        
        <div className="glass-panel p-8 mb-8">
          <h2 className="text-2xl font-bold text-accent mb-4">{apiDocs.title}</h2>
          <p className="text-accent/80 mb-4">{apiDocs.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>Version: <span className="text-green-400">{apiDocs.version}</span></div>
            <div>Base URL: <span className="text-blue-400">{apiDocs.baseUrl}</span></div>
            <div>Security: <span className="text-yellow-400">{apiDocs.security}</span></div>
          </div>
        </div>

        {Object.entries(apiDocs.endpoints).map(([key, endpoint]) => (
          <div key={key} className="glass-panel p-6 mb-6">
            <h3 className="text-xl font-bold text-accent mb-3">{endpoint.title}</h3>
            <p className="text-accent/70 mb-4">{endpoint.description}</p>
            
            {endpoint.methods.map((method, index) => (
              <div key={index} className="border border-white/10 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-mono">
                    {method.method}
                  </span>
                  <span className="font-mono text-accent">{method.path}</span>
                </div>
                <p className="text-accent/80 mb-3">{method.description}</p>
                
                {method.headers && (
                  <div className="mb-3">
                    <h5 className="font-semibold text-accent mb-2">Headers:</h5>
                    <div className="bg-black/30 p-3 rounded font-mono text-sm">
                      {Object.entries(method.headers).map(([key, value]) => (
                        <div key={key}>{key}: {value}</div>
                      ))}
                    </div>
                  </div>
                )}
                
                {method.parameters && (
                  <div className="mb-3">
                    <h5 className="font-semibold text-accent mb-2">Parameters:</h5>
                    <div className="bg-black/30 p-3 rounded font-mono text-sm">
                      {Object.entries(method.parameters).map(([key, value]) => (
                        <div key={key}>{key}: {value}</div>
                      ))}
                    </div>
                  </div>
                )}
                
                {method.response && (
                  <div>
                    <h5 className="font-semibold text-accent mb-2">Response:</h5>
                    <div className="bg-black/30 p-3 rounded font-mono text-sm">
                      {Object.entries(method.response).map(([key, value]) => (
                        <div key={key}>{key}: {value}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="glass-panel p-6">
          <h3 className="text-xl font-bold text-accent mb-4">Supported Operators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(apiDocs.operators).map(([key, operator]) => (
              <div key={key} className="border border-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-accent mb-2">{operator.name}</h4>
                <div className="text-sm text-accent/70 space-y-1">
                  <div>Coverage: {operator.coverage}</div>
                  <div>Technology: {operator.technology}</div>
                  <div>Endpoint: {operator.api_endpoint}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Developers