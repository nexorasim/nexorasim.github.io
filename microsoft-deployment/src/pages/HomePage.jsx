import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardHeader, CardPreview } from '@fluentui/react-components'
import { ArrowRight24Regular, Play24Regular, Shield24Regular, Globe24Regular, Cellular24Regular, CloudSync24Regular } from '@fluentui/react-icons'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Text3D } from '@react-three/drei'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 3D Background Component
const ThreeBackground = () => {
  const groupRef = useRef()

  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
      })
    }
  }, [])

  return (
    <group ref={groupRef}>
      {/* Floating eSIM Cards */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Box
          key={i}
          position={[
            Math.sin(i * 0.5) * 8,
            Math.cos(i * 0.3) * 4,
            Math.sin(i * 0.7) * 6
          ]}
          scale={[0.3, 0.2, 0.02]}
          rotation={[i * 0.2, i * 0.3, i * 0.1]}
        >
          <meshStandardMaterial color="#00D1FF" transparent opacity={0.7} />
        </Box>
      ))}
      
      {/* Network Nodes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Sphere
          key={i}
          position={[
            Math.cos(i * 0.8) * 10,
            Math.sin(i * 0.6) * 5,
            Math.cos(i * 0.4) * 8
          ]}
          scale={0.1}
        >
          <meshStandardMaterial color="#F5F5F5" emissive="#00D1FF" emissiveIntensity={0.3} />
        </Sphere>
      ))}
      
      {/* Data Streams */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Box
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 15
          ]}
          scale={[0.05, 0.05, Math.random() * 2 + 1]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
        >
          <meshStandardMaterial color="#333333" transparent opacity={0.4} />
        </Box>
      ))}
    </group>
  )
}

const HomePage = () => {
  const heroRef = useRef()
  const featuresRef = useRef()
  const statsRef = useRef()

  useEffect(() => {
    // Hero animations
    gsap.fromTo('.hero-title', 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    
    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    )
    
    gsap.fromTo('.hero-actions', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' }
    )

    // Scroll-triggered animations
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

    ScrollTrigger.create({
      trigger: statsRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo('.stat-number', 
          { textContent: 0 },
          { 
            textContent: (i, target) => target.getAttribute('data-value'),
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            stagger: 0.2
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const features = [
    {
      icon: <Cellular24Regular />,
      title: 'Multi-Operator eSIM',
      description: 'MPT, MYTEL, ATOM, U9 networks with 95% Myanmar coverage',
      link: '/features'
    },
    {
      icon: <Play24Regular />,
      title: '5G Entertainment',
      description: 'Premium streaming with VoLTE HD voice clarity',
      link: '/5g'
    },
    {
      icon: <Shield24Regular />,
      title: 'Zero Trust Security',
      description: 'Enterprise-grade security with Cloudflare integration',
      link: '/security'
    },
    {
      icon: <Globe24Regular />,
      title: 'Global Roaming',
      description: 'Seamless connectivity across ASEAN and worldwide',
      link: '/roaming'
    },
    {
      icon: <CloudSync24Regular />,
      title: 'Real-time Management',
      description: 'Live device analytics and profile lifecycle control',
      link: '/enterprise'
    }
  ]

  const stats = [
    { value: 50, label: 'Million Users', suffix: 'M+' },
    { value: 95, label: 'Network Coverage', suffix: '%' },
    { value: 45, label: 'API Endpoints', suffix: '' },
    { value: 99.9, label: 'Uptime SLA', suffix: '%' }
  ]

  const networks = [
    { name: 'MPT', coverage: '95%', tech: '4G/5G', color: '#FF6B35' },
    { name: 'MYTEL', coverage: '90%', tech: '4G/5G', color: '#4ECDC4' },
    { name: 'ATOM', coverage: '85%', tech: '4G/NB-IoT', color: '#45B7D1' },
    { name: 'U9', coverage: '80%', tech: '4G/LTE-M', color: '#96CEB4' }
  ]

  return (
    <div className="home-page">
      {/* 3D Hero Section */}
      <section className="hero-3d" ref={heroRef}>
        <Canvas className="three-canvas">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <ThreeBackground />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
        
        <div className="hero-content">
          <h1 className="hero-title">NexoraSIM Entertainment Server</h1>
          <p className="hero-subtitle">
            Enterprise eSIM platform powering premium streaming across Myanmar's leading networks
          </p>
          <div className="hero-actions">
            <Button appearance="primary" size="large" as={Link} to="/entitlement-server">
              Explore Platform
              <ArrowRight24Regular />
            </Button>
            <Button appearance="outline" size="large" as={Link} to="/api">
              API Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Network Status */}
      <section className="network-status parallax-section">
        <div className="section-content">
          <h2 className="section-title">Live Network Status</h2>
          <div className="network-grid">
            {networks.map((network, index) => (
              <Card key={index} className="network-card glass-card">
                <CardHeader>
                  <div className="network-info">
                    <div className="network-name" style={{ color: network.color }}>
                      {network.name}
                    </div>
                    <div className="network-status-indicator">
                      <div className="status-dot active"></div>
                      <span>Operational</span>
                    </div>
                  </div>
                </CardHeader>
                <CardPreview>
                  <div className="network-stats">
                    <div className="stat">
                      <span className="stat-label">Coverage</span>
                      <span className="stat-value">{network.coverage}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Technology</span>
                      <span className="stat-value">{network.tech}</span>
                    </div>
                  </div>
                </CardPreview>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section parallax-section" ref={featuresRef}>
        <div className="section-content">
          <h2 className="section-title">Platform Capabilities</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card glass-card" as={Link} to={feature.link}>
                <CardHeader>
                  <div className="feature-icon">{feature.icon}</div>
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

      {/* Statistics */}
      <section className="stats-section parallax-section" ref={statsRef}>
        <div className="section-content">
          <h2 className="section-title">Platform Scale</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item glass-card">
                <div className="stat-number" data-value={stat.value}>0</div>
                <div className="stat-suffix">{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section parallax-section">
        <div className="section-content">
          <div className="cta-content glass-morphism">
            <h2>Ready to Transform Your eSIM Experience?</h2>
            <p>Join 50+ million users across ASEAN enjoying premium eSIM services</p>
            <div className="cta-actions">
              <Button appearance="primary" size="large" as={Link} to="/enterprise">
                Enterprise Solutions
              </Button>
              <Button appearance="outline" size="large" as={Link} to="/contact">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          min-height: 100vh;
        }

        .hero-3d {
          height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .three-canvas {
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 800px;
          padding: var(--space-2xl);
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 700;
          margin-bottom: var(--space-lg);
          background: linear-gradient(135deg, var(--black) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          color: var(--graphite);
          margin-bottom: var(--space-xl);
          font-weight: 400;
        }

        .hero-actions {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          text-align: center;
          margin-bottom: var(--space-2xl);
          color: var(--black);
        }

        .network-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-lg);
        }

        .network-card {
          padding: var(--space-lg);
          text-decoration: none;
          color: inherit;
        }

        .network-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }

        .network-name {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .network-status-indicator {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: 0.9rem;
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

        .network-stats {
          display: flex;
          justify-content: space-between;
        }

        .stat {
          text-align: center;
        }

        .stat-label {
          display: block;
          font-size: 0.85rem;
          color: var(--graphite);
          margin-bottom: var(--space-xs);
        }

        .stat-value {
          display: block;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--black);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-lg);
        }

        .feature-card {
          padding: var(--space-xl);
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .feature-icon {
          font-size: 2rem;
          color: var(--accent);
          margin-bottom: var(--space-md);
        }

        .feature-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: var(--space-md);
          color: var(--black);
        }

        .feature-description {
          color: var(--graphite);
          line-height: 1.6;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-lg);
        }

        .stat-item {
          padding: var(--space-xl);
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: var(--accent);
          display: inline;
        }

        .stat-suffix {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent);
          display: inline;
        }

        .stat-label {
          display: block;
          font-size: 1rem;
          color: var(--graphite);
          margin-top: var(--space-sm);
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
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .network-grid,
          .features-grid,
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  )
}

export default HomePage