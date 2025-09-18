import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Clock, Users, Zap } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Beta Gratuita',
      price: 'Gratis',
      period: 'Acceso Limitado',
      description: 'Perfecto para probar SoftSkill y conocer a Criker',
      features: [
        'Acceso a Criker por 7 días',
        '3 sesiones de pensamiento crítico',
        'Evaluación inicial de habilidades',
        'Reporte básico de progreso',
        'Soporte por email'
      ],
      cta: 'Probar Gratis',
      popular: false,
      color: 'border-metallic-600',
      buttonColor: 'from-metallic-600 to-metallic-700'
    },
    {
      name: 'Lista de Espera',
      price: 'Próximamente',
      period: 'Acceso Anticipado',
      description: 'Únete a la lista de espera para acceso prioritario',
      features: [
        'Acceso prioritario al lanzamiento',
        'Descuento especial del 50%',
        'Sesiones ilimitadas con Criker',
        'Todos los agentes especializados',
        'Reportes avanzados de progreso',
        'Soporte prioritario 24/7',
        'Certificación de habilidades'
      ],
      cta: 'Unirse a la Lista',
      popular: true,
      color: 'border-primary-500',
      buttonColor: 'from-primary-500 to-primary-600'
    },
    {
      name: 'Empresas',
      price: 'Personalizado',
      period: 'Para Equipos',
      description: 'Solución corporativa para desarrollo de equipos',
      features: [
        'Dashboard de administración',
        'Agentes especializados por rol',
        'Métricas de equipo en tiempo real',
        'Integración con herramientas corporativas',
        'Soporte dedicado',
        'Capacitación personalizada',
        'ROI garantizado'
      ],
      cta: 'Contactar Ventas',
      popular: false,
      color: 'border-metallic-600',
      buttonColor: 'from-metallic-600 to-metallic-700'
    }
  ]

  const roadmap = [
    {
      quarter: 'Q1 2024',
      features: [
        'Lanzamiento de Criker Beta',
        'Plataforma web básica',
        'Primeros 1000 usuarios beta'
      ]
    },
    {
      quarter: 'Q2 2024',
      features: [
        'Agente de Comunicación',
        'App móvil iOS/Android',
        'Integración con calendarios'
      ]
    },
    {
      quarter: 'Q3 2024',
      features: [
        'Agente de Liderazgo',
        'Dashboard avanzado',
        'Certificaciones oficiales'
      ]
    },
    {
      quarter: 'Q4 2024',
      features: [
        'API para desarrolladores',
        'Integración empresarial',
        'Lanzamiento global'
      ]
    }
  ]

  return (
    <section id="acceso" className="py-20 bg-gradient-to-b from-primary-900 to-metallic-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-400/5 rounded-full blur-3xl"></div>

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
            Formas de <span className="text-gradient">Acceso</span>
          </h2>
          <p className="text-xl text-metallic-300 max-w-3xl mx-auto">
            Aunque aún no estamos a la venta, puedes unirte a nuestra comunidad 
            y obtener acceso anticipado a SoftSkill
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass rounded-2xl p-8 border-2 ${plan.color} ${
                plan.popular ? 'scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Más Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary-400 mb-2">{plan.price}</div>
                <div className="text-metallic-400 mb-4">{plan.period}</div>
                <p className="text-metallic-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-metallic-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.name === 'Beta Gratuita' ? 'https://demo.softskill.ai' : '#'}
                target={plan.name === 'Beta Gratuita' ? '_blank' : '_self'}
                rel={plan.name === 'Beta Gratuita' ? 'noopener noreferrer' : ''}
                className={`w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r ${plan.buttonColor} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 btn-hover`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Roadmap de Desarrollo
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.quarter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-primary-500/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">{item.quarter}</h4>
                </div>
                
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-metallic-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 border border-primary-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para el Futuro de las Habilidades Blandas?
            </h3>
            <p className="text-metallic-300 mb-6 text-lg">
              Únete a miles de profesionales que ya están preparándose para el futuro del trabajo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://demo.softskill.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 btn-hover text-lg"
              >
                <Zap className="mr-2 w-5 h-5" />
                Probar Demo Gratis
              </a>
              <button className="inline-flex items-center px-8 py-4 border border-metallic-600 text-metallic-200 font-semibold rounded-lg hover:border-primary-500 hover:text-primary-400 transition-all duration-300 text-lg">
                <Users className="mr-2 w-5 h-5" />
                Unirse a la Lista de Espera
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
