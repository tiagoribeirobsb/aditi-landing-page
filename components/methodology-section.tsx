
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Database, Lightbulb, Cog, Rocket } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

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
      features: ['Diagnóstico sistêmico completo', 'Identificação de gargalos e oportunidades', 'Análise da lógica de crescimento atual']
    },
    {
      letter: 'D',
      title: 'DIRECIONAMENTO DE VALOR',
      subtitle: 'Reposicionamento Estratégico',
      icon: Database,
      description: 'Redesenhamos o posicionamento da sua marca e a proposta de valor. Trazemos clareza sobre o que vender, para quem, como e por quê.',
      features: ['Reposicionamento de marca', 'Proposta de valor clara', 'Definição estratégica do negócio']
    },
    {
      letter: 'I',
      title: 'IMPULSO COMERCIAL',
      subtitle: 'Comercial, Marketing e Margem',
      icon: Lightbulb,
      description: 'Organizamos funis, canais e estratégias para vender com consistência e margem. Aplicamos rotinas práticas para a geração de demanda e a ativação do time.',
      features: ['Organização de funis de venda', 'Estratégias de geração de demanda', 'Ativação e treinamento do time']
    },
    {
      letter: 'T',
      title: 'TRAVE MESTRA OPERACIONAL',
      subtitle: 'Operação e Liderança',
      icon: Cog,
      description: 'Reestruturamos fluxos e papéis dentro da sua empresa, revisando ritos de gestão e indicadores-chave. A liderança passa a operar com foco, disciplina e alinhamento.',
      features: ['Reestruturação de fluxos operacionais', 'Revisão de ritos de gestão', 'Indicadores-chave de performance']
    },
    {
      letter: 'I',
      title: 'IMPLEMENTAÇÃO COM RITMO',
      subtitle: 'Execução com Cadência',
      icon: Rocket,
      description: 'Acompanhamos a execução com ferramentas de foco e rotina semanal/mensal para garantir que o plano saia do papel e os resultados se sustentem no tempo.',
      features: ['Ferramentas de foco e execução', 'Rotinas semanais e mensais', 'Acompanhamento de resultados sustentáveis']
    }
  ]

  return (
    <section id="methodology" className="py-20 bg-white">
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
              Metodologia <span className="text-purple-600">ADITI™</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossa metodologia proprietária foi construída com experiência corporativa e traduz grandes estratégias em rotinas simples e acionáveis. O método ADITI™ é a nossa arquitetura de crescimento empresarial, aplicável a todas as nossas frentes, para negócios que precisam evoluir com clareza, margem e cadência.
            </p>
          </motion.div>

          {/* ADITI Letters Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center mb-16"
          >
            <div className="flex space-x-2 sm:space-x-4 text-6xl sm:text-8xl font-bold font-poppins">
              {['A', 'D', 'I', 'T', 'I']?.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Pillars Grid - Layout Responsivo Corrigido */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {pillars?.map((pillar, index) => {
              const IconComponent = pillar?.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <Card className="h-[320px] w-full max-w-[280px] min-w-[240px] border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white group-hover:border-purple-300">
                    <CardHeader className="pb-2 p-3">
                      {/* Header Ultra Compacto */}
                      <div className="flex items-center space-x-2 mb-2">
                        <Avatar className="w-6 h-6 border border-white shadow-sm group-hover:scale-105 transition-transform duration-200">
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white text-xs font-bold font-poppins">
                            {pillar?.letter}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-gray-900 font-poppins leading-tight truncate">
                            {pillar?.title}
                          </h3>
                          <Badge variant="secondary" className="bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors duration-200 text-xs font-medium">
                            {pillar?.subtitle}
                          </Badge>
                        </div>
                      </div>

                      {/* Ícone Central Compacto */}
                      <div className="flex justify-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-200 border border-purple-100">
                          {IconComponent && <IconComponent className="w-4 h-4 text-purple-600 group-hover:text-purple-700 transition-colors duration-200" />}
                        </div>
                      </div>

                      <Separator className="my-2" />
                    </CardHeader>

                    <CardContent className="p-3 pt-0 flex flex-col h-[calc(100%-100px)]">
                      {/* Descrição Ultra Compacta */}
                      <p className="text-xs text-gray-600 leading-tight mb-2 line-clamp-2">
                        {pillar?.description}
                      </p>

                      {/* Features Ultra Compactas */}
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold text-gray-800 mb-1">Principais atividades:</h4>
                        <ul className="space-y-0.5">
                          {pillar?.features?.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-1.5 group/item">
                              <div className="w-2 h-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                              </div>
                              <span className="text-xs text-gray-600 leading-tight group-hover/item:text-gray-700 transition-colors duration-200">{feature}</span>
                            </li>
                          )) ?? []}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                Pronto para transformar sua empresa?
              </h3>
              <p className="text-gray-600 mb-6">
                Descubra como nossa metodologia ADITI™ pode acelerar sua transformação digital 
                com resultados mensuráveis em até 90 dias.
              </p>
              <button 
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
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
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
