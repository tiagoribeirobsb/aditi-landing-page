
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Users, Trophy, Rocket } from 'lucide-react'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Building2, number: '+300', label: 'empresas atendidas' },
    { icon: Trophy, number: 'Metodologia', label: 'própria' },
    { icon: Rocket, number: 'Ecossistema', label: '100% integrado' },
    { icon: Users, number: 'Foco em execução', label: 'e resultado' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div ref={ref}>
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Mais que uma empresa: uma arquitetura de crescimento para negócios que querem ir além.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Com mais de 20 anos de experiência corporativa e centenas de negócios atendidos, a Aditi nasceu da necessidade de integrar inteligência estratégica, tecnologia aplicada e marketing de alta performance em uma mesma jornada.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              Nosso papel como holding é simples: eliminar o ruído, alinhar recursos e oferecer soluções completas, combinando o melhor da inteligência humana com o poder da tecnologia.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {stats?.map((stat, index) => {
              const IconComponent = stat?.icon
              return (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 font-poppins">{stat?.number}</h3>
                  <p className="text-gray-600 font-medium">{stat?.label}</p>
                </div>
              )
            })}
          </motion.div>

          {/* Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto"
          >
            
            <div className="space-y-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                Nossa Proposta de Valor
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Metodologia proprietária ADITI™ para crescimento empresarial</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Três frentes integradas: diagnóstico, automação e marketing digital</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Foco em criar experiências impactantes com resultados concretos e sustentáveis</span>
                </li>
              </ul>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
