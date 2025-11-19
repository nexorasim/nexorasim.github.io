'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  Globe
} from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'enterprise@nexorasim.com',
      availability: '24/7 Response'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: '+1 (555) 123-4567',
      availability: 'Business Hours'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Global Offices',
      description: 'Singapore, London, New York',
      availability: 'Multiple Timezones'
    }
  ]

  const enterpriseFeatures = [
    'Dedicated account management',
    'Custom SLA agreements',
    'Priority technical support',
    'White-label solutions',
    'Enterprise security compliance',
    'Global deployment assistance'
  ]

  const clientTypes = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Enterprise',
      description: 'Large-scale IoT deployments',
      examples: ['Fortune 500 companies', 'Government agencies', 'Telecom operators']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'SMB',
      description: 'Growing businesses',
      examples: ['Tech startups', 'Regional carriers', 'IoT solution providers']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global',
      description: 'International operations',
      examples: ['Multi-national corporations', 'Global logistics', 'International carriers']
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Enterprise Solutions</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to transform your IoT infrastructure? Contact our enterprise team 
            for a personalized consultation and discover how NexoraSIM can accelerate your digital transformation.
          </p>
        </motion.div>

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-2xl text-center hover:border-primary-500/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/20 text-primary-400 mb-6">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-slate-300 mb-2">{method.description}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                <Clock className="w-4 h-4" />
                {method.availability}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-morphism p-12 rounded-2xl text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-6">
            Start Your IoT Transformation Today
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join industry leaders who trust NexoraSIM for their critical IoT infrastructure. 
            Get started with a personalized demo and consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="group">
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              Download Whitepaper
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold gradient-text mb-2">30 min</div>
              <div className="text-slate-400">Demo Duration</div>
            </div>
            <div className="p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold accent-gradient-text mb-2">Free</div>
              <div className="text-slate-400">Consultation</div>
            </div>
            <div className="p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold gradient-text mb-2">24h</div>
              <div className="text-slate-400">Response Time</div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise features and client types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enterprise features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">Enterprise Benefits</h3>
            <div className="space-y-4">
              {enterpriseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
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

          {/* Client types */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">Who We Serve</h3>
            <div className="space-y-6">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-morphism p-6 rounded-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary-500/20 text-primary-400">
                      {client.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{client.title}</h4>
                      <p className="text-slate-400">{client.description}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {client.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="w-1 h-1 bg-accent-400 rounded-full"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}