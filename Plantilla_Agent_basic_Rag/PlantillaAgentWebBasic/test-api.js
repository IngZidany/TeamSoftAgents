// Script de prueba para verificar la conexión con la API
const API_URL = 'https://se-agent-criker-178017465262.us-central1.run.app'

async function testConnection() {
  console.log('Probando conexión con:', API_URL)
  
  try {
    // Probar endpoint de salud
    console.log('\n1. Probando endpoint /health...')
    const healthResponse = await fetch(`${API_URL}/health`)
    console.log('Status:', healthResponse.status)
    console.log('Headers:', Object.fromEntries(healthResponse.headers.entries()))
    
    if (healthResponse.ok) {
      const healthData = await healthResponse.json()
      console.log('Respuesta:', healthData)
    } else {
      const errorText = await healthResponse.text()
      console.log('Error:', errorText)
    }
  } catch (error) {
    console.error('Error en health check:', error)
  }
  
  try {
    // Probar endpoint de chat
    console.log('\n2. Probando endpoint /chat...')
    const chatResponse = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 'test_user',
        message: 'Hola, ¿cómo estás?'
      })
    })
    
    console.log('Status:', chatResponse.status)
    console.log('Headers:', Object.fromEntries(chatResponse.headers.entries()))
    
    if (chatResponse.ok) {
      const chatData = await chatResponse.json()
      console.log('Respuesta:', chatData)
    } else {
      const errorText = await chatResponse.text()
      console.log('Error:', errorText)
    }
  } catch (error) {
    console.error('Error en chat:', error)
  }
}

// Ejecutar la prueba
testConnection()
