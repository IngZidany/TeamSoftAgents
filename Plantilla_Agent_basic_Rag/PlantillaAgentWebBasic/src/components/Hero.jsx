import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Star, Users, Award, TrendingUp } from 'lucide-react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  
  const heroTexts = [
    "Desarrolla tus habilidades blandas",
    "Potencia tu liderazgo",
    "Mejora tu comunicación",
    "Acelera tu carrera profesional"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Users, value: "10K+", label: "Estudiantes" },
    { icon: Award, value: "95%", label: "Satisfacción" },
    { icon: TrendingUp, value: "85%", label: "Promoción" }
  ]

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-900 via-primary-900 to-jade-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-jade-500/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-500/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-jade-400/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-jade-500/20 rounded-full text-jade-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              Programa Certificado por CONAUTI
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Desarrolla tus{' '}
              <span className="bg-gradient-to-r from-jade-400 to-primary-400 bg-clip-text text-transparent">
                Soft Skills
              </span>
            </motion.h1>

            <motion.div 
              className="text-2xl lg:text-3xl text-white/80 mb-8 h-16 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="animate-typing">
                {heroTexts[currentText]}
              </span>
            </motion.div>

            <motion.p 
              className="text-lg text-white/70 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Transforma tu carrera profesional con nuestro programa integral de desarrollo de habilidades blandas. 
              Aprende de expertos y conecta con una comunidad global de profesionales.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <button 
                onClick={() => window.open('https://demo.softskills-conauti.com', '_blank')}
                className="group px-8 py-4 bg-gradient-to-r from-jade-500 to-jade-600 text-white rounded-full font-semibold text-lg hover:from-jade-600 hover:to-jade-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-jade-500/25 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Probar Demo Gratis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Ver Programa Completo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-jade-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main visual container */}
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] animate-rotate-slow"></div>
                
                {/* Floating cards */}
                <motion.div 
                  className="absolute top-8 left-8 w-24 h-16 bg-gradient-to-r from-jade-500 to-jade-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Liderazgo
                </motion.div>
                
                <motion.div 
                  className="absolute top-16 right-12 w-28 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-2xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  Comunicación
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-20 left-12 w-32 h-16 bg-gradient-to-r from-white/20 to-white/10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-2xl backdrop-blur-sm"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  Trabajo en Equipo
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-8 right-8 w-26 h-16 bg-gradient-to-r from-jade-400 to-jade-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-2xl"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  Creatividad
                </motion.div>

                {/* Central focus element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-32 h-32 bg-gradient-to-r from-jade-400 to-primary-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Brain className="w-16 h-16" />
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-jade-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
