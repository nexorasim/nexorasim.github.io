import React, { useState, useEffect } from 'react'
import { ePMSystem } from '../core/ePMSystem.js'

const ePMDashboard = () => {
  const [system] = useState(new ePMSystem())
  const [status, setStatus] = useState('INITIALIZING')
  const [systemData, setSystemData] = useState(null)

  useEffect(() => {
    initializeSystem()
  }, [])

  const initializeSystem = async () => {
    try {
      const data = await system.initialize()
      setSystemData(data)
      setStatus('OPERATIONAL')
    } catch (error) {
      setStatus('ERROR')
    }
  }

  return (
    <div className="container">
      <div className="page-content">
        <h1 className="page-title text-gradient">eSIM Profile Management System</h1>
        
        <div className="glass-panel p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-accent">System Status</h2>
            <div className={`text-lg font-mono ${status === 'OPERATIONAL' ? 'text-green-400' : 'text-yellow-400'}`}>
              {status}
            </div>
          </div>
          
          {systemData && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-panel p-4">
                <h3 className="font-bold text-accent mb-2">Zero Trust Security</h3>
                <div className="text-green-400">{systemData.zeroTrust}</div>
              </div>
              
              <div className="glass-panel p-4">
                <h3 className="font-bold text-accent mb-2">Carrier Integration</h3>
                <div className="text-sm space-y-1">
                  {systemData.carriers.map(carrier => (
                    <div key={carrier} className="text-green-400">{carrier}: CONNECTED</div>
                  ))}
                </div>
              </div>
              
              <div className="glass-panel p-4">
                <h3 className="font-bold text-accent mb-2">MDM Integration</h3>
                <div className="text-green-400">{systemData.mdmIntegration}</div>
              </div>
              
              <div className="glass-panel p-4">
                <h3 className="font-bold text-accent mb-2">Profile Management</h3>
                <div className="text-green-400">{systemData.profileManagement}</div>
              </div>
              
              <div className="glass-panel p-4">
                <h3 className="font-bold text-accent mb-2">Security Status</h3>
                <div className="text-green-400">{systemData.security}</div>
              </div>
            </div>
          )}
        </div>

        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold text-accent mb-4">Architecture Overview</h3>
          <div className="text-accent/80 space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Enterprise Security Layer</h4>
              <p>Cloudflare Zero Trust + Enterprise MDM + ePM Portal + API Gateway</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Core Platform</h4>
              <p>Profile Manager + Carrier Integration Hub + Audit & Reporting</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Carrier Layer</h4>
              <p>MPT GSMA SM-DP+ + ATOM GSMA SM-DP+ + U9 GSMA SM-DP+ + MYTEL GSMA SM-DP+</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Device Layer</h4>
              <p>Corporate Devices + BYOD Devices + IoT Devices (All with WARP Client)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ePMDashboard