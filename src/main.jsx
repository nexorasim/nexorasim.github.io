/**
 * NexoraCore AI Entry Point
 * Microsoft Global Black Belt Architecture Bootstrap
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import NexoraCoreApp from './NexoraCoreApp'
import './styles/nexoracore.css'

// Performance monitoring
if ('performance' in window && 'mark' in window.performance) {
  performance.mark('nexora-app-start')
}

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}

// Initialize NexoraCore AI Application
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <NexoraCoreApp />
  </React.StrictMode>
)

// Performance measurement
if ('performance' in window && 'measure' in window.performance) {
  window.addEventListener('load', () => {
    performance.mark('nexora-app-loaded')
    performance.measure('nexora-app-load-time', 'nexora-app-start', 'nexora-app-loaded')
    
    const measure = performance.getEntriesByName('nexora-app-load-time')[0]
    console.log(`NexoraCore loaded in ${measure.duration.toFixed(2)}ms`)
  })
}