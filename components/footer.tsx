'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white section-spacing">
      <div className="section-container">
        <div ref={ref}>
          
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 aditi-gradient rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <h3 className="text-3xl font-display">
                    Aditi <span className="text-gradient">Digital Experts</span>
                  </h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Ecossistema de soluções digitais integradas para transformação empresarial com resultados concretos e sustentáveis.
                </p>
              </div>

              {/* Manifesto */}
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Nosso Manifesto</h4>
                <p className="text-gray-300 leading-relaxed italic">
                  "Somos um ecossistema de inteligência digital. Nosso papel é conectar estratégia, execução e tecnologia para resultados reais."
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/aditidigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/aditidigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/@aditidigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-purple-400">Nossos Serviços</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#companies" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                    <span>Ciclo Lucrativo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </li>
                <li>
                  <a href="#companies" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                    <span>IA Bridge</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </li>
                <li>
                  <a href="#companies" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                    <span>Performance Digital</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </li>
                <li>
                  <a href="#methodology" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                    <span>Metodologia ADITI™</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-purple-400">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a
                    href="https://wa.me/5511528684246"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    +55 11 5286-8424
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a
                    href="mailto:contato@aditidigital.com.br"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    contato@aditidigital.com.br
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-gray-400">
                    <p>São Paulo, SP - Brasil</p>
                    <p className="text-sm">Atendimento Nacional e Internacional</p>
                  </div>
                </li>
              </ul>
            </motion.div>

          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-800 pt-12"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              
              {/* Copyright */}
              <div className="text-gray-400 text-center lg:text-left">
                <p>© {currentYear} Aditi Digital Experts. Todos os direitos reservados.</p>
                <p className="text-sm mt-1">CNPJ: 59.390.921/0001-50</p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-gray-400">
                <a href="/privacy" className="hover:text-white transition-colors duration-300">
                  Política de Privacidade
                </a>
                <span className="hidden lg:inline">•</span>
                <a href="/terms" className="hover:text-white transition-colors duration-300">
                  Termos de Uso
                </a>
              </div>

              {/* Made with Love */}
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>para transformar negócios</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  )
}

export default Footer