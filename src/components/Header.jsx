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
    { path: '/devices', label: 'Devices' },
    { path: '/api', label: 'API' }
  ]

  const solutionsItems = [
    { path: '/transfer', label: 'eSIM Transfer' },
    { path: '/migration', label: 'SIM Migration' },
    { path: '/roaming', label: 'Global Roaming' },
    { path: '/5g', label: '5G Streaming' },
    { path: '/volte', label: 'VoLTE HD' },
    { path: '/security', label: 'Security' },
    { path: '/compliance', label: 'Compliance' }
  ]

  const companyItems = [
    { path: '/about', label: 'About' },
    { path: '/team', label: 'Team' },
    { path: '/careers', label: 'Careers' },
    { path: '/news', label: 'News' },
    { path: '/blog', label: 'Blog' },
    { path: '/press', label: 'Press' }
  ]

  const supportItems = [
    { path: '/contact', label: 'Contact' },
    { path: '/support', label: 'Support' },
    { path: '/faq', label: 'FAQ' },
    { path: '/whitepaper', label: 'Whitepaper' },
    { path: '/brochure', label: 'Brochure' },
    { path: '/flyer', label: 'Flyer' }
  ]

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'th', label: 'ไทย' },
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'ms', label: 'Bahasa Malaysia' },
    { code: 'mm', label: 'မြန်မာ' }
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

          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button appearance="subtle">Solutions</Button>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                {solutionsItems.map(item => (
                  <MenuItem key={item.path}>
                    <Link to={item.path} className="menu-item-link">
                      {item.label}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </MenuPopover>
          </Menu>

          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button appearance="subtle">Company</Button>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                {companyItems.map(item => (
                  <MenuItem key={item.path}>
                    <Link to={item.path} className="menu-item-link">
                      {item.label}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </MenuPopover>
          </Menu>

          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button appearance="subtle">Support</Button>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                {supportItems.map(item => (
                  <MenuItem key={item.path}>
                    <Link to={item.path} className="menu-item-link">
                      {item.label}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>

        <div className="header-actions">
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button appearance="subtle" icon={<Globe24Regular />}>
                Language
              </Button>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                {languages.map(lang => (
                  <MenuItem key={lang.code}>
                    <Link to={`/${lang.code}`} className="menu-item-link">
                      {lang.label}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </MenuPopover>
          </Menu>

          <Button appearance="primary" as={Link} to="/enterprise">
            Enterprise
          </Button>
        </div>

        <Button
          appearance="subtle"
          icon={<Navigation24Regular />}
          className="mobile-menu-toggle"
        />
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

        .menu-item-link {
          text-decoration: none;
          color: var(--black);
          display: block;
          width: 100%;
          padding: var(--space-sm);
        }

        .mobile-menu-toggle {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .header-actions {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}

export default Header