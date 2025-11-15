import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Spinner } from '@fluentui/react-components'
import Header from './components/Header'
import Footer from './components/Footer'
import CopilotOrb from './components/CopilotOrb'
import { pageRoutes } from './data/routes'

// Lazy load pages for performance
const HomePage = React.lazy(() => import('./pages/HomePage'))
const EntitlementServer = React.lazy(() => import('./pages/EntitlementServer'))
const Features = React.lazy(() => import('./pages/Features'))
const Architecture = React.lazy(() => import('./pages/Architecture'))
const Technology = React.lazy(() => import('./pages/Technology'))
const Devices = React.lazy(() => import('./pages/Devices'))
const Transfer = React.lazy(() => import('./pages/Transfer'))
const Migration = React.lazy(() => import('./pages/Migration'))
const Roaming = React.lazy(() => import('./pages/Roaming'))
const FiveG = React.lazy(() => import('./pages/FiveG'))
const VoLTE = React.lazy(() => import('./pages/VoLTE'))
const Security = React.lazy(() => import('./pages/Security'))
const Compliance = React.lazy(() => import('./pages/Compliance'))
const Partners = React.lazy(() => import('./pages/Partners'))
const Enterprise = React.lazy(() => import('./pages/Enterprise'))
const API = React.lazy(() => import('./pages/API'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Support = React.lazy(() => import('./pages/Support'))
const FAQ = React.lazy(() => import('./pages/FAQ'))
const About = React.lazy(() => import('./pages/About'))
const Team = React.lazy(() => import('./pages/Team'))
const Careers = React.lazy(() => import('./pages/Careers'))
const News = React.lazy(() => import('./pages/News'))
const Blog = React.lazy(() => import('./pages/Blog'))
const Press = React.lazy(() => import('./pages/Press'))
const Whitepaper = React.lazy(() => import('./pages/Whitepaper'))
const Brochure = React.lazy(() => import('./pages/Brochure'))
const Flyer = React.lazy(() => import('./pages/Flyer'))

// Regional pages
const RegionalPages = React.lazy(() => import('./pages/RegionalPages'))

const LoadingSpinner = () => (
  <div className="loading-container">
    <Spinner size="large" label="Loading NexoraSIM..." />
  </div>
)

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/entitlement-server" element={<EntitlementServer />} />
            <Route path="/features" element={<Features />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/migration" element={<Migration />} />
            <Route path="/roaming" element={<Roaming />} />
            <Route path="/5g" element={<FiveG />} />
            <Route path="/volte" element={<VoLTE />} />
            <Route path="/security" element={<Security />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/api" element={<API />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/press" element={<Press />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/flyer" element={<Flyer />} />
            <Route path="/:lang/*" element={<RegionalPages />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <CopilotOrb />
    </div>
  )
}

export default App