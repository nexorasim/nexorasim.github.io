import React from 'react'
import { Card, CardHeader, Badge } from '@fluentui/react-components'

const API = () => (
  <div className="page">
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
        </div>
      </div>
    </section>
  </div>
)

export default API