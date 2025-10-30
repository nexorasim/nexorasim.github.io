import React, { useState, useEffect } from 'react'
import { NexoraSIMSystem } from '../core/NexoraSIMSystem.js'

const SystemDashboard = () => {
  const [system] = useState(new NexoraSIMSystem())
  const [status, setStatus] = useState('READY')
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(false)

  const initiateSystem = async () => {
    setLoading(true)
    try {
      const result = await system.initiate()
      setReport(result)
      setStatus(result.status)
    } catch (error) {
      setReport({ status: 'ERROR', message: error.message })
      setStatus('ERROR')
    }
    setLoading(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'SUCCESS': return 'text-green-400'
      case 'ERROR': case 'FAILURE': return 'text-red-400'
      case 'READY': return 'text-blue-400'
      default: return 'text-yellow-400'
    }
  }

  return (
    <div className="container">
      <div className="page-content">
        <h1 className="page-title text-gradient">NEXORASIM AI DEVELOPMENT SYSTEM</h1>
        
        <div className="glass-panel p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-accent">System Control</h2>
            <div className={`text-lg font-mono ${getStatusColor(status)}`}>
              STATUS: {status}
            </div>
          </div>
          
          <button
            onClick={initiateSystem}
            disabled={loading}
            className="glass-button text-lg px-8 py-4 disabled:opacity-50"
          >
            {loading ? 'EXECUTING FULL SYSTEM...' : 'INITIATE NEXORASIM AI DEVELOPMENT'}
          </button>
        </div>

        {report && (
          <div className="glass-panel p-8">
            <h3 className="text-xl font-bold text-accent mb-4">System Report</h3>
            <div className="font-mono text-sm space-y-2">
              <div>Status: <span className={getStatusColor(report.status)}>{report.status}</span></div>
              <div>Message: {report.message}</div>
              <div>Timestamp: {report.timestamp}</div>
              
              {report.components && (
                <div className="mt-4">
                  <div className="font-bold mb-2">Components:</div>
                  {Object.entries(report.components).map(([key, value]) => (
                    <div key={key} className="ml-4">
                      {key.toUpperCase()}: <span className="text-green-400">{value}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {report.performance && (
                <div className="mt-4">
                  <div className="font-bold mb-2">Performance:</div>
                  <div className="ml-4">Availability: {report.performance.availability}</div>
                  <div className="ml-4">Latency: {report.performance.latency}</div>
                  <div className="ml-4">Throughput: {report.performance.throughput}</div>
                </div>
              )}
              
              {report.security && (
                <div className="mt-4">
                  <div className="font-bold mb-2">Security:</div>
                  <div className="ml-4">Compliance: {report.security.compliance}</div>
                  <div className="ml-4">Encryption: {report.security.encryption}</div>
                  <div className="ml-4">HSM: {report.security.hsm}</div>
                </div>
              )}
              
              {report.readyForProduction !== undefined && (
                <div className="mt-4">
                  <div className="font-bold">
                    Production Ready: 
                    <span className={report.readyForProduction ? 'text-green-400' : 'text-red-400'}>
                      {report.readyForProduction ? ' YES' : ' NO'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SystemDashboard