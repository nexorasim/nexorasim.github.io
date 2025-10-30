import React, { useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import IoTBackground from '../components/3d/IoTBackground'

const Home = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'NexoraSIM Entitlement Server',
      subtitle: 'Enterprise eSIM Platform',
      description: 'Enterprise-grade eSIM platform for MPT, MYTEL, ATOM, and U9 networks. Smart IoT connectivity solutions.',
      cta1: 'Get Started',
      cta2: 'View Documentation'
    },
    mm: {
      title: 'NexoraSIM Entitlement Server',
      subtitle: 'စီးပွားဖြစ် အဆင့်အမှင့် eSIM ပြက့ဖောင်',
      description: 'MPT။ MYTEL။ ATOM နှင့် U9 ကွန်ယက်မြားအတွက် စီးပွားဖြစ်အဆင့်အမှင့် eSIM ပြက့ဖောင်။ အမှင့်မှင့် IoT ချစ်ဆန်မှူ ဖြေဗှေးချက်မြား။',
      cta1: 'စတင်အစုံးပြူရန်',
      cta2: 'မှတ်တမ်းမြား ကြင့်ပါရန်'
    }
  }
  
  const t = content[language]

  useEffect(() => {
    document.title = 'NexoraSIM Entitlement Server - Enterprise eSIM Platform Myanmar'
  }, [])

  return (
    <>
      <IoTBackground />
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-panel p-12 mb-8">
            <h1 className="text-6xl font-bold text-gradient mb-6">
              {t.title}
            </h1>
            <h2 className="text-2xl text-accent/80 mb-8">
              {t.subtitle}
            </h2>
            <p className="text-lg text-accent/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="glass-button text-lg px-8 py-4 hover:scale-105 transition-transform"
                onClick={() => {
                  try {
                    window.open('/docs', '_blank')
                  } catch (e) {
                    window.location.href = '/docs'
                  }
                }}
                aria-label="Get started with NexoraSIM"
              >
                {t.cta1}
              </button>
              <button 
                className="glass-button text-lg px-8 py-4 hover:scale-105 transition-transform"
                onClick={() => {
                  try {
                    window.open('/docs/api-overview', '_blank')
                  } catch (e) {
                    window.location.href = '/docs/api-overview'
                  }
                }}
                aria-label="View API documentation"
              >
                {t.cta2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home