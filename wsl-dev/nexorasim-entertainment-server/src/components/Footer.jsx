import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="premium-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand-logo">
            <span className="logo-text">NexoraSIM</span>
            <span className="logo-subtitle">Entertainment Server</span>
          </div>
          <p className="brand-description">
            Enterprise-grade eSIM Profile Management platform for MPT, MYTEL, ATOM, 
            and U9 networks in Myanmar. Premium streaming, 5G, and VoLTE support 
            across ASEAN and globally.
          </p>
        </div>

        <div className="footer-sections">
          <div className="footer-section">
            <h3 className="section-title">Platform</h3>
            <ul className="section-links">
              <li><Link to="/entitlement-server" className="footer-link">Entitlement Server</Link></li>
              <li><Link to="/features" className="footer-link">Features</Link></li>
              <li><Link to="/architecture" className="footer-link">Architecture</Link></li>
              <li><Link to="/technology" className="footer-link">Technology</Link></li>
              <li><Link to="/api" className="footer-link">API Documentation</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Solutions</h3>
            <ul className="section-links">
              <li><Link to="/transfer" className="footer-link">eSIM Transfer</Link></li>
              <li><Link to="/migration" className="footer-link">SIM Migration</Link></li>
              <li><Link to="/roaming" className="footer-link">Global Roaming</Link></li>
              <li><Link to="/5g" className="footer-link">5G Streaming</Link></li>
              <li><Link to="/volte" className="footer-link">VoLTE HD Voice</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Company</h3>
            <ul className="section-links">
              <li><Link to="/about" className="footer-link">About NexoraSIM</Link></li>
              <li><Link to="/team" className="footer-link">Team</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/news" className="footer-link">News</Link></li>
              <li><Link to="/press" className="footer-link">Press Kit</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>&copy; {currentYear} NexoraSIM. All rights reserved.</p>
          </div>
          
          <div className="contact-info">
            <span>nexorasim.com | info@nexorasim.com | github.com/nexorasim | nexorasim.github.io</span>
          </div>

          <div className="deployment-status">
            <div className="status-indicator">
              <div className="status-dot active"></div>
              <span>System Operational</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        }

        .footer-sections {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-xl);
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

        .contact-info {
          color: var(--graphite);
          font-size: 0.85rem;
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

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
        }

        @media (max-width: 768px) {
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: var(--space-md);
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer