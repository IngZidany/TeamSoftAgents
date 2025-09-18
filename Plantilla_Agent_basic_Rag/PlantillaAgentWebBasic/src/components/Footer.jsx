import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    programa: [
      { name: 'Módulos', href: '#programa' },
      { name: 'Metodología', href: '#programa' },
      { name: 'Certificación', href: '#garantias' },
      { name: 'Precios', href: '#contacto' }
    ],
    recursos: [
      { name: 'Blog', href: 'https://blog.softskills-conauti.com' },
      { name: 'Casos de Estudio', href: 'https://casos.softskills-conauti.com' },
      { name: 'Webinars', href: 'https://webinars.softskills-conauti.com' },
      { name: 'Recursos Gratuitos', href: 'https://recursos.softskills-conauti.com' }
    ],
    empresa: [
      { name: 'Sobre CONAUTI', href: 'https://conauti.com' },
      { name: 'Nuestro Equipo', href: 'https://conauti.com/equipo' },
      { name: 'Carreras', href: 'https://conauti.com/carreras' },
      { name: 'Partnerships', href: 'https://conauti.com/partnerships' }
    ],
    legal: [
      { name: 'Términos y Condiciones', href: 'https://softskills-conauti.com/terminos' },
      { name: 'Política de Privacidad', href: 'https://softskills-conauti.com/privacidad' },
      { name: 'Cookies', href: 'https://softskills-conauti.com/cookies' },
      { name: 'Aviso Legal', href: 'https://softskills-conauti.com/legal' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/softskills-conauti', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/softskills-conauti', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/softskills-conauti', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/softskills-conauti', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/softskills-conauti', label: 'YouTube' }
  ]

  return (
    <footer className="bg-gradient-to-b from-tech-900 to-tech-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-jade-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-jade-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">SoftSkills</h3>
                  <p className="text-sm text-jade-300 font-medium">by CONAUTI</p>
                </div>
              </div>
              
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Transformamos carreras profesionales a través del desarrollo de habilidades blandas 
                esenciales. Únete a miles de profesionales que ya han acelerado su crecimiento.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70 text-sm">
                  <Phone className="w-4 h-4 text-jade-400" />
                  <span>+34 900 123 456</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70 text-sm">
                  <Mail className="w-4 h-4 text-jade-400" />
                  <span>info@softskills-conauti.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-jade-400" />
                  <span>Calle de la Innovación 123, Madrid</span>
                </div>
              </div>
            </motion.div>

            {/* Programa Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Programa</h4>
              <ul className="space-y-3">
                {footerLinks.programa.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-jade-300 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recursos Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Recursos</h4>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-jade-300 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Empresa Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-jade-300 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="bg-gradient-to-r from-jade-900/30 to-primary-900/30 rounded-2xl p-8 mb-12 border border-jade-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h4 className="text-2xl font-bold text-white mb-2">Mantente actualizado</h4>
              <p className="text-white/70 mb-6">
                Recibe tips exclusivos, casos de estudio y ofertas especiales directamente en tu inbox.
              </p>
              
              <div className="max-w-md mx-auto flex space-x-4">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-jade-400 focus:bg-white/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-jade-500 to-jade-600 text-white rounded-xl font-semibold hover:from-jade-600 hover:to-jade-700 transition-all duration-300 transform hover:scale-105">
                  Suscribirse
                </button>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-jade-300 hover:bg-jade-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © 2024 SoftSkills by CONAUTI. Todos los derechos reservados.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white/70 transition-colors duration-300 text-xs"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-white/50 text-xs">Hecho con ❤️ en Madrid</span>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-jade-500/20 rounded-lg flex items-center justify-center text-jade-300 hover:bg-jade-500/30 transition-all duration-300"
                aria-label="Volver arriba"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
