import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Users, Award, Clock, DollarSign, Brain, Target, Zap } from 'lucide-react'

const Benefits = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const benefitCategories = [
    {
      title: "Crecimiento Profesional",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
      benefits: [
        {
          title: "Promociones Más Rápidas",
          description: "El 85% de nuestros graduados reciben promociones en los primeros 6 meses",
          stat: "85%",
          icon: Target
        },
        {
          title: "Aumento Salarial",
          description: "Promedio de incremento salarial del 35% después de completar el programa",
          stat: "35%",
          icon: DollarSign
        },
        {
          title: "Mejores Oportunidades",
          description: "Acceso a posiciones de liderazgo y proyectos estratégicos",
          stat: "90%",
          icon: Award
        }
      ]
    },
    {
      title: "Desarrollo Personal",
      icon: Brain,
      color: "from-green-500 to-green-600",
      benefits: [
        {
          title: "Confianza Aumentada",
          description: "Desarrolla la confianza necesaria para liderar y tomar decisiones importantes",
          stat: "95%",
          icon: Zap
        },
        {
          title: "Mejor Comunicación",
          description: "Habilidades de comunicación que transforman relaciones profesionales",
          stat: "100%",
          icon: Users
        },
        {
          title: "Liderazgo Efectivo",
          description: "Aprende a inspirar y motivar equipos para lograr objetivos comunes",
          stat: "88%",
          icon: TrendingUp
        }
      ]
    },
    {
      title: "Impacto Organizacional",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      benefits: [
        {
          title: "Productividad Mejorada",
          description: "Equipos más productivos y eficientes con mejor comunicación",
          stat: "40%",
          icon: Clock
        },
        {
          title: "Retención de Talento",
          description: "Mejor ambiente laboral que reduce la rotación de personal",
          stat: "60%",
          icon: Users
        },
        {
          title: "Innovación Aumentada",
          description: "Cultura de innovación y creatividad en toda la organización",
          stat: "75%",
          icon: Brain
        }
      ]
    }
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Gerente de Marketing",
      company: "TechCorp",
      content: "El programa transformó completamente mi forma de liderar. Ahora puedo comunicarme efectivamente con mi equipo y los resultados han sido increíbles.",
      avatar: "MG",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Ventas",
      company: "InnovateLab",
      content: "Las habilidades que aprendí me ayudaron a conseguir una promoción y un aumento salarial del 40%. Definitivamente vale la pena.",
      avatar: "CR",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "CEO",
      company: "StartupXYZ",
      content: "Como emprendedora, las soft skills son cruciales. Este programa me dio las herramientas para crecer mi negocio y liderar mi equipo.",
      avatar: "AM",
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefitCategories.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-primary-900 to-tech-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
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
            <TrendingUp className="w-4 h-4 mr-2" />
            Beneficios Comprobados
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Transforma tu carrera con{' '}
            <span className="bg-gradient-to-r from-jade-400 to-primary-400 bg-clip-text text-transparent">
              resultados reales
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Miles de profesionales han transformado sus carreras y vidas con nuestro programa. 
            Descubre los beneficios que puedes obtener.
          </p>
        </motion.div>

        {/* Benefits Slider */}
        <div className="mb-16">
          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
              {benefitCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-jade-500 to-primary-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Benefits Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {benefitCategories[currentSlide].benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10 h-full">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefitCategories[currentSlide].color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${benefitCategories[currentSlide].color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-jade-400">{benefit.stat}</div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonials Slider */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Lo que dicen nuestros graduados
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-jade-500 to-primary-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role} en {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 text-yellow-400 fill-current">★</div>
                  ))}
                </div>
                
                <p className="text-white/70 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Section */}
        <motion.div 
          className="bg-gradient-to-r from-jade-900/30 to-primary-900/30 rounded-3xl p-8 lg:p-12 border border-jade-500/20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Retorno de Inversión Garantizado
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-jade-400 mb-2">300%</div>
              <div className="text-white/70">ROI promedio en 12 meses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-jade-400 mb-2">6 meses</div>
              <div className="text-white/70">Tiempo promedio de recuperación</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-jade-400 mb-2">95%</div>
              <div className="text-white/70">Satisfacción de nuestros estudiantes</div>
            </div>
          </div>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Nuestro programa no es solo una inversión en tu educación, es una inversión en tu futuro profesional.
          </p>
          
          <button 
            onClick={() => window.open('https://demo.softskills-conauti.com', '_blank')}
            className="px-8 py-4 bg-gradient-to-r from-jade-500 to-jade-600 text-white rounded-full font-semibold text-lg hover:from-jade-600 hover:to-jade-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-jade-500/25"
          >
            Comenzar mi Transformación
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
