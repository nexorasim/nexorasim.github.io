import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

const Header = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gradient">
            NexoraSIM Entitlement Server
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link to="/" className="nav-link" aria-label="Go to home page">Home</Link>
            <Link to="/epm" className="nav-link" aria-label="ePM dashboard">ePM</Link>
            <Link to="/operators" className="nav-link" aria-label="View operators">Operators</Link>
            <Link to="/developers" className="nav-link" aria-label="Developer resources">Developers</Link>
            <Link to="/pricing" className="nav-link" aria-label="View pricing">Pricing</Link>
            <Link to="/support" className="nav-link" aria-label="Get support">Support</Link>
          </nav>
          
          <button 
            onClick={toggleLanguage}
            className="glass-button text-sm font-medium"
            aria-label={`Switch to ${language === 'en' ? 'Myanmar' : 'English'} language`}
          >
            {language === 'en' ? 'မြန်မာ' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header