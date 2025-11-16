/**
 * NexoraCore Main Application
 * Microsoft Global Black Belt Architecture Implementation
 */

import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FluentProvider, webLightTheme, Spinner } from '@fluentui/react-components';
// Microsoft Graph Toolkit imports (conditional loading)
// import { Provider } from '@microsoft/mgt-element';
// import { Msal2Provider } from '@microsoft/mgt-msal2-provider';

// Core Components
import NexoraCoreHeader from './components/NexoraCoreHeader';
import NexoraCoreCopilot from './components/NexoraCoreCopilot';
import NexoraCoreHomePage from './pages/NexoraCoreHomePage';

// Lazy-loaded pages for performance
const EntitlementServer = React.lazy(() => import('./pages/EntitlementServer'));
const Features = React.lazy(() => import('./pages/Features'));
const Architecture = React.lazy(() => import('./pages/Architecture'));
const Technology = React.lazy(() => import('./pages/Technology'));
const Enterprise = React.lazy(() => import('./pages/Enterprise'));
const API = React.lazy(() => import('./pages/API'));

// Operator pages
const MPT = React.lazy(() => import('./pages/operators/MPT'));

// Technical pages
const eSIMArchitecture = React.lazy(() => import('./pages/technical/eSIMArchitecture'));

// Industry pages
const Telecommunications = React.lazy(() => import('./pages/industries/Telecommunications'));

// Additional pages
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

// Configuration and styles
import { nexoraCoreConfig } from './core/NexoraCoreConfig';
import './styles/nexoracore.css';

// Microsoft Graph Provider Configuration (production ready)
const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_AZURE_CLIENT_ID || 'nexorasim-public-client',
    authority: 'https://login.microsoftonline.com/common'
  }
};

// Custom Fluent UI Theme for NexoraSIM
const nexoraTheme = {
  ...webLightTheme,
  colorBrandBackground: '#00D1FF',
  colorBrandBackgroundHover: '#0099CC',
  colorBrandBackgroundPressed: '#007AA3',
  colorBrandForeground1: '#00D1FF',
  colorBrandForeground2: '#0099CC',
  colorNeutralBackground1: '#F5F5F5',
  colorNeutralForeground1: '#000000',
  colorNeutralForeground2: '#333333',
  fontFamilyBase: 'Segoe UI Variable, Leelawadee UI, Noto Sans, system-ui, sans-serif'
};

interface AppState {
  currentLanguage: string;
  isLoading: boolean;
  networkStatus: 'online' | 'offline';
  userPreferences: {
    theme: 'light' | 'dark';
    animations: boolean;
    accessibility: boolean;
  };
}

const LoadingFallback: React.FC = () => (
  <div className="app-loading">
    <div className="loading-container">
      <Spinner size="large" label="Loading NexoraSIM..." />
      <p>Initializing Microsoft-powered platform...</p>
    </div>
  </div>
);

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Application error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="error-boundary">
        <div className="error-content">
          <h2>Something went wrong</h2>
          <p>We're experiencing technical difficulties. Please refresh the page.</p>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

const NexoraCoreApp: React.FC = () => {
  const [appState, setAppState] = useState<AppState>({
    currentLanguage: 'en',
    isLoading: true,
    networkStatus: 'online',
    userPreferences: {
      theme: 'light',
      animations: true,
      accessibility: false
    }
  });

  useEffect(() => {
    // Initialize Microsoft Graph Provider (production deployment)
    // if (typeof window !== 'undefined' && window.mgt) {
    //   Provider.globalProvider = new Msal2Provider(msalConfig);
    // }

    // Initialize application
    const initializeApp = async () => {
      try {
        // Load user preferences from localStorage
        const savedLanguage = localStorage.getItem('nexora-language') || 'en';
        const savedPreferences = localStorage.getItem('nexora-preferences');
        
        let preferences = appState.userPreferences;
        if (savedPreferences) {
          preferences = { ...preferences, ...JSON.parse(savedPreferences) };
        }

        // Detect user's preferred language if not set
        const browserLanguage = navigator.language.split('-')[0];
        const supportedLanguages = nexoraCoreConfig.languages.supported;
        const detectedLanguage = supportedLanguages.includes(browserLanguage) 
          ? browserLanguage 
          : savedLanguage;

        setAppState(prev => ({
          ...prev,
          currentLanguage: detectedLanguage,
          userPreferences: preferences,
          isLoading: false
        }));

        // Set document language
        document.documentElement.lang = detectedLanguage;
        
        // Apply theme class
        document.body.className = `theme-${preferences.theme}`;

      } catch (error) {
        console.error('App initialization error:', error);
        setAppState(prev => ({ ...prev, isLoading: false }));
      }
    };

    // Network status monitoring
    const handleOnline = () => setAppState(prev => ({ ...prev, networkStatus: 'online' }));
    const handleOffline = () => setAppState(prev => ({ ...prev, networkStatus: 'offline' }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    initializeApp();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleLanguageChange = (language: string) => {
    setAppState(prev => ({ ...prev, currentLanguage: language }));
    localStorage.setItem('nexora-language', language);
    document.documentElement.lang = language;

    // Apply language-specific font class
    document.body.classList.remove('lang-myanmar', 'lang-chinese', 'lang-thai', 'lang-vietnamese', 'lang-indonesian', 'lang-malay');
    if (language !== 'en') {
      const langClass = language === 'my' ? 'myanmar' : 
                       language === 'zh' ? 'chinese' : 
                       language === 'th' ? 'thai' : 
                       language === 'vi' ? 'vietnamese' : 
                       language === 'id' ? 'indonesian' : 'malay';
      document.body.classList.add(`lang-${langClass}`);
    }
  };

  const updateUserPreferences = (preferences: Partial<AppState['userPreferences']>) => {
    const newPreferences = { ...appState.userPreferences, ...preferences };
    setAppState(prev => ({ ...prev, userPreferences: newPreferences }));
    localStorage.setItem('nexora-preferences', JSON.stringify(newPreferences));
    
    // Apply theme
    document.body.className = `theme-${newPreferences.theme}`;
  };

  if (appState.isLoading) {
    return <LoadingFallback />;
  }

  return (
    <ErrorBoundary>
      <FluentProvider theme={nexoraTheme}>
        <Router>
          <div className="nexora-app">
            {/* Network Status Indicator */}
            {appState.networkStatus === 'offline' && (
              <div className="network-status offline">
                <span>You're currently offline. Some features may be limited.</span>
              </div>
            )}

            {/* Header */}
            <NexoraCoreHeader
              currentLanguage={appState.currentLanguage}
              onLanguageChange={handleLanguageChange}
            />

            {/* Main Content */}
            <main className="app-main">
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Core Pages */}
                  <Route 
                    path="/" 
                    element={
                      <NexoraCoreHomePage 
                        currentLanguage={appState.currentLanguage} 
                      />
                    } 
                  />
                  <Route path="/entitlement-server" element={<EntitlementServer />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/architecture" element={<Architecture />} />
                  <Route path="/technology" element={<Technology />} />
                  <Route path="/enterprise" element={<Enterprise />} />
                  <Route path="/api" element={<API />} />

                  {/* Operator Routes */}
                  <Route path="/operators/mpt" element={<MPT />} />

                  {/* Technical Routes */}
                  <Route path="/tech/esim-architecture" element={<eSIMArchitecture />} />

                  {/* Industry Routes */}
                  <Route path="/industries/telecommunications" element={<Telecommunications />} />

                  {/* Additional Routes */}
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/search" element={<SearchPage />} />

                  {/* Language-specific routes */}
                  {nexoraCoreConfig.languages.supported.map(lang => (
                    <Route
                      key={lang}
                      path={`/${lang}/*`}
                      element={
                        <NexoraCoreHomePage 
                          currentLanguage={lang} 
                        />
                      }
                    />
                  ))}

                  {/* 404 Fallback */}
                  <Route 
                    path="*" 
                    element={
                      <div className="not-found">
                        <h1>Page Not Found</h1>
                        <p>The page you're looking for doesn't exist.</p>
                      </div>
                    } 
                  />
                </Routes>
              </Suspense>
            </main>

            {/* Copilot Assistant */}
            <NexoraCoreCopilot currentLanguage={appState.currentLanguage} />

            {/* Accessibility Skip Link */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
          </div>
        </Router>
      </FluentProvider>

      <style jsx>{`
        .nexora-app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .app-main {
          flex: 1;
          padding-top: 80px; /* Account for fixed header */
        }

        .app-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: var(--pearl);
        }

        .loading-container {
          text-align: center;
          padding: var(--space-2xl);
        }

        .loading-container p {
          margin-top: var(--space-lg);
          color: var(--graphite);
          font-size: var(--font-size-lg);
        }

        .error-boundary {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: var(--pearl);
        }

        .error-content {
          text-align: center;
          padding: var(--space-3xl);
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          max-width: 500px;
        }

        .error-content h2 {
          color: var(--black);
          margin-bottom: var(--space-lg);
        }

        .error-content p {
          color: var(--graphite);
          margin-bottom: var(--space-xl);
        }

        .error-content button {
          background: var(--accent);
          color: white;
          border: none;
          padding: var(--space-md) var(--space-xl);
          border-radius: var(--radius-md);
          font-size: var(--font-size-base);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .error-content button:hover {
          background: #0099CC;
        }

        .network-status {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2000;
          padding: var(--space-sm);
          text-align: center;
          font-size: var(--font-size-sm);
          font-weight: 500;
        }

        .network-status.offline {
          background: #ff6b6b;
          color: white;
        }

        .not-found {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          text-align: center;
          padding: var(--space-3xl);
        }

        .not-found h1 {
          font-size: var(--font-size-4xl);
          color: var(--black);
          margin-bottom: var(--space-lg);
        }

        .not-found p {
          font-size: var(--font-size-lg);
          color: var(--graphite);
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: var(--accent);
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 3000;
          transition: top 0.3s;
        }

        .skip-link:focus {
          top: 6px;
        }

        /* Theme variations */
        .theme-dark {
          --pearl: #1a1a1a;
          --black: #ffffff;
          --graphite: #cccccc;
          --glass: rgba(26, 26, 26, 0.7);
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .glass-card {
            border: 2px solid var(--black);
            background: var(--pearl);
          }
        }
      `}</style>
    </ErrorBoundary>
  );
};

export default NexoraCoreApp;