
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
    <footer className="bg-gray-900 text-white py-20">
      <div className="section-container">
        <div ref={ref}>
          
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            
            {/* Company Info & Manifesto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold mb-4 font-poppins">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Aditi Digital Experts
                  </span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Ecossistema de soluções digitais integradas para transformação empresarial.
                </p>
              </div>

              {/* Manifesto */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Nosso Manifesto</h4>
                <p className="text-gray-400 leading-relaxed">
                  "Somos um ecossistema de inteligência digital. Nosso papel é conectar estratégia, execução e tecnologia para resultados reais."
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/aditidigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/aditidigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@aditidigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5" />
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
              <ul className="space-y-3">
                <li>
                  <a href="#companies" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Ciclo Lucrativo
                  </a>
                </li>
                <li>
                  <a href="#companies" className="text-gray-400 hover:text-white transition-colors duration-300">
                    IA Bridge
                  </a>
                </li>
                <li>
                  <a href="#companies" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Performance Digital
                  </a>
                </li>
                <li>
                  <a href="#methodology" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Metodologia ADITI™
                  </a>
                </li>
                <li>
                  <a href="#cta" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Consultoria Gratuita
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
                  <Phone className="w-5 h-5 text-green-400" />
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
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a
                    href="mailto:contato@aditidigital.com.br"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    contato@aditidigital.com.br
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                  <span className="text-gray-400">
                    São Paulo, SP - Brasil
                    <br />
                    Atendimento Nacional e Internacional
                  </span>
                </li>
              </ul>
            </motion.div>

          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© {currentYear} Aditi Digital Experts. Todos os direitos reservados.</span>
              </div>

              {/* Legal Info */}
              <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-gray-400 text-sm">
                <span>CNPJ: 59.390.921/0001-50</span>
                <span className="hidden lg:inline">•</span>
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
