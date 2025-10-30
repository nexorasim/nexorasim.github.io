import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function Particles(props) {
  const ref = useRef()
  const [sphere] = useMemo(() => {
    try {
      return [random.inSphere(new Float32Array(5000), { radius: 1.5 })]
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Failed to generate particles:', error)
      }
      return [new Float32Array(0)]
    }
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f8f8f8"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function IoTBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, alpha: false }}
        dpr={[1, 2]}
      >
        <Particles />
      </Canvas>
    </div>
  )
}