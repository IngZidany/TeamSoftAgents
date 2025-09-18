import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote, Play, Award } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Gerente de Marketing",
      company: "TechCorp",
      location: "Madrid, España",
      content: "El programa de Soft Skills de CONAUTI transformó completamente mi carrera. En solo 3 meses, pude aplicar las técnicas de liderazgo que aprendí y mi equipo aumentó su productividad en un 40%. La metodología práctica y los casos de estudio reales hicieron toda la diferencia.",
      rating: 5,
      avatar: "MG",
      achievement: "Promoción a Directora en 6 meses",
      videoUrl: "https://demo.softskills-conauti.com/video1"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Director de Ventas",
      company: "InnovateLab",
      location: "Barcelona, España",
      content: "Como director de ventas, pensé que ya tenía buenas habilidades de comunicación. Pero este programa me enseñó técnicas avanzadas de negociación y persuasión que nunca había considerado. Mis ventas aumentaron un 60% en el primer trimestre después de completar el programa.",
      rating: 5,
      avatar: "CR",
      achievement: "Aumento salarial del 45%",
      videoUrl: "https://demo.softskills-conauti.com/video2"
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "CEO y Fundadora",
      company: "StartupXYZ",
      location: "Valencia, España",
      content: "Como emprendedora, las soft skills son cruciales para el éxito. Este programa me dio las herramientas para liderar mi equipo de 15 personas de manera efectiva. La sección de inteligencia emocional fue especialmente valiosa para manejar situaciones difíciles.",
      rating: 5,
      avatar: "AM",
      achievement: "Crecimiento del 200% en la empresa",
      videoUrl: "https://demo.softskills-conauti.com/video3"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Ingeniero Senior",
      company: "Google",
      location: "Mountain View, USA",
      content: "Viniendo de un background técnico, siempre me costó comunicar mis ideas de manera efectiva. Este programa me enseñó a presentar proyectos complejos de forma clara y persuasiva. Ahora lidero un equipo de 8 ingenieros y mi carrera ha despegado.",
      rating: 5,
      avatar: "DK",
      achievement: "Promoción a Staff Engineer",
      videoUrl: "https://demo.softskills-conauti.com/video4"
    },
    {
      id: 5,
      name: "Laura Fernández",
      role: "Consultora Senior",
      company: "McKinsey & Company",
      location: "Londres, Reino Unido",
      content: "En consultoría, las habilidades interpersonales son fundamentales. Este programa me ayudó a mejorar mi capacidad de escucha activa y resolución de conflictos. Los clientes han notado la diferencia y mi satisfacción laboral ha aumentado significativamente.",
      rating: 5,
      avatar: "LF",
      achievement: "Mejor calificación de cliente del año",
      videoUrl: "https://demo.softskills-conauti.com/video5"
    }
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-tech-900 to-primary-900 relative overflow-hidden">
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
            <Star className="w-4 h-4 mr-2" />
            Testimonios Reales
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Historias de{' '}
            <span className="bg-gradient-to-r from-jade-400 to-primary-400 bg-clip-text text-transparent">
              transformación
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Descubre cómo nuestros graduados han transformado sus carreras y vidas profesionales 
            con nuestro programa de Soft Skills.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-jade-500/10 to-primary-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-500/10 to-jade-500/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left - Testimonial Content */}
                  <div>
                    <div className="flex items-center mb-6">
                      <Quote className="w-8 h-8 text-jade-400 mr-3" />
                      <div className="flex">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 italic">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-jade-300 font-medium">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <p className="text-white/60 text-sm">
                          {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].location}
                        </p>
                      </div>
                      
                      <button 
                        onClick={() => window.open(testimonials[currentTestimonial].videoUrl, '_blank')}
                        className="flex items-center space-x-2 px-4 py-2 bg-jade-500/20 text-jade-300 rounded-lg hover:bg-jade-500/30 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        <span className="text-sm font-medium">Ver Video</span>
                      </button>
                    </div>
                  </div>

                  {/* Right - Profile and Achievement */}
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block mb-6">
                      <div className="w-32 h-32 bg-gradient-to-r from-jade-500 to-primary-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto lg:mx-0">
                        {testimonials[currentTestimonial].avatar}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-yellow-900" />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-jade-500/20 to-primary-500/20 rounded-2xl p-6 border border-jade-500/30">
                      <h5 className="text-lg font-semibold text-white mb-2">Logro Destacado</h5>
                      <p className="text-jade-300 font-medium">
                        {testimonials[currentTestimonial].achievement}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-8">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'bg-jade-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-jade-500/20 text-jade-300 border border-jade-500/30'
                  : 'bg-white/10 text-white/70 border border-white/20'
              }`}
            >
              {isAutoPlaying ? 'Pausar' : 'Reproducir'} automáticamente
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-jade-400 mb-2">10,000+</div>
            <div className="text-white/70">Estudiantes graduados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-jade-400 mb-2">95%</div>
            <div className="text-white/70">Satisfacción promedio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-jade-400 mb-2">85%</div>
            <div className="text-white/70">Reciben promociones</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-jade-400 mb-2">4.9/5</div>
            <div className="text-white/70">Calificación promedio</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
