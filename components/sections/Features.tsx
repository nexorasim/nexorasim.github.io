'use client'

import { motion } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { Progress } from '@/components/ui/Progress'
import { Button } from '@/components/ui/Button'
import { 
  Smartphone, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Activity,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Features() {
  const [metrics, setMetrics] = useState({
    networkLoad: 0,
    cpuUsage: 0,
    activeDevices: 0,
    dataProcessed: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        networkLoad: Math.floor(Math.random() * 30) + 70,
        cpuUsage: Math.floor(Math.random() * 20) + 45,
        activeDevices: Math.floor(Math.random() * 1000) + 99000,
        dataProcessed: Math.floor(Math.random() * 100) + 850
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      id: 'iccid',
      icon: <Smartphone className="w-8 h-8" />,
      title: 'ICCID Lookup & Validation',
      description: 'Real-time ICCID validation with comprehensive device identification and carrier mapping.',
      metrics: [
        { label: 'Validation Speed', value: 95 },
        { label: 'Accuracy Rate', value: 99.8 },
        { label: 'Global Coverage', value: 87 }
      ]
    },
    {
      id: 'esim',
      icon: <Shield className="w-8 h-8" />,
      title: 'eSIM Profile Generation',
      description: 'GSMA RSP 2.3+ compliant profile provisioning with enterprise-grade security.',
      metrics: [
        { label: 'Provisioning Speed', value: 92 },
        { label: 'Security Score', value: 100 },
        { label: 'Compatibility', value: 94 }
      ]
    },
    {
      id: 'compatibility',
      icon: <Database className="w-8 h-8" />,
      title: 'Device Compatibility Matrix',
      description: 'Comprehensive device testing suite with automated compatibility verification.',
      metrics: [
        { label: 'Device Coverage', value: 89 },
        { label: 'Test Automation', value: 96 },
        { label: 'Update Frequency', value: 91 }
      ]
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Core Features</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced IoT eSIM capabilities with real-time monitoring and enterprise-grade security
          </p>
        </motion.div>

        {/* Real-time metrics dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-morphism p-8 rounded-2xl mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            <Activity className="w-6 h-6 inline mr-2 text-primary-400" />
            Real-time System Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <Progress 
                value={metrics.networkLoad} 
                label="Network Load" 
                showValue 
              />
            </div>
            <div>
              <Progress 
                value={metrics.cpuUsage} 
                label="CPU Usage" 
                showValue 
              />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">
                {metrics.activeDevices.toLocaleString()}
              </div>
              <div className="text-slate-400 text-sm">Active Devices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold accent-gradient-text">
                {metrics.dataProcessed} GB/s
              </div>
              <div className="text-slate-400 text-sm">Data Processed</div>
            </div>
          </div>
        </motion.div>

        {/* Interactive feature tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="iccid" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {features.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id} className="flex items-center gap-2">
                  {feature.icon}
                  <span className="hidden sm:inline">{feature.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature) => (
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
                      {feature.metrics.map((metric, index) => (
                        <Progress
                          key={index}
                          value={metric.value}
                          label={metric.label}
                          showValue
                        />
                      ))}
                    </div>

                    <Button className="group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="glass-morphism p-8 rounded-2xl">
                    <h4 className="text-xl font-semibold mb-6">Key Benefits</h4>
                    <div className="space-y-4">
                      {[
                        'Enterprise-grade security',
                        'Real-time processing',
                        'Global compatibility',
                        '99.9% uptime SLA',
                        '24/7 monitoring'
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                          <span className="text-slate-300">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}