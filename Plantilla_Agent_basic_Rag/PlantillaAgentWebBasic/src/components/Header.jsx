import React, { useState, useEffect } from 'react'
import { Menu, X, Brain, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'El Problema', href: '#problema' },
    { name: 'El Programa', href: '#programa' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Preguntas', href: '#preguntas' },
    { name: 'Garantías', href: '#garantias' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-tech-900/95 backdrop-blur-md shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-jade-500 rounded-xl flex items-center justify-center animate-glow">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-jade-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                SoftSkills
              </h1>
              <p className="text-xs text-jade-300 font-medium">by CONAUTI</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-white/80 hover:text-jade-300 transition-colors duration-300 font-medium text-sm relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jade-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => window.open('https://demo.softskills-conauti.com', '_blank')}
              className="px-6 py-2.5 bg-gradient-to-r from-jade-500 to-jade-600 text-white rounded-full font-semibold hover:from-jade-600 hover:to-jade-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-jade-500/25"
            >
              Probar Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white/80 hover:text-jade-300 transition-colors duration-300 font-medium text-left py-2"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://demo.softskills-conauti.com', '_blank')}
                className="mt-4 px-6 py-2.5 bg-gradient-to-r from-jade-500 to-jade-600 text-white rounded-full font-semibold hover:from-jade-600 hover:to-jade-700 transition-all duration-300"
              >
                Probar Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
