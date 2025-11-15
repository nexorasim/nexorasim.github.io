import React from 'react'
import { Card, CardHeader, Badge } from '@fluentui/react-components'

const Devices = () => {
  return (
    <div className="devices-page">
      <section className="hero-section parallax-section">
        <div className="section-content">
          <div className="hero-content">
            <Badge appearance="filled" color="brand" size="large">
              Device Showcase
            </Badge>
            <h1 className="hero-title">Premium Device Support</h1>
            <p className="hero-subtitle">
              Compatible with iPhone 18 Pro Max, iPad Pro M6, 
              Vision Pro 4, Surface Pro 12, and all modern devices
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Devices