import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem } from '@fluentui/react-components'
import { Navigation24Regular, Globe24Regular } from '@fluentui/react-icons'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mainNavItems = [
    { path: '/', label: 'Home' },
    { path: '/entitlement-server', label: 'Entitlement Server' },
    { path: '/features', label: 'Features' },
    { path: '/architecture', label: 'Architecture' },
    { path: '/technology', label: 'Technology' },
    { path: '/api', label: 'API' }
  ]

  return (
    <header className={`dynamic-island ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="header-nav">
        <Link to="/" className="logo">
          <span className="logo-text">NexoraSIM</span>
        </Link>

        <div className="nav-menu">
          {mainNavItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="header-actions">
          <Button appearance="primary" as={Link} to="/enterprise">
            Enterprise
          </Button>
        </div>
      </nav>

      <style jsx>{`
        .header-nav {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo {
          text-decoration: none;
          color: var(--black);
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--black) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          flex: 1;
          margin-left: var(--space-xl);
        }

        .nav-link {
          text-decoration: none;
          color: var(--black);
          font-weight: 500;
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--radius-medium);
          transition: all 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          background: var(--accent);
          color: white;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .header-actions {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header