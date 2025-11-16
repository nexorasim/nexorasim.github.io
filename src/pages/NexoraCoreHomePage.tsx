/**
 * NexoraCore Home Page
 * Complete Microsoft-only landing page with 3D hero and real-time features
 */

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardPreview, 
  Badge,
  ProgressBar,
  Spinner
} from '@fluentui/react-components';
import { 
  Shield24Regular,
  Globe24Regular,
  CloudSync24Regular,
  Server24Regular,
  Phone24Regular,
  Wifi124Regular,
  ArrowRight24Regular,
  Play24Regular
} from '@fluentui/react-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NexoraCore3DHero from '../components/NexoraCore3DHero';

gsap.registerPlugin(ScrollTrigger);

interface NetworkStats {
  coverage: number;
  users: number;
  uptime: number;
  speed: number;
}

interface CapabilityFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  badge?: string;
  category: 'esim' | 'network' | 'enterprise' | 'security';
}

const capabilities: CapabilityFeature[] = [
  {
    id: 'esim-transfer',
    title: 'eSIM Transfer Android → Apple',
    description: 'Seamless cross-platform eSIM transfer with Microsoft Graph integration',
    icon: <Phone24Regular />,
    badge: 'Cross-Platform',
    category: 'esim'
  },
  {
    id: 'network-auth',
    title: 'Network Authentication',
    description: 'Enterprise-grade authentication with Entra ID and Zero Trust',
    icon: <Shield24Regular />,
    badge: 'Zero Trust',
    category: 'security'
  },
  {
    id: 'global-roaming',
    title: 'Advanced Global Roaming',
    description: 'Real-time roaming across 200+ countries with Azure optimization',
    icon: <Globe24Regular />,
    badge: '200+ Countries',
    category: 'network'
  },
  {
    id: 'cloud-native',
    title: 'Cloud-native Microservices',
    description: 'Scalable architecture with Azure Functions and Service Fabric',
    icon: <CloudSync24Regular />,
    badge: 'Azure Native',
    category: 'enterprise'
  },
  {
    id: 'sm-dp-plus',
    title: 'SM-DP+ Integration',
    description: 'GSMA-compliant subscription management with carrier bundles',
    icon: <Server24Regular />,
    badge: 'GSMA Certified',
    category: 'enterprise'
  },
  {
    id: '5g-integration',
    title: '5G Network Integration',
    description: 'Next-generation 5G with VoLTE HD and network slicing',
    icon: <Wifi124Regular />,
    badge: '5G Ready',
    category: 'network'
  }
];

const networkOperators = [
  {
    name: 'MPT Myanmar',
    coverage: '95%',
    technology: '5G + VoLTE',
    status: 'Active',
    logo: '/images/operators/mpt-logo.svg'
  },
  {
    name: 'MYTEL',
    coverage: '92%',
    technology: '5G + VoLTE',
    status: 'Active',
    logo: '/images/operators/mytel-logo.svg'
  },
  {
    name: 'ATOM',
    coverage: '88%',
    technology: 'LTE + IoT',
    status: 'Active',
    logo: '/images/operators/atom-logo.svg'
  },
  {
    name: 'U9 Network',
    coverage: '85%',
    technology: 'LTE-M + NB-IoT',
    status: 'Active',
    logo: '/images/operators/u9-logo.svg'
  }
];

interface NexoraCoreHomePageProps {
  currentLanguage: string;
}

const NexoraCoreHomePage: React.FC<NexoraCoreHomePageProps> = ({ currentLanguage }) => {
  const [networkStats, setNetworkStats] = useState<NetworkStats>({
    coverage: 0,
    users: 0,
    uptime: 0,
    speed: 0
  });
  const [isStatsLoading, setIsStatsLoading] = useState(true);

  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const operatorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate real-time stats loading
    const loadStats = async () => {
      setIsStatsLoading(true);
      
      // Simulate API call to Microsoft Graph or Azure Functions
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Animate stats counting up
      const targetStats = {
        coverage: 95,
        users: 2.4,
        uptime: 99.9,
        speed: 1.2
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      for (let i = 0; i <= steps; i++) {
        setTimeout(() => {
          const progress = i / steps;
          setNetworkStats({
            coverage: Math.round(targetStats.coverage * progress),
            users: Math.round(targetStats.users * progress * 10) / 10,
            uptime: Math.round(targetStats.uptime * progress * 10) / 10,
            speed: Math.round(targetStats.speed * progress * 10) / 10
          });
        }, i * stepDuration);
      }

      setIsStatsLoading(false);
    };

    loadStats();
  }, []);

  useEffect(() => {
    // GSAP animations
    const ctx = gsap.context(() => {
      // Stats section animation
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.stat-card',
            { opacity: 0, y: 50, scale: 0.9 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              duration: 0.8, 
              stagger: 0.2, 
              ease: 'power3.out' 
            }
          );
        }
      });

      // Capabilities section animation
      ScrollTrigger.create({
        trigger: capabilitiesRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.capability-card',
            { opacity: 0, x: -50, rotationY: -15 },
            { 
              opacity: 1, 
              x: 0, 
              rotationY: 0, 
              duration: 1, 
              stagger: 0.15, 
              ease: 'power3.out' 
            }
          );
        }
      });

      // Operators section animation
      ScrollTrigger.create({
        trigger: operatorsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.operator-card',
            { opacity: 0, y: 30 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.6, 
              stagger: 0.1, 
              ease: 'power2.out' 
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const handleHeroCTA = () => {
    // Smooth scroll to capabilities section
    capabilitiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getLocalizedContent = (key: string): string => {
    const content: Record<string, Record<string, string>> = {
      heroTitle: {
        en: 'NexoraSIM Entertainment Server',
        my: 'NexoraSIM ဖျော်ဖြေရေး ဆာဗာ',
        zh: 'NexoraSIM 娱乐服务器',
        th: 'เซิร์ฟเวอร์บันเทิง NexoraSIM',
        vi: 'Máy chủ giải trí NexoraSIM',
        id: 'Server Hiburan NexoraSIM',
        ms: 'Pelayan Hiburan NexoraSIM'
      },
      heroSubtitle: {
        en: 'Premium eSIM platform for Myanmar networks with Microsoft-only architecture, 5G streaming, and enterprise-grade security',
        my: 'မြန်မာကွန်ယက်များအတွက် Microsoft-only ဗိသုကာ၊ 5G streaming နှင့် enterprise-grade လုံခြုံရေးပါရှိသော premium eSIM platform',
        zh: '面向缅甸网络的高级 eSIM 平台，采用纯 Microsoft 架构、5G 流媒体和企业级安全',
        th: 'แพลตฟอร์ม eSIM พรีเมียมสำหรับเครือข่ายพม่า พร้อมสถาปัตยกรรม Microsoft เท่านั้น การสตรีมมิ่ง 5G และความปลอดภัยระดับองค์กร',
        vi: 'Nền tảng eSIM cao cấp cho mạng Myanmar với kiến trúc chỉ Microsoft, streaming 5G và bảo mật cấp doanh nghiệp',
        id: 'Platform eSIM premium untuk jaringan Myanmar dengan arsitektur khusus Microsoft, streaming 5G, dan keamanan tingkat enterprise',
        ms: 'Platform eSIM premium untuk rangkaian Myanmar dengan seni bina Microsoft sahaja, streaming 5G, dan keselamatan gred perusahaan'
      },
      heroCTA: {
        en: 'Explore Platform',
        my: 'Platform ကို လေ့လာရန်',
        zh: '探索平台',
        th: 'สำรวจแพลตฟอร์ม',
        vi: 'Khám phá nền tảng',
        id: 'Jelajahi Platform',
        ms: 'Terokai Platform'
      }
    };

    return content[key]?.[currentLanguage] || content[key]?.['en'] || key;
  };

  return (
    <div className="nexora-home-page">
      {/* 3D Hero Section */}
      <section ref={heroRef} className="hero-section">
        <NexoraCore3DHero
          title={getLocalizedContent('heroTitle')}
          subtitle={getLocalizedContent('heroSubtitle')}
          ctaText={getLocalizedContent('heroCTA')}
          onCtaClick={handleHeroCTA}
        />
      </section>

      {/* Real-time Network Stats */}
      <section ref={statsRef} className="stats-section nexora-section">
        <div className="nexora-container">
          <h2 className="section-title">Live Network Performance</h2>
          <div className="stats-grid">
            <Card className="stat-card glass-card">
              <CardHeader>
                <div className="stat-header">
                  <Globe24Regular className="stat-icon" />
                  <Badge appearance="filled" color="success">Live</Badge>
                </div>
              </CardHeader>
              <CardPreview>
                <div className="stat-content">
                  <div className="stat-value">
                    {isStatsLoading ? <Spinner size="small" /> : `${networkStats.coverage}%`}
                  </div>
                  <div className="stat-label">Network Coverage</div>
                  <ProgressBar value={networkStats.coverage / 100} className="stat-progress" />
                </div>
              </CardPreview>
            </Card>

            <Card className="stat-card glass-card">
              <CardHeader>
                <div className="stat-header">
                  <Phone24Regular className="stat-icon" />
                  <Badge appearance="filled" color="brand">Active</Badge>
                </div>
              </CardHeader>
              <CardPreview>
                <div className="stat-content">
                  <div className="stat-value">
                    {isStatsLoading ? <Spinner size="small" /> : `${networkStats.users}M`}
                  </div>
                  <div className="stat-label">Active Users</div>
                  <ProgressBar value={networkStats.users / 5} className="stat-progress" />
                </div>
              </CardPreview>
            </Card>

            <Card className="stat-card glass-card">
              <CardHeader>
                <div className="stat-header">
                  <Server24Regular className="stat-icon" />
                  <Badge appearance="filled" color="success">Operational</Badge>
                </div>
              </CardHeader>
              <CardPreview>
                <div className="stat-content">
                  <div className="stat-value">
                    {isStatsLoading ? <Spinner size="small" /> : `${networkStats.uptime}%`}
                  </div>
                  <div className="stat-label">System Uptime</div>
                  <ProgressBar value={networkStats.uptime / 100} className="stat-progress" />
                </div>
              </CardPreview>
            </Card>

            <Card className="stat-card glass-card">
              <CardHeader>
                <div className="stat-header">
                  <Wifi124Regular className="stat-icon" />
                  <Badge appearance="filled" color="brand">5G</Badge>
                </div>
              </CardHeader>
              <CardPreview>
                <div className="stat-content">
                  <div className="stat-value">
                    {isStatsLoading ? <Spinner size="small" /> : `${networkStats.speed}Gbps`}
                  </div>
                  <div className="stat-label">Average Speed</div>
                  <ProgressBar value={networkStats.speed / 2} className="stat-progress" />
                </div>
              </CardPreview>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section ref={capabilitiesRef} className="capabilities-section nexora-section">
        <div className="nexora-container">
          <div className="section-header">
            <h2 className="section-title">Platform Capabilities</h2>
            <p className="section-subtitle">
              Enterprise-grade eSIM solutions powered by Microsoft technologies
            </p>
          </div>
          
          <div className="capabilities-grid">
            {capabilities.map((capability) => (
              <Card key={capability.id} className="capability-card glass-card">
                <CardHeader>
                  <div className="capability-header">
                    <div className="capability-icon">{capability.icon}</div>
                    {capability.badge && (
                      <Badge appearance="filled" color="brand" size="small">
                        {capability.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="capability-title">{capability.title}</h3>
                </CardHeader>
                <CardPreview>
                  <p className="capability-description">{capability.description}</p>
                  <Button
                    appearance="transparent"
                    icon={<ArrowRight24Regular />}
                    iconPosition="after"
                    className="capability-link"
                  >
                    Learn More
                  </Button>
                </CardPreview>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Network Operators */}
      <section ref={operatorsRef} className="operators-section nexora-section">
        <div className="nexora-container">
          <div className="section-header">
            <h2 className="section-title">Network Partners</h2>
            <p className="section-subtitle">
              Integrated with Myanmar's leading telecommunications operators
            </p>
          </div>

          <div className="operators-grid">
            {networkOperators.map((operator, index) => (
              <Card key={index} className="operator-card glass-card">
                <CardHeader>
                  <div className="operator-header">
                    <div className="operator-logo">
                      <img src={operator.logo} alt={operator.name} />
                    </div>
                    <Badge 
                      appearance="filled" 
                      color={operator.status === 'Active' ? 'success' : 'warning'}
                      size="small"
                    >
                      {operator.status}
                    </Badge>
                  </div>
                  <h3 className="operator-name">{operator.name}</h3>
                </CardHeader>
                <CardPreview>
                  <div className="operator-stats">
                    <div className="operator-stat">
                      <span className="stat-label">Coverage</span>
                      <span className="stat-value">{operator.coverage}</span>
                    </div>
                    <div className="operator-stat">
                      <span className="stat-label">Technology</span>
                      <span className="stat-value">{operator.technology}</span>
                    </div>
                  </div>
                  <Link to={`/operators/${operator.name.toLowerCase().replace(' ', '-')}`}>
                    <Button
                      appearance="outline"
                      icon={<ArrowRight24Regular />}
                      iconPosition="after"
                      className="operator-link"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardPreview>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section nexora-section">
        <div className="nexora-container">
          <div className="cta-content glass-morphism">
            <h2 className="cta-title">Ready to Transform Your eSIM Experience?</h2>
            <p className="cta-subtitle">
              Join the next generation of telecommunications with NexoraSIM's 
              Microsoft-powered platform
            </p>
            <div className="cta-actions">
              <Link to="/enterprise">
                <Button appearance="primary" size="large" className="cta-button">
                  Get Started
                </Button>
              </Link>
              <Link to="/api">
                <Button 
                  appearance="outline" 
                  size="large" 
                  icon={<Play24Regular />}
                  className="cta-button"
                >
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .nexora-home-page {
          min-height: 100vh;
        }

        .section-title {
          font-size: var(--font-size-3xl);
          font-weight: 600;
          text-align: center;
          margin-bottom: var(--space-lg);
          color: var(--black);
        }

        .section-subtitle {
          font-size: var(--font-size-lg);
          text-align: center;
          color: var(--graphite);
          margin-bottom: var(--space-2xl);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-header {
          margin-bottom: var(--space-3xl);
        }

        /* Stats Section */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-xl);
        }

        .stat-card {
          padding: var(--space-xl);
          text-align: center;
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-lg);
        }

        .stat-icon {
          font-size: 2rem;
          color: var(--accent);
        }

        .stat-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .stat-value {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--accent);
        }

        .stat-label {
          font-size: var(--font-size-sm);
          color: var(--graphite);
          font-weight: 500;
        }

        .stat-progress {
          margin-top: var(--space-sm);
        }

        /* Capabilities Section */
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-xl);
        }

        .capability-card {
          padding: var(--space-xl);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .capability-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .capability-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-lg);
        }

        .capability-icon {
          font-size: 2.5rem;
          color: var(--accent);
        }

        .capability-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          margin-bottom: var(--space-md);
          color: var(--black);
        }

        .capability-description {
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
        }

        .capability-link {
          color: var(--accent);
          font-weight: 500;
        }

        /* Operators Section */
        .operators-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-xl);
        }

        .operator-card {
          padding: var(--space-xl);
        }

        .operator-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }

        .operator-logo {
          width: 48px;
          height: 48px;
          background: var(--pearl);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .operator-logo img {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        .operator-name {
          font-size: var(--font-size-lg);
          font-weight: 600;
          margin-bottom: var(--space-lg);
          color: var(--black);
        }

        .operator-stats {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          margin-bottom: var(--space-lg);
        }

        .operator-stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .operator-stat .stat-label {
          color: var(--graphite);
          font-size: var(--font-size-sm);
        }

        .operator-stat .stat-value {
          color: var(--black);
          font-weight: 600;
        }

        .operator-link {
          width: 100%;
        }

        /* CTA Section */
        .cta-content {
          text-align: center;
          padding: var(--space-3xl);
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: var(--font-size-3xl);
          font-weight: 600;
          margin-bottom: var(--space-lg);
          color: var(--black);
        }

        .cta-subtitle {
          font-size: var(--font-size-lg);
          color: var(--graphite);
          margin-bottom: var(--space-2xl);
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: var(--space-lg) var(--space-2xl);
          font-size: var(--font-size-lg);
        }

        @media (max-width: 768px) {
          .stats-grid,
          .capabilities-grid,
          .operators-grid {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default NexoraCoreHomePage;