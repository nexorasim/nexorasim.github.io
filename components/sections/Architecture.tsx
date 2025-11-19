'use client'

import { motion } from 'framer-motion'
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function Architecture() {
  const architectureLayers = [
    {
      title: 'Edge Layer',
      icon: <Globe className="w-6 h-6" />,
      description: 'Global edge nodes for low-latency processing',
      components: ['CDN', 'Edge Computing', '5G Integration']
    },
    {
      title: 'Application Layer',
      icon: <Server className="w-6 h-6" />,
      description: 'Microservices architecture with auto-scaling',
      components: ['API Gateway', 'Load Balancer', 'Container Orchestration']
    },
    {
      title: 'Data Layer',
      icon: <Database className="w-6 h-6" />,
      description: 'Distributed data processing and storage',
      components: ['Real-time Analytics', 'Data Lake', 'Stream Processing']
    },
    {
      title: 'Security Layer',
      icon: <Shield className="w-6 h-6" />,
      description: 'End-to-end encryption and compliance',
      components: ['Zero Trust', 'HSM', 'Audit Trails']
    }
  ]

  const devOpsFeatures = [
    'CI/CD Pipeline',
    'Infrastructure as Code',
    'Automated Testing',
    'Blue-Green Deployment',
    'Monitoring & Alerting',
    'Disaster Recovery'
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="architecture">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">System Architecture</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Enterprise-grade infrastructure designed for scale, security, and performance
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-morphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <Cloud className="w-6 h-6 inline mr-2 text-primary-400" />
              Multi-Layer Architecture
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass-morphism p-6 rounded-xl h-full border border-slate-700/50 hover:border-primary-500/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary-500/20 text-primary-400">
                        {layer.icon}
                      </div>
                      <h4 className="font-semibold">{layer.title}</h4>
                    </div>
                    <p className="text-slate-300 text-sm mb-4">{layer.description}</p>
                    <div className="space-y-2">
                      {layer.components.map((component, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                          <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
                          {component}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {index < architectureLayers.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-slate-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* DevOps practices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              <Zap className="w-8 h-8 inline mr-3 text-accent-400" />
              DevOps Excellence
            </h3>
            <p className="text-lg text-slate-300 mb-8">
              Automated deployment pipelines and infrastructure management for reliable, 
              scalable operations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {devOpsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30"
                >
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Deployment Frequency</span>
                <span className="text-primary-400 font-mono">Daily</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Lead Time</span>
                <span className="text-primary-400 font-mono">&lt; 1 hour</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">MTTR</span>
                <span className="text-primary-400 font-mono">&lt; 15 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Change Failure Rate</span>
                <span className="text-primary-400 font-mono">&lt; 2%</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg">
              <h4 className="font-semibold mb-2 text-accent-400">Infrastructure Scale</h4>
              <div className="text-sm text-slate-300 space-y-1">
                <div>• 50+ Global Edge Locations</div>
                <div>• 99.99% Availability SLA</div>
                <div>• Auto-scaling to 1M+ requests/sec</div>
                <div>• Multi-region disaster recovery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}