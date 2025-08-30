
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Brain, Zap, ArrowRight } from 'lucide-react'

const CompaniesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const companies = [
    {
      name: 'Ciclo Lucrativo',
      icon: TrendingUp,
      tagline: 'Estratégia, estrutura e vendas com metodologia validada',
      description: '',
      features: [
        'Diagnóstico sistêmico e reposicionamento comercial',
        'Estruturação de operação e processos de venda',
        'Acompanhamento prático com foco em performance'
      ],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      name: 'IA Bridge',
      icon: Brain,
      tagline: 'Automação, dados e inteligência artificial aplicada',
      description: '',
      features: [
        'Gestão documental, funil e cobrança automatizada',
        'Dashboards em tempo real e workflows integrados',
        'Atendimento e e-commerce no WhatsApp com IA'
      ],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      name: 'Performance Digital',
      icon: Zap,
      tagline: 'Marketing com propósito e impacto real',
      description: '',
      features: [
        'Posicionamento de marca e conteúdo estratégico',
        'Tráfego pago e orgânico em sinergia',
        'Presença digital que atrai, engaja e converte'
      ],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    }
  ]

  return (
    <section id="companies" className="py-20 bg-white">
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
              Conheça as frentes que compõem nosso <span className="text-purple-600">ecossistema de soluções</span>
            </h2>
          </motion.div>

          {/* Companies Grid */}
          <div className="space-y-12">
            {companies?.map((company, index) => {
              const IconComponent = company?.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className={`${company?.bgColor} rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${company?.color} rounded-full flex items-center justify-center`}>
                          {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                        </div>
                        <div>
                          <h3 className={`text-3xl font-bold ${company?.textColor} font-poppins`}>
                            {company?.name}
                          </h3>
                          <p className="text-gray-600 font-medium">{company?.tagline}</p>
                        </div>
                      </div>

                      {company?.description && (
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {company?.description}
                        </p>
                      )}

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 mb-4">Principais serviços:</h4>
                        <ul className="space-y-2">
                          {company?.features?.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <div className={`w-5 h-5 bg-gradient-to-br ${company?.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          )) ?? []}
                        </ul>
                      </div>

                      <button 
                        className={`inline-flex items-center space-x-2 ${company?.textColor} font-semibold hover:underline group`}
                        onClick={() => {
                          try {
                            if (typeof document === 'undefined') {
                              console.error('Document não está disponível')
                              return
                            }
                            const element = document.getElementById('cta')
                            if (!element) {
                              console.error('Elemento CTA não encontrado')
                              return
                            }
                            element.scrollIntoView({ behavior: 'smooth' })
                          } catch (error) {
                            console.error('Erro ao rolar para CTA:', error)
                          }
                        }}
                      >
                        <span>Fale com um Especialista</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Visual Element */}
                    <div className="flex items-center justify-center lg:order-last">
                      <div className={`w-64 h-64 bg-gradient-to-br ${company?.color} rounded-full opacity-10 animate-pulse-slow`}></div>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default CompaniesSection
