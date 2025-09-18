import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Zap, Target, Users, Clock, Shield, TrendingUp, Brain } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Pensamiento Crítico Avanzado',
      description: 'Desarrolla la capacidad de analizar, evaluar y sintetizar información de manera efectiva.',
      features: [
        'Análisis de problemas complejos',
        'Evaluación de argumentos',
        'Toma de decisiones informadas',
        'Resolución de conflictos'
      ]
    },
    {
      icon: Users,
      title: 'Comunicación Efectiva',
      description: 'Mejora tus habilidades de comunicación verbal, escrita y no verbal.',
      features: [
        'Presentaciones persuasivas',
        'Escritura clara y concisa',
        'Escucha activa',
        'Negociación efectiva'
      ]
    },
    {
      icon: Target,
      title: 'Liderazgo y Trabajo en Equipo',
      description: 'Desarrolla habilidades de liderazgo y colaboración para equipos de alto rendimiento.',
      features: [
        'Motivación de equipos',
        'Delegación efectiva',
        'Gestión de conflictos',
        'Colaboración interdisciplinaria'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Adaptabilidad y Resiliencia',
      description: 'Fortalece tu capacidad para adaptarte a cambios y superar desafíos.',
      features: [
        'Gestión del cambio',
        'Resolución de problemas',
        'Pensamiento creativo',
        'Manejo del estrés'
      ]
    }
  ]

  const advantages = [
    {
      icon: Zap,
      title: 'Resultados Rápidos',
      description: 'Ve mejoras significativas en solo 2-4 semanas',
      color: 'text-yellow-400'
    },
    {
      icon: Target,
      title: 'Personalizado',
      description: 'Adaptado a tu nivel y objetivos específicos',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      title: 'Flexible',
      description: 'Aprende a tu ritmo, cuando y donde quieras',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'Confiable',
      description: 'Basado en investigación científica y mejores prácticas',
      color: 'text-purple-400'
    }
  ]

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-metallic-800 to-primary-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-400/5 rounded-full blur-3xl"></div>

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
            Los <span className="text-gradient">Beneficios</span> de SoftSkill
          </h2>
          <p className="text-xl text-metallic-300 max-w-3xl mx-auto">
            Transforma tu vida profesional y personal con habilidades blandas desarrolladas 
            a través de inteligencia artificial personalizada
          </p>
        </motion.div>

        {/* Main Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-metallic-300 text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-metallic-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            ¿Por Qué Elegir SoftSkill?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-metallic-800/50 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {advantage.title}
                </h4>
                <p className="text-metallic-300">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 border border-primary-500/20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Resultados Comprobados
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">95%</div>
              <div className="text-metallic-300">de usuarios reportan mejoras significativas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">3x</div>
              <div className="text-metallic-300">más rápido que métodos tradicionales</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
              <div className="text-metallic-300">disponibilidad para tu aprendizaje</div>
            </div>
          </div>

          <a
            href="https://demo.softskill.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 btn-hover text-lg"
          >
            Experimenta los Beneficios
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
