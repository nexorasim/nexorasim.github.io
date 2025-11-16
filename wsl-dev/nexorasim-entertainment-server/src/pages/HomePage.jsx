import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardHeader, CardPreview } from '@fluentui/react-components'
import { ArrowRight24Regular, Play24Regular, Shield24Regular, Globe24Regular, CloudSync24Regular } from '@fluentui/react-icons'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Box } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
    </group>
  )
}

const HomePage = () => {
  const heroRef = useRef()
  const featuresRef = useRef()

  useEffect(() => {
    gsap.fromTo('.hero-title', 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    
    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
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

  const features = [
    {
      icon: <CloudSync24Regular />,
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
    }
  ]

  return (
    <div className="home-page">
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

        .hero-actions {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
          margin-top: var(--space-xl);
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          text-align: center;
          margin-bottom: var(--space-2xl);
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

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default HomePage