import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Promise from './components/Promise'
import Program from './components/Program'
import Testimonials from './components/Testimonials'
import Problem from './components/Problem'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Guarantees from './components/Guarantees'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-metallic-900 via-metallic-800 to-primary-900">
      <Header />
      <main>
        <Hero />
        <Promise />
        <Program />
        <Testimonials />
        <Problem />
        <Benefits />
        <Pricing />
        <Guarantees />
      </main>
      <Footer />
    </div>
  )
}

export default App
