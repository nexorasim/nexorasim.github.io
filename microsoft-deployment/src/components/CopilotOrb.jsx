import React, { useState } from 'react'
import { Button, Dialog, DialogTrigger, DialogSurface, DialogTitle, DialogContent, DialogBody } from '@fluentui/react-components'
import { Bot24Regular, Dismiss24Regular } from '@fluentui/react-icons'

const CopilotOrb = () => {
  const [isOpen, setIsOpen] = useState(false)

  const copilotFeatures = [
    {
      title: 'eSIM Technology Expert',
      description: 'Get instant answers about eSIM provisioning, GSMA standards, and technical specifications'
    },
    {
      title: 'Network Integration Guide',
      description: 'Learn about MPT, MYTEL, ATOM, and U9 network integration processes'
    },
    {
      title: 'API Documentation Helper',
      description: 'Navigate our comprehensive API documentation with intelligent assistance'
    },
    {
      title: 'Compliance Advisor',
      description: 'Understand global telecom regulations and compliance requirements'
    },
    {
      title: 'Multilingual Support',
      description: 'Available in English, Chinese, Thai, Vietnamese, Indonesian, Malay, and Myanmar'
    }
  ]

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(event, data) => setIsOpen(data.open)}>
        <DialogTrigger disableButtonEnhancement>
          <div className="copilot-orb">
            <Bot24Regular />
          </div>
        </DialogTrigger>
        
        <DialogSurface className="copilot-dialog">
          <DialogTitle className="dialog-title">
            NexoraSIM AI Copilot
            <Button
              appearance="subtle"
              icon={<Dismiss24Regular />}
              onClick={() => setIsOpen(false)}
              className="close-button"
            />
          </DialogTitle>
          
          <DialogContent>
            <DialogBody>
              <div className="copilot-content">
                <div className="copilot-intro">
                  <h3>Your eSIM Technology Assistant</h3>
                  <p>
                    Powered by Microsoft Copilot Studio with custom GPT trained on 3000+ eSIM FAQs, 
                    global telecom regulations, and NexoraSIM architecture documentation.
                  </p>
                </div>

                <div className="copilot-features">
                  {copilotFeatures.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="copilot-chat">
                  <div className="chat-header">
                    <h4>Start a Conversation</h4>
                    <p>Ask me anything about eSIM technology, network integration, or NexoraSIM platform</p>
                  </div>
                  
                  <div className="chat-interface">
                    <iframe
                      src="https://web.powerva.microsoft.com/environments/Default-YOUR-TENANT/bots/YOUR-BOT-ID/webchat"
                      style={{
                        width: '100%',
                        height: '400px',
                        border: 'none',
                        borderRadius: 'var(--radius-medium)'
                      }}
                      title="NexoraSIM AI Copilot"
                    />
                  </div>
                </div>

                <div className="copilot-footer">
                  <p className="disclaimer">
                    Powered by Microsoft Copilot Studio | Real-time translation via Azure AI Translator
                  </p>
                </div>
              </div>
            </DialogBody>
          </DialogContent>
        </DialogSurface>
      </Dialog>

      <style jsx>{`
        .copilot-orb {
          position: fixed;
          bottom: var(--space-xl);
          right: var(--space-xl);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          backdrop-filter: var(--blur-intense);
          background: var(--glass);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: var(--shadow-floating);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1001;
          transition: all 0.3s ease;
          color: var(--accent);
        }

        .copilot-orb:hover {
          transform: scale(1.1);
          background: var(--accent);
          color: white;
        }

        .copilot-dialog {
          max-width: 800px;
          width: 90vw;
          max-height: 90vh;
          overflow-y: auto;
          backdrop-filter: var(--blur-intense);
          background: var(--glass);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: var(--shadow-floating);
        }

        .dialog-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-lg);
        }

        .close-button {
          margin-left: auto;
        }

        .copilot-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }

        .copilot-intro h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-sm);
        }

        .copilot-intro p {
          color: var(--graphite);
          line-height: 1.6;
        }

        .copilot-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-md);
        }

        .feature-card {
          padding: var(--space-md);
          border-radius: var(--radius-medium);
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .feature-card h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-sm);
        }

        .feature-card p {
          font-size: 0.9rem;
          color: var(--graphite);
          line-height: 1.5;
        }

        .copilot-chat {
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: var(--space-lg);
        }

        .chat-header {
          margin-bottom: var(--space-lg);
        }

        .chat-header h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-sm);
        }

        .chat-header p {
          color: var(--graphite);
        }

        .chat-interface {
          border-radius: var(--radius-medium);
          overflow: hidden;
          box-shadow: var(--shadow-glass);
        }

        .copilot-footer {
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: var(--space-md);
        }

        .disclaimer {
          font-size: 0.85rem;
          color: var(--graphite);
          text-align: center;
        }

        @media (max-width: 768px) {
          .copilot-orb {
            bottom: var(--space-lg);
            right: var(--space-lg);
            width: 56px;
            height: 56px;
          }

          .copilot-dialog {
            width: 95vw;
            max-height: 85vh;
          }

          .copilot-features {
            grid-template-columns: 1fr;
          }

          .chat-interface iframe {
            height: 300px !important;
          }
        }
      `}</style>
    </>
  )
}

export default CopilotOrb