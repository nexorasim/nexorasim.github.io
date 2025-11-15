import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardHeader, CardPreview, Badge } from '@fluentui/react-components'
import { Phone24Regular, Globe24Regular, Server24Regular, Shield24Regular } from '@fluentui/react-icons'

const Telecommunications = () => {
  return (
    <div className="industry-page">
      <section className="hero-section parallax-section">
        <div className="section-content">
          <div className="hero-content">
            <Badge appearance="filled" color="brand" size="large">
              Industry Solutions
            </Badge>
            <h1 className="hero-title">Telecommunications</h1>
            <p className="hero-subtitle">
              Comprehensive eSIM solutions for telecommunications operators and service providers
            </p>
            <div className="hero-actions">
              <Button appearance="primary" size="large" as={Link} to="/operators/mpt">
                Operator Solutions
              </Button>
              <Button appearance="outline" size="large" as={Link} to="/enterprise">
                Enterprise Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-section parallax-section">
        <div className="section-content">
          <h2 className="section-title">Telecom Industry Solutions</h2>
          <div className="solutions-grid">
            <Card className="solution-card glass-card">
              <CardHeader>
                <div className="solution-icon">
                  <Phone24Regular />
                </div>
                <h3>Mobile Network Operators</h3>
              </CardHeader>
              <CardPreview>
                <p>Complete eSIM platform for MNOs with profile management and subscriber services</p>
                <div className="solution-features">
                  <Badge appearance="outline">Profile Provisioning</Badge>
                  <Badge appearance="outline">Subscriber Management</Badge>
                  <Badge appearance="outline">Billing Integration</Badge>
                </div>
              </CardPreview>
            </Card>

            <Card className="solution-card glass-card">
              <CardHeader>
                <div className="solution-icon">
                  <Globe24Regular />
                </div>
                <h3>MVNOs & Service Providers</h3>
              </CardHeader>
              <CardPreview>
                <p>Flexible eSIM solutions for Mobile Virtual Network Operators and service providers</p>
                <div className="solution-features">
                  <Badge appearance="outline">White Label</Badge>
                  <Badge appearance="outline">API Integration</Badge>
                  <Badge appearance="outline">Multi-Tenant</Badge>
                </div>
              </CardPreview>
            </Card>

            <Card className="solution-card glass-card">
              <CardHeader>
                <div className="solution-icon">
                  <Server24Regular />
                </div>
                <h3>Infrastructure Providers</h3>
              </CardHeader>
              <CardPreview>
                <p>Backend infrastructure and platform services for telecom ecosystem partners</p>
                <div className="solution-features">
                  <Badge appearance="outline">SM-DP+ Platform</Badge>
                  <Badge appearance="outline">Cloud Infrastructure</Badge>
                  <Badge appearance="outline">Scalable Architecture</Badge>
                </div>
              </CardPreview>
            </Card>

            <Card className="solution-card glass-card">
              <CardHeader>
                <div className="solution-icon">
                  <Shield24Regular />
                </div>
                <h3>Security & Compliance</h3>
              </CardHeader>
              <CardPreview>
                <p>Enterprise-grade security and regulatory compliance for telecom operations</p>
                <div className="solution-features">
                  <Badge appearance="outline">GSMA Certified</Badge>
                  <Badge appearance="outline">Zero Trust</Badge>
                  <Badge appearance="outline">Audit Ready</Badge>
                </div>
              </CardPreview>
            </Card>
          </div>
        </div>
      </section>

      <section className="cta-section parallax-section">
        <div className="section-content">
          <div className="cta-content glass-morphism">
            <h2>Transform Your Telecom Operations</h2>
            <p>Join leading operators using NexoraSIM for next-generation eSIM services</p>
            <div className="cta-actions">
              <Button appearance="primary" size="large" as={Link} to="/contact">
                Schedule Demo
              </Button>
              <Button appearance="outline" size="large" as={Link} to="/partners">
                Partner Program
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Telecommunications