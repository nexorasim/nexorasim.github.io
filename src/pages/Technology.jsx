import React from 'react'
import { Card, CardHeader, Badge } from '@fluentui/react-components'

const Technology = () => {
  return (
    <div className="technology-page">
      <section className="hero-section parallax-section">
        <div className="section-content">
          <div className="hero-content">
            <Badge appearance="filled" color="brand" size="large">
              Technology Stack
            </Badge>
            <h1 className="hero-title">eSIM Technology</h1>
            <p className="hero-subtitle">
              Advanced eSIM technology with GSMA standards, 
              SM-DP+ integration, and entertainment server optimization
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technology