'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { 
  Smartphone, 
  Wifi, 
  Zap, 
  Globe, 
  Tv,
  Music,
  Gamepad2,
  Video,
  ArrowRight,
  TrendingUp
} from 'lucide-react'

export default function IoTPlatform() {
  const iotCapabilities = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Device Management',
      description: 'Comprehensive eSIM lifecycle management',
      features: ['Remote provisioning', 'Profile switching', 'Device authentication']
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Connectivity',
      description: 'Global network coverage and optimization',
      features: ['Multi-carrier support', 'Network switching', 'Quality monitoring']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Analytics',
      description: 'Advanced telemetry and insights',
      features: ['Usage analytics', 'Performance metrics', 'Predictive maintenance']
    }
  ]

  const entertainmentFeatures = [
    {
      icon: <Tv className="w-6 h-6" />,
      title: 'Streaming Services',
      description: '4K/8K content delivery with adaptive bitrate'
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: 'Audio Platforms',
      description: 'High-fidelity audio streaming and spatial audio'
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: 'Cloud Gaming',
      description: 'Low-latency gaming with edge computing'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Interactive Media',
      description: 'AR/VR content and immersive experiences'
    }
  ]

  const globalTrends = [
    { trend: '5G Adoption', growth: '+127%', region: 'Asia-Pacific' },
    { trend: 'IoT Devices', growth: '+89%', region: 'Global' },
    { trend: 'Edge Computing', growth: '+156%', region: 'North America' },
    { trend: 'eSIM Deployment', growth: '+203%', region: 'Europe' }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="iot">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">IoT Entertainment Server</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive IoT platform with entertainment server capabilities, 
            connecting global trends with cutting-edge technology
          </p>
        </motion.div>

        {/* IoT Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {iotCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-2xl hover:border-primary-500/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary-500/20 text-primary-400">
                  {capability.icon}
                </div>
                <h3 className="text-2xl font-bold">{capability.title}</h3>
              </div>
              <p className="text-slate-300 mb-6">{capability.description}</p>
              <div className="space-y-2">
                {capability.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Entertainment Server Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="accent-gradient-text">Entertainment Server Capabilities</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entertainmentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-xl text-center hover:scale-105 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/20 text-accent-400 mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass-morphism p-8 rounded-2xl"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-primary-400" />
            <h3 className="text-3xl font-bold">Global Technology Trends</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {globalTrends.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-slate-800/30 rounded-lg"
              >
                <div className="text-2xl font-bold gradient-text mb-2">{item.growth}</div>
                <div className="font-semibold text-white mb-1">{item.trend}</div>
                <div className="text-slate-400 text-sm">{item.region}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              NexoraSIM is at the forefront of these global technology trends, 
              providing the infrastructure and capabilities needed for the next generation of connected experiences.
            </p>
            <Button className="group">
              Explore Global Impact
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}