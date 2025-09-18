import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "María González",
      role: "Gerente de Proyectos",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Criker ha transformado completamente mi forma de abordar problemas complejos. En solo 3 semanas, mi equipo notó una mejora significativa en mi capacidad de análisis y toma de decisiones.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Estudiante de MBA",
      company: "Universidad Nacional",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Como estudiante, siempre tuve dificultades con el pensamiento crítico. Criker me ayudó a desarrollar estas habilidades de manera estructurada y práctica. Ahora me siento más confiado en mis presentaciones y análisis.",
    },
    {
      name: "Ana Martínez",
      role: "Consultora Senior",
      company: "Consulting Plus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "La personalización de Criker es increíble. Se adapta perfectamente a mi estilo de aprendizaje y me desafía justo en el nivel correcto. Mis clientes han notado una mejora notable en mis recomendaciones.",
    },
    {
      name: "David Chen",
      role: "Ingeniero de Software",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Aunque soy técnico, siempre supe que necesitaba mejorar mis habilidades blandas. Criker me ayudó a comunicar mejor mis ideas y a trabajar más efectivamente en equipo.",
    },
    {
      name: "Laura Fernández",
      role: "Directora de Recursos Humanos",
      company: "Global Corp",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "Implementamos Criker en nuestro programa de desarrollo de liderazgo. Los resultados han sido excepcionales. Nuestros gerentes han mejorado significativamente su capacidad de pensamiento estratégico.",
    },
    {
      name: "Roberto Silva",
      role: "Emprendedor",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "Como emprendedor, necesito tomar decisiones complejas constantemente. Criker me ha ayudado a desarrollar un marco de pensamiento más estructurado y efectivo para evaluar oportunidades.",
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-primary-900 to-metallic-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-400/5 rounded-full blur-3xl"></div>

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
            Lo Que Dicen Nuestros <span className="text-gradient">Usuarios</span>
          </h2>
          <p className="text-xl text-metallic-300 max-w-3xl mx-auto">
            Historias reales de transformación y crecimiento personal
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="glass rounded-2xl p-8 md:p-12 border border-primary-500/20">
                    <div className="flex items-start space-x-6">
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                          <Quote className="w-6 h-6 text-primary-400" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-lg text-metallic-200 mb-6 leading-relaxed">
                          "{testimonial.content}"
                        </p>

                        

                        {/* Author */}
                        <div className="flex items-center space-x-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                            <p className="text-metallic-400">
                              {testimonial.role} en {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-metallic-800/80 hover:bg-metallic-700 rounded-full flex items-center justify-center text-metallic-300 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-metallic-800/80 hover:bg-metallic-700 rounded-full flex items-center justify-center text-metallic-300 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-primary-500'
                    : 'bg-metallic-600 hover:bg-metallic-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">1000+</div>
            <div className="text-metallic-300">Usuarios Activos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">4.9/5</div>
            <div className="text-metallic-300">Calificación Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">95%</div>
            <div className="text-metallic-300">Mejora Comprobada</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
            <div className="text-metallic-300">Disponibilidad</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
