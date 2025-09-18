import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, CheckCircle, Users, Award, Clock, Heart } from 'lucide-react'

const Guarantees = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Privacidad Total',
      description: 'Tus datos están protegidos con encriptación de grado militar y nunca se comparten con terceros.',
      details: [
        'Encriptación end-to-end',
        'Cumplimiento GDPR',
        'Servidores seguros certificados',
        'Política de privacidad transparente'
      ]
    },
    {
      icon: Lock,
      title: 'Ética de IA',
      description: 'Nuestros agentes están diseñados con principios éticos sólidos y transparencia total.',
      details: [
        'Algoritmos auditados',
        'Sesgos minimizados',
        'Decisiones explicables',
        'Supervisión humana continua'
      ]
    },
    {
      icon: Eye,
      title: 'Transparencia',
      description: 'Puedes ver exactamente cómo funciona el sistema y qué datos utiliza para tu aprendizaje.',
      details: [
        'Proceso de aprendizaje visible',
        'Métricas de progreso claras',
        'Explicaciones detalladas',
        'Acceso a tus datos personales'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Calidad Garantizada',
      description: 'Contenido desarrollado por expertos en psicología cognitiva y desarrollo de habilidades.',
      details: [
        'Basado en investigación científica',
        'Validado por expertos',
        'Actualizaciones regulares',
        'Mejora continua del sistema'
      ]
    }
  ]

  const trustIndicators = [
    {
      icon: Users,
      title: '1000+ Usuarios Beta',
      description: 'Comunidad creciente de profesionales confiando en SoftSkill'
    },
    {
      icon: Award,
      title: 'Certificaciones',
      description: 'Cumplimos con los más altos estándares de seguridad y calidad'
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Soporte y aprendizaje disponibles cuando lo necesites'
    },
    {
      icon: Heart,
      title: 'Compromiso Social',
      description: 'Parte de nuestras ganancias se destinan a educación accesible'
    }
  ]

  return (
    <section id="garantias" className="py-20 bg-gradient-to-b from-metallic-900 to-metallic-800 relative overflow-hidden">
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
            Nuestras <span className="text-gradient">Garantías</span>
          </h2>
          <p className="text-xl text-metallic-300 max-w-3xl mx-auto">
            Tu confianza es nuestra prioridad. Por eso ofrecemos garantías sólidas 
            en privacidad, ética y calidad.
          </p>
        </motion.div>

        {/* Main Guarantees */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-metallic-300 text-lg">
                    {guarantee.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {guarantee.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-metallic-200">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Por Qué Confiar en SoftSkill
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <indicator.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {indicator.title}
                </h4>
                <p className="text-metallic-300">
                  {indicator.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Certificaciones y Estándares
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="glass rounded-lg p-4 border border-metallic-600">
              <div className="text-sm text-metallic-400 mb-1">Cumplimiento</div>
              <div className="text-lg font-semibold text-white">GDPR</div>
            </div>
            <div className="glass rounded-lg p-4 border border-metallic-600">
              <div className="text-sm text-metallic-400 mb-1">Seguridad</div>
              <div className="text-lg font-semibold text-white">ISO 27001</div>
            </div>
            <div className="glass rounded-lg p-4 border border-metallic-600">
              <div className="text-sm text-metallic-400 mb-1">Privacidad</div>
              <div className="text-lg font-semibold text-white">SOC 2</div>
            </div>
            <div className="glass rounded-lg p-4 border border-metallic-600">
              <div className="text-sm text-metallic-400 mb-1">Ética IA</div>
              <div className="text-lg font-semibold text-white">IEEE</div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 border border-primary-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Tienes Preguntas sobre Seguridad?
            </h3>
            <p className="text-metallic-300 mb-6 text-lg">
              Nuestro equipo de seguridad está disponible para responder cualquier pregunta 
              sobre privacidad, ética o protección de datos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:security@softskill.ai"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 btn-hover text-lg"
              >
                <Shield className="mr-2 w-5 h-5" />
                Contactar Seguridad
              </a>
              <button className="inline-flex items-center px-8 py-4 border border-metallic-600 text-metallic-200 font-semibold rounded-lg hover:border-primary-500 hover:text-primary-400 transition-all duration-300 text-lg">
                <Eye className="mr-2 w-5 h-5" />
                Ver Política de Privacidad
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Guarantees
