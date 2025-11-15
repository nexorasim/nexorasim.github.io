import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { Providers } from '@microsoft/mgt-element'
// import { MockProvider } from '@microsoft/mgt-mock-provider'
import App from './App.jsx'
import './styles/globals.css'

// Initialize Microsoft Graph Toolkit
// Providers.globalProvider = new MockProvider(true)

// Custom Fluent theme for NexoraSIM
const nexoraTheme = {
  ...webLightTheme,
  colorBrandBackground: '#00D1FF',
  colorBrandForeground1: '#000000',
  colorNeutralBackground1: '#F5F5F5',
  colorNeutralForeground1: '#000000'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FluentProvider theme={nexoraTheme}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </FluentProvider>
  </React.StrictMode>
)