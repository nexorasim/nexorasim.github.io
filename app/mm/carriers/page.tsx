'use client'

import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import { useState } from 'react'

export default function CarriersPage() {
  const [locale, setLocale] = useState<'en' | 'mm'>('mm')

  return (
    <main className="min-h-screen">
      <Navigation locale={locale} onLocaleChange={setLocale} />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Carriers</span>
            </h1>
            <p className="text-xl text-slate-300">
              NexoraSIM Carriers - Premium IoT eSIM Platform
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
