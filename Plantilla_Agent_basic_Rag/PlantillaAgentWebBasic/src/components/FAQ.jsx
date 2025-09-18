import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle, MessageCircle, Clock, Users, Award } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0]))

  const faqs = [
    {
      question: "¿Cuánto tiempo necesito dedicar al programa?",
      answer: "El programa está diseñado para ser flexible. Recomendamos dedicar 3-4 horas por semana, pero puedes adaptarlo a tu horario. Todo el contenido está disponible 24/7 y puedes acceder desde cualquier dispositivo.",
      category: "Tiempo y Flexibilidad"
    },
    {
      question: "¿Qué incluye exactamente el programa?",
      answer: "El programa incluye: 5 módulos completos con videos HD, ejercicios prácticos, casos de estudio reales, acceso a la comunidad global, certificado avalado por CONAUTI, sesiones de mentoría grupal, materiales descargables y soporte técnico 24/7.",
      category: "Contenido del Programa"
    },
    {
      question: "¿Hay garantía de satisfacción?",
      answer: "Sí, ofrecemos una garantía de satisfacción del 100%. Si no estás completamente satisfecho con el programa en los primeros 30 días, te devolvemos tu dinero sin preguntas.",
      category: "Garantías"
    },
    {
      question: "¿El certificado es reconocido internacionalmente?",
      answer: "Absolutamente. Nuestro certificado está avalado por CONAUTI y es reconocido por más de 500 empresas a nivel mundial. Es válido para incluir en tu CV y LinkedIn.",
      category: "Certificación"
    },
    {
      question: "¿Puedo acceder al contenido después de completar el programa?",
      answer: "Sí, tendrás acceso de por vida a todo el contenido del programa, incluyendo actualizaciones futuras. También mantienes acceso a la comunidad de graduados.",
      category: "Acceso Permanente"
    },
    {
      question: "¿Hay soporte durante el programa?",
      answer: "Sí, ofrecemos múltiples canales de soporte: chat en vivo, email, sesiones de mentoría semanales, foro de la comunidad y soporte técnico 24/7.",
      category: "Soporte"
    },
    {
      question: "¿Qué pasa si no tengo experiencia previa en liderazgo?",
      answer: "No necesitas experiencia previa. El programa está diseñado para todos los niveles, desde principiantes hasta profesionales experimentados. Comenzamos con los fundamentos y avanzamos gradualmente.",
      category: "Nivel de Experiencia"
    },
    {
      question: "¿Puedo pagar en cuotas?",
      answer: "Sí, ofrecemos diferentes opciones de pago: pago único con descuento, 3 cuotas sin intereses, o 6 cuotas con un pequeño interés. También aceptamos tarjetas de crédito y débito.",
      category: "Pagos"
    },
    {
      question: "¿Hay descuentos disponibles?",
      answer: "Sí, ofrecemos descuentos para estudiantes, grupos de 3+ personas, y promociones especiales. También tenemos un programa de referidos donde puedes ganar descuentos.",
      category: "Descuentos"
    },
    {
      question: "¿El programa funciona para todas las industrias?",
      answer: "Absolutamente. Las soft skills son universales y aplicables a cualquier industria: tecnología, salud, finanzas, educación, retail, etc. Los ejemplos incluyen casos de múltiples sectores.",
      category: "Aplicabilidad"
    }
  ]

  const categories = [
    { name: "Tiempo y Flexibilidad", icon: Clock, count: 1 },
    { name: "Contenido del Programa", icon: HelpCircle, count: 1 },
    { name: "Garantías", icon: Award, count: 1 },
    { name: "Certificación", icon: Award, count: 1 },
    { name: "Acceso Permanente", icon: Clock, count: 1 },
    { name: "Soporte", icon: MessageCircle, count: 1 },
    { name: "Nivel de Experiencia", icon: Users, count: 1 },
    { name: "Pagos", icon: HelpCircle, count: 1 },
    { name: "Descuentos", icon: HelpCircle, count: 1 },
    { name: "Aplicabilidad", icon: HelpCircle, count: 1 }
  ]

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section id="preguntas" className="py-20 bg-gradient-to-b from-primary-900 to-tech-900 relative overflow-hidden">
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
            <HelpCircle className="w-4 h-4 mr-2" />
            Preguntas Frecuentes
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Resolvemos tus{' '}
            <span className="bg-gradient-to-r from-jade-400 to-primary-400 bg-clip-text text-transparent">
              dudas
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Aquí están las respuestas a las preguntas más comunes sobre nuestro programa. 
            Si no encuentras lo que buscas, contáctanos directamente.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <category.icon className="w-4 h-4 text-jade-400" />
              <span className="text-white/80 text-sm font-medium">{category.name}</span>
              <span className="text-white/40 text-xs">({category.count})</span>
            </div>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-jade-500 to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{faq.question}</h3>
                      <span className="text-xs text-jade-300 font-medium">{faq.category}</span>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: openItems.has(index) ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openItems.has(index) ? (
                      <Minus className="w-6 h-6 text-jade-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-white/60" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-jade-900/30 to-primary-900/30 rounded-3xl p-8 lg:p-12 border border-jade-500/20">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de soporte está aquí para ayudarte. Contáctanos y te responderemos 
              en menos de 24 horas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-jade-500 to-jade-600 text-white rounded-full font-semibold text-lg hover:from-jade-600 hover:to-jade-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-jade-500/25"
              >
                Contactar Soporte
              </button>
              
              <button 
                onClick={() => window.open('https://demo.softskills-conauti.com', '_blank')}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Probar Demo Gratis
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
