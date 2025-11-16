import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface CopilotOrbProps {
  onVoiceCommand?: (command: string) => void;
  onGestureDetected?: (gesture: string) => void;
  isListening?: boolean;
}

interface VoiceCommand {
  command: string;
  confidence: number;
  timestamp: number;
}

const FloatingCopilotOrb: React.FC<CopilotOrbProps> = ({
  onVoiceCommand,
  onGestureDetected,
  isListening = false
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [voiceLevel, setVoiceLevel] = useState(0);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [recentCommands, setRecentCommands] = useState<VoiceCommand[]>([]);
  
  const orbRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  
  // Floating animation
  const floatingAnimation = useSpring({
    transform: `translateY(${Math.sin(Date.now() * 0.001) * 10}px)`,
    config: { tension: 280, friction: 60 },
    loop: true
  });
  
  // Pulse animation based on voice level
  const pulseAnimation = useSpring({
    scale: isActive ? 1.2 + voiceLevel * 0.3 : 1,
    opacity: isActive ? 0.9 : 0.8,
    config: { tension: 300, friction: 20 }
  });
  
  // Expansion animation
  const expansionAnimation = useSpring({
    width: isExpanded ? 320 : 64,
    height: isExpanded ? 200 : 64,
    borderRadius: isExpanded ? 16 : 32,
    config: { tension: 200, friction: 25 }
  });
  
  // Initialize voice recognition
  useEffect(() => {
    if (isListening) {
      initializeVoiceRecognition();
    } else {
      cleanupVoiceRecognition();
    }
    
    return () => cleanupVoiceRecognition();
  }, [isListening]);
  
  const initializeVoiceRecognition = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new AudioContext();
      analyserRef.current = audioContextRef.current.createAnalyser();
      microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
      
      analyserRef.current.fftSize = 256;
      microphoneRef.current.connect(analyserRef.current);
      
      startVoiceLevelMonitoring();
      
      // Initialize Web Speech API
      if ('webkitSpeechRecognition' in window) {
        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        recognition.onresult = (event: any) => {
          const transcript = event.results[event.results.length - 1][0].transcript;
          const confidence = event.results[event.results.length - 1][0].confidence;
          
          setCurrentCommand(transcript);
          
          if (event.results[event.results.length - 1].isFinal) {
            handleVoiceCommand(transcript, confidence);
          }
        };
        
        recognition.start();
      }
    } catch (error) {
      console.error('Voice recognition initialization failed:', error);
    }
  };
  
  const startVoiceLevelMonitoring = () => {
    if (!analyserRef.current) return;
    
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    
    const updateVoiceLevel = () => {
      if (analyserRef.current) {
        analyserRef.current.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
        setVoiceLevel(average / 255);
        
        if (isListening) {
          requestAnimationFrame(updateVoiceLevel);
        }
      }
    };
    
    updateVoiceLevel();
  };
  
  const cleanupVoiceRecognition = () => {
    if (microphoneRef.current) {
      microphoneRef.current.disconnect();
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
  };
  
  const handleVoiceCommand = (command: string, confidence: number) => {
    const voiceCommand: VoiceCommand = {
      command,
      confidence,
      timestamp: Date.now()
    };
    
    setRecentCommands(prev => [voiceCommand, ...prev.slice(0, 4)]);
    
    if (onVoiceCommand) {
      onVoiceCommand(command);
    }
    
    // Process common IoT commands
    processIoTCommand(command);
  };
  
  const processIoTCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('show dashboard')) {
      window.location.hash = '#iot-dashboard';
    } else if (lowerCommand.includes('device status')) {
      setIsExpanded(true);
    } else if (lowerCommand.includes('network health')) {
      // Trigger network health display
      console.log('Showing network health');
    } else if (lowerCommand.includes('close') || lowerCommand.includes('minimize')) {
      setIsExpanded(false);
    }
  };
  
  const handleOrbClick = () => {
    setIsActive(!isActive);
    setIsExpanded(!isExpanded);
  };
  
  const handleGestureDetection = (event: React.MouseEvent) => {
    // Simple gesture detection based on mouse movement
    const rect = orbRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      const gesture = deltaX > 0 ? 'swipe-right' : 'swipe-left';
      if (onGestureDetected) {
        onGestureDetected(gesture);
      }
    }
  };
  
  return (
    <animated.div
      ref={orbRef}
      className="floating-copilot-orb"
      style={{
        ...floatingAnimation,
        ...expansionAnimation
      }}
      onClick={handleOrbClick}
      onMouseMove={handleGestureDetection}
    >
      <animated.div
        className="orb-inner"
        style={pulseAnimation}
      >
        {!isExpanded ? (
          // Collapsed state - just the orb
          <div className="orb-core">
            <div className="orb-pulse" />
            <div className="orb-icon">🤖</div>
            {isListening && (
              <div className="voice-indicator">
                <div 
                  className="voice-level-bar"
                  style={{ height: `${voiceLevel * 100}%` }}
                />
              </div>
            )}
          </div>
        ) : (
          // Expanded state - full interface
          <div className="orb-expanded">
            <div className="orb-header">
              <div className="orb-title">NexoraSIM Copilot</div>
              <button 
                className="orb-close"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
              >
                ×
              </button>
            </div>
            
            <div className="orb-content">
              {isListening && (
                <div className="voice-status">
                  <div className="listening-indicator">
                    <div className="pulse-dot" />
                    <span>Listening...</span>
                  </div>
                  {currentCommand && (
                    <div className="current-command">
                      "{currentCommand}"
                    </div>
                  )}
                </div>
              )}
              
              <div className="recent-commands">
                <div className="commands-title">Recent Commands</div>
                {recentCommands.map((cmd, index) => (
                  <div key={index} className="command-item">
                    <span className="command-text">{cmd.command}</span>
                    <span className="command-confidence">
                      {Math.round(cmd.confidence * 100)}%
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="quick-actions">
                <button className="quick-action" onClick={() => window.location.hash = '#iot-dashboard'}>
                  Dashboard
                </button>
                <button className="quick-action" onClick={() => window.location.hash = '#features'}>
                  Features
                </button>
                <button className="quick-action" onClick={() => window.location.hash = '#architecture'}>
                  Architecture
                </button>
              </div>
            </div>
          </div>
        )}
      </animated.div>
      
      <style jsx>{`
        .floating-copilot-orb {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
          cursor: pointer;
          backdrop-filter: blur(32px);
          background: rgba(245, 245, 245, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .floating-copilot-orb:hover {
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.16);
        }
        
        .orb-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .orb-core {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .orb-pulse {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--pearl-accent);
          opacity: 0.3;
          animation: orbPulse 2s infinite;
        }
        
        .orb-icon {
          font-size: 1.5rem;
          z-index: 2;
        }
        
        .voice-indicator {
          position: absolute;
          bottom: -8px;
          right: -8px;
          width: 16px;
          height: 16px;
          background: rgba(16, 185, 129, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .voice-level-bar {
          width: 4px;
          background: #10B981;
          border-radius: 2px;
          transition: height 0.1s ease;
        }
        
        .orb-expanded {
          width: 100%;
          height: 100%;
          padding: 1rem;
          display: flex;
          flex-direction: column;
        }
        
        .orb-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .orb-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--pearl-black);
        }
        
        .orb-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--pearl-graphite);
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .orb-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .voice-status {
          text-align: center;
        }
        
        .listening-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--pearl-graphite);
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          animation: pulse 1s infinite;
        }
        
        .current-command {
          margin-top: 0.5rem;
          font-size: 0.75rem;
          color: var(--pearl-accent);
          font-style: italic;
        }
        
        .recent-commands {
          flex: 1;
        }
        
        .commands-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--pearl-graphite);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
        
        .command-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.25rem 0;
          font-size: 0.75rem;
        }
        
        .command-text {
          color: var(--pearl-black);
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .command-confidence {
          color: var(--pearl-graphite);
          margin-left: 0.5rem;
        }
        
        .quick-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .quick-action {
          flex: 1;
          padding: 0.5rem;
          background: rgba(0, 209, 255, 0.1);
          border: 1px solid rgba(0, 209, 255, 0.3);
          border-radius: 8px;
          color: var(--pearl-accent);
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .quick-action:hover {
          background: var(--pearl-accent);
          color: white;
        }
        
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.1; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </animated.div>
  );
};

export default FloatingCopilotOrb;