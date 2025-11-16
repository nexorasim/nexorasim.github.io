import React from 'react'
import { Link } from 'react-router-dom'

import { Mail24Regular, Globe24Regular, Code24Regular } from '@fluentui/react-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { path: '/entitlement-server', label: 'Entitlement Server' },
        { path: '/features', label: 'Features' },
        { path: '/architecture', label: 'Architecture' },
        { path: '/technology', label: 'Technology' },
        { path: '/devices', label: 'Devices' },
        { path: '/api', label: 'API Documentation' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { path: '/transfer', label: 'eSIM Transfer' },
        { path: '/migration', label: 'SIM Migration' },
        { path: '/roaming', label: 'Global Roaming' },
        { path: '/5g', label: '5G Streaming' },
        { path: '/volte', label: 'VoLTE HD Voice' },
        { path: '/security', label: 'Security' }
      ]
    },
    {
      title: 'Networks',
      links: [
        { path: '/operators/mpt', label: 'MPT Myanmar' },
        { path: '/operators/mytel', label: 'MYTEL' },
        { path: '/operators/atom', label: 'ATOM' },
        { path: '/operators/u9', label: 'U9 Network' },
        { path: '/partners', label: 'All Partners' },
        { path: '/enterprise', label: 'Enterprise' }
      ]
    },
    {
      title: 'Company',
      links: [
        { path: '/about', label: 'About NexoraSIM' },
        { path: '/team', label: 'Team' },
        { path: '/careers', label: 'Careers' },
        { path: '/news', label: 'News' },
        { path: '/blog', label: 'Blog' },
        { path: '/press', label: 'Press Kit' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { path: '/whitepaper', label: 'Whitepaper' },
        { path: '/brochure', label: 'Brochure' },
        { path: '/flyer', label: 'Flyer' },
        { path: '/compliance', label: 'Compliance' },
        { path: '/support', label: 'Support' },
        { path: '/faq', label: 'FAQ' }
      ]
    },
    {
      title: 'Languages',
      links: [
        { path: '/en', label: 'English' },
        { path: '/zh', label: ' (Chinese)' },
        { path: '/th', label: ' (Thai)' },
        { path: '/vi', label: 'Ting Vit' },
        { path: '/id', label: 'Bahasa Indonesia' },
        { path: '/ms', label: 'Bahasa Malaysia' },
        { path: '/mm', label: ' (Myanmar)' }
      ]
    }
  ]

  return (
    <footer className="premium-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand-logo">
            <span className="logo-text">NexoraSIM</span>
            <span className="logo-subtitle">Entitlement Server</span>
          </div>
          <p className="brand-description">
            Enterprise-grade eSIM Profile Management platform for MPT, MYTEL, ATOM, 
            and U9 networks in Myanmar. Premium streaming, 5G, and VoLTE support 
            across ASEAN and globally.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <Globe24Regular />
              <span>nexorasim.com</span>
            </div>
            <div className="contact-item">
              <Mail24Regular />
              <span>info@nexorasim.com</span>
            </div>
            <div className="contact-item">
              <Code24Regular />
              <span>github.com/nexorasim</span>
            </div>
          </div>
        </div>

        <div className="footer-sections">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3 className="section-title">{section.title}</h3>
              <ul className="section-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>&copy; {currentYear} NexoraSIM. All rights reserved.</p>
            <p>Proprietary - Enterprise eSIM Platform</p>
          </div>
          
          <div className="footer-links">
            <Link to="/privacy" className="legal-link">Privacy Policy</Link>
            <Link to="/terms" className="legal-link">Terms of Service</Link>
            <Link to="/security" className="legal-link">Security</Link>
            <Link to="/compliance" className="legal-link">Compliance</Link>
          </div>

          <div className="deployment-status">
            <div className="status-indicator">
              <div className="status-dot active"></div>
              <span>System Operational</span>
            </div>
            <div className="build-info">
              <span>v2.0.0 | Production Ready</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .premium-footer {
          background: var(--pearl);
          border-top: 1px solid rgba(0,0,0,0.1);
          margin-top: var(--space-3xl);
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: var(--space-3xl) var(--space-lg);
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-3xl);
        }

        .footer-brand {
          max-width: 400px;
        }

        .brand-logo {
          margin-bottom: var(--space-lg);
        }

        .logo-text {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--black) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-subtitle {
          display: block;
          font-size: 1rem;
          color: var(--graphite);
          font-weight: 500;
          margin-top: var(--space-xs);
        }

        .brand-description {
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: var(--graphite);
          font-size: 0.9rem;
        }

        .footer-sections {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-xl);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-md);
        }

        .section-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .footer-link {
          color: var(--graphite);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--accent);
        }

        .footer-bottom {
          border-top: 1px solid rgba(0,0,0,0.1);
          background: rgba(0,0,0,0.02);
        }

        .footer-bottom-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: var(--space-lg);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-lg);
        }

        .copyright {
          color: var(--graphite);
          font-size: 0.85rem;
        }

        .footer-links {
          display: flex;
          gap: var(--space-lg);
        }

        .legal-link {
          color: var(--graphite);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: var(--accent);
        }

        .deployment-status {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: var(--space-xs);
        }

        .status-indicator {
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

        .build-info {
          font-size: 0.75rem;
          color: var(--graphite);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .footer-sections {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: var(--space-xl) var(--space-lg);
          }

          .footer-sections {
            grid-template-columns: 1fr;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: var(--space-md);
          }

          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
          }

          .deployment-status {
            align-items: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer