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
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <span className="nav-link">Solutions</span>
            <span className="nav-link">Operators</span>
            <span className="nav-link">Developers</span>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/support" className="nav-link">Support</Link>
          </nav>
          
          <button 
            onClick={toggleLanguage}
            className="glass-button text-sm font-medium"
          >
            {language === 'en' ? 'မြန်မာ' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header