import React, { useState, useEffect } from 'react'
import { Bot, User, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import TypewriterText from './TypewriterText'

const AnimatedMessage = ({ message, showTypewriter = false }) => {
  const [showContent, setShowContent] = useState(!showTypewriter)
  const isUser = message.type === 'user'
  const isAgent = message.type === 'agent'

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleTypewriterComplete = () => {
    setShowContent(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.4,
        type: "spring",
        stiffness: 100
      }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {/* Avatar con animación */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            isUser 
              ? 'bg-primary-500 text-white' 
              : 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
          }`}
        >
          {isUser ? (
            <User className="w-4 h-4" />
          ) : (
            <Bot className="w-4 h-4" />
          )}
        </motion.div>

        {/* Message Content */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className={`px-4 py-3 rounded-2xl shadow-sm ${
              isUser
                ? 'bg-primary-500 text-white rounded-br-md'
                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
            }`}
          >
            {showTypewriter && isAgent ? (
              <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                <TypewriterText 
                  text={message.content} 
                  speed={20}
                  onComplete={handleTypewriterComplete}
                />
              </p>
            ) : (
              <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                {message.content}
              </p>
            )}
          </motion.div>
          
          {/* Timestamp con animación */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`flex items-center space-x-1 mt-1 text-xs text-gray-500 ${
              isUser ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <Clock className="w-3 h-3" />
            <span>{formatTime(message.timestamp)}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default AnimatedMessage
