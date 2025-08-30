'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Database, Lightbulb, Cog, Rocket, ArrowRight } from 'lucide-react'

const MethodologySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pillars = [
    {
      letter: 'A',
      title: 'ANÁLISE PROFUNDA',
      subtitle: 'Diagnóstico Sistêmico',
      icon: Target,
      description: 'Entendemos onde estão os gargalos e as oportunidades ocultas em seu negócio. Analisamos a lógica que sustenta (ou trava) o crescimento atual.',
      features: ['Diagnóstico sistêmico completo', 'Identificação de gargalos e oportunidades', 'Análise da lógica de crescimento atual'],
      color: 'from-orange-400 to-red-500'
    },
    {
      letter: 'D',
      title: 'DIRECIONAMENTO DE VALOR',
      subtitle: 'Reposicionamento Estratégico',
      icon: Database,
      description: 'Redesenhamos o posicionamento da sua marca e a proposta de valor. Trazemos clareza sobre o que vender, para quem, como e por quê.',
      features: ['Reposicionamento de marca', 'Proposta de valor clara', 'Definição estratégica do negócio'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      letter: 'I',
      title: 'IMPULSO COMERCIAL',
      subtitle: 'Comercial, Marketing e Margem',
      icon: Lightbulb,
      description: 'Organizamos funis, canais e estratégias para vender com consistência e margem. Aplicamos rotinas práticas para a geração de demanda e a ativação do time.',
      features: ['Organização de funis de venda', 'Estratégias de geração de demanda', 'Ativação e treinamento do time'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      letter: 'T',
      title: 'TRAVE MESTRA OPERACIONAL',
      subtitle: 'Operação e Liderança',
      icon: Cog,
      description: 'Reestruturamos fluxos e papéis dentro da sua empresa, revisando ritos de gestão e indicadores-chave. A liderança passa a operar com foco, disciplina e alinhamento.',
      features: ['Reestruturação de fluxos operacionais', 'Revisão de ritos de gestão', 'Indicadores-chave de performance'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      letter: 'I',
      title: 'IMPLEMENTAÇÃO COM RITMO',
      subtitle: 'Execução com Cadência',
      icon: Rocket,
      description: 'Acompanhamos a execução com ferramentas de foco e rotina semanal/mensal para garantir que o plano saia do papel e os resultados se sustentem no tempo.',
      features: ['Ferramentas de foco e execução', 'Rotinas semanais e mensais', 'Acompanhamento de resultados sustentáveis'],
      color: 'from-indigo-400 to-purple-500'
    }
  ]

  return (
    <section id="methodology" className="section-spacing bg-gray-50">
      <div className="section-container">
        <div ref={ref} className="content-spacing">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 mb-8">
              <Rocket className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-gray-700">Nossa Metodologia</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display text-gray-900 mb-6 leading-tight">
              Metodologia <span className="text-gradient">ADITI™</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nossa metodologia proprietária foi construída com experiência corporativa e traduz grandes estratégias em rotinas simples e acionáveis. O método ADITI™ é a nossa arquitetura de crescimento empresarial, aplicável a todas as nossas frentes, para negócios que precisam evoluir com clareza, margem e cadência.
            </p>
          </motion.div>

          {/* ADITI Letters Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center mb-20"
          >
            <div className="flex space-x-4 text-8xl lg:text-9xl font-display">
              {['A', 'D', 'I', 'T', 'I']?.map((letter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  <span className="text-gradient">{letter}</span>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pillars Grid - Fixed Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* First Row - 3 cards */}
            {pillars?.slice(0, 3).map((pillar, index) => {
              const IconComponent = pillar?.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover group"
                >
                  
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pillar?.color} rounded-2xl flex items-center justify-center text-white text-2xl font-display group-hover:scale-110 transition-transform duration-300`}>
                      {pillar?.letter}
                    </div>
                    <div>
                      <h3 className="text-xl font-display text-gray-900 leading-tight">
                        {pillar?.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">{pillar?.subtitle}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${pillar?.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {pillar?.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Principais atividades:</h4>
                    <ul className="space-y-2">
                      {pillar?.features?.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${pillar?.color} rounded-full flex-shrink-0 mt-2`}></div>
                          <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                        </li>
                      )) ?? []}
                    </ul>
                  </div>

                </motion.div>
              )
            })}
          </div>

          {/* Second Row - 2 cards centered */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pillars?.slice(3, 5).map((pillar, index) => {
              const IconComponent = pillar?.icon
              const actualIndex = index + 3
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover group"
                >
                  
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pillar?.color} rounded-2xl flex items-center justify-center text-white text-2xl font-display group-hover:scale-110 transition-transform duration-300`}>
                      {pillar?.letter}
                    </div>
                    <div>
                      <h3 className="text-xl font-display text-gray-900 leading-tight">
                        {pillar?.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">{pillar?.subtitle}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${pillar?.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {pillar?.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Principais atividades:</h4>
                    <ul className="space-y-2">
                      {pillar?.features?.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${pillar?.color} rounded-full flex-shrink-0 mt-2`}></div>
                          <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                        </li>
                      )) ?? []}
                    </ul>
                  </div>

                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-display text-gray-900 mb-6">
                Pronto para transformar sua empresa?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Descubra como nossa metodologia ADITI™ pode acelerar sua transformação digital com resultados mensuráveis em até 90 dias.
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

export default MethodologySection