import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Users, Clock, Target, BarChart3 } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Falta de Habilidades Blandas',
      description: 'El 75% de los profesionales carecen de habilidades blandas esenciales como pensamiento crítico, comunicación efectiva y liderazgo.',
      stat: '75%',
      color: 'text-red-400'
    },
    {
      icon: Users,
      title: 'Comunicación Inefectiva',
      description: 'Las malas habilidades de comunicación cuestan a las empresas millones en productividad perdida y malentendidos.',
      stat: '$37B',
      color: 'text-orange-400'
    },
    {
      icon: Clock,
      title: 'Tiempo Limitado',
      description: 'Los métodos tradicionales de desarrollo de habilidades blandas requieren meses o años para mostrar resultados.',
      stat: '6-12 meses',
      color: 'text-yellow-400'
    },
    {
      icon: Target,
      title: 'Falta de Personalización',
      description: 'Los programas genéricos no se adaptan a las necesidades específicas de cada individuo o industria.',
      stat: '85%',
      color: 'text-purple-400'
    }
  ]

  const impacts = [
    {
      title: 'En el Trabajo',
      items: [
        'Dificultad para tomar decisiones complejas',
        'Problemas de comunicación con equipos',
        'Falta de liderazgo efectivo',
        'Baja productividad y eficiencia'
      ]
    },
    {
      title: 'En la Vida Personal',
      items: [
        'Dificultad para resolver conflictos',
        'Problemas de autoestima y confianza',
        'Falta de pensamiento analítico',
        'Dificultad para establecer metas claras'
      ]
    },
    {
      title: 'En el Desarrollo Profesional',
      items: [
        'Oportunidades de crecimiento limitadas',
        'Dificultad para adaptarse a cambios',
        'Falta de habilidades de networking',
        'Problemas para presentar ideas efectivamente'
      ]
    }
  ]

  return (
    <section id="problema" className="py-20 bg-gradient-to-b from-metallic-900 to-metallic-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            El Problema Real
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            La Crisis de las <span className="text-gradient">Habilidades Blandas</span>
          </h2>
          <p className="text-xl text-metallic-300 max-w-3xl mx-auto">
            En un mundo cada vez más complejo, la falta de habilidades blandas se ha convertido 
            en el mayor obstáculo para el éxito personal y profesional.
          </p>
        </motion.div>

        {/* Problem Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-xl mb-4 mx-auto">
                <problem.icon className="w-8 h-8 text-red-400" />
              </div>
              
              <div className="text-center mb-4">
                <div className={`text-3xl font-bold ${problem.color} mb-2`}>
                  {problem.stat}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {problem.title}
                </h3>
              </div>
              
              <p className="text-metallic-300 text-center text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Impact Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            El Impacto en Tu Vida
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-metallic-600 hover:border-primary-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-white mb-4 text-center">
                  {impact.title}
                </h4>
                
                <ul className="space-y-3">
                  {impact.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-metallic-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 border border-primary-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Te Reconoces en Esta Situación?
            </h3>
            <p className="text-metallic-300 mb-6 text-lg">
              No estás solo. Millones de profesionales enfrentan los mismos desafíos. 
              La buena noticia es que hay una solución.
            </p>
            <a
              href="#beneficios"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 btn-hover text-lg"
            >
              Descubre la Solución
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem
