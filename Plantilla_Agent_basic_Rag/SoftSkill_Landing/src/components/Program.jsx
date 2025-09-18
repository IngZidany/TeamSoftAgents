import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Brain, Target, BarChart3, Users, Clock } from 'lucide-react'

const Program = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: MessageCircle,
      title: 'Conversación Inicial',
      description: 'Criker te conoce a través de una conversación natural, identificando tus fortalezas y áreas de mejora.',
      details: [
        'Análisis de tu perfil actual',
        'Identificación de objetivos',
        'Evaluación de habilidades existentes'
      ]
    },
    {
      icon: Brain,
      title: 'Plan Personalizado',
      description: 'Crea un plan de desarrollo específico basado en tus necesidades y objetivos profesionales.',
      details: [
        'Ruta de aprendizaje personalizada',
        'Ejercicios adaptados a tu nivel',
        'Métricas de progreso claras'
      ]
    },
    {
      icon: Target,
      title: 'Práctica Dirigida',
      description: 'Ejercicios interactivos y escenarios reales para desarrollar tu pensamiento crítico.',
      details: [
        'Casos de estudio prácticos',
        'Simulaciones de situaciones reales',
        'Retroalimentación inmediata'
      ]
    },
    {
      icon: BarChart3,
      title: 'Seguimiento Continuo',
      description: 'Monitorea tu progreso y ajusta el programa según tu evolución.',
      details: [
        'Reportes de progreso semanales',
        'Ajustes automáticos del plan',
        'Celebración de logros'
      ]
    }
  ]

  return (
    <section id="programa" className="py-20 bg-gradient-to-b from-metallic-800 to-primary-900 relative overflow-hidden">
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
            Cómo Funciona <span className="text-gradient">SoftSkill</span>
          </h2>
          <p className="text-xl text-metallic-300 max-w-3xl mx-auto">
            Un proceso simple pero poderoso que transforma tu forma de pensar y comunicarte
          </p>
        </motion.div>

        {/* Interactive Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'border-primary-500 bg-primary-500/10'
                    : 'border-metallic-600 bg-metallic-800/50 hover:border-primary-500/50'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    activeStep === index
                      ? 'bg-primary-500'
                      : 'bg-metallic-700'
                  }`}>
                    <step.icon className={`w-6 h-6 ${
                      activeStep === index ? 'text-white' : 'text-metallic-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      activeStep === index ? 'text-white' : 'text-metallic-300'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      activeStep === index ? 'text-metallic-200' : 'text-metallic-400'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 border border-primary-500/20"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                {React.createElement(steps[activeStep].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{steps[activeStep].title}</h3>
                <p className="text-metallic-300">{steps[activeStep].description}</p>
              </div>
            </div>

            <div className="space-y-3">
              {steps[activeStep].details.map((detail, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-metallic-200">{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Personalizado</h3>
            <p className="text-metallic-300">Cada experiencia está adaptada a tus necesidades específicas</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Flexible</h3>
            <p className="text-metallic-300">Aprende a tu ritmo, cuando y donde quieras</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Efectivo</h3>
            <p className="text-metallic-300">Resultados medibles en semanas, no años</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Program
