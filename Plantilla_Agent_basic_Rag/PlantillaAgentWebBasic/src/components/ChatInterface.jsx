import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Loader2, Settings, Trash2, Wifi } from 'lucide-react'
import AnimatedMessage from './AnimatedMessage'
import TypingAnimation from './TypingAnimation'
import ConnectionStatus from './ConnectionStatus'
import ApiConfig from './ApiConfig'
import { sendMessage } from '../services/api'

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'agent',
      content: '¡Hola! Soy tu agente de IA personalizado. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [showTypewriter, setShowTypewriter] = useState(true)
  const [showApiConfig, setShowApiConfig] = useState(false)
  const [apiUrl, setApiUrl] = useState(localStorage.getItem('agent_api_url') || '')
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    
    if (!inputMessage.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)
    setIsTyping(true)

    try {
      const response = await sendMessage(inputMessage.trim())
      
      // Simular tiempo de tipeo para mejor UX
      setTimeout(() => {
        const agentMessage = {
          id: Date.now() + 1,
          type: 'agent',
          content: response.response,
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, agentMessage])
        setIsTyping(false)
        setIsLoading(false)
      }, 1000)

    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage = {
        id: Date.now() + 1,
        type: 'agent',
        content: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo.',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
      setIsTyping(false)
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(e)
    }
  }

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        type: 'agent',
        content: '¡Hola! Soy tu agente de IA personalizado. ¿En qué puedo ayudarte hoy?',
        timestamp: new Date()
      }
    ])
  }

  const handleApiUrlChange = (newUrl) => {
    setApiUrl(newUrl)
    localStorage.setItem('agent_api_url', newUrl)
    // Actualizar la URL en el servicio de API
    window.location.reload() // Recargar para aplicar la nueva URL
  }

  return (
    <div className="max-w-4xl mx-auto">
      <ConnectionStatus />
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-primary-500 to-indigo-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-white font-semibold">Chat con tu Agente IA</h2>
                <p className="text-white/80 text-sm">Conectado y listo para ayudarte</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowApiConfig(true)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="Configurar URL de API"
              >
                <Wifi className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowTypewriter(!showTypewriter)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title={showTypewriter ? "Desactivar efecto de tipeo" : "Activar efecto de tipeo"}
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={clearChat}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="Limpiar conversación"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <AnimatedMessage 
              key={message.id} 
              message={message} 
              showTypewriter={showTypewriter && message.type === 'agent' && index === messages.length - 1}
            />
          ))}
          
          {isTyping && <TypingAnimation />}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <form onSubmit={handleSendMessage} className="flex items-end space-x-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none max-h-32"
                rows="1"
                disabled={isLoading}
              />
              <div className="absolute right-3 top-3">
                {isLoading ? (
                  <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
                ) : (
                  <User className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white p-3 rounded-2xl transition-colors duration-200 flex items-center justify-center"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      
      <ApiConfig
        isOpen={showApiConfig}
        onClose={() => setShowApiConfig(false)}
        currentUrl={apiUrl}
        onUrlChange={handleApiUrlChange}
      />
    </div>
  )
}

export default ChatInterface
