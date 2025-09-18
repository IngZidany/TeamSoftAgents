import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Brain, Users, Target } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-metallic-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary-600/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Presentando Criker - Tu Agente de Pensamiento Crítico
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display"
            >
              Desarrolla{' '}
              <span className="text-gradient">Habilidades Blandas</span>{' '}
              con IA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-metallic-300 mb-8 max-w-2xl"
            >
              SoftSkill utiliza agentes inteligentes como <strong className="text-primary-400">Criker</strong> para 
              ayudarte a desarrollar pensamiento crítico y habilidades blandas de manera personalizada y efectiva.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://demo.softskill.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 btn-hover text-lg"
              >
                Probar Demo Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border border-metallic-600 text-metallic-200 font-semibold rounded-lg hover:border-primary-500 hover:text-primary-400 transition-all duration-300 text-lg">
                <Play className="mr-2 w-5 h-5" />
                Ver Video
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-metallic-700"
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-lg mx-auto mb-2">
                  <Brain className="w-6 h-6 text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-metallic-400">Usuarios Beta</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-lg mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-metallic-400">Mejora Comprobada</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-lg mx-auto mb-2">
                  <Target className="w-6 h-6 text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-metallic-400">Disponible</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass rounded-2xl p-8 border border-primary-500/20">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Criker</h3>
                    <p className="text-metallic-400">Agente de Pensamiento Crítico</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-metallic-800/50 rounded-lg p-4">
                    <p className="text-metallic-200 text-sm">
                      "Hola! Soy Criker. Te ayudo a desarrollar tu pensamiento crítico a través de conversaciones inteligentes y ejercicios personalizados."
                    </p>
                  </div>
                  
                  <div className="bg-primary-500/10 rounded-lg p-4 border border-primary-500/20">
                    <p className="text-white text-sm font-medium">
                      ¿Listo para mejorar tus habilidades de análisis y razonamiento?
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
