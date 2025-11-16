/**
 * NexoraCore 3D Hero Component
 * Full-viewport 3D hero with GSAP + Three.js
 * Microsoft-approved WebGL implementation
 */

import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Environment } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

interface eSIMCardProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

const eSIMCard: React.FC<eSIMCardProps> = ({ position, rotation, scale }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[0.8, 0.5, 0.05]} />
        <meshStandardMaterial
          color="#00D1FF"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
        <mesh position={[0, 0, 0.026]}>
          <boxGeometry args={[0.3, 0.2, 0.01]} />
          <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.1} />
        </mesh>
      </mesh>
    </Float>
  );
};

interface NetworkNodeProps {
  position: [number, number, number];
  connections: [number, number, number][];
}

const NetworkNode: React.FC<NetworkNodeProps> = ({ position, connections }) => {
  const nodeRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (nodeRef.current) {
      nodeRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <group>
      <mesh ref={nodeRef} position={position}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color="#00D1FF"
          emissive="#00D1FF"
          emissiveIntensity={0.3}
        />
      </mesh>
      <group ref={linesRef}>
        {connections.map((target, index) => (
          <line key={index}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  position[0], position[1], position[2],
                  target[0], target[1], target[2]
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#00D1FF" opacity={0.3} transparent />
          </line>
        ))}
      </group>
    </group>
  );
};

const DataStream: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += 0.02; // Move particles upward
        
        if (positions[i + 1] > 5) {
          positions[i + 1] = -5; // Reset to bottom
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00D1FF"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const NexoraSIM3DLogo: React.FC = () => {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <Text3D
        font="/fonts/segoe-ui-bold.json"
        size={0.8}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-2, 0, 0]}
      >
        NexoraSIM
        <meshStandardMaterial
          color="#00D1FF"
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </Float>
  );
};

const Scene3D: React.FC = () => {
  const networkNodes: [number, number, number][] = [
    [-3, 2, -2],
    [3, 1, -1],
    [-2, -1, 1],
    [2, -2, 2],
    [0, 3, 0]
  ];

  const nodeConnections = [
    [[-3, 2, -2], [3, 1, -1], [0, 3, 0]],
    [[3, 1, -1], [-2, -1, 1], [2, -2, 2]],
    [[-2, -1, 1], [0, 3, 0]],
    [[2, -2, 2], [-3, 2, -2]],
    [[0, 3, 0], [2, -2, 2], [-2, -1, 1]]
  ];

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#00D1FF" intensity={0.5} />

      {/* Floating eSIM Cards */}
      <eSIMCard position={[-4, 1, -3]} rotation={[0.2, 0.3, 0.1]} scale={1} />
      <eSIMCard position={[4, -1, -2]} rotation={[-0.1, -0.2, 0.2]} scale={0.8} />
      <eSIMCard position={[2, 3, -4]} rotation={[0.3, -0.1, -0.1]} scale={1.2} />
      <eSIMCard position={[-3, -2, -1]} rotation={[-0.2, 0.4, 0.3]} scale={0.9} />

      {/* Network Nodes */}
      {networkNodes.map((position, index) => (
        <NetworkNode
          key={index}
          position={position}
          connections={nodeConnections[index]}
        />
      ))}

      {/* Data Streams */}
      <DataStream />

      {/* 3D Logo */}
      <NexoraSIM3DLogo />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const LoadingFallback: React.FC = () => (
  <div className="hero-loading">
    <div className="loading-spinner"></div>
    <p>Loading NexoraSIM Experience...</p>
  </div>
);

interface NexoraCore3DHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

const NexoraCore3DHero: React.FC<NexoraCore3DHeroProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && ctaRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(titleRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.4'
      );

      // Parallax scroll effect
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (titleRef.current) {
            gsap.to(titleRef.current, {
              y: progress * 100,
              opacity: 1 - progress * 0.5,
              duration: 0.3
            });
          }
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={heroRef} className="hero-3d-container">
      <Canvas
        className="hero-3d-canvas"
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </Canvas>

      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          {title}
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          {subtitle}
        </p>
        <button
          ref={ctaRef}
          className="fluent-button-primary hero-cta"
          onClick={onCtaClick}
        >
          {ctaText}
        </button>
      </div>

      <style jsx>{`
        .hero-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: var(--graphite);
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--glass);
          border-top: 3px solid var(--accent);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: var(--space-lg);
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .hero-cta {
          font-size: var(--font-size-lg);
          padding: var(--space-lg) var(--space-2xl);
          margin-top: var(--space-xl);
          box-shadow: var(--shadow-lg);
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-xl);
        }
      `}</style>
    </div>
  );
};

export default NexoraCore3DHero;