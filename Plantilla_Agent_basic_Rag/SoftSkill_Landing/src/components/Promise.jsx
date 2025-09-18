import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Target, TrendingUp, Shield } from 'lucide-react'

const Promise = () => {
  const promises = [
    {
      icon: Zap,
      title: 'Transformación Rápida',
      description: 'Desarrolla habilidades blandas en semanas, no años, con nuestro enfoque de IA personalizado.'
    },
    {
      icon: Target,
      title: 'Resultados Precisos',
      description: 'Criker identifica exactamente qué habilidades necesitas mejorar y te guía paso a paso.'
    },
    {
      icon: TrendingUp,
      title: 'Progreso Medible',
      description: 'Ve tu evolución en tiempo real con métricas claras y objetivos alcanzables.'
    },
    {
      icon: Shield,
      title: 'Confianza Garantizada',
      description: 'Aprende en un entorno seguro y sin juicios, diseñado para tu crecimiento personal.'
    }
  ]

  return (
    <section id="promesa" className="py-20 bg-gradient-to-b from-metallic-900 to-metallic-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            La <span className="text-gradient">Promesa</span> de SoftSkill
          </h2>
          <p className="text-xl text-metallic-300 max-w-3xl mx-auto">
            No solo te prometemos mejorar tus habilidades blandas, te garantizamos una transformación 
            real y duradera en tu capacidad de pensamiento crítico y comunicación.
          </p>
        </motion.div>

        {/* Promise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <promise.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white text-center mb-3">
                {promise.title}
              </h3>
              
              <p className="text-metallic-300 text-center leading-relaxed">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-primary-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para tu transformación?
            </h3>
            <p className="text-metallic-300 mb-6 text-lg">
              Únete a miles de profesionales que ya están desarrollando sus habilidades blandas con Criker
            </p>
            <a
              href="https://demo.softskill.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 btn-hover text-lg"
            >
              Comenzar Ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Promise
