
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Database, Lightbulb, Cog, Rocket } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
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

          {/* ADITI Methodology Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="w-full">
              <Accordion type="single" collapsible className="w-full">
                {pillars?.map((pillar, index) => {
                  const IconComponent = pillar?.icon
                  return (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="hover:no-underline px-6 py-4">
                        <div className="flex items-center gap-4 text-left w-full">
                          <Badge variant="outline" className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 text-white border-0 text-sm font-bold">
                            {pillar?.letter}
                          </Badge>
                          <div className="flex-1">
                            <h3 className="font-bold text-base text-gray-900">{pillar?.title}</h3>
                            <p className="text-sm text-purple-600">{pillar?.subtitle}</p>
                          </div>
                          <div className="text-2xl">
                            {IconComponent && <IconComponent className="w-6 h-6 text-purple-600" />}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="ml-14">
                          <p className="text-gray-600 mb-4 leading-relaxed">{pillar?.description}</p>
                          <h4 className="font-semibold mb-3 text-gray-900">Principais atividades:</h4>
                          <ul className="space-y-2">
                            {pillar?.features?.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            )) ?? []}
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </Card>
          </motion.div>

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
