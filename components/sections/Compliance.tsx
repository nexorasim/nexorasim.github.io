'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock, 
  FileCheck, 
  Globe, 
  Award,
  CheckCircle,
  Key,
  Eye
} from 'lucide-react'

export default function Compliance() {
  const certifications = [
    {
      title: 'GSMA RSP 2.3+',
      description: 'Remote SIM Provisioning compliance',
      status: 'Certified',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'ISO 27001',
      description: 'Information Security Management',
      status: 'Certified',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'SOC 2 Type II',
      description: 'Security, Availability & Confidentiality',
      status: 'Audited',
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: 'FIPS 140-2',
      description: 'Cryptographic Module Validation',
      status: 'Level 3',
      icon: <Lock className="w-6 h-6" />
    }
  ]

  const securityFeatures = [
    {
      title: 'Cryptographic Key Management',
      description: 'Hardware Security Module (HSM) based key storage and management',
      icon: <Key className="w-8 h-8" />,
      details: [
        'FIPS 140-2 Level 3 HSM',
        'Key rotation automation',
        'Multi-party authentication',
        'Secure key escrow'
      ]
    },
    {
      title: 'Audit Trail System',
      description: 'Comprehensive logging and monitoring for compliance',
      icon: <Eye className="w-8 h-8" />,
      details: [
        'Immutable audit logs',
        'Real-time monitoring',
        'Compliance reporting',
        'Forensic analysis'
      ]
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify security model',
      icon: <Shield className="w-8 h-8" />,
      details: [
        'Identity verification',
        'Device authentication',
        'Network segmentation',
        'Continuous monitoring'
      ]
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="compliance">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Compliance & Security</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Enterprise-grade security with industry-leading certifications and compliance standards
          </p>
        </motion.div>

        {/* Certifications grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphism p-6 rounded-xl text-center hover:border-primary-500/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-500/20 text-primary-400 mb-4">
                {cert.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
              <p className="text-slate-300 text-sm mb-3">{cert.description}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                <Award className="w-3 h-3" />
                {cert.status}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security features */}
        <div className="space-y-12">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary-500/20 text-primary-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-slate-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="glass-morphism p-8 rounded-2xl">
                  <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-6xl opacity-20">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Security Level</span>
                      <span className="text-primary-400 font-mono">Enterprise</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Compliance</span>
                      <span className="text-green-400 font-mono">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Audit Status</span>
                      <span className="text-primary-400 font-mono">Passed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass-morphism p-8 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            <Shield className="w-6 h-6 inline mr-2 text-primary-400" />
            Security First Approach
          </h3>
          <p className="text-lg text-slate-300 mb-6 max-w-3xl mx-auto">
            Our commitment to security and compliance ensures your IoT infrastructure 
            meets the highest industry standards while maintaining operational excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-slate-400">Security Monitoring</div>
            </div>
            <div className="p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold accent-gradient-text mb-2">Zero</div>
              <div className="text-slate-400">Security Incidents</div>
            </div>
            <div className="p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold gradient-text mb-2">100%</div>
              <div className="text-slate-400">Compliance Score</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}