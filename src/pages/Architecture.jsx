import React from 'react'
import { Card, CardHeader, Badge } from '@fluentui/react-components'

const Architecture = () => {
  return (
    <div className="architecture-page">
      <section className="hero-section parallax-section">
        <div className="section-content">
          <div className="hero-content">
            <Badge appearance="filled" color="brand" size="large">
              System Architecture
            </Badge>
            <h1 className="hero-title">Live Animated Architecture</h1>
            <p className="hero-subtitle">
              Microsoft-only architecture with Azure Static Web Apps, 
              Cloudflare Zero Trust, and real-time monitoring
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Architecture