'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone } from 'lucide-react'

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const predefinedMessages = [
    'Quero saber mais sobre o Ciclo Lucrativo',
    'Tenho interesse na IA Bridge',
    'Quero conhecer a Performance Digital',
    'Gostaria de uma consultoria gratuita',
    'Quero implementar o ecossistema completo'
  ]

  const sendWhatsAppMessage = (text?: string) => {
    try {
      if (typeof window === 'undefined') return

      const messageText = text || message || 'Olá! Vim através do site da Aditi Digital Experts e gostaria de saber mais sobre os serviços.'
      
      if (!messageText.trim()) return

      const whatsappUrl = `https://wa.me/5511528684246?text=${encodeURIComponent(messageText)}`
      const newWindow = window.open(whatsappUrl, '_blank')
      
      if (!newWindow) {
        throw new Error('Popup bloqueado')
      }
      
      setIsOpen(false)
      setMessage('')
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      alert('Erro ao abrir WhatsApp. Verifique se popups estão habilitados.')
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-80 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Aditi Digital Experts</h3>
                    <p className="text-sm opacity-90">Especialista online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              
              {/* Welcome Message */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <p className="text-gray-800 leading-relaxed">
                  👋 <strong>Olá!</strong> Sou especialista da Aditi Digital Experts.
                  <br /><br />
                  Como posso ajudar você hoje?
                </p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3 mb-6">
                <p className="text-xs text-gray-600 font-semibold mb-3 uppercase tracking-wide">Opções Rápidas:</p>
                {predefinedMessages?.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => sendWhatsAppMessage(msg)}
                    className="w-full text-left p-4 bg-gray-50 hover:bg-green-50 rounded-xl text-sm text-gray-700 hover:text-green-700 transition-all duration-200 border border-gray-100 hover:border-green-200 hover:shadow-md"
                  >
                    {msg}
                  </button>
                ))}
              </div>

              {/* Custom Message */}
              <div className="border-t border-gray-100 pt-6">
                <p className="text-xs text-gray-600 font-semibold mb-3 uppercase tracking-wide">Mensagem Personalizada:</p>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    onKeyPress={(e) => e.key === 'Enter' && sendWhatsAppMessage()}
                  />
                  <button
                    onClick={() => sendWhatsAppMessage()}
                    className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors duration-200 hover:scale-110"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
      >
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
        
        {/* Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Dot */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        )}
      </motion.button>

    </div>
  )
}

export default WhatsAppWidget