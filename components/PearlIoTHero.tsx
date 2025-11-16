import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface IoTDevice {
  id: string;
  type: 'esim' | 'watch' | 'vehicle' | 'sensor';
  position: [number, number, number];
  status: 'active' | 'inactive';
  telemetry: number;
}

interface PearlIoTHeroProps {
  deviceCount: number;
  networkHealth: number;
  latency: number;
}

const IoTParticleField: React.FC = () => {
  const meshRef = useRef<THREE.Points>(null);
  const particleCount = 80000;
  
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
    
    const pearlColor = new THREE.Color(0x00D1FF);
    const whiteColor = new THREE.Color(0xFFFFFF);
    const mixedColor = pearlColor.lerp(whiteColor, Math.random());
    
    colors[i * 3] = mixedColor.r;
    colors[i * 3 + 1] = mixedColor.g;
    colors[i * 3 + 2] = mixedColor.b;
    
    sizes[i] = Math.random() * 2 + 0.5;
  }
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i * 0.01) * 0.01;
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={`
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float time;
          
          void main() {
            vColor = color;
            vec3 pos = position;
            pos.y += sin(pos.x * 0.01 + time) * 5.0;
            
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          varying vec3 vColor;
          
          void main() {
            float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
            float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
            gl_FragColor = vec4(vColor, alpha * 0.8);
          }
        `}
        uniforms={{
          time: { value: 0 }
        }}
        transparent
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const FloatingIoTDevice: React.FC<{ device: IoTDevice }> = ({ device }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + device.telemetry) * 0.1;
    }
  });
  
  const getDeviceGeometry = () => {
    switch (device.type) {
      case 'esim':
        return <Box args={[2, 1.2, 0.1]} />;
      case 'watch':
        return <Sphere args={[0.8, 16, 16]} />;
      case 'vehicle':
        return <Box args={[4, 1.5, 2]} />;
      case 'sensor':
        return <Sphere args={[0.5, 8, 8]} />;
      default:
        return <Box args={[1, 1, 1]} />;
    }
  };
  
  const getDeviceColor = () => {
    return device.status === 'active' ? '#00D1FF' : '#333333';
  };
  
  return (
    <mesh ref={meshRef} position={device.position}>
      {getDeviceGeometry()}
      <meshPhysicalMaterial
        color={getDeviceColor()}
        metalness={0.8}
        roughness={0.2}
        clearcoat={1.0}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

const PearlIoTHero: React.FC<PearlIoTHeroProps> = ({
  deviceCount,
  networkHealth,
  latency
}) => {
  const [iotDevices, setIoTDevices] = useState<IoTDevice[]>([]);
  
  useEffect(() => {
    const devices: IoTDevice[] = [];
    
    // Generate IoT devices
    for (let i = 0; i < 50; i++) {
      devices.push({
        id: `device-${i}`,
        type: ['esim', 'watch', 'vehicle', 'sensor'][Math.floor(Math.random() * 4)] as IoTDevice['type'],
        position: [
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100
        ],
        status: Math.random() > 0.1 ? 'active' : 'inactive',
        telemetry: Math.random()
      });
    }
    
    setIoTDevices(devices);
  }, []);
  
  return (
    <div className="hero-3d-iot">
      <Canvas
        className="iot-canvas"
        camera={{ position: [0, 0, 50], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[50, 50, 50]} intensity={0.8} color="#00D1FF" />
        <pointLight position={[-50, -50, -50]} intensity={0.4} color="#FFFFFF" />
        
        <IoTParticleField />
        
        {iotDevices.map((device) => (
          <FloatingIoTDevice key={device.id} device={device} />
        ))}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <fog attach="fog" args={['#F5F5F5', 50, 200]} />
      </Canvas>
      
      <div className="hero-content">
        <div className="hero-glass-card glass-morphism">
          <h1 className="hero-title">
            Premium IoT eSIM
            <span className="accent-text">Entertainment Server</span>
          </h1>
          <p className="hero-subtitle">
            Azure IoT Hub powered platform with real-time telemetry, 
            digital twins, and Microsoft Graph integration
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{deviceCount.toLocaleString()}</span>
              <span className="stat-label">Live Devices</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{networkHealth}%</span>
              <span className="stat-label">Network Health</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{latency}ms</span>
              <span className="stat-label">Avg Latency</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="glass-button primary">
              Explore IoT Platform
            </button>
            <button className="glass-button outline">
              View Architecture
            </button>
          </div>
        </div>
      </div>
      
      <div className="iot-indicators">
        <div className="indicator-item" data-type="esim">
          <div className="indicator-icon"></div>
          <span>eSIM Cards</span>
        </div>
        <div className="indicator-item" data-type="watch">
          <div className="indicator-icon"></div>
          <span>Smart Watches</span>
        </div>
        <div className="indicator-item" data-type="vehicle">
          <div className="indicator-icon"></div>
          <span>Connected Vehicles</span>
        </div>
        <div className="indicator-item" data-type="sensor">
          <div className="indicator-icon"></div>
          <span>Industrial Sensors</span>
        </div>
      </div>
    </div>
  );
};

export default PearlIoTHero;