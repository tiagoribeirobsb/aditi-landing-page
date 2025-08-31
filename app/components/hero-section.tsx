
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Brain, TrendingUp } from 'lucide-react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    try {
      if (typeof document === 'undefined') {
        console.error('Document não está disponível')
        return
      }
      
      if (!id || !id.trim()) {
        console.error('ID da seção não pode estar vazio')
        return
      }
      
      const element = document.getElementById(id)
      if (!element) {
        console.error(`Elemento com ID '${id}' não encontrado`)
        return
      }
      
      element.scrollIntoView({ behavior: 'smooth' })
    } catch (error) {
      console.error('Erro ao rolar para seção:', error)
    }
  }

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative section-container flex items-center min-h-screen py-20">
        <div className="w-full text-center text-white">
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 font-poppins">
              Aditi Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                Experts
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed max-w-4xl mx-auto text-white/90">
              Um ecossistema de inteligência digital para empresas que querem crescer com clareza, automação e performance.
            </p>
            <p className="text-lg sm:text-xl font-light leading-relaxed max-w-4xl mx-auto text-white/80 mt-4">
              Somos uma holding que integra três frentes especializadas – Estratégia de Negócios, Inteligência Artificial e Marketing de Performance – para transformar o caos operacional em crescimento previsível e sustentável.
            </p>
            <p className="text-lg font-medium max-w-3xl mx-auto text-cyan-300 mt-8">
              Qual solução você está buscando hoje?
            </p>
          </motion.div>

          {/* Gateway Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            
            {/* Ciclo Lucrativo Button */}
            <div 
              onClick={() => scrollToSection('companies')}
              className="glass-effect rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/20 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-poppins">🚀 Ciclo Lucrativo</h3>
                <p className="text-sm text-white/80">Estratégia e Vendas com método validado</p>
                <ArrowRight className="w-5 h-5 text-cyan-300 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* IA Bridge Button */}
            <div 
              onClick={() => scrollToSection('companies')}
              className="glass-effect rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/20 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-poppins">🤖 IA Bridge</h3>
                <p className="text-sm text-white/80">Automação, Dados e Inteligência Artificial</p>
                <ArrowRight className="w-5 h-5 text-cyan-300 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Performance Digital Button */}
            <div 
              onClick={() => scrollToSection('companies')}
              className="glass-effect rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/20 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-poppins">📣 Performance Digital</h3>
                <p className="text-sm text-white/80">Marketing com propósito e performance</p>
                <ArrowRight className="w-5 h-5 text-cyan-300 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
