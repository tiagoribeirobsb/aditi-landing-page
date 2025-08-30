'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Users, Trophy, Rocket, TrendingUp, DollarSign, Award, Target, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
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
      value: `R$ ${counters.revenue}M`,
      label: 'geridos em contas digitais',
      company: 'Adidas',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: TrendingUp,
      value: `+${counters.growth}%`,
      label: 'crescimento Mercado Livre',
      company: 'Adidas',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Rocket,
      value: `R$ ${counters.sales}M`,
      label: 'em 90 dias',
      company: 'Coca-Cola Femsa',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Award,
      value: `+${counters.performance}%`,
      label: 'performance digital',
      company: 'Netshoes',
      color: 'from-purple-400 to-pink-500'
    }
  ]

  const clientLogos = [
    { name: 'Adidas', src: '/images/adidas-removebg-preview.png' },
    { name: 'Coca-Cola FEMSA', src: '/images/coca-cola_femsa-LOGO.png' },
    { name: 'Alpargatas', src: '/images/Alpargatas_sa_logo.png' },
    { name: 'ASICS', src: '/images/asics-LOGO-removebg-preview.png' }
  ]

  return (
    <section id="about" className="section-spacing bg-gray-50">
      <div className="section-container">
        <div ref={ref} className="content-spacing">
          
          {/* Alexandra Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="max-w-4xl mx-auto">
              
              {/* Section Badge */}
              <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 mb-8">
                <Users className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-semibold text-gray-700">Quem conduz a Aditi Digital Experts</span>
              </div>

              {/* Alexandra Info */}
              <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                  
                  {/* Photo */}
                  <div className="lg:col-span-1">
                    <div className="relative max-w-xs mx-auto">
                      <div className="absolute inset-0 aditi-gradient rounded-full transform rotate-6"></div>
                      <div className="relative bg-white p-2 rounded-full">
                        <Image
                          src="/images/AlexandraVianna-removebg-preview.png"
                          alt="Alexandra Vianna - CEO Aditi Digital Experts"
                          width={300}
                          height={300}
                          className="w-full h-auto rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="lg:col-span-2 text-left space-y-6">
                    <div>
                      <h2 className="text-4xl font-display text-gray-900 mb-2">
                        Alexandra Vianna
                      </h2>
                      <p className="text-xl text-purple-600 font-semibold mb-6">
                        Fundadora & CEO
                      </p>
                    </div>
                    
                    <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                      <p>
                        Com mais de 20 anos de experiência em Estratégia, Marketing, Vendas e Digital, esteve à frente de áreas-chave em multinacionais de alto impacto como Adidas, ASICS, Alpargatas e Coca-Cola Femsa.
                      </p>
                      <p>
                        Ao longo da carreira, liderou ciclos de expansão, reposicionamento e inovação em diferentes setores — da indústria ao varejo — acumulando experiência prática em crescimento sustentável e transformação de negócios.
                      </p>
                    </div>

                    <button 
                      onClick={() => scrollToSection('cta')}
                      className="btn-primary group mt-8"
                    >
                      <span>Conversar com Alexandra</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-display text-gray-900 mb-4">
                Resultados alcançados em sua trajetória
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experiência comprovada em grandes corporações com impacto mensurável
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements?.map((achievement, index) => {
                const IconComponent = achievement?.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover text-center group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${achievement?.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                    </div>
                    <h4 className="text-3xl font-display text-gray-900 mb-2">{achievement?.value}</h4>
                    <p className="text-gray-600 font-medium mb-1">{achievement?.label}</p>
                    <p className="text-sm text-gray-500">{achievement?.company}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-gray-500 mb-12 font-medium">
              Experiência em grandes marcas globais
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {clientLogos?.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 w-full max-w-[200px]"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={150}
                    height={80}
                    className="w-full h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center"
          >
            <h3 className="text-3xl font-display text-gray-900 mb-6">
              Mais que uma empresa: uma arquitetura de crescimento
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              Com mais de 20 anos de experiência corporativa e centenas de negócios atendidos, a Aditi nasceu da necessidade de integrar inteligência estratégica, tecnologia aplicada e marketing de alta performance em uma mesma jornada.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Nosso papel como holding é simples: eliminar o ruído, alinhar recursos e oferecer soluções completas, combinando o melhor da inteligência humana com o poder da tecnologia.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection