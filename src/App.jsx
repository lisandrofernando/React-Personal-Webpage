import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../src/components/header/Header'
import Navbar from '../src/components/nav/Navbar'
import ErrorBoundary from '../src/components/ErrorBoundary'

// Lazy load components for better performance
const About = lazy(() => import('../src/components/about/About'))
const Experience = lazy(() => import('../src/components/experience/Experience'))
const Contact = lazy(() => import('../src/components/contact/Contact'))
const Footer = lazy(() => import('../src/components/footer/Footer'))

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}>
    <p style={{ color: 'var(--color-primary)' }}>Loading...</p>
  </div>
)

const App = () => {
  return (
    <ErrorBoundary>
      <Helmet>
        <html lang="en" />
        <meta name="theme-color" content="#4db5ff" />
      </Helmet>
      <Header />
      <Navbar/>
      <Suspense fallback={<LoadingFallback />}>
        <About/>
        <Experience />
        <Contact />
      </Suspense>
      <Footer />
    </ErrorBoundary>
  )
}

export default App