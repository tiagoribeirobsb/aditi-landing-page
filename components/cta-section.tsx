'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Phone, Mail, CheckCircle, ArrowRight, Sparkles, Clock, Shield, Award } from 'lucide-react'

const CtaSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const interests = [
    'Ciclo Lucrativo (Estratégia e Vendas)',
    'IA Bridge (Automação e IA)',
    'Performance Digital (Marketing)',
    'Ecossistema Completo',
    'Consultoria Estratégica'
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Análise em 48h',
      description: 'Diagnóstico completo do seu negócio'
    },
    {
      icon: Shield,
      title: 'Sem compromisso',
      description: 'Consultoria estratégica gratuita'
    },
    {
      icon: Award,
      title: 'Roadmap personalizado',
      description: 'Plano de transformação digital'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      
      // Track conversion
      if (typeof window !== 'undefined') {
        console.log('Conversion tracked successfully')
        
        // Redirect to WhatsApp after submission
        setTimeout(() => {
          try {
            const whatsappMessage = `Olá! Acabei de preencher o formulário no site da Aditi Digital Experts. Meu nome é ${formData.name} e tenho interesse em: ${formData.interest}. Gostaria de agendar uma conversa!`
            const whatsappUrl = `https://wa.me/5511528684246?text=${encodeURIComponent(whatsappMessage)}`
            window.open(whatsappUrl, '_blank')
          } catch (error) {
            console.error('Erro ao abrir WhatsApp:', error)
            alert('Erro ao abrir WhatsApp. Tente novamente.')
          }
        }, 2000)
      }
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    try {
      if (!e || !e.target) return
      const { name, value } = e.target
      if (!name) return
      
      setFormData({
        ...formData,
        [name]: value || ''
      })
    } catch (error) {
      console.error('Erro ao processar mudança de input:', error)
    }
  }

  if (isSubmitted) {
    return (
      <section id="cta" className="section-spacing bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-display text-gray-900 mb-6">
                Obrigado pelo seu interesse!
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Recebemos suas informações e em breve você será redirecionado para o WhatsApp 
                para conversarmos sobre sua transformação digital.
              </p>
              <div className="flex justify-center">
                <div className="animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="cta" className="section-spacing bg-gray-50">
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
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-gray-700">Transformação Digital Gratuita</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display text-gray-900 mb-6 leading-tight">
              Pronto para destravar o crescimento da sua
              <span className="text-gradient block">
                empresa?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Converse com um dos nossos especialistas e descubra como nossa estrutura integrada pode transformar seus resultados.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              
              <div className="space-y-6">
                {benefits?.map((benefit, index) => {
                  const IconComponent = benefit?.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                    >
                      <div className="w-12 h-12 aditi-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                        {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit?.title}</h3>
                        <p className="text-gray-600">{benefit?.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-display text-gray-900 mb-6">
                  Prefere falar diretamente?
                </h3>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="https://wa.me/5511528684246"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    <span>WhatsApp Direto</span>
                  </a>
                  <a
                    href="mailto:contato@aditidigital.com.br"
                    className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>E-mail</span>
                  </a>
                </div>
              </div>

            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-display text-gray-900 mb-2 text-center">
                Solicite sua Análise Gratuita
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Preencha o formulário e receba um diagnóstico personalizado
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu nome completo *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu e-mail *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="WhatsApp *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione seu interesse *</option>
                    {interests?.map((interest, index) => (
                      <option key={index} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Conte-nos sobre seu desafio atual (opcional)"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Solicitar Análise Gratuita</span>
                    </>
                  )}
                </button>

                <p className="text-gray-500 text-sm text-center">
                  Seus dados estão seguros e protegidos conforme a LGPD. 
                  Não enviamos spam.
                </p>

              </form>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default CtaSection