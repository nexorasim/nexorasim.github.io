/**
 * NexoraCore Dynamic Island Header
 * iOS 26 Premium Layout with Microsoft Fluent UI
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Button, 
  Menu, 
  MenuTrigger, 
  MenuPopover, 
  MenuList, 
  MenuItem,
  Badge
} from '@fluentui/react-components';
import { 
  Navigation24Regular,
  Globe24Regular,
  Search24Regular
} from '@fluentui/react-icons';

interface NavigationItem {
  label: string;
  path: string;
  badge?: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Platform',
    path: '/',
    children: [
      { label: 'Home', path: '/' },
      { label: 'Entitlement Server', path: '/entitlement-server' },
      { label: 'Features', path: '/features', badge: '3D' },
      { label: 'Architecture', path: '/architecture' },
      { label: 'Technology', path: '/technology' }
    ]
  },
  {
    label: 'Solutions',
    path: '/solutions',
    children: [
      { label: 'eSIM Transfer', path: '/transfer' },
      { label: 'Migration', path: '/migration' },
      { label: 'Global Roaming', path: '/roaming' },
      { label: '5G Integration', path: '/5g', badge: 'New' },
      { label: 'VoLTE HD', path: '/volte' }
    ]
  },
  {
    label: 'Networks',
    path: '/networks',
    children: [
      { label: 'MPT Myanmar', path: '/operators/mpt' },
      { label: 'MYTEL', path: '/operators/mytel' },
      { label: 'ATOM', path: '/operators/atom' },
      { label: 'U9 Network', path: '/operators/u9' }
    ]
  },
  {
    label: 'Enterprise',
    path: '/enterprise',
    badge: 'Pro'
  },
  {
    label: 'Developers',
    path: '/api',
    children: [
      { label: 'API Playground', path: '/api' },
      { label: 'Documentation', path: '/docs' },
      { label: 'SDKs', path: '/sdks' },
      { label: 'Support', path: '/support' }
    ]
  }
];

const languageOptions = [
  { code: 'en', name: 'English', flag: 'US' },
  { code: 'my', name: 'မြန်မာ', flag: 'MM' },
  { code: 'zh', name: '中文', flag: 'CN' },
  { code: 'th', name: 'ไทย', flag: 'TH' },
  { code: 'vi', name: 'Tiếng Việt', flag: 'VN' },
  { code: 'id', name: 'Bahasa Indonesia', flag: 'ID' },
  { code: 'ms', name: 'Bahasa Malaysia', flag: 'MY' }
];

interface NexoraCoreHeaderProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const NexoraCoreHeader: React.FC<NexoraCoreHeaderProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLang = languageOptions.find(lang => lang.code === currentLanguage) || languageOptions[0];

  return (
    <>
      <header className={`dynamic-island-header ${isScrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <Link to="/" className="header-logo">
          <div className="logo-container">
            <div className="logo-icon">N</div>
            <span className="logo-text">NexoraSIM</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navigationItems.map((item) => (
            <div key={item.path} className="nav-item">
              {item.children ? (
                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                    <Button
                      appearance="transparent"
                      className={`nav-button ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                    >
                      {item.label}
                      {item.badge && (
                        <Badge appearance="filled" color="brand" size="small">
                          {item.badge}
                        </Badge>
                      )}
                    </Button>
                  </MenuTrigger>
                  <MenuPopover>
                    <MenuList>
                      {item.children.map((child) => (
                        <MenuItem key={child.path}>
                          <Link to={child.path} className="menu-link">
                            {child.label}
                            {child.badge && (
                              <Badge appearance="outline" color="brand" size="extra-small">
                                {child.badge}
                              </Badge>
                            )}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </MenuPopover>
                </Menu>
              ) : (
                <Link to={item.path}>
                  <Button
                    appearance="transparent"
                    className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                    {item.badge && (
                      <Badge appearance="filled" color="brand" size="small">
                        {item.badge}
                      </Badge>
                    )}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Search */}
          <Link to="/search">
            <Button
              appearance="transparent"
              icon={<Search24Regular />}
              className="action-button"
              aria-label="Search"
            />
          </Link>

          {/* Language Selector */}
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button
                appearance="transparent"
                icon={<Globe24Regular />}
                className="action-button"
              >
                {currentLang.name}
              </Button>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                {languageOptions.map((lang) => (
                  <MenuItem
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                  >
                    <span className="lang-flag">{lang.flag}</span>
                    {lang.name}
                  </MenuItem>
                ))}
              </MenuList>
            </MenuPopover>
          </Menu>

          {/* Mobile Menu Toggle */}
          <Button
            appearance="transparent"
            icon={<Navigation24Regular />}
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <h3>Navigation</h3>
              <Button
                appearance="transparent"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </Button>
            </div>
            <nav className="mobile-nav">
              {navigationItems.map((item) => (
                <div key={item.path} className="mobile-nav-section">
                  <Link
                    to={item.path}
                    className="mobile-nav-item primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    {item.badge && (
                      <Badge appearance="filled" color="brand" size="small">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                  {item.children && (
                    <div className="mobile-nav-children">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="mobile-nav-item secondary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                          {child.badge && (
                            <Badge appearance="outline" color="brand" size="extra-small">
                              {child.badge}
                            </Badge>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      <style>{`
        .dynamic-island-header {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dynamic-island-header.scrolled {
          background: rgba(245, 245, 245, 0.95);
          backdrop-filter: blur(32px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .header-logo {
          text-decoration: none;
          color: inherit;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--accent) 0%, #0099CC 100%);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: var(--font-size-lg);
        }

        .logo-text {
          font-weight: 600;
          font-size: var(--font-size-lg);
          color: var(--black);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .nav-item {
          position: relative;
        }

        .nav-button {
          color: var(--graphite);
          font-weight: 500;
          transition: all 0.2s ease;
          gap: var(--space-xs);
        }

        .nav-button:hover,
        .nav-button.active {
          color: var(--accent);
          background: rgba(0, 209, 255, 0.1);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .action-button {
          color: var(--graphite);
          transition: all 0.2s ease;
        }

        .action-button:hover {
          color: var(--accent);
          background: rgba(0, 209, 255, 0.1);
        }

        .mobile-menu-toggle {
          display: none;
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2000;
          display: none;
        }

        .mobile-menu-content {
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 100vh;
          background: var(--glass);
          backdrop-filter: var(--glass-blur);
          border-left: var(--glass-border);
          padding: var(--space-xl);
          overflow-y: auto;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xl);
          padding-bottom: var(--space-lg);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .mobile-nav-section {
          margin-bottom: var(--space-lg);
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-md);
          text-decoration: none;
          color: var(--black);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
          margin-bottom: var(--space-xs);
        }

        .mobile-nav-item.primary {
          font-weight: 600;
          background: rgba(0, 209, 255, 0.05);
        }

        .mobile-nav-item.secondary {
          font-weight: 400;
          margin-left: var(--space-lg);
          font-size: var(--font-size-sm);
        }

        .mobile-nav-item:hover {
          background: rgba(0, 209, 255, 0.1);
          color: var(--accent);
        }

        .mobile-nav-children {
          margin-top: var(--space-sm);
        }

        .menu-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          text-decoration: none;
          color: inherit;
        }

        .lang-flag {
          margin-right: var(--space-sm);
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .mobile-menu-overlay {
            display: block;
          }

          .dynamic-island-header {
            padding: var(--space-sm) var(--space-lg);
            gap: var(--space-md);
          }
        }

        @media (max-width: 480px) {
          .logo-text {
            display: none;
          }

          .mobile-menu-content {
            width: 100vw;
          }
        }
      `}</style>
    </>
  );
};

export default NexoraCoreHeader;