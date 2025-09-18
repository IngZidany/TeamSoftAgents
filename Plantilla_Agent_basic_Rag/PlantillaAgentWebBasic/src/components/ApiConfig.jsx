import React, { useState } from 'react'
import { Settings, Check, X, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ApiConfig = ({ isOpen, onClose, currentUrl, onUrlChange }) => {
  const [url, setUrl] = useState(currentUrl || '')
  const [isValidating, setIsValidating] = useState(false)
  const [validationResult, setValidationResult] = useState(null)

  const validateUrl = async () => {
    if (!url.trim()) return

    setIsValidating(true)
    setValidationResult(null)

    try {
      const response = await fetch(`${url}/health`, {
        method: 'GET',
        mode: 'no-cors'
      })
      setValidationResult({ success: true, message: 'URL válida' })
    } catch (error) {
      setValidationResult({ success: false, message: 'No se pudo conectar con la URL' })
    } finally {
      setIsValidating(false)
    }
  }

  const handleSave = () => {
    if (url.trim()) {
      onUrlChange(url.trim())
      onClose()
    }
  }

  const handleClose = () => {
    setUrl(currentUrl || '')
    setValidationResult(null)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Configuración de API</h3>
              </div>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL del Agente (Cloud Run)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://tu-agente.cloud.run.app"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    onClick={validateUrl}
                    disabled={!url.trim() || isValidating}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                {validationResult && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-2 text-sm flex items-center space-x-1 ${
                      validationResult.success ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {validationResult.success ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <X className="w-4 h-4" />
                    )}
                    <span>{validationResult.message}</span>
                  </motion.div>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  <strong>Ejemplo:</strong> https://mi-agente-123456-uc.a.run.app
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  Esta es la URL que obtienes al desplegar tu agente en Google Cloud Run
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                disabled={!url.trim()}
                className="px-4 py-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center space-x-2"
              >
                <Check className="w-4 h-4" />
                <span>Guardar</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ApiConfig
