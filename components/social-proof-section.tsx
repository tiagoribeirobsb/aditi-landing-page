
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Award, TrendingUp, Target, Rocket, DollarSign } from 'lucide-react'

const SocialProofSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [counters, setCounters] = useState({
    revenue: 0,
    growth: 0,
    sales: 0,
    performance: 0
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 50
      const stepDuration = duration / steps

      const targets = {
        revenue: 550,
        growth: 212,
        sales: 8,
        performance: 83
      }

      let step = 0
      const interval = setInterval(() => {
        step++
        const progress = step / steps

        setCounters({
          revenue: Math.floor(targets.revenue * progress),
          growth: Math.floor(targets.growth * progress),
          sales: Math.floor(targets.sales * progress),
          performance: Math.floor(targets.performance * progress)
        })

        if (step >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }
  }, [inView])

  const achievements = [
    {
      icon: DollarSign,
      value: `R$ ${counters.revenue} milhões/ano`,
      label: 'geridos em contas digitais (Adidas)',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      value: `+${counters.growth}%`,
      label: 'de crescimento no Mercado Livre (Adidas)',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Rocket,
      value: `R$ ${counters.sales} milhões`,
      label: 'em 90 dias na Coca-Cola Femsa',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Award,
      value: `+${counters.performance}%`,
      label: 'de performance digital na Netshoes',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const experiences = [
    'Adidas',
    'ASICS', 
    'Alpargatas',
    'Coca-Cola Femsa',
    'Netshoes'
  ]

  return (
    <section id="social-proof" className="py-20 bg-white">
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
              Quem conduz a <span className="text-purple-600">Aditi Digital Experts</span>
            </h2>
          </motion.div>

          {/* Alexandra Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                
                {/* Profile Image Placeholder */}
                <div className="lg:col-span-1">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-24 h-24 text-white" />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 font-poppins">
                      👤 Alexandra Vianna
                    </h3>
                    <p className="text-xl text-purple-600 font-semibold mb-4">
                      Fundadora & CEO
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Com mais de 20 anos de experiência em Estratégia, Marketing, Vendas e Digital, esteve à frente de áreas-chave em multinacionais de alto impacto como Adidas, ASICS, Alpargatas e Coca-Cola Femsa.
                    </p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Ao longo da carreira, liderou ciclos de expansão, reposicionamento e inovação em diferentes setores — da indústria ao varejo — acumulando experiência prática em crescimento sustentável e transformação de negócios.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-poppins">
              Resultados alcançados em sua trajetória:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements?.map((achievement, index) => {
                const IconComponent = achievement?.icon
                return (
                  <div 
                    key={index}
                    className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all duration-300 text-center group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${achievement?.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{achievement?.value}</h4>
                    <p className="text-sm text-gray-600 font-medium">{achievement?.label}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Experience & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            {/* Current Role - Centralizado */}
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 font-poppins text-center">
                Visão Atual
              </h4>
              <div className="text-center space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Hoje, lidera a Aditi Digital Experts como aceleradora de resultados empresariais, aplicando a disciplina estratégica das grandes corporações à realidade de empresas que precisam voltar a crescer com clareza, estrutura e rentabilidade.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Reconhecida por sua visão pragmática, escuta afiada e profundo respeito pelo empreendedor, Alexandra é responsável por conectar estratégia, execução e performance dentro do ecossistema Aditi.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 font-poppins">
                Converse com Alexandra
              </h3>
              <p className="mb-6 opacity-90">
                Descubra como a experiência de mais de 20 anos em grandes corporações 
                pode acelerar o crescimento da sua empresa.
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
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Agendar Conversa
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
