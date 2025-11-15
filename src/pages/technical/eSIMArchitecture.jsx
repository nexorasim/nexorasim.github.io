import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardHeader, CardPreview, Badge } from '@fluentui/react-components'
import { Shield24Regular, Server24Regular, CloudSync24Regular, Settings24Regular } from '@fluentui/react-icons'

const eSIMArchitecture = () => {
  return (
    <div className="technical-page">
      <section className="hero-section parallax-section">
        <div className="section-content">
          <div className="hero-content">
            <Badge appearance="filled" color="brand" size="large">
              Technical Deep-Dive
            </Badge>
            <h1 className="hero-title">eSIM Architecture</h1>
            <p className="hero-subtitle">
              Comprehensive technical overview of eSIM architecture, GSMA standards, and implementation details
            </p>
            <div className="hero-actions">
              <Button appearance="primary" size="large" as={Link} to="/tech/gsma-standards">
                GSMA Standards
              </Button>
              <Button appearance="outline" size="large" as={Link} to="/tech/sm-dp-plus">
                SM-DP+ Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="architecture-section parallax-section">
        <div className="section-content">
          <h2 className="section-title">eSIM System Components</h2>
          <div className="architecture-grid">
            <Card className="architecture-card glass-card">
              <CardHeader>
                <div className="architecture-icon">
                  <Server24Regular />
                </div>
                <h3>SM-DP+ Server</h3>
              </CardHeader>
              <CardPreview>
                <p>Subscription Manager Data Preparation server for profile creation and management</p>
                <div className="tech-specs">
                  <Badge appearance="outline">Profile Generation</Badge>
                  <Badge appearance="outline">Encryption</Badge>
                  <Badge appearance="outline">GSMA Compliant</Badge>
                </div>
              </CardPreview>
            </Card>

            <Card className="architecture-card glass-card">
              <CardHeader>
                <div className="architecture-icon">
                  <CloudSync24Regular />
                </div>
                <h3>SM-SR Server</h3>
              </CardHeader>
              <CardPreview>
                <p>Subscription Manager Secure Routing for profile delivery and lifecycle management</p>
                <div className="tech-specs">
                  <Badge appearance="outline">Profile Delivery</Badge>
                  <Badge appearance="outline">Remote Management</Badge>
                  <Badge appearance="outline">Security</Badge>
                </div>
              </CardPreview>
            </Card>

            <Card className="architecture-card glass-card">
              <CardHeader>
                <div className="architecture-icon">
                  <Settings24Regular />
                </div>
                <h3>eUICC Chip</h3>
              </CardHeader>
              <CardPreview>
                <p>Embedded Universal Integrated Circuit Card with secure element capabilities</p>
                <div className="tech-specs">
                  <Badge appearance="outline">Secure Element</Badge>
                  <Badge appearance="outline">Multi-Profile</Badge>
                  <Badge appearance="outline">Tamper Resistant</Badge>
                </div>
              </CardPreview>
            </Card>

            <Card className="architecture-card glass-card">
              <CardHeader>
                <div className="architecture-icon">
                  <Shield24Regular />
                </div>
                <h3>LPA Client</h3>
              </CardHeader>
              <CardPreview>
                <p>Local Profile Assistant for device-side profile management and user interface</p>
                <div className="tech-specs">
                  <Badge appearance="outline">Profile Management</Badge>
                  <Badge appearance="outline">User Interface</Badge>
                  <Badge appearance="outline">Device Integration</Badge>
                </div>
              </CardPreview>
            </Card>
          </div>
        </div>
      </section>

      <section className="standards-section parallax-section">
        <div className="section-content">
          <h2 className="section-title">GSMA Standards Compliance</h2>
          <div className="standards-grid">
            <Card className="standards-card glass-card">
              <CardHeader>
                <h3>RSP Technical Specification</h3>
              </CardHeader>
              <CardPreview>
                <p>Remote SIM Provisioning architecture and protocols</p>
                <ul>
                  <li>SGP.21 - Architecture</li>
                  <li>SGP.22 - Technical Requirements</li>
                  <li>SGP.23 - API Specification</li>
                </ul>
              </CardPreview>
            </Card>

            <Card className="standards-card glass-card">
              <CardHeader>
                <h3>Security Framework</h3>
              </CardHeader>
              <CardPreview>
                <p>End-to-end security and cryptographic requirements</p>
                <ul>
                  <li>PKI Infrastructure</li>
                  <li>Certificate Management</li>
                  <li>Secure Channels</li>
                </ul>
              </CardPreview>
            </Card>
          </div>
        </div>
      </section>

      <section className="cta-section parallax-section">
        <div className="section-content">
          <div className="cta-content glass-morphism">
            <h2>Explore eSIM Implementation</h2>
            <p>Deep dive into technical specifications and implementation guides</p>
            <div className="cta-actions">
              <Button appearance="primary" size="large" as={Link} to="/tech/profile-lifecycle">
                Profile Lifecycle
              </Button>
              <Button appearance="outline" size="large" as={Link} to="/api">
                API Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .architecture-grid,
        .standards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-xl);
        }

        .architecture-card,
        .standards-card {
          padding: var(--space-xl);
        }

        .architecture-icon {
          font-size: 2.5rem;
          color: var(--accent);
          margin-bottom: var(--space-md);
        }

        .tech-specs {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          margin-top: var(--space-md);
        }

        .standards-card ul {
          list-style: none;
          padding: 0;
        }

        .standards-card li {
          padding: var(--space-xs) 0;
          border-bottom: 1px solid var(--glass);
        }

        .standards-card li:last-child {
          border-bottom: none;
        }
      `}</style>
    </div>
  )
}

export default eSIMArchitecture