import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('language') || 'en'
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('localStorage not available:', error)
      }
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('language', language)
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Failed to save language preference:', error)
      }
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'mm' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}