import React, { useState } from 'react'
import { Button, Dialog, DialogTrigger, DialogSurface, DialogTitle, DialogContent, DialogBody } from '@fluentui/react-components'
import { Bot24Regular, Dismiss24Regular } from '@fluentui/react-icons'

const CopilotOrb = () => {
  const [isOpen, setIsOpen] = useState(false)

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

                <div className="copilot-chat">
                  <div className="chat-header">
                    <h4>Start a Conversation</h4>
                    <p>Ask me anything about eSIM technology, network integration, or NexoraSIM platform</p>
                  </div>
                  
                  <div className="chat-interface">
                    <div className="chat-placeholder">
                      <p>Microsoft Copilot Studio integration ready</p>
                      <p>Custom GPT trained on eSIM technology</p>
                      <p>Real-time translation: EN/ZH/TH/VI/ID/MS/MM</p>
                    </div>
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
          max-width: 600px;
          width: 90vw;
          max-height: 80vh;
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
          margin-top: var(--space-lg);
          padding: var(--space-lg);
          background: rgba(0,0,0,0.02);
          border-radius: var(--radius-medium);
        }

        .chat-placeholder {
          text-align: center;
          color: var(--graphite);
        }

        .chat-placeholder p {
          margin-bottom: var(--space-sm);
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
        }
      `}</style>
    </>
  )
}

export default CopilotOrb