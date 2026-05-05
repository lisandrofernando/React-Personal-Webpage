import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: 'var(--color-bg)'
        }}>
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem',
            maxWidth: '600px'
          }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Oops! Something went wrong
            </h2>
            <p style={{ color: 'var(--color-light)', marginBottom: '2rem' }}>
              We're sorry for the inconvenience. Please try refreshing the page or contact us if the problem persists.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className='btn btn-primary'
              style={{ marginRight: '1rem' }}
            >
              Refresh Page
            </button>
            <a href="/" className='btn btn-primary'>
              Go Home
            </a>
            {process.env.NODE_ENV === 'development' && (
              <details style={{ 
                marginTop: '2rem', 
                textAlign: 'left',
                color: 'var(--color-light)',
                fontSize: '0.85rem'
              }}>
                <summary>Error Details (Development Only)</summary>
                <pre style={{ 
                  backgroundColor: 'var(--color-bg-variant)', 
                  padding: '1rem',
                  borderRadius: '0.4rem',
                  overflow: 'auto',
                  marginTop: '1rem'
                }}>
                  {this.state.error && this.state.error.toString()}
                  {'\n\n'}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
