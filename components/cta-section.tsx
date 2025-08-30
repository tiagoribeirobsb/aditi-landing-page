
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Phone, Mail, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      
      // Track conversion (pixel firing simulation)
      if (typeof window !== 'undefined') {
        // Log conversion without exposing sensitive data
        console.log('Conversion tracked successfully')
        
        // Redirect to WhatsApp after submission
        setTimeout(() => {
          try {
            const whatsappMessage = `Olá! Acabei de preencher o formulário no site da Aditi Digital Experts. Meu nome é ${formData.name} e tenho interesse em: ${formData.interest}. Gostaria de agendar uma conversa!`
            const whatsappUrl = `https://wa.me/5511528684246?text=${encodeURIComponent(whatsappMessage)}`
            window.open(whatsappUrl, '_blank')
          } catch (error) {
            console.error('Erro ao abrir WhatsApp:', error)
            // Fallback: show error message to user
            alert('Erro ao abrir WhatsApp. Tente novamente.')
          }
        }, 2000)
      }
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    try {
      if (!e || !e.target) {
        console.error('Evento ou target não disponível')
        return
      }
      
      const { name, value } = e.target
      
      if (!name) {
        console.error('Nome do campo não encontrado')
        return
      }
      
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
      <section id="cta" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6 font-poppins">
              Obrigado pelo seu interesse!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Recebemos suas informações e em breve você será redirecionado para o WhatsApp 
              para conversarmos sobre sua transformação digital.
            </p>
            <div className="flex justify-center">
              <div className="animate-spin w-8 h-8 border-4 border-white border-t-transparent rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="section-container relative">
        <div ref={ref}>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-8 h-8 text-cyan-300" />
                <span className="text-cyan-300 font-semibold">Transformação Digital Gratuita</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-poppins">
                Pronto para destravar o crescimento da sua
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                  empresa?
                </span>
              </h2>
              
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Converse com um dos nossos especialistas e descubra como nossa estrutura integrada pode transformar seus resultados.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Análise gratuita do seu negócio em até 48h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Roadmap personalizado de transformação digital</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Sem compromisso, consultoria estratégica gratuita</span>
                </div>
              </div>

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
                  className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  <Mail className="w-5 h-5" />
                  <span>E-mail</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column - Interactive Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center font-poppins">
                Solicite sua Análise Gratuita
              </h3>

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
                      className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
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
                      className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
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
                      className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                  >
                    <option value="">Selecione seu interesse *</option>
                    {interests?.map((interest, index) => (
                      <option key={index} value={interest} className="text-gray-900">
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
                    className="w-full px-4 py-3 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 px-6 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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

                <p className="text-white/70 text-sm text-center">
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
