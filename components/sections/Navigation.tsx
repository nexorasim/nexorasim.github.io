'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Menu, X, Globe } from 'lucide-react'

interface NavigationProps {
  locale: 'en' | 'mm'
  onLocaleChange: (locale: 'en' | 'mm') => void
}

export default function Navigation({ locale, onLocaleChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#features', label: locale === 'en' ? 'Features' : 'လုပ်ဆောင်ချက်များ' },
    { href: '#architecture', label: locale === 'en' ? 'Architecture' : 'ဗိသုကာ' },
    { href: '#compliance', label: locale === 'en' ? 'Compliance' : 'လိုက်နာမှု' },
    { href: '#iot', label: locale === 'en' ? 'IoT Platform' : 'IoT ပလပ်ဖောင်း' },
    { href: '#contact', label: locale === 'en' ? 'Contact' : 'ဆက်သွယ်ရန်' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold gradient-text">NexoraSIM</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Language switcher and CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onLocaleChange(locale === 'en' ? 'mm' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg glass-morphism text-slate-300 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{locale === 'en' ? 'မြန်မာ' : 'EN'}</span>
            </button>
            <Button size="sm">
              {locale === 'en' ? 'Get Started' : 'စတင်ရန်'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg glass-morphism text-slate-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-morphism border-t border-slate-700/50"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                  <button
                    onClick={() => onLocaleChange(locale === 'en' ? 'mm' : 'en')}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg glass-morphism text-slate-300 hover:text-white transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm">{locale === 'en' ? 'မြန်မာ' : 'EN'}</span>
                  </button>
                  <Button size="sm" className="flex-1">
                    {locale === 'en' ? 'Get Started' : 'စတင်ရန်'}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}