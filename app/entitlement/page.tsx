'use client'

import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import { motion } from 'framer-motion'
import { Smartphone, Phone, Zap, Database, Wifi, Globe, Tablet, Watch, Shield, Server, Activity, Settings, Users, Lock, Bell, BarChart3 } from 'lucide-react'
import { useState } from 'react'

export default function EntitlementPage() {
  const [locale, setLocale] = useState<'en' | 'mm'>('en')

  const features = [
    { icon: <Smartphone className="w-8 h-8" />, title: 'eSIM Transfer Android to Apple', description: 'Seamless cross-platform eSIM migration' },
    { icon: <Phone className="w-8 h-8" />, title: 'Phone Number Registration', description: 'Automated phone number provisioning' },
    { icon: <Zap className="w-8 h-8" />, title: '5G Network Support', description: 'Next-generation 5G connectivity' },
    { icon: <Database className="w-8 h-8" />, title: 'SIM to eSIM Migration', description: 'Convert traditional SIM to eSIM' },
    { icon: <Phone className="w-8 h-8" />, title: 'VoLTE Technology', description: 'Voice over LTE with HD quality' },
    { icon: <Globe className="w-8 h-8" />, title: 'Advanced Roaming', description: 'Global roaming with intelligent selection' },
    { icon: <Tablet className="w-8 h-8" />, title: 'iPad Integration', description: 'Native iPad eSIM support' },
    { icon: <Smartphone className="w-8 h-8" />, title: 'eSIM Quick Transfer iOS', description: 'Rapid eSIM profile transfer' },
    { icon: <Watch className="w-8 h-8" />, title: 'Apple Watch Support', description: 'Wearable device connectivity' },
    { icon: <Smartphone className="w-8 h-8" />, title: 'Device Transfer Android', description: 'Android device eSIM management' },
    { icon: <Watch className="w-8 h-8" />, title: 'Wearables Support', description: 'Comprehensive wearable integration' },
    { icon: <Server className="w-8 h-8" />, title: 'Cloud-native Microservices Architecture', description: 'Scalable microservices platform' },
    { icon: <Shield className="w-8 h-8" />, title: 'Network Authentication', description: 'Multi-factor zero-trust security' },
    { icon: <BarChart3 className="w-8 h-8" />, title: 'Reporting, Alarms, and Analytics', description: 'Real-time monitoring and analytics' },
    { icon: <Settings className="w-8 h-8" />, title: 'Device Upgrade/eSIM Transfer/eSIM Swap', description: 'Complete device lifecycle management' },
    { icon: <Activity className="w-8 h-8" />, title: 'Secondary Device Positioning', description: 'Advanced device positioning' },
    { icon: <Activity className="w-8 h-8" />, title: 'Primary Device Positioning', description: 'Primary device location services' },
    { icon: <Lock className="w-8 h-8" />, title: 'OpenID Authentication', description: 'Standards-based identity management' },
    { icon: <Shield className="w-8 h-8" />, title: 'Device Authentication', description: 'Secure device identity verification' },
    { icon: <Bell className="w-8 h-8" />, title: 'Notification Handling', description: 'Real-time notification management' },
    { icon: <Wifi className="w-8 h-8" />, title: 'Carrier Bundle Integration', description: 'Native carrier network integration' },
    { icon: <Server className="w-8 h-8" />, title: 'SM-DP+ Integration', description: 'GSMA-compliant integration' },
    { icon: <Settings className="w-8 h-8" />, title: 'Management GUI', description: 'Web-based management interface' },
    { icon: <BarChart3 className="w-8 h-8" />, title: 'Statistics and Reporting', description: 'Advanced analytics dashboard' },
    { icon: <Server className="w-8 h-8" />, title: 'Multi-channel eSIM Service Orchestrator', description: 'Unified service orchestration' }
  ]

  const carriers = [
    { name: 'MPT Myanmar', code: 'MPT' },
    { name: 'ATOM Myanmar', code: 'ATOM' },
    { name: 'U9 Myanmar', code: 'U9' },
    { name: 'Mytel Myanmar', code: 'MYTEL' }
  ]

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
              <span className="gradient-text">NexoraSIM Entitlement Server</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Premium IoT eSIM Entertainment Server Platform - 100% Secure, Zero Copy Protection
            </p>
          </motion.div>

          <div className="glass-morphism p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Supported Carriers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {carriers.map((carrier, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/30 rounded-xl">
                  <div className="text-2xl font-bold gradient-text mb-2">{carrier.code}</div>
                  <div className="text-slate-400 text-sm">{carrier.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-morphism p-6 rounded-xl hover:border-primary-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary-500/20 text-primary-400">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                </div>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 glass-morphism p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">100% Secure Platform</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              All information is 100% secure with enterprise-grade encryption. No unauthorized copying possible. 
              GSMA RSP 2.3+ compliant with ISO 27001 and SOC 2 Type II certifications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-800/30 rounded-lg">
                <div className="text-2xl font-bold gradient-text mb-2">100%</div>
                <div className="text-slate-400">Secure Platform</div>
              </div>
              <div className="p-4 bg-slate-800/30 rounded-lg">
                <div className="text-2xl font-bold accent-gradient-text mb-2">Zero</div>
                <div className="text-slate-400">Copy Protection</div>
              </div>
              <div className="p-4 bg-slate-800/30 rounded-lg">
                <div className="text-2xl font-bold gradient-text mb-2">2026</div>
                <div className="text-slate-400">Award Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}