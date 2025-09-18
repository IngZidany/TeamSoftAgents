import React, { useState, useEffect } from 'react'
import { Wifi, WifiOff, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { checkApiConnection } from '../services/api'

const ConnectionStatus = () => {
  const [status, setStatus] = useState('checking') // 'connected', 'disconnected', 'checking'
  const [show, setShow] = useState(false)

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const isConnected = await checkApiConnection()
        setStatus(isConnected ? 'connected' : 'disconnected')
        setShow(!isConnected)
      } catch (error) {
        setStatus('disconnected')
        setShow(true)
      }
    }

    // Verificar conexión inicial
    checkConnection()

    // Verificar cada 30 segundos
    const interval = setInterval(checkConnection, 30000)

    return () => clearInterval(interval)
  }, [])

  const getStatusConfig = () => {
    switch (status) {
      case 'connected':
        return {
          icon: Wifi,
          text: 'Conectado',
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
        }
      case 'disconnected':
        return {
          icon: WifiOff,
          text: 'Sin conexión',
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200'
        }
      case 'checking':
        return {
          icon: AlertCircle,
          text: 'Verificando...',
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200'
        }
      default:
        return {
          icon: AlertCircle,
          text: 'Desconocido',
          color: 'text-gray-600',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200'
        }
    }
  }

  const config = getStatusConfig()
  const Icon = config.icon

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-4 right-4 z-50 ${config.bgColor} ${config.borderColor} border rounded-lg px-4 py-2 shadow-lg`}
        >
          <div className="flex items-center space-x-2">
            <Icon className={`w-4 h-4 ${config.color}`} />
            <span className={`text-sm font-medium ${config.color}`}>
              {config.text}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ConnectionStatus
