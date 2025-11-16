/**
 * NexoraCore Copilot Orb
 * Microsoft Copilot Studio Integration with Glassmorphic Design
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  Button,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogActions,
  DialogBody,
  Input,
  Badge
} from '@fluentui/react-components';
import { 
  Bot24Regular,
  Send24Regular,
  Dismiss24Regular,
  Mic24Regular
} from '@fluentui/react-icons';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  language?: string;
}

interface CopilotCapability {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'esim' | 'network' | 'support' | 'technical';
}

const copilotCapabilities: CopilotCapability[] = [
  {
    id: 'esim-transfer',
    title: 'eSIM Transfer Guide',
    description: 'Step-by-step eSIM transfer between devices',
    icon: 'phone',
    category: 'esim'
  },
  {
    id: 'network-coverage',
    title: 'Network Coverage',
    description: 'Real-time coverage maps and network status',
    icon: 'signal',
    category: 'network'
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: '24/7 technical assistance and troubleshooting',
    icon: 'tool',
    category: 'support'
  },
  {
    id: 'api-documentation',
    title: 'API Documentation',
    description: 'Interactive API guides and code examples',
    icon: 'book',
    category: 'technical'
  },
  {
    id: 'roaming-plans',
    title: 'Global Roaming',
    description: 'International roaming plans and pricing',
    icon: 'globe',
    category: 'esim'
  },
  {
    id: 'device-compatibility',
    title: 'Device Compatibility',
    description: 'Check eSIM compatibility for your device',
    icon: 'check',
    category: 'technical'
  }
];

const quickResponses = [
  'How do I transfer my eSIM?',
  'Check network coverage',
  'API documentation',
  'Roaming plans',
  'Technical support',
  'Device compatibility'
];

interface NexoraCoreCopilotProps {
  currentLanguage: string;
}

const NexoraCoreCopilot: React.FC<NexoraCoreCopilotProps> = ({ currentLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initialize with welcome message
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        type: 'bot',
        content: getLocalizedText('welcome', currentLanguage),
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, currentLanguage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getLocalizedText = (key: string, language: string): string => {
    const texts: Record<string, Record<string, string>> = {
      welcome: {
        en: 'Hello! I\'m your NexoraSIM AI assistant. How can I help you with eSIM services today?',
        my: 'မင်္ဂလာပါ! ကျွန်ုပ်သည် သင့်၏ NexoraSIM AI လက်ထောက်ဖြစ်ပါသည်။ eSIM ဝန်ဆောင်မှုများနှင့် ပတ်သက်၍ ဘယ်လိုကူညီပေးရမလဲ?',
        zh: '您好！我是您的 NexoraSIM AI 助手。今天我可以如何帮助您使用 eSIM 服务？',
        th: 'สวัสดี! ฉันเป็นผู้ช่วย AI ของ NexoraSIM คุณต้องการความช่วยเหลือเกี่ยวกับบริการ eSIM อย่างไรบ้าง?',
        vi: 'Xin chào! Tôi là trợ lý AI NexoraSIM của bạn. Hôm nay tôi có thể giúp bạn gì về dịch vụ eSIM?',
        id: 'Halo! Saya adalah asisten AI NexoraSIM Anda. Bagaimana saya bisa membantu Anda dengan layanan eSIM hari ini?',
        ms: 'Hello! Saya adalah pembantu AI NexoraSIM anda. Bagaimana saya boleh membantu anda dengan perkhidmatan eSIM hari ini?'
      },
      typing: {
        en: 'NexoraSIM AI is typing...',
        my: 'NexoraSIM AI ရိုက်နေသည်...',
        zh: 'NexoraSIM AI 正在输入...',
        th: 'NexoraSIM AI กำลังพิมพ์...',
        vi: 'NexoraSIM AI đang nhập...',
        id: 'NexoraSIM AI sedang mengetik...',
        ms: 'NexoraSIM AI sedang menaip...'
      }
    };

    return texts[key]?.[language] || texts[key]?.['en'] || key;
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date(),
      language: currentLanguage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(content, currentLanguage);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
        language: currentLanguage
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput: string, language: string): string => {
    const input = userInput.toLowerCase();
    
    // Simple response logic - in production, this would connect to Microsoft Copilot Studio
    if (input.includes('transfer') || input.includes('ပြောင်း')) {
      return getLocalizedText('transfer_response', language) || 
        'To transfer your eSIM, go to Settings > Cellular > Add Cellular Plan on your new device and scan the QR code from your current device.';
    }
    
    if (input.includes('coverage') || input.includes('network') || input.includes('ကွန်ယက်')) {
      return getLocalizedText('coverage_response', language) || 
        'Our network covers 95% of Myanmar with MPT, MYTEL, ATOM, and U9 partnerships. You can check real-time coverage at nexorasim.com/coverage';
    }
    
    if (input.includes('api') || input.includes('developer')) {
      return getLocalizedText('api_response', language) || 
        'Our API documentation is available at nexorasim.com/api with interactive examples and SDKs for multiple platforms.';
    }
    
    if (input.includes('roaming') || input.includes('international')) {
      return getLocalizedText('roaming_response', language) || 
        'We offer global roaming in 200+ countries with competitive rates. Check our roaming plans at nexorasim.com/roaming';
    }

    return getLocalizedText('default_response', language) || 
      'I understand you need help. Let me connect you with the right information. You can also visit our support center at nexorasim.com/support';
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = currentLanguage === 'my' ? 'my-MM' : `${currentLanguage}-${currentLanguage.toUpperCase()}`;
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
      };

      recognition.start();
    }
  };

  const handleCapabilityClick = (capability: CopilotCapability) => {
    handleSendMessage(capability.title);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(_event, data) => setIsOpen(data.open)}>
        <DialogTrigger disableButtonEnhancement>
          <div className="copilot-orb" onClick={() => setIsOpen(true)}>
            <Bot24Regular className="copilot-icon" />
            <div className="pulse-ring"></div>
          </div>
        </DialogTrigger>

        <DialogSurface className="copilot-dialog">
          <DialogTitle className="copilot-header">
            <div className="header-content">
              <div className="header-info">
                <Bot24Regular className="header-icon" />
                <div>
                  <h3>NexoraSIM AI Assistant</h3>
                  <Badge appearance="filled" color="success" size="small">Online</Badge>
                </div>
              </div>
              <Button
                appearance="transparent"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              />
            </div>
          </DialogTitle>

          <DialogBody className="copilot-body">
            {/* Capabilities Grid */}
            {messages.length <= 1 && (
              <div className="capabilities-grid">
                <h4>How can I help you?</h4>
                <div className="capabilities-list">
                  {copilotCapabilities.map((capability) => (
                    <button
                      key={capability.id}
                      className="capability-card"
                      onClick={() => handleCapabilityClick(capability)}
                    >
                      <span className="capability-icon">{capability.icon}</span>
                      <div className="capability-content">
                        <h5>{capability.title}</h5>
                        <p>{capability.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="messages-container">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.type}`}
                >
                  <div className="message-content">
                    {message.content}
                  </div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="message bot typing">
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    {getLocalizedText('typing', currentLanguage)}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Responses */}
            {messages.length > 1 && (
              <div className="quick-responses">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    className="quick-response"
                    onClick={() => handleSendMessage(response)}
                  >
                    {response}
                  </button>
                ))}
              </div>
            )}
          </DialogBody>

          <DialogActions className="copilot-input">
            <div className="input-container">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                className="message-input"
              />
              <Button
                appearance="transparent"
                icon={<Mic24Regular />}
                onClick={handleVoiceInput}
                disabled={isListening}
                className={`voice-button ${isListening ? 'listening' : ''}`}
                aria-label="Voice input"
              />
              <Button
                appearance="primary"
                icon={<Send24Regular />}
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                aria-label="Send message"
              />
            </div>
          </DialogActions>
        </DialogSurface>
      </Dialog>

      <style>{`
        .copilot-orb {
          cursor: pointer;
          position: relative;
        }

        .copilot-icon {
          font-size: 24px;
          color: white;
        }

        .pulse-ring {
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border: 2px solid rgba(0, 209, 255, 0.3);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        .copilot-dialog {
          width: 400px;
          height: 600px;
          max-height: 80vh;
          background: var(--glass);
          backdrop-filter: var(--glass-blur);
          border: var(--glass-border);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
        }

        .copilot-header {
          padding: var(--space-lg);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-info {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .header-icon {
          font-size: 24px;
          color: var(--accent);
        }

        .copilot-body {
          flex: 1;
          padding: var(--space-lg);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .capabilities-grid h4 {
          margin-bottom: var(--space-md);
          color: var(--black);
        }

        .capabilities-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-sm);
        }

        .capability-card {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md);
          background: rgba(0, 209, 255, 0.05);
          border: 1px solid rgba(0, 209, 255, 0.2);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .capability-card:hover {
          background: rgba(0, 209, 255, 0.1);
          transform: translateY(-1px);
        }

        .capability-icon {
          font-size: 20px;
        }

        .capability-content h5 {
          margin: 0 0 var(--space-xs) 0;
          font-size: var(--font-size-sm);
          font-weight: 600;
        }

        .capability-content p {
          margin: 0;
          font-size: var(--font-size-xs);
          color: var(--graphite);
        }

        .messages-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          max-height: 300px;
          overflow-y: auto;
        }

        .message {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .message.user {
          align-items: flex-end;
        }

        .message.bot {
          align-items: flex-start;
        }

        .message-content {
          max-width: 80%;
          padding: var(--space-md);
          border-radius: var(--radius-lg);
          font-size: var(--font-size-sm);
          line-height: 1.4;
        }

        .message.user .message-content {
          background: var(--accent);
          color: white;
        }

        .message.bot .message-content {
          background: rgba(0, 0, 0, 0.05);
          color: var(--black);
        }

        .message-time {
          font-size: var(--font-size-xs);
          color: var(--graphite);
          opacity: 0.7;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          margin-bottom: var(--space-xs);
        }

        .typing-indicator span {
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }

        .quick-responses {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
        }

        .quick-response {
          padding: var(--space-xs) var(--space-sm);
          background: rgba(0, 209, 255, 0.1);
          border: 1px solid rgba(0, 209, 255, 0.3);
          border-radius: var(--radius-lg);
          font-size: var(--font-size-xs);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quick-response:hover {
          background: rgba(0, 209, 255, 0.2);
        }

        .copilot-input {
          padding: var(--space-lg);
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .input-container {
          display: flex;
          gap: var(--space-sm);
          align-items: center;
        }

        .message-input {
          flex: 1;
        }

        .voice-button.listening {
          color: var(--accent);
          background: rgba(0, 209, 255, 0.1);
        }

        @media (max-width: 480px) {
          .copilot-dialog {
            width: 100vw;
            height: 100vh;
            max-height: 100vh;
            border-radius: 0;
          }
        }
      `}</style>
    </>
  );
};

export default NexoraCoreCopilot;