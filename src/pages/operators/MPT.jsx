import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardHeader, CardPreview, Badge } from '@fluentui/react-components'
import { Signal24Regular, Globe24Regular, Phone24Regular, Building24Regular } from '@fluentui/react-icons'

const MPT = () => {
  return (
    <div className="operator-page">
      <section className="hero-section parallax-section">
        <div className="section-content">
          <div className="hero-content">
            <Badge appearance="filled" color="brand" size="large">
              Network Operator
            </Badge>
            <h1 className="hero-title">MPT Myanmar</h1>
            <p className="hero-subtitle">
              Myanmar Posts and Telecommunications - Leading eSIM provider with 95% nationwide coverage
            </p>
            <div className="hero-actions">
              <Button appearance="primary" size="large" as={Link} to="/operators/mpt/coverage">
                View Coverage
              </Button>
              <Button appearance="outline" size="large" as={Link} to="/operators/mpt/plans">
                eSIM Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section parallax-section">
        <div className="section-content">
          <h2 className="section-title">MPT Network Features</h2>
          <div className="features-grid">
            <Card className="feature-card glass-card">
              <CardHeader>
                <div className="feature-icon">
                  <Signal24Regular />
                </div>
                <h3>95% Coverage</h3>
              </CardHeader>
              <CardPreview>
                <p>Nationwide network coverage across Myanmar with premium eSIM support</p>
              </CardPreview>
            </Card>

            <Card className="feature-card glass-card">
              <CardHeader>
                <div className="feature-icon">
                  <Globe24Regular />
                </div>
                <h3>5G Ready</h3>
              </CardHeader>
              <CardPreview>
                <p>Next-generation 5G network infrastructure for premium streaming</p>
              </CardPreview>
            </Card>

            <Card className="feature-card glass-card">
              <CardHeader>
                <div className="feature-icon">
                  <Phone24Regular />
                </div>
                <h3>VoLTE HD</h3>
              </CardHeader>
              <CardPreview>
                <p>Crystal clear HD voice calls with VoLTE technology</p>
              </CardPreview>
            </Card>

            <Card className="feature-card glass-card">
              <CardHeader>
                <div className="feature-icon">
                  <Building24Regular />
                </div>
                <h3>Enterprise</h3>
              </CardHeader>
              <CardPreview>
                <p>Dedicated enterprise solutions for business customers</p>
              </CardPreview>
            </Card>
          </div>
        </div>
      </section>

      <section className="cta-section parallax-section">
        <div className="section-content">
          <div className="cta-content glass-morphism">
            <h2>Ready to Experience MPT eSIM?</h2>
            <p>Join millions of customers on Myanmar's most reliable network</p>
            <div className="cta-actions">
              <Button appearance="primary" size="large" as={Link} to="/operators/mpt/enterprise">
                Enterprise Solutions
              </Button>
              <Button appearance="outline" size="large" as={Link} to="/contact">
                Contact MPT
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MPT