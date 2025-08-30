'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, ArrowRight, Building2 } from 'lucide-react'

const SocialProofSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      quote: "A metodologia ADITI™ transformou nossa operação comercial. Em 90 dias, conseguimos estruturar processos que antes levavam meses para implementar.",
      author: "Diretor Comercial",
      company: "Empresa de Tecnologia",
      rating: 5
    },
    {
      quote: "O ecossistema integrado da Aditi nos permitiu ter uma visão 360° do negócio. A automação com IA revolucionou nossa eficiência operacional.",
      author: "CEO",
      company: "Startup de E-commerce",
      rating: 5
    },
    {
      quote: "Resultados excepcionais em marketing digital. A Performance Digital entregou ROI superior ao esperado em todas as campanhas.",
      author: "CMO",
      company: "Empresa de Varejo",
      rating: 5
    }
  ]

  const stats = [
    { number: '+300', label: 'empresas atendidas', color: 'from-orange-400 to-red-500' },
    { number: '20+', label: 'anos de experiência', color: 'from-purple-400 to-pink-500' },
    { number: '90 dias', label: 'para primeiros resultados', color: 'from-blue-400 to-cyan-500' },
    { number: '100%', label: 'foco em execução', color: 'from-green-400 to-emerald-500' }
  ]

  return (
    <section id="social-proof" className="section-spacing bg-white">
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
              <Star className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-gray-700">Resultados Comprovados</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display text-gray-900 mb-6 leading-tight">
              Transformação digital com 
              <span className="text-gradient block">
                resultados reais
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Centenas de empresas já transformaram seus negócios com nossa metodologia integrada
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {stats?.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat?.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-display text-gray-900 mb-2">{stat?.number}</h3>
                <p className="text-gray-600 font-medium">{stat?.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-display text-gray-900 mb-4">
                O que nossos clientes dizem
              </h3>
              <p className="text-lg text-gray-600">
                Depoimentos reais de empresas que transformaram seus resultados
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials?.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
                >
                  
                  {/* Quote Icon */}
                  <div className="w-12 h-12 aditi-gradient rounded-xl flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial?.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial?.quote}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial?.author}</p>
                    <p className="text-sm text-gray-500">{testimonial?.company}</p>
                  </div>

                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200"
          >
            <div className="text-center space-y-8">
              <h3 className="text-3xl font-display text-gray-900">
                Visão Atual
              </h3>
              <div className="space-y-6 max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hoje, lidera a Aditi Digital Experts como aceleradora de resultados empresariais, aplicando a disciplina estratégica das grandes corporações à realidade de empresas que precisam voltar a crescer com clareza, estrutura e rentabilidade.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Reconhecida por sua visão pragmática, escuta afiada e profundo respeito pelo empreendedor, Alexandra é responsável por conectar estratégia, execução e performance dentro do ecossistema Aditi.
                </p>
              </div>
              
              <button 
                onClick={() => {
                  try {
                    const element = document.getElementById('cta')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  } catch (error) {
                    console.error('Erro ao rolar para CTA:', error)
                  }
                }}
                className="btn-primary group"
              >
                <span>Agendar Conversa</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default SocialProofSection