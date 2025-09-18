import React from 'react'
import { motion } from 'framer-motion'
import { Shield, RefreshCw, Award, Clock, CheckCircle, Star, Users, DollarSign } from 'lucide-react'

const Guarantees = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantía de Satisfacción 100%",
      description: "Si no estás completamente satisfecho con el programa en los primeros 30 días, te devolvemos tu dinero sin preguntas.",
      details: [
        "Reembolso completo en 30 días",
        "Sin preguntas ni condiciones",
        "Proceso simple y rápido",
        "Garantía respaldada por CONAUTI"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-900/20 to-green-800/20"
    },
    {
      icon: Award,
      title: "Certificación Garantizada",
      description: "Completa todos los módulos y ejercicios, y recibirás tu certificado avalado por CONAUTI sin costo adicional.",
      details: [
        "Certificado internacionalmente reconocido",
        "Válido para CV y LinkedIn",
        "Avalado por más de 500 empresas",
        "Sin costo adicional"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-900/20 to-blue-800/20"
    },
    {
      icon: RefreshCw,
      title: "Acceso de Por Vida",
      description: "Mantén acceso permanente a todo el contenido, actualizaciones futuras y la comunidad de graduados.",
      details: [
        "Contenido actualizado regularmente",
        "Nuevos módulos sin costo adicional",
        "Acceso a la comunidad de graduados",
        "Soporte técnico permanente"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-900/20 to-purple-800/20"
    },
    {
      icon: Users,
      title: "Soporte Personalizado",
      description: "Recibe apoyo individual y grupal durante todo el programa con mentores certificados.",
      details: [
        "Mentoría individual semanal",
        "Sesiones grupales de práctica",
        "Chat de soporte 24/7",
        "Foro de la comunidad activo"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-900/20 to-orange-800/20"
    }
  ]

  const stats = [
    {
      icon: CheckCircle,
      value: "100%",
      label: "Satisfacción Garantizada",
      description: "Garantía de devolución de dinero"
    },
    {
      icon: Award,
      value: "500+",
      label: "Empresas Reconocen",
      description: "Nuestro certificado internacionalmente"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Soporte Disponible",
      description: "Ayuda cuando la necesites"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Calificación Promedio",
      description: "De nuestros estudiantes"
    }
  ]

  const testimonials = [
    {
      name: "Sofia Chen",
      role: "Product Manager",
      company: "Microsoft",
      content: "La garantía de satisfacción me dio la confianza para inscribirme. Al final, no la necesité porque el programa superó mis expectativas.",
      rating: 5
    },
    {
      name: "Miguel Torres",
      role: "Consultor Senior",
      company: "Deloitte",
      content: "El certificado me ayudó a conseguir mi trabajo actual. Es reconocido internacionalmente y realmente marca la diferencia.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Directora de Marketing",
      company: "Amazon",
      content: "El soporte personalizado fue increíble. Mis mentores me ayudaron a aplicar las técnicas en situaciones reales de trabajo.",
      rating: 5
    }
  ]

  return (
    <section id="garantias" className="py-20 bg-gradient-to-b from-tech-900 to-primary-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
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
            <Shield className="w-4 h-4 mr-2" />
            Nuestras Garantías
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Tu éxito está{' '}
            <span className="bg-gradient-to-r from-jade-400 to-primary-400 bg-clip-text text-transparent">
              garantizado
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Estamos tan seguros de la calidad de nuestro programa que respaldamos tu inversión 
            con garantías sólidas y soporte excepcional.
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={`relative bg-gradient-to-br ${guarantee.bgColor} backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="10" cy="10" r="1"/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${guarantee.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <guarantee.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3">{guarantee.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{guarantee.description}</p>
                  
                  <ul className="space-y-2">
                    {guarantee.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-400 flex-shrink-0" />
                        <span className="text-white/60 text-xs">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-jade-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-jade-300 mb-1">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Lo que dicen sobre nuestras garantías
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
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role} en {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-white/70 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Money Back Guarantee Highlight */}
        <motion.div 
          className="bg-gradient-to-r from-green-900/30 to-jade-900/30 rounded-3xl p-8 lg:p-12 border border-green-500/20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-jade-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <DollarSign className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Garantía de Devolución de Dinero
          </h3>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Si no estás 100% satisfecho con nuestro programa en los primeros 30 días, 
            te devolvemos tu dinero completo. Sin preguntas, sin complicaciones.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">30 días</div>
              <div className="text-white/70">Para probar el programa</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-white/70">Devolución garantizada</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">0</div>
              <div className="text-white/70">Preguntas o condiciones</div>
            </div>
          </div>
          
          <button 
            onClick={() => window.open('https://demo.softskills-conauti.com', '_blank')}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-jade-500 text-white rounded-full font-semibold text-lg hover:from-green-600 hover:to-jade-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25"
          >
            Inscríbete Sin Riesgo
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Guarantees
