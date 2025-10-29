import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

const Footer = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      description: 'Enterprise-grade eSIM platform for MPT, MYTEL, ATOM, and U9 networks. Powering the future of IoT connectivity.',
      company: 'Company',
      solutions: 'Solutions',
      developers: 'Developers',
      support: 'Support',
      legal: 'Legal',
      copyright: '2024 NexoraSIM. All rights reserved.'
    },
    mm: {
      description: 'MPT။ MYTEL။ ATOM နှင့် U9 ကွန်ယက်မြားအတွက် စီးပွားဖြစ်အဆင့်အမှင့် eSIM ပြက့ဖောင်။',
      company: 'ကံပနီ',
      solutions: 'ဖြေဗှေးချက်မြား',
      developers: 'ဒေဗြေးကာမြား',
      support: 'ပံ့ပိုးမှူ',
      legal: 'အဖြစ်အကြင့်',
      copyright: '2024 NexoraSIM။ အဖွင့်အပိုင်းမြား အချုပ်တောင်းပိုင့်ပါ။'
    }
  }
  
  const t = content[language]

  return (
    <footer className="glass-panel border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gradient mb-4">NexoraSIM</h3>
            <p className="text-accent/70 text-sm leading-relaxed">
              {t.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-accent mb-4">{t.company}</h4>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-accent/70 hover:text-accent transition-colors">About Us</Link>
              <Link to="/careers" className="block text-accent/70 hover:text-accent transition-colors">Careers</Link>
              <Link to="/news" className="block text-accent/70 hover:text-accent transition-colors">News</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-accent mb-4">{t.solutions}</h4>
            <div className="space-y-2 text-sm">
              <Link to="/enterprise" className="block text-accent/70 hover:text-accent transition-colors">Enterprise</Link>
              <Link to="/iot-overview" className="block text-accent/70 hover:text-accent transition-colors">IoT Overview</Link>
              <Link to="/esim-basics" className="block text-accent/70 hover:text-accent transition-colors">eSIM Basics</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-accent mb-4">{t.developers}</h4>
            <div className="space-y-2 text-sm">
              <Link to="/docs" className="block text-accent/70 hover:text-accent transition-colors">Documentation</Link>
              <Link to="/docs/api-reference" className="block text-accent/70 hover:text-accent transition-colors">API Reference</Link>
              <Link to="/docs/sdk-guide" className="block text-accent/70 hover:text-accent transition-colors">SDK Guide</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-accent mb-4">{t.legal}</h4>
            <div className="space-y-2 text-sm">
              <Link to="/terms" className="block text-accent/70 hover:text-accent transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="block text-accent/70 hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/compliance" className="block text-accent/70 hover:text-accent transition-colors">Compliance</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-accent/60 text-sm">&copy; {t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer