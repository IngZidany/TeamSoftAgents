import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Users, TrendingDown, Clock, Target, Zap } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: Users,
      title: "Falta de Habilidades Blandas",
      description: "El 75% de los profesionales carecen de habilidades blandas esenciales para el liderazgo",
      stat: "75%",
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingDown,
      title: "Oportunidades Perdidas",
      description: "Millones de promociones se pierden cada año por falta de competencias interpersonales",
      stat: "60%",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Clock,
      title: "Tiempo Limitado",
      description: "Los profesionales no encuentran tiempo para desarrollar estas habilidades de forma efectiva",
      stat: "80%",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Target,
      title: "Falta de Metodología",
      description: "No existe un programa estructurado que combine teoría y práctica de manera efectiva",
      stat: "90%",
      color: "from-purple-500 to-purple-600"
    }
  ]

  const consequences = [
    "Estancamiento profesional",
    "Baja productividad en equipos",
    "Comunicación inefectiva",
    "Falta de liderazgo",
    "Pérdida de oportunidades",
    "Insatisfacción laboral"
  ]

  return (
    <section id="problema" className="py-20 bg-gradient-to-b from-tech-900 to-tech-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M30 30c0-16.569-13.431-30-30-30v30h30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-300 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            El Problema Real
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            ¿Por qué fallan los{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              profesionales
            </span>{' '}
            en sus carreras?
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A pesar de tener conocimientos técnicos sólidos, muchos profesionales se estancan 
            en sus carreras debido a la falta de habilidades blandas esenciales.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${problem.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <problem.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-white mb-2">{problem.stat}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{problem.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consequences Section */}
        <motion.div 
          className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-3xl p-8 lg:p-12 border border-red-500/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Las Consecuencias del Problema
            </h3>
            <p className="text-white/70 text-lg">
              Sin habilidades blandas, los profesionales enfrentan estos desafíos:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consequences.map((consequence, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                <span className="text-white/80 font-medium">{consequence}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-jade-500/20 rounded-full text-jade-300 text-lg font-semibold mb-6">
            <Zap className="w-5 h-5 mr-2" />
            La Solución Existe
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Estás listo para transformar tu carrera?
          </h3>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Descubre cómo nuestro programa de Soft Skills puede cambiar tu vida profesional 
            en solo 12 semanas.
          </p>
          
          <button 
            onClick={() => document.getElementById('programa')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-jade-500 to-jade-600 text-white rounded-full font-semibold text-lg hover:from-jade-600 hover:to-jade-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-jade-500/25"
          >
            Ver la Solución
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem
