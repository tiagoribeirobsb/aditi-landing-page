
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FaqSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
    <section id="faq" className="py-20 bg-white">
      <div className="section-container">
        <div ref={ref}>
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center space-x-3 mb-6">
              <HelpCircle className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-poppins">
                Perguntas <span className="text-purple-600">Frequentes</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tire suas dúvidas sobre nossos serviços, metodologia e processo de trabalho. 
              Se não encontrar sua resposta aqui, entre em contato conosco!
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs?.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-300"
              >
                
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 focus:outline-none hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq?.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-purple-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-purple-600" />
                      )}
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
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq?.answer}
                    </p>
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
            className="text-center mt-16"
          >
            <div className="bg-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa equipe de especialistas está pronta para esclarecer qualquer questão 
                e ajudar você a encontrar a melhor solução para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
                  className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
                >
                  Fale com um Especialista
                </button>
                <a
                  href="https://wa.me/5511528684246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
                >
                  WhatsApp Direto
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
