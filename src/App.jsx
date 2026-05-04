import React from 'react'
import Header from '../src/components/header/Header'
import Navbar from '../src/components/nav/Navbar'
import About from '../src/components/about/About'
import Experience from '../src/components/experience/Experience'
import Contact from '../src/components/contact/Contact'
import Footer from '../src/components/footer/Footer'



const App = () => {
  return (
    <>
    <Header />
    <Navbar/>
    <About/>
    <Experience />
    <Contact />
    <Footer />
    </>

  )
}

export default App