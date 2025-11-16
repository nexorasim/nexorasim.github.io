import React, { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface IoTFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: 'active' | 'inactive' | 'maintenance';
  telemetry: {
    uptime: number;
    performance: number;
    users: number;
    lastUpdate: string;
  };
  category: 'transfer' | 'authentication' | 'network' | 'analytics' | 'integration';
}

interface IoTFeatureFlipCardProps {
  feature: IoTFeature;
  index: number;
  onCardClick?: (feature: IoTFeature) => void;
}

const IoTFeatureFlipCard: React.FC<IoTFeatureFlipCardProps> = ({
  feature,
  index,
  onCardClick
}) => {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  
  const { scale, y } = useSpring({
    scale: hovered ? 1.05 : 1,
    y: hovered ? -8 : 0,
    config: { tension: 300, friction: 10 }
  });
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '#10B981';
      case 'inactive':
        return '#EF4444';
      case 'maintenance':
        return '#F59E0B';
      default:
        return '#6B7280';
    }
  };
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'transfer':
        return '#00D1FF';
      case 'authentication':
        return '#8B5CF6';
      case 'network':
        return '#10B981';
      case 'analytics':
        return '#F59E0B';
      case 'integration':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };
  
  const handleCardClick = () => {
    setFlipped(!flipped);
    if (onCardClick) {
      onCardClick(feature);
    }
  };
  
  return (
    <animated.div
      ref={cardRef}
      className="iot-feature-flip-card"
      style={{
        transform: scale.to(s => `scale(${s})`),
        y
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCardClick}
    >
      <div className="flip-card-inner">
        {/* Front Side */}
        <animated.div
          className="flip-card-front glass-card"
          style={{
            opacity: opacity.to(o => 1 - o),
            transform
          }}
        >
          <div className="card-header">
            <div className="feature-icon" style={{ color: getCategoryColor(feature.category) }}>
              {feature.icon}
            </div>
            <div className="status-indicator">
              <div 
                className="status-dot"
                style={{ backgroundColor: getStatusColor(feature.status) }}
              ></div>
              <span className="status-text">{feature.status}</span>
            </div>
          </div>
          
          <div className="card-content">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            
            <div className="feature-metrics">
              <div className="metric">
                <span className="metric-value">{feature.telemetry.uptime}%</span>
                <span className="metric-label">Uptime</span>
              </div>
              <div className="metric">
                <span className="metric-value">{feature.telemetry.performance}%</span>
                <span className="metric-label">Performance</span>
              </div>
            </div>
          </div>
          
          <div className="card-footer">
            <div className="category-badge" style={{ backgroundColor: getCategoryColor(feature.category) }}>
              {feature.category}
            </div>
            <div className="flip-hint">Click to flip</div>
          </div>
        </animated.div>
        
        {/* Back Side */}
        <animated.div
          className="flip-card-back glass-card"
          style={{
            opacity,
            transform: transform.to(t => `${t} rotateY(180deg)`)
          }}
        >
          <div className="card-header">
            <h3 className="telemetry-title">Live Telemetry</h3>
            <div className="last-update">
              Updated: {new Date(feature.telemetry.lastUpdate).toLocaleTimeString()}
            </div>
          </div>
          
          <div className="telemetry-data">
            <div className="telemetry-item">
              <div className="telemetry-label">Active Users</div>
              <div className="telemetry-value">{feature.telemetry.users.toLocaleString()}</div>
              <div className="telemetry-bar">
                <div 
                  className="telemetry-fill"
                  style={{ 
                    width: `${Math.min(100, (feature.telemetry.users / 10000) * 100)}%`,
                    backgroundColor: getCategoryColor(feature.category)
                  }}
                ></div>
              </div>
            </div>
            
            <div className="telemetry-item">
              <div className="telemetry-label">System Health</div>
              <div className="telemetry-value">{feature.telemetry.performance}%</div>
              <div className="telemetry-bar">
                <div 
                  className="telemetry-fill"
                  style={{ 
                    width: `${feature.telemetry.performance}%`,
                    backgroundColor: getStatusColor(feature.status)
                  }}
                ></div>
              </div>
            </div>
            
            <div className="telemetry-item">
              <div className="telemetry-label">Availability</div>
              <div className="telemetry-value">{feature.telemetry.uptime}%</div>
              <div className="telemetry-bar">
                <div 
                  className="telemetry-fill"
                  style={{ 
                    width: `${feature.telemetry.uptime}%`,
                    backgroundColor: '#10B981'
                  }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="card-footer">
            <button className="glass-button small">View Details</button>
            <button className="glass-button small outline">Configure</button>
          </div>
        </animated.div>
      </div>
      
      <style jsx>{`
        .iot-feature-flip-card {
          width: 100%;
          height: 320px;
          perspective: 1000px;
          cursor: pointer;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        
        .feature-icon {
          font-size: 2rem;
          font-weight: bold;
        }
        
        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--pearl-graphite);
        }
        
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .card-content {
          flex: 1;
        }
        
        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--pearl-black);
        }
        
        .feature-description {
          color: var(--pearl-graphite);
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .feature-metrics {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .metric {
          text-align: center;
        }
        
        .metric-value {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--pearl-accent);
        }
        
        .metric-label {
          font-size: 0.75rem;
          color: var(--pearl-graphite);
        }
        
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .category-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 16px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .flip-hint {
          font-size: 0.75rem;
          color: var(--pearl-graphite);
          opacity: 0.7;
        }
        
        .telemetry-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--pearl-black);
        }
        
        .last-update {
          font-size: 0.75rem;
          color: var(--pearl-graphite);
        }
        
        .telemetry-data {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .telemetry-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .telemetry-label {
          font-size: 0.875rem;
          color: var(--pearl-graphite);
        }
        
        .telemetry-value {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--pearl-black);
        }
        
        .telemetry-bar {
          height: 6px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }
        
        .telemetry-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 0.3s ease;
        }
        
        .glass-button.small {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </animated.div>
  );
};

export default IoTFeatureFlipCard;