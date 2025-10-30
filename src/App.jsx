import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './hooks/useLanguage'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Compliance from './pages/Compliance'
import SystemDashboard from './pages/SystemDashboard'
import Developers from './pages/Developers'

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-primary">
            <Header />
            <main className="pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/compliance" element={<Compliance />} />
                <Route path="/system" element={<SystemDashboard />} />
                <Route path="/developers" element={<Developers />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  )
}

export default App