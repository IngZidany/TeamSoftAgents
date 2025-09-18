import { sendMessage, checkApiConnection } from '../services/api.js';

document.addEventListener("DOMContentLoaded", () => {
  const professorAvatar = document.getElementById("professor-avatar");
  const chatModal = document.getElementById("chat-modal");
  const chatInput = document.getElementById("chat-input");
  const chatSend = document.getElementById("chat-send");
  const chatHistory = document.getElementById("chat-history");
  const whiteboardInput = document.getElementById("whiteboard-input");
  const whiteboardSend = document.getElementById("whiteboard-send");
  const whiteboardContent = document.getElementById("whiteboard-content");

  // URL para el cuadro de diálogo grande (Whiteboard)
  const API_URL_WHITEBOARD = "https://se-agent-knowledge-v1-178017465262.us-central1.run.app";

  // URL para el cuadro de diálogo pequeño (Chat Modal)
  const API_URL_CHAT_MODAL = "https://se-agent-criker-178017465262.us-central1.run.app";

  /**
   * Enviar mensaje al endpoint de la API específica
   * @param {string} userMessage - Mensaje del usuario
   * @param {string} apiUrl - URL del endpoint de la API
   * @returns {Promise<string>} Respuesta del servidor o mensaje de error
   */
  async function sendMessageToAPI(userMessage, apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: "frontend_user",
          message: userMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const data = await response.json();
      console.log("Enviando mensaje:", userMessage);
      console.log("Respuesta del servidor:", data);
      return data.response;
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      return "Hubo un error al procesar tu mensaje.";
    }
  }

  // Toggle chat modal
  professorAvatar.addEventListener("click", () => {
    chatModal.classList.toggle("hidden");
  });

  /**
   * Simula el tipeo de un mensaje carácter por carácter
   * @param {HTMLElement} container - Contenedor donde se mostrará el mensaje
   * @param {string} message - Mensaje a mostrar
   */
  function simulateTyping(container, message) {
    let index = 0;
    const interval = setInterval(() => {
      if (index < message.length) {
        container.textContent += message[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Velocidad de tipeo (50ms por carácter)
  }

  // Configuración de Texto a Voz (TTS)
  const speechSynthesis = window.speechSynthesis;
  let ttsEnabled = true; // Controla si el TTS está activado
  let selectedLanguage = "es-MX"; // Idioma por defecto

  /**
   * Convierte texto en audio usando la API SpeechSynthesis
   * @param {string} text - Texto a convertir en audio
   */
  function speakText(text) {
    if (!ttsEnabled || !speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = selectedLanguage;
    utterance.rate = 0.9; // Velocidad
    utterance.pitch = 1.0; // Tono
    utterance.volume = 0.8; // Volumen

    speechSynthesis.speak(utterance);
  }

  // Evento para enviar mensaje desde el cuadro de diálogo grande (Whiteboard)
  whiteboardSend.addEventListener("click", async () => {
    const userMessage = whiteboardInput.value.trim();
    if (!userMessage) return;

    whiteboardSend.disabled = true; // Deshabilitar el botón de envío

    // Mostrar el mensaje del usuario en el cuadro de diálogo grande
    const userMessageDiv = document.createElement("div");
    userMessageDiv.textContent = `Tú: ${userMessage}`;
    userMessageDiv.className = "text-gray-200 bg-blue-800 p-2 rounded mb-2";
    whiteboardContent.appendChild(userMessageDiv);

    // Mostrar indicador "...pensando"
    const thinkingDiv = document.createElement("div");
    thinkingDiv.textContent = "...pensando";
    thinkingDiv.className = "text-gray-400 italic mb-2";
    whiteboardContent.appendChild(thinkingDiv);

    try {
      const agentResponse = await sendMessageToAPI(userMessage, API_URL_WHITEBOARD);
      whiteboardContent.removeChild(thinkingDiv); // Eliminar indicador "...pensando"

      const agentMessageDiv = document.createElement("div");
      agentMessageDiv.className = "text-gray-200 bg-gray-800 p-2 rounded mb-2";
      whiteboardContent.appendChild(agentMessageDiv);

      simulateTyping(agentMessageDiv, `Profesor IA: ${agentResponse}`); // Simular tipeo

      // Leer la respuesta del agente
      speakText(agentResponse);
    } catch (error) {
      whiteboardContent.removeChild(thinkingDiv); // Eliminar indicador "...pensando"

      const errorMessageDiv = document.createElement("div");
      errorMessageDiv.textContent = `Error: ${error.message}`;
      errorMessageDiv.className = "text-red-500 bg-gray-800 p-2 rounded mb-2";
      whiteboardContent.appendChild(errorMessageDiv);
    } finally {
      whiteboardSend.disabled = false; // Habilitar el botón de envío
      whiteboardInput.value = ""; // Limpiar el cuadro de entrada
    }
  });

  // Evento para enviar mensaje desde el cuadro de diálogo pequeño (Chat Modal)
  chatSend.addEventListener("click", async () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatSend.disabled = true; // Deshabilitar el botón de envío

    // Mostrar el mensaje del usuario en el cuadro de diálogo pequeño
    const userMessageDiv = document.createElement("div");
    userMessageDiv.textContent = `Tú: ${userMessage}`;
    userMessageDiv.className = "p-2 bg-blue-100 rounded-lg mb-2 text-gray-800";
    chatHistory.appendChild(userMessageDiv);

    // Mostrar indicador "...pensando"
    const thinkingDiv = document.createElement("div");
    thinkingDiv.textContent = "...pensando";
    thinkingDiv.className = "text-gray-400 italic mb-2";
    chatHistory.appendChild(thinkingDiv);

    try {
      const agentResponse = await sendMessageToAPI(userMessage, API_URL_CHAT_MODAL);
      chatHistory.removeChild(thinkingDiv); // Eliminar indicador "...pensando"

      const agentMessageDiv = document.createElement("div");
      agentMessageDiv.className = "p-2 bg-green-100 rounded-lg mb-2 text-gray-800";
      chatHistory.appendChild(agentMessageDiv);

      simulateTyping(agentMessageDiv, `Profesor IA 2: ${agentResponse}`); // Simular tipeo

      // Leer la respuesta del agente
      speakText(agentResponse);
    } catch (error) {
      chatHistory.removeChild(thinkingDiv); // Eliminar indicador "...pensando"

      const errorMessageDiv = document.createElement("div");
      errorMessageDiv.textContent = `Error: ${error.message}`;
      errorMessageDiv.className = "text-red-500 bg-gray-800 p-2 rounded mb-2";
      chatHistory.appendChild(errorMessageDiv);
    } finally {
      chatSend.disabled = false; // Habilitar el botón de envío
      chatInput.value = ""; // Limpiar el cuadro de entrada
    }
  });

  // Ajustar clases para el modo oscuro
  if (chatModal) {
    chatModal.classList.add("bg-gray-800", "text-gray-200");
  }

  if (whiteboardContent) {
    whiteboardContent.classList.add("bg-gray-700", "text-gray-300");
  }
});