// Configuración de la API
const getApiBaseUrl = () => {
  const storedUrl = localStorage.getItem('agent_api_url');
  return storedUrl || 'https://se-agent-knowledge-v1-178017465262.us-central1.run.app'; // URL actualizada para el cuadro de diálogo grande
};

// Generar un ID de usuario único para la sesión
const generateUserId = () => {
  const storedUserId = localStorage.getItem('agent_user_id');
  if (storedUserId) {
    return storedUserId;
  }

  const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  localStorage.setItem('agent_user_id', newUserId);
  return newUserId;
};

// Función para enviar mensaje al agente
export const sendMessage = async (message) => {
  const userId = generateUserId();
  const API_BASE_URL = getApiBaseUrl();

  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        message: message,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error HTTP ${response.status}: ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    throw new Error('No se pudo conectar con el servidor.');
  }
};

// Función para verificar la conexión con la API
export const checkApiConnection = async () => {
  const API_BASE_URL = getApiBaseUrl();

  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
    });
    return response.ok;
  } catch (error) {
    console.error('Error verificando conexión:', error);
    return false;
  }
};

// Función para obtener el historial de conversación (si está disponible)
export const getConversationHistory = async () => {
  const userId = generateUserId();
  const API_BASE_URL = getApiBaseUrl();

  try {
    const response = await fetch(`${API_BASE_URL}/history/${userId}`, {
      method: 'GET',
    });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.history || [];
  } catch (error) {
    console.error('Error obteniendo historial:', error);
    return [];
  }
};