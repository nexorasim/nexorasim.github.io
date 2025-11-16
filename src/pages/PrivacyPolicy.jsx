import React from 'react'
import { Card, CardHeader, CardPreview } from '@fluentui/react-components'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <section className="hero-section parallax-section">
        <div className="section-content">
          <div className="hero-content">
            <h1 className="hero-title">Privacy Policy</h1>
            <p className="hero-subtitle">
              Your privacy is important to us. This policy explains how NexoraSIM collects, 
              uses, and protects your information.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section parallax-section">
        <div className="section-content">
          <div className="policy-content">
            <Card className="policy-card glass-card">
              <CardHeader>
                <h2>Information We Collect</h2>
              </CardHeader>
              <CardPreview>
                <div className="policy-text">
                  <h3>Technical Information</h3>
                  <p>
                    We collect technical information necessary to provide our eSIM services, including:
                  </p>
                  <ul>
                    <li>Device identifiers and network information</li>
                    <li>eSIM profile data and activation status</li>
                    <li>Network usage and performance metrics</li>
                    <li>Location data for network optimization</li>
                  </ul>

                  <h3>Account Information</h3>
                  <p>
                    When you create an account or use our services, we may collect:
                  </p>
                  <ul>
                    <li>Contact information (email, phone number)</li>
                    <li>Account preferences and settings</li>
                    <li>Service usage history</li>
                    <li>Support and communication records</li>
                  </ul>
                </div>
              </CardPreview>
            </Card>

            <Card className="policy-card glass-card">
              <CardHeader>
                <h2>How We Use Your Information</h2>
              </CardHeader>
              <CardPreview>
                <div className="policy-text">
                  <h3>Service Provision</h3>
                  <p>
                    We use your information to provide and improve our eSIM services:
                  </p>
                  <ul>
                    <li>Activate and manage eSIM profiles</li>
                    <li>Provide network connectivity and roaming services</li>
                    <li>Monitor network performance and optimize coverage</li>
                    <li>Provide customer support and technical assistance</li>
                  </ul>

                  <h3>Legal Compliance</h3>
                  <p>
                    We may process your information to comply with legal obligations:
                  </p>
                  <ul>
                    <li>Telecommunications regulations and licensing requirements</li>
                    <li>Data protection and privacy laws</li>
                    <li>Security and fraud prevention measures</li>
                    <li>Law enforcement requests when legally required</li>
                  </ul>
                </div>
              </CardPreview>
            </Card>

            <Card className="policy-card glass-card">
              <CardHeader>
                <h2>Data Protection & Security</h2>
              </CardHeader>
              <CardPreview>
                <div className="policy-text">
                  <h3>Security Measures</h3>
                  <p>
                    We implement comprehensive security measures to protect your data:
                  </p>
                  <ul>
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Zero Trust security architecture</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Access controls and authentication protocols</li>
                  </ul>

                  <h3>Data Storage</h3>
                  <p>
                    Your data is stored securely using industry-standard practices:
                  </p>
                  <ul>
                    <li>Microsoft Azure cloud infrastructure with enterprise-grade security</li>
                    <li>Data encryption at rest and in transit</li>
                    <li>Regular backups and disaster recovery procedures</li>
                    <li>Compliance with international data protection standards</li>
                  </ul>
                </div>
              </CardPreview>
            </Card>

            <Card className="policy-card glass-card">
              <CardHeader>
                <h2>Your Rights & Choices</h2>
              </CardHeader>
              <CardPreview>
                <div className="policy-text">
                  <h3>Data Subject Rights</h3>
                  <p>
                    Under applicable data protection laws, you have the right to:
                  </p>
                  <ul>
                    <li>Access your personal data and request copies</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Delete your personal data (subject to legal requirements)</li>
                    <li>Restrict or object to certain processing activities</li>
                    <li>Data portability for your personal information</li>
                  </ul>

                  <h3>Communication Preferences</h3>
                  <p>
                    You can control how we communicate with you:
                  </p>
                  <ul>
                    <li>Opt out of marketing communications</li>
                    <li>Choose notification preferences</li>
                    <li>Update contact information</li>
                    <li>Set privacy preferences in your account</li>
                  </ul>
                </div>
              </CardPreview>
            </Card>

            <Card className="policy-card glass-card">
              <CardHeader>
                <h2>International Transfers</h2>
              </CardHeader>
              <CardPreview>
                <div className="policy-text">
                  <h3>Global Operations</h3>
                  <p>
                    As a global eSIM platform, we may transfer your data internationally:
                  </p>
                  <ul>
                    <li>Data transfers comply with applicable privacy laws</li>
                    <li>Adequate protection measures for international transfers</li>
                    <li>Standard contractual clauses for data protection</li>
                    <li>Regular compliance monitoring and auditing</li>
                  </ul>

                  <h3>Regional Compliance</h3>
                  <p>
                    We comply with regional data protection requirements:
                  </p>
                  <ul>
                    <li>GDPR compliance for European users</li>
                    <li>CCPA compliance for California residents</li>
                    <li>Local telecommunications regulations</li>
                    <li>Industry-specific privacy requirements</li>
                  </ul>
                </div>
              </CardPreview>
            </Card>

            <Card className="policy-card glass-card">
              <CardHeader>
                <h2>Contact Information</h2>
              </CardHeader>
              <CardPreview>
                <div className="policy-text">
                  <h3>Privacy Inquiries</h3>
                  <p>
                    For questions about this privacy policy or your data rights:
                  </p>
                  <ul>
                    <li>Email: privacy@nexorasim.com</li>
                    <li>Phone: +1-800-NEXORA-SIM</li>
                    <li>Address: NexoraSIM Privacy Office, 123 Tech Street, San Francisco, CA 94105</li>
                    <li>Online: Submit a privacy request through our support portal</li>
                  </ul>

                  <h3>Data Protection Officer</h3>
                  <p>
                    Our Data Protection Officer can be reached at:
                  </p>
                  <ul>
                    <li>Email: dpo@nexorasim.com</li>
                    <li>Direct line: +1-800-NEXORA-DPO</li>
                  </ul>

                  <p className="last-updated">
                    <strong>Last Updated:</strong> November 15, 2024<br/>
                    <strong>Effective Date:</strong> November 15, 2024<br/>
                    <strong>Version:</strong> 2.0
                  </p>
                </div>
              </CardPreview>
            </Card>
          </div>
        </div>
      </section>

      <style jsx>{`
        .privacy-policy-page {
          min-height: 100vh;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin: var(--space-lg) 0;
          color: var(--black);
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: var(--graphite);
          margin-bottom: var(--space-xl);
          line-height: 1.6;
        }

        .policy-content {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }

        .policy-card {
          padding: var(--space-xl);
        }

        .policy-card h2 {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-lg);
        }

        .policy-text h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--black);
          margin: var(--space-lg) 0 var(--space-md) 0;
        }

        .policy-text p {
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: var(--space-md);
        }

        .policy-text ul {
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
          padding-left: var(--space-lg);
        }

        .policy-text li {
          margin-bottom: var(--space-xs);
        }

        .last-updated {
          margin-top: var(--space-xl);
          padding-top: var(--space-lg);
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          font-size: 0.9rem;
          color: var(--graphite);
        }

        @media (max-width: 768px) {
          .policy-card {
            padding: var(--space-lg);
          }

          .policy-text h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default PrivacyPolicy