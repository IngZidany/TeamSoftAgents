import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Clock, CheckCircle, Play, ArrowRight } from 'lucide-react'

const Program = () => {
  const [activeModule, setActiveModule] = useState(0)

  const modules = [
    {
      title: "Fundamentos del Liderazgo",
      duration: "3 semanas",
      description: "Aprende los principios esenciales del liderazgo efectivo y cómo aplicarlos en tu entorno profesional.",
      topics: [
        "Estilos de liderazgo",
        "Toma de decisiones",
        "Gestión de equipos",
        "Comunicación estratégica"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Comunicación Efectiva",
      duration: "3 semanas",
      description: "Domina las técnicas de comunicación verbal, no verbal y escrita para impactar positivamente.",
      topics: [
        "Presentaciones impactantes",
        "Escucha activa",
        "Negociación",
        "Comunicación digital"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Inteligencia Emocional",
      duration: "2 semanas",
      description: "Desarrolla tu autoconocimiento y habilidades para manejar emociones propias y ajenas.",
      topics: [
        "Autoconciencia",
        "Autorregulación",
        "Empatía",
        "Habilidades sociales"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Trabajo en Equipo",
      duration: "2 semanas",
      description: "Aprende a colaborar efectivamente y resolver conflictos en equipos diversos.",
      topics: [
        "Dinámicas de equipo",
        "Resolución de conflictos",
        "Diversidad e inclusión",
        "Gestión de proyectos"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Pensamiento Crítico",
      duration: "2 semanas",
      description: "Desarrolla habilidades analíticas y de resolución de problemas complejos.",
      topics: [
        "Análisis de problemas",
        "Toma de decisiones",
        "Creatividad e innovación",
        "Pensamiento sistémico"
      ],
      color: "from-pink-500 to-pink-600"
    }
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Contenido Interactivo",
      description: "Videos, ejercicios prácticos y casos de estudio reales"
    },
    {
      icon: Users,
      title: "Comunidad Global",
      description: "Conecta con profesionales de todo el mundo"
    },
    {
      icon: Award,
      title: "Certificación",
      description: "Certificado avalado por CONAUTI y reconocido internacionalmente"
    },
    {
      icon: Clock,
      title: "Flexibilidad Total",
      description: "Estudia a tu ritmo, desde cualquier lugar y dispositivo"
    }
  ]

  return (
    <section id="programa" className="py-20 bg-gradient-to-b from-tech-800 to-primary-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-jade-500/20 rounded-full text-jade-300 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Nuestro Programa
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Programa Integral de{' '}
            <span className="bg-gradient-to-r from-jade-400 to-primary-400 bg-clip-text text-transparent">
              Soft Skills
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Un programa estructurado de 12 semanas diseñado para transformar tu carrera profesional 
            a través del desarrollo de habilidades blandas esenciales.
          </p>
        </motion.div>

        {/* Program Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Module Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Módulos del Programa</h3>
            <div className="space-y-4">
              {modules.map((module, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveModule(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeModule === index
                      ? 'bg-gradient-to-r from-jade-500/20 to-primary-500/20 border-2 border-jade-400/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{module.title}</h4>
                    <span className="text-sm text-jade-300 font-medium">{module.duration}</span>
                  </div>
                  <p className="text-white/60 text-sm">{module.description}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right - Active Module Details */}
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${modules[activeModule].color} rounded-2xl flex items-center justify-center mb-6`}>
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{modules[activeModule].title}</h3>
            <p className="text-white/70 mb-6">{modules[activeModule].description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Temas que cubrirás:</h4>
              <div className="space-y-3">
                {modules[activeModule].topics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-jade-400 flex-shrink-0" />
                    <span className="text-white/80">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-jade-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{modules[activeModule].duration}</span>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-jade-500/20 text-jade-300 rounded-lg hover:bg-jade-500/30 transition-colors">
                <Play className="w-4 h-4" />
                <span className="text-sm font-medium">Ver Preview</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-jade-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center bg-gradient-to-r from-jade-900/30 to-primary-900/30 rounded-3xl p-8 lg:p-12 border border-jade-500/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar tu transformación?
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Únete a miles de profesionales que ya han transformado sus carreras con nuestro programa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://demo.softskills-conauti.com', '_blank')}
              className="px-8 py-4 bg-gradient-to-r from-jade-500 to-jade-600 text-white rounded-full font-semibold text-lg hover:from-jade-600 hover:to-jade-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-jade-500/25 flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Probar Demo Gratis
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Ver Precios
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Program
