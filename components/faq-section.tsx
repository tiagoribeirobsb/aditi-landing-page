'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react'

const FaqSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'A Aditi atende empresas de qual porte?',
      answer: 'De PMEs em tração até grupos consolidados buscando escalabilidade.'
    },
    {
      question: 'Preciso contratar todas as empresas?',
      answer: 'Não. Cada unidade da Aditi é autônoma, mas integrável.'
    },
    {
      question: 'Vocês trabalham com tecnologia própria?',
      answer: 'Sim. Nossas soluções são desenvolvidas e integradas por nosso time de produto.'
    },
    {
      question: 'Qual a duração média de um projeto?',
      answer: 'A maioria das implementações leva entre 60 e 120 dias, com ciclos mensais contínuos.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-spacing bg-white">
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
              <HelpCircle className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-gray-700">Dúvidas Frequentes</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display text-gray-900 mb-6 leading-tight">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tire suas dúvidas sobre nossos serviços, metodologia e processo de trabalho. 
              Se não encontrar sua resposta aqui, entre em contato conosco!
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-6 mb-20">
            {faqs?.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-8 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 pr-4">
                      {faq?.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index 
                          ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {openIndex === index ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq?.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200">
              <h3 className="text-3xl font-display text-gray-900 mb-6">
                Ainda tem dúvidas?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Nossa equipe de especialistas está pronta para esclarecer qualquer questão 
                e ajudar você a encontrar a melhor solução para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
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
                  <span>Fale com um Especialista</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <a
                  href="https://wa.me/5511528684246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>WhatsApp Direto</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default FaqSection