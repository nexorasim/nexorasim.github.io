import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardHeader, CardPreview, Badge } from '@fluentui/react-components'
import { Server24Regular, Shield24Regular, Globe24Regular, CloudSync24Regular } from '@fluentui/react-icons'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EntitlementServer = () => {
  const heroRef = useRef()
  const featuresRef = useRef()
  const architectureRef = useRef()

  useEffect(() => {
    gsap.fromTo('.hero-title', 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    
    ScrollTrigger.create({
      trigger: featuresRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo('.feature-card', 
          { opacity: 0, y: 50, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        )
      }
    })

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }, [])

  const coreFeatures = [
    {
      icon: <Server24Regular />,
      title: 'Enterprise eSIM Management',
      description: 'Complete lifecycle management for eSIM profiles across MPT, MYTEL, ATOM, and U9 networks',
      status: 'Production Ready',
      coverage: '95% Myanmar Coverage'
    },
    {
      icon: <Shield24Regular />,
      title: 'Zero Trust Security',
      description: 'Enterprise-grade security with Cloudflare integration and Microsoft Defender protection',
      status: 'Fully Secured',
      coverage: 'SOC 2 Compliant'
    },
    {
      icon: <Globe24Regular />,
      title: 'Global Roaming Platform',
      description: 'Seamless connectivity across ASEAN and worldwide with real-time network optimization',
      status: 'ASEAN Ready',
      coverage: '200+ Countries'
    },
    {
      icon: <Server24Regular />,
      title: '5G Entertainment Streaming',
      description: 'Premium streaming optimization with VoLTE HD voice clarity and network slicing',
      status: '5G Optimized',
      coverage: 'Ultra-Low Latency'
    },
    {
      icon: <CloudSync24Regular />,
      title: 'Real-time Device Analytics',
      description: 'Live device management with Microsoft Graph integration and Power BI dashboards',
      status: 'Live Monitoring',
      coverage: '99.9% Uptime SLA'
    },
    {
      icon: <Server24Regular />,
      title: 'API-First Architecture',
      description: 'RESTful API with comprehensive documentation and Microsoft Graph Toolkit integration',
      status: '45 Endpoints',
      coverage: '1000 req/min'
    }
  ]

  const networkOperators = [
    {
      name: 'MPT Myanmar',
      logo: '🇲🇲',
      coverage: '95%',
      technology: '4G/5G',
      subscribers: '20M+',
      status: 'Operational',
      color: '#FF6B35'
    },
    {
      name: 'MYTEL',
      logo: '📱',
      coverage: '90%',
      technology: '4G/5G',
      subscribers: '15M+',
      status: 'Operational',
      color: '#4ECDC4'
    },
    {
      name: 'ATOM',
      logo: '⚛️',
      coverage: '85%',
      technology: '4G/NB-IoT',
      subscribers: '8M+',
      status: 'Operational',
      color: '#45B7D1'
    },
    {
      name: 'U9 Network',
      logo: '🔗',
      coverage: '80%',
      technology: '4G/LTE-M',
      subscribers: '5M+',
      status: 'Operational',
      color: '#96CEB4'
    }
  ]

  const architectureLayers = [
    {
      layer: 'Presentation Layer',
      components: ['React 18 + Vite', 'Microsoft Graph Toolkit', 'Fluent UI Components', 'iOS 26 Design'],
      description: 'Premium user interface with glassmorphism and 3D animations'
    },
    {
      layer: 'API Gateway Layer',
      components: ['Azure API Management', 'OAuth 2.0 + Entra ID', 'Rate Limiting', 'Request Validation'],
      description: 'Enterprise API gateway with Microsoft security integration'
    },
    {
      layer: 'Business Logic Layer',
      components: ['Profile Lifecycle', 'Network Orchestration', 'Real-time Analytics', 'AI Optimization'],
      description: 'Core eSIM management and entertainment server logic'
    },
    {
      layer: 'Integration Layer',
      components: ['SM-DP+ Connectors', 'Operator APIs', 'Cloudflare Zero Trust', 'Microsoft Graph'],
      description: 'Secure integration with telecom operators and Microsoft services'
    },
    {
      layer: 'Data Layer',
      components: ['Azure SQL Hyperscale', 'Cosmos DB', 'Key Vault', 'Application Insights'],
      description: 'Scalable data storage with enterprise security and monitoring'
    }
  ]

  return (
    <div className="entitlement-server-page">
      {/* Hero Section */}
      <section className="hero-section parallax-section" ref={heroRef}>
        <div className="section-content">
          <div className="hero-content">
            <Badge appearance="filled" color="brand" size="large">
              Enterprise eSIM Platform
            </Badge>
            <h1 className="hero-title">NexoraSIM Entitlement Server</h1>
            <p className="hero-subtitle">
              Enterprise-grade eSIM Profile Management platform powering premium entertainment 
              streaming across Myanmar's leading networks with Microsoft-only architecture
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50M+</div>
                <div className="stat-label">Users Ready</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Myanmar Coverage</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">45</div>
                <div className="stat-label">API Endpoints</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
            </div>
            <div className="hero-actions">
              <Button appearance="primary" size="large" as={Link} to="/api">
                Explore API
              </Button>
              <Button appearance="outline" size="large" as={Link} to="/architecture">
                View Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="features-section parallax-section" ref={featuresRef}>
        <div className="section-content">
          <h2 className="section-title">Platform Capabilities</h2>
          <div className="features-grid">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="feature-card glass-card">
                <CardHeader>
                  <div className="feature-header">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-badges">
                      <Badge appearance="filled" color="success">{feature.status}</Badge>
                      <Badge appearance="outline">{feature.coverage}</Badge>
                    </div>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                </CardHeader>
                <CardPreview>
                  <p className="feature-description">{feature.description}</p>
                </CardPreview>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Network Operators */}
      <section className="operators-section parallax-section">
        <div className="section-content">
          <h2 className="section-title">Supported Network Operators</h2>
          <div className="operators-grid">
            {networkOperators.map((operator, index) => (
              <Card key={index} className="operator-card glass-card">
                <CardHeader>
                  <div className="operator-header">
                    <div className="operator-logo">{operator.logo}</div>
                    <div className="operator-status">
                      <div className="status-dot active"></div>
                      <span>{operator.status}</span>
                    </div>
                  </div>
                  <h3 className="operator-name" style={{ color: operator.color }}>
                    {operator.name}
                  </h3>
                </CardHeader>
                <CardPreview>
                  <div className="operator-stats">
                    <div className="stat">
                      <span className="stat-label">Coverage</span>
                      <span className="stat-value">{operator.coverage}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Technology</span>
                      <span className="stat-value">{operator.technology}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Subscribers</span>
                      <span className="stat-value">{operator.subscribers}</span>
                    </div>
                  </div>
                </CardPreview>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="architecture-section parallax-section" ref={architectureRef}>
        <div className="section-content">
          <h2 className="section-title">Microsoft-Only Architecture</h2>
          <div className="architecture-layers">
            {architectureLayers.map((layer, index) => (
              <div key={index} className="architecture-layer glass-card">
                <div className="layer-header">
                  <h3 className="layer-title">{layer.layer}</h3>
                  <p className="layer-description">{layer.description}</p>
                </div>
                <div className="layer-components">
                  {layer.components.map((component, compIndex) => (
                    <Badge key={compIndex} appearance="outline" className="component-badge">
                      {component}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section parallax-section">
        <div className="section-content">
          <div className="cta-content glass-morphism">
            <h2>Ready to Scale Your eSIM Platform?</h2>
            <p>Join the enterprise-grade eSIM revolution with Microsoft-powered infrastructure</p>
            <div className="cta-actions">
              <Button appearance="primary" size="large" as={Link} to="/enterprise">
                Enterprise Demo
              </Button>
              <Button appearance="outline" size="large" as={Link} to="/contact">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .entitlement-server-page {
          min-height: 100vh;
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin: var(--space-lg) 0;
          background: linear-gradient(135deg, var(--black) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: var(--graphite);
          margin-bottom: var(--space-xl);
          line-height: 1.6;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: var(--space-lg);
          margin: var(--space-xl) 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent);
          display: block;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--graphite);
          margin-top: var(--space-xs);
        }

        .hero-actions {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
          margin-top: var(--space-xl);
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          text-align: center;
          margin-bottom: var(--space-2xl);
          color: var(--black);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-xl);
        }

        .feature-card {
          padding: var(--space-xl);
        }

        .feature-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-md);
        }

        .feature-icon {
          font-size: 2.5rem;
          color: var(--accent);
        }

        .feature-badges {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          align-items: flex-end;
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: var(--space-md);
          color: var(--black);
        }

        .feature-description {
          color: var(--graphite);
          line-height: 1.6;
        }

        .operators-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-lg);
        }

        .operator-card {
          padding: var(--space-lg);
        }

        .operator-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }

        .operator-logo {
          font-size: 2rem;
        }

        .operator-status {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: 0.85rem;
          color: var(--graphite);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
        }

        .status-dot.active {
          animation: pulse 2s infinite;
        }

        .operator-name {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: var(--space-md);
        }

        .operator-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
        }

        .stat {
          text-align: center;
        }

        .stat-label {
          display: block;
          font-size: 0.8rem;
          color: var(--graphite);
          margin-bottom: var(--space-xs);
        }

        .stat-value {
          display: block;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--black);
        }

        .architecture-layers {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
          max-width: 800px;
          margin: 0 auto;
        }

        .architecture-layer {
          padding: var(--space-xl);
        }

        .layer-header {
          margin-bottom: var(--space-lg);
        }

        .layer-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-sm);
        }

        .layer-description {
          color: var(--graphite);
          line-height: 1.5;
        }

        .layer-components {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        .component-badge {
          font-size: 0.85rem;
        }

        .cta-content {
          text-align: center;
          padding: var(--space-3xl);
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: var(--space-lg);
          color: var(--black);
        }

        .cta-content p {
          font-size: 1.2rem;
          color: var(--graphite);
          margin-bottom: var(--space-xl);
        }

        .cta-actions {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-actions,
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .features-grid,
          .operators-grid {
            grid-template-columns: 1fr;
          }

          .operator-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default EntitlementServer