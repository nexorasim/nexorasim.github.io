import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './hooks/useLanguage'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Compliance from './pages/Compliance'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-primary">
          <Header />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compliance" element={<Compliance />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App