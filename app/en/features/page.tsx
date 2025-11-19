'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import { Button } from '@/components/ui/Button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { Progress } from '@/components/ui/Progress'
import { 
  Smartphone, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Activity,
  CheckCircle,
  ArrowRight,
  Wifi,
  Phone,
  Watch,
  Tablet
} from 'lucide-react'
import { useState } from 'react'

export default function FeaturesPage() {
  const [locale, setLocale] = useState<'en' | 'mm'>('en')

  const coreFeatures = [
    {
      id: 'esim-transfer',
      icon: <Smartphone className="w-8 h-8" />,
      title: 'eSIM Transfer Android to Apple',
      description: 'Seamless cross-platform eSIM migration with zero downtime',
      details: [
        'Cross-platform compatibility',
        'Zero downtime migration',
        'Automated profile transfer',
        'Security validation'
      ]
    },
    {
      id: 'phone-registration',
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Number Registration',
      description: 'Automated phone number provisioning and management',
      details: [
        'Instant number allocation',
        'Global number pools',
        'Regulatory compliance',
        'Number portability'
      ]
    },
    {
      id: '5g-support',
      icon: <Zap className="w-8 h-8" />,
      title: '5G Network Support',
      description: 'Next-generation 5G connectivity with enhanced performance',
      details: [
        'Ultra-low latency',
        'Enhanced mobile broadband',
        'Massive IoT connectivity',
        'Network slicing support'
      ]
    },
    {
      id: 'sim-migration',
      icon: <Database className="w-8 h-8" />,
      title: 'SIM to eSIM Migration',
      description: 'Convert traditional SIM cards to eSIM profiles',
      details: [
        'Bulk migration tools',
        'Profile validation',
        'Rollback capabilities',
        'Migration analytics'
      ]
    },
    {
      id: 'volte',
      icon: <Phone className="w-8 h-8" />,
      title: 'VoLTE Technology',
      description: 'Voice over LTE with HD voice quality',
      details: [
        'HD voice quality',
        'Video calling support',
        'Rich communication services',
        'Emergency services'
      ]
    },
    {
      id: 'roaming',
      icon: <Globe className="w-8 h-8" />,
      title: 'Advanced Roaming',
      description: 'Global roaming with intelligent network selection',
      details: [
        'Intelligent network selection',
        'Cost optimization',
        'Quality monitoring',
        'Fraud prevention'
      ]
    },
    {
      id: 'ipad',
      icon: <Tablet className="w-8 h-8" />,
      title: 'iPad Integration',
      description: 'Native iPad eSIM support with cellular connectivity',
      details: [
        'Native iPad support',
        'Cellular data plans',
        'Multi-device sync',
        'Enterprise management'
      ]
    },
    {
      id: 'apple-watch',
      icon: <Watch className="w-8 h-8" />,
      title: 'Apple Watch Support',
      description: 'Wearable device connectivity with independent plans',
      details: [
        'Independent connectivity',
        'Family sharing plans',
        'Emergency features',
        'Health data sync'
      ]
    }
  ]

  const architectureFeatures = [
    {
      title: 'Cloud-native Microservices Architecture',
      description: 'Scalable, resilient microservices built for the cloud',
      metrics: { performance: 95, scalability: 98, reliability: 99 }
    },
    {
      title: 'Network Authentication',
      description: 'Multi-factor authentication with zero-trust security',
      metrics: { security: 100, compliance: 98, performance: 94 }
    },
    {
      title: 'Reporting, Alarms, and Analytics',
      description: 'Real-time monitoring with predictive analytics',
      metrics: { accuracy: 97, speed: 96, coverage: 99 }
    },
    {
      title: 'Multi-channel eSIM Service Orchestrator',
      description: 'Unified orchestration across multiple channels',
      metrics: { efficiency: 96, reliability: 98, scalability: 97 }
    }
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
              <span className="gradient-text">NexoraSIM Features</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive eSIM platform capabilities designed for enterprise-scale deployments
            </p>
          </motion.div>

          <Tabs defaultValue="esim-transfer" className="w-full mb-16">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {coreFeatures.slice(0, 4).map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id} className="flex items-center gap-2">
                  {feature.icon}
                  <span className="hidden sm:inline">{feature.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {coreFeatures.slice(0, 4).map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary-500/20 text-primary-400">
                        {feature.icon}
                      </div>
                      <h3 className="text-3xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {feature.details.map((detail, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                          <span className="text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="glass-morphism p-8 rounded-2xl">
                    <h4 className="text-xl font-semibold mb-6">Technical Specifications</h4>
                    <div className="space-y-4">
                      <Progress value={95} label="Performance" showValue />
                      <Progress value={98} label="Reliability" showValue />
                      <Progress value={99} label="Security" showValue />
                      <Progress value={96} label="Scalability" showValue />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coreFeatures.slice(4).map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-xl hover:border-primary-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-500/20 text-primary-400">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold">{feature.title}</h3>
                </div>
                <p className="text-slate-300 text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.details.slice(0, 2).map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center gradient-text">Architecture Features</h2>
            {architectureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism p-8 rounded-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(feature.metrics).map(([key, value]) => (
                      <Progress
                        key={key}
                        value={value}
                        label={key.charAt(0).toUpperCase() + key.slice(1)}
                        showValue
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}