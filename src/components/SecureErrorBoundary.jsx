import React from 'react';

class SecureErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error });
    
    if (process.env.NODE_ENV === 'production') {
      console.error('Error caught by boundary:', error.message);
    }
  }

  handleRefresh = () => {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="glass-panel p-8 max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-red-400 mb-4">
              Something went wrong
            </h2>
            <p className="text-accent/70 mb-6">
              We apologize for the inconvenience. Please refresh the page or try again later.
            </p>
            <button
              className="glass-button px-6 py-3"
              onClick={this.handleRefresh}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SecureErrorBoundary;