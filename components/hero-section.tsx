'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    try {
      if (typeof document === 'undefined') return
      const element = document.getElementById(id)
      if (!element) return
      element.scrollIntoView({ behavior: 'smooth' })
    } catch (error) {
      console.error('Erro ao rolar para seção:', error)
    }
  }

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      
      {/* Header with Logo */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 z-20 py-6"
      >
        <div className="section-container">
          <div className="flex justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 aditi-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="text-2xl font-display text-gray-900">
                Aditi <span className="text-gradient">DIGITAL EXPERTS</span>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Hero Content */}
      <div className="section-container pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-purple-50 px-4 py-2 rounded-full border border-orange-200">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">Ecossistema de Inteligência Digital</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-display text-gray-900 leading-tight">
              Um ecossistema de 
              <span className="text-gradient block">
                inteligência digital
              </span>
              para empresas que querem crescer
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Combinamos inteligência artificial, expertise em vendas e marketing digital para jornada completa de crescimento com clareza, automação e performance.
            </p>

            {/* Value Props */}
            <div className="space-y-4">
              {[
                'Metodologia proprietária ADITI™ validada',
                'Três frentes integradas em um só ecossistema',
                'Resultados concretos e sustentáveis'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 aditi-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
            >
              <button 
                onClick={() => scrollToSection('cta')}
                className="btn-primary group"
              >
                <span>Solicitar Análise Gratuita</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="btn-secondary group"
              >
                <Play className="w-5 h-5 mr-2" />
                <span>Conhecer a Metodologia</span>
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column - Alexandra Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Alexandra Photo Container */}
            <div className="relative z-10 max-w-lg mx-auto">
              <div className="relative">
                
                {/* Gradient Background */}
                <div className="absolute inset-0 aditi-gradient rounded-3xl transform rotate-3"></div>
                
                {/* Photo Container */}
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="relative">
                    <Image
                      src="/images/AlexandraVianna-removebg-preview.png"
                      alt="Alexandra Vianna - CEO Aditi Digital Experts"
                      width={400}
                      height={500}
                      className="w-full h-auto rounded-2xl"
                      priority
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">20+</div>
                        <div className="text-sm text-gray-600">Anos de experiência</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce mt-2"></div>
        </div>
      </motion.div>

    </section>
  )
}

export default HeroSection