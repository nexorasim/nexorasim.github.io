'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Architecture from '@/components/sections/Architecture'
import Compliance from '@/components/sections/Compliance'
import IoTPlatform from '@/components/sections/IoTPlatform'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  const [locale, setLocale] = useState<'en' | 'mm'>('en')

  useEffect(() => {
    const canvas = document.getElementById('particle-canvas')
    if (canvas) {
      interface Particle {
        x: number
        y: number
        vx: number
        vy: number
        size: number
      }
      
      const particles: Particle[] = []
      const particleCount = 50
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1
        })
      }

      const animateParticles = () => {
        const ctx = (canvas as HTMLCanvasElement).getContext('2d')
        if (!ctx) return

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        ctx.fillStyle = 'rgba(14, 165, 233, 0.1)'

        particles.forEach(particle => {
          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1
          if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
        })

        requestAnimationFrame(animateParticles)
      }

      const canvasElement = canvas as HTMLCanvasElement
      canvasElement.width = window.innerWidth
      canvasElement.height = window.innerHeight
      animateParticles()

      const handleResize = () => {
        canvasElement.width = window.innerWidth
        canvasElement.height = window.innerHeight
      }
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <canvas 
        id="particle-canvas" 
        className="particle-bg"
        style={{ pointerEvents: 'none' }}
      />
      
      <Navigation locale={locale} onLocaleChange={setLocale} />
      <Hero />
      <Features />
      <Architecture />
      <Compliance />
      <IoTPlatform />
      <Contact />
      <Footer />
    </main>
  )
}