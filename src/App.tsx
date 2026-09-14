import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import About from './components/layout/About'
import Services from './components/layout/Services'
import Contact from './components/layout/Contact'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/> 
    <About/> 
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
