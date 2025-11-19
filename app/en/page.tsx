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

export default function EnglishHome() {
  const [locale, setLocale] = useState<'en' | 'mm'>('en')

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