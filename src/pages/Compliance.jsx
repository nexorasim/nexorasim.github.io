import React, { useEffect } from 'react'

const Compliance = () => {
  useEffect(() => {
    document.title = 'Compliance - NexoraSIM Entitlements Server'
    
    const updateMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }
    
    updateMeta('description', 'NexoraSIM compliance standards for enterprise eSIM platform. Security, regulatory compliance, and data protection for Myanmar telecommunications.')
    updateMeta('keywords', 'eSIM compliance Myanmar, telecommunications compliance, enterprise security standards, data protection Myanmar')
  }, [])

  return (
    <div className="container">
      <div className="page-content">
        <div className="breadcrumb">
          <span className="breadcrumb-item">Home</span>
          <span className="breadcrumb-item">main</span>
          <span className="breadcrumb-item active">Compliance</span>
        </div>
        
        <h1 className="page-title text-gradient">Compliance</h1>
        
        <div className="content-body">
          <h2>Welcome to Compliance</h2>
          <p>This page provides comprehensive information about compliance. Our platform offers cutting-edge solutions for eSIM technology and IoT connectivity across Myanmar.</p>
          
          <h3>Key Features</h3>
          <ul>
            <li>Advanced eSIM provisioning and management</li>
            <li>Multi-operator support (MPT, MYTEL, ATOM, U9)</li>
            <li>Real-time monitoring and analytics</li>
            <li>Enterprise-grade security</li>
            <li>Scalable cloud infrastructure</li>
          </ul>
          
          <h3>Getting Started</h3>
          <p>To learn more about our services, please visit our <a href="/docs">documentation</a> or <a href="/contact">contact our team</a> for personalized assistance.</p>
        </div>
      </div>
    </div>
  )
}

export default Compliance