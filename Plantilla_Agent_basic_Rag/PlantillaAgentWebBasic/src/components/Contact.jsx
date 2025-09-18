import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, User, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: 'general'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        interest: 'general'
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+34 900 123 456", "+1 555 123 4567"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@softskills-conauti.com", "soporte@softskills-conauti.com"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Calle de la Innovación 123", "Madrid, España 28001"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lunes - Viernes: 9:00 - 18:00", "Sábados: 10:00 - 14:00"],
      color: "from-orange-500 to-orange-600"
    }
  ]

  const interests = [
    { value: 'general', label: 'Información General' },
    { value: 'program', label: 'Sobre el Programa' },
    { value: 'pricing', label: 'Precios y Descuentos' },
    { value: 'enterprise', label: 'Programas Empresariales' },
    { value: 'support', label: 'Soporte Técnico' },
    { value: 'partnership', label: 'Partnerships' }
  ]

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-primary-900 to-tech-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
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
            <MessageCircle className="w-4 h-4 mr-2" />
            Contacto
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            ¿Listo para{' '}
            <span className="bg-gradient-to-r from-jade-400 to-primary-400 bg-clip-text text-transparent">
              transformar
            </span>{' '}
            tu carrera?
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Contáctanos hoy mismo y descubre cómo nuestro programa de Soft Skills 
            puede acelerar tu crecimiento profesional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-jade-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h4>
                  <p className="text-white/70">Te responderemos en menos de 24 horas.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-jade-400 focus:bg-white/20 transition-all duration-300"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-jade-400 focus:bg-white/20 transition-all duration-300"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Teléfono
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-jade-400 focus:bg-white/20 transition-all duration-300"
                          placeholder="+34 600 000 000"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-jade-400 focus:bg-white/20 transition-all duration-300"
                        placeholder="Tu empresa"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Área de interés
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-jade-400 focus:bg-white/20 transition-all duration-300"
                    >
                      {interests.map((interest) => (
                        <option key={interest.value} value={interest.value} className="bg-tech-900">
                          {interest.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-jade-400 focus:bg-white/20 transition-all duration-300 resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-jade-500 to-jade-600 text-white rounded-xl font-semibold text-lg hover:from-jade-600 hover:to-jade-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-jade-500/25 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-white/70 text-sm">{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Acciones rápidas</h4>
                <div className="space-y-3">
                  <button 
                    onClick={() => window.open('https://demo.softskills-conauti.com', '_blank')}
                    className="w-full flex items-center space-x-3 px-4 py-3 bg-jade-500/20 text-jade-300 rounded-lg hover:bg-jade-500/30 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Probar Demo Gratis</span>
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://calendly.com/softskills-conauti', '_blank')}
                    className="w-full flex items-center space-x-3 px-4 py-3 bg-primary-500/20 text-primary-300 rounded-lg hover:bg-primary-500/30 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Agendar Consulta</span>
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://wa.me/34900123456', '_blank')}
                    className="w-full flex items-center space-x-3 px-4 py-3 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Directo</span>
                  </button>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-jade-900/30 to-primary-900/30 rounded-2xl p-6 border border-jade-500/20">
                <h4 className="text-lg font-semibold text-white mb-2">Tiempo de respuesta</h4>
                <p className="text-white/70 text-sm mb-4">
                  Nos comprometemos a responder a todos los mensajes en menos de 24 horas.
                </p>
                <div className="flex items-center space-x-2 text-jade-300 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Respuesta garantizada en 24h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
