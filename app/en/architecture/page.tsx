'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import { Cloud, Server, Database, Shield } from 'lucide-react'
import { useState } from 'react'

export default function ArchitecturePage() {
  const [locale, setLocale] = useState<'en' | 'mm'>('en')

  return (
    <main className="min-h-screen">
      <Navigation locale={locale} onLocaleChange={setLocale} />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">System Architecture</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure designed for scale, security, and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-morphism p-6 rounded-xl">
              <Cloud className="w-8 h-8 text-primary-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Edge Layer</h3>
              <p className="text-slate-300">Global edge nodes for low-latency processing</p>
            </div>
            <div className="glass-morphism p-6 rounded-xl">
              <Server className="w-8 h-8 text-primary-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Application Layer</h3>
              <p className="text-slate-300">Microservices with auto-scaling</p>
            </div>
            <div className="glass-morphism p-6 rounded-xl">
              <Database className="w-8 h-8 text-primary-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Layer</h3>
              <p className="text-slate-300">Distributed data processing</p>
            </div>
            <div className="glass-morphism p-6 rounded-xl">
              <Shield className="w-8 h-8 text-primary-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Security Layer</h3>
              <p className="text-slate-300">End-to-end encryption</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}