import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="glass-panel p-8 text-center max-w-md">
            <h2 className="text-2xl font-bold text-gradient mb-4">
              Something went wrong
            </h2>
            <p className="text-accent/70 mb-6">
              We encountered an unexpected error. Please refresh the page or try again later.
            </p>
            <button 
              onClick={() => {
                try {
                  window.location.reload()
                } catch (e) {
                  window.location.href = '/'
                }
              }}
              className="glass-button px-6 py-3"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary