import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Program from './components/Program'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Guarantees from './components/Guarantees'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-900 via-tech-800 to-primary-900">
      <Header />
      <Hero />
      <Problem />
      <Program />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Guarantees />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
