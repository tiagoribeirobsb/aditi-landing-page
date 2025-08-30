'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Brain, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

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
      logo: '/images/Logo Ciclo Verde (1).png',
      features: [
        'Diagnóstico sistêmico e reposicionamento comercial',
        'Estruturação de operação e processos de venda',
        'Acompanhamento prático com foco em performance'
      ],
      gradient: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      name: 'IA Bridge',
      icon: Brain,
      tagline: 'Automação, dados e inteligência artificial aplicada',
      features: [
        'Gestão documental, funil e cobrança automatizada',
        'Dashboards em tempo real e workflows integrados',
        'Atendimento e e-commerce no WhatsApp com IA'
      ],
      gradient: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      name: 'Performance Digital',
      icon: Zap,
      tagline: 'Marketing com propósito e impacto real',
      features: [
        'Posicionamento de marca e conteúdo estratégico',
        'Tráfego pago e orgânico em sinergia',
        'Presença digital que atrai, engaja e converte'
      ],
      gradient: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    }
  ]

  return (
    <section id="companies" className="section-spacing bg-white">
      <div className="section-container">
        <div ref={ref} className="content-spacing">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 bg-gray-50 px-6 py-3 rounded-full border border-gray-200 mb-8">
              <Building2 className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-gray-700">Nosso Ecossistema</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display text-gray-900 mb-6 leading-tight">
              Conheça as frentes que compõem nosso 
              <span className="text-gradient block">
                ecossistema de soluções
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Três empresas especializadas trabalhando de forma integrada para sua transformação digital completa
            </p>
          </motion.div>

          {/* Companies Grid */}
          <div className="space-y-12">
            {companies?.map((company, index) => {
              const IconComponent = company?.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className={`grid lg:grid-cols-2 gap-0 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    
                    {/* Content */}
                    <div className={`p-12 lg:p-16 space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      
                      {/* Header */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${company?.gradient} rounded-2xl flex items-center justify-center`}>
                            {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                          </div>
                          <div>
                            <h3 className="text-3xl font-display text-gray-900">
                              {company?.name}
                            </h3>
                            <p className="text-lg text-gray-600 font-medium">{company?.tagline}</p>
                          </div>
                        </div>

                        {/* Logo if available */}
                        {company?.logo && (
                          <div className="pt-4">
                            <Image
                              src={company.logo}
                              alt={`${company.name} logo`}
                              width={200}
                              height={80}
                              className="h-16 w-auto"
                            />
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-gray-900">Principais serviços:</h4>
                        <ul className="space-y-3">
                          {company?.features?.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <div className={`w-6 h-6 bg-gradient-to-br ${company?.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-gray-700 leading-relaxed">{feature}</span>
                            </li>
                          )) ?? []}
                        </ul>
                      </div>

                      {/* CTA */}
                      <button 
                        onClick={() => {
                          try {
                            const element = document.getElementById('cta')
                            if (element) element.scrollIntoView({ behavior: 'smooth' })
                          } catch (error) {
                            console.error('Erro ao rolar para CTA:', error)
                          }
                        }}
                        className="inline-flex items-center space-x-2 text-purple-600 font-semibold text-lg hover:text-purple-700 group"
                      >
                        <span>Fale com um Especialista</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Visual Element */}
                    <div className={`${company?.bgColor} border-l ${company?.borderColor} p-12 lg:p-16 flex items-center justify-center min-h-[400px] ${!isEven ? 'lg:col-start-1' : ''}`}>
                      <div className="relative">
                        <div className={`w-64 h-64 bg-gradient-to-br ${company?.gradient} rounded-full opacity-20 animate-pulse-slow`}></div>
                        <div className={`absolute inset-0 w-64 h-64 bg-gradient-to-br ${company?.gradient} rounded-full opacity-10 animate-float`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {IconComponent && <IconComponent className={`w-24 h-24 text-gradient`} />}
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200">
              <h3 className="text-3xl font-display text-gray-900 mb-6">
                Qual solução você está buscando hoje?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Descubra como nosso ecossistema integrado pode acelerar sua transformação digital com resultados mensuráveis
              </p>
              <button 
                onClick={() => {
                  try {
                    const element = document.getElementById('cta')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  } catch (error) {
                    console.error('Erro ao rolar para CTA:', error)
                  }
                }}
                className="btn-primary"
              >
                Solicitar Análise Gratuita
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default CompaniesSection