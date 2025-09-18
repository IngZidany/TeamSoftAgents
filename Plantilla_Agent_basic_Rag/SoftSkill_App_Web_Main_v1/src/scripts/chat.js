// Chat funcional para videollamadas
class VideoCallChat {
  constructor() {
    this.messages = [];
    this.currentUser = 'Usuario Actual'; // Esto debería venir de la autenticación

    // Configuración de texto a voz y reconocimiento de voz
    this.speechSynthesis = window.speechSynthesis;
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.voicesLoaded = false;

    this.recognition = null; // Reconocimiento de voz
    this.isRecording = false;
    this.isAgentResponding = false; // Nueva bandera para controlar múltiples entradas

    this.apiUrl = 'https://se-agent-criker-178017465262.us-central1.run.app'; // URL del agente
    this.ttsEnabled = true;
    this.selectedLanguage = 'es-MX'; // Idioma por defecto

    this.initializeChat();
    this.initializeSpeechRecognition();
  }

  initializeChat() {
    // Referencias a elementos del chat
    this.chatContainer = document.getElementById('chat-messages');
    this.messageInput = document.getElementById('message-input');
    this.sendButton = document.getElementById('send-button');
    this.ttsToggleButton = document.getElementById('tts-toggle');
    this.voiceLanguageSelector = document.getElementById('voice-language-selector');
    this.microphoneButton = document.getElementById('microphone-button');

    // Agregar event listeners
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Enviar mensaje al hacer clic en el botón
    this.sendButton?.addEventListener('click', () => this.sendMessage());

    // Enviar mensaje al presionar Enter
    this.messageInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });

    // Botón de toggle TTS
    this.ttsToggleButton?.addEventListener('click', () => this.toggleTTS());

    // Selector de idioma de voz
    this.voiceLanguageSelector?.addEventListener('change', (e) => this.changeVoiceLanguage(e.target.value));

    // Botón de micrófono
    this.microphoneButton?.addEventListener('click', () => this.toggleMicrophone());
  }

  initializeSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.error('El reconocimiento de voz no es compatible con este navegador.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = this.selectedLanguage;
    this.recognition.continuous = false;
    this.recognition.interimResults = false;

    this.recognition.onstart = () => {
      this.isRecording = true;
      this.microphoneButton.classList.add('text-red-500'); // Cambiar color del botón para indicar grabación
    };

    this.recognition.onend = () => {
      this.isRecording = false;
      this.microphoneButton.classList.remove('text-red-500');
    };

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log('Texto reconocido:', transcript);
      this.addMessage(this.currentUser, transcript, 'purple', new Date());
      this.sendMessageToAgent(transcript);
    };

    this.recognition.onerror = (event) => {
      console.error('Error en el reconocimiento de voz:', event.error);
      this.addSystemMessage('Error en el reconocimiento de voz. Intenta de nuevo.');
    };
  }

  toggleMicrophone() {
    if (!this.recognition) {
      this.addSystemMessage('El reconocimiento de voz no está disponible en este navegador.');
      return;
    }

    if (this.isRecording) {
      this.recognition.stop();
    } else {
      this.recognition.start();
    }
  }

  async sendMessage() {
    if (this.isAgentResponding) {
      this.addSystemMessage('Por favor, espera a que el agente termine de responder.');
      return;
    }

    const messageText = this.messageInput?.value.trim();

    if (!messageText) return;

    // Agregar mensaje del usuario actual
    this.addMessage(this.currentUser, messageText, 'purple', new Date());

    // Limpiar input
    this.messageInput.value = '';

    // Mostrar indicador "...pensando"
    const thinkingDiv = document.createElement('div');
    thinkingDiv.textContent = '...pensando';
    thinkingDiv.className = 'text-gray-400 italic mb-2';
    this.chatContainer.appendChild(thinkingDiv);

    this.isAgentResponding = true; // Bloquear nuevas entradas

    try {
      // Enviar mensaje al agente y obtener respuesta
      const agentResponse = await this.fetchAgentResponse(messageText);
      this.chatContainer.removeChild(thinkingDiv);

      // Mostrar respuesta del agente
      this.addMessage('Agente Cricker', agentResponse, 'blue', new Date());

      // Leer la respuesta del agente
      if (this.ttsEnabled) {
        this.speakAsAgent(agentResponse);
      }
    } catch (error) {
      this.chatContainer.removeChild(thinkingDiv);
      const errorMessageDiv = document.createElement('div');
      errorMessageDiv.textContent = `Error: ${error.message}`;
      errorMessageDiv.className = 'text-red-500 bg-gray-800 p-2 rounded mb-2';
      this.chatContainer.appendChild(errorMessageDiv);
    } finally {
      this.isAgentResponding = false; // Permitir nuevas entradas
    }
  }

  async sendMessageToAgent(messageText) {
    // Mostrar indicador "...pensando"
    const thinkingDiv = document.createElement('div');
    thinkingDiv.textContent = '...pensando';
    thinkingDiv.className = 'text-gray-400 italic mb-2';
    this.chatContainer.appendChild(thinkingDiv);

    try {
      // Enviar mensaje al agente y obtener respuesta
      const agentResponse = await this.fetchAgentResponse(messageText);
      this.chatContainer.removeChild(thinkingDiv);

      // Mostrar respuesta del agente
      this.addMessage('Agente Cricker', agentResponse, 'blue', new Date());

      // Leer la respuesta del agente
      if (this.ttsEnabled) {
        this.speakAsAgent(agentResponse);
      }
    } catch (error) {
      this.chatContainer.removeChild(thinkingDiv);
      const errorMessageDiv = document.createElement('div');
      errorMessageDiv.textContent = `Error: ${error.message}`;
      errorMessageDiv.className = 'text-red-500 bg-gray-800 p-2 rounded mb-2';
      this.chatContainer.appendChild(errorMessageDiv);
    }
  }

  async fetchAgentResponse(userMessage) {
    try {
      const response = await fetch(`${this.apiUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 'frontend_user',
          message: userMessage,
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      throw new Error('Hubo un error al procesar tu mensaje.');
    }
  }

  addMessage(user, message, color, timestamp = new Date()) {
    const messageObj = {
      user,
      message,
      color,
      timestamp,
    };

    this.messages.push(messageObj);

    this.renderMessage(messageObj);

    // Usar setTimeout para asegurar que el DOM se actualice antes del scroll
    setTimeout(() => {
      this.scrollToBottom();
    }, 50);
  }

  addSystemMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'bg-gray-600 bg-opacity-20 p-2 rounded-lg mb-2 text-center';
    messageElement.innerHTML = `<div class="text-xs text-gray-400 italic">${message}</div>`;

    if (this.chatContainer) {
      this.chatContainer.appendChild(messageElement);
      this.scrollToBottom();
    }
  }

  renderMessage(messageObj) {
    if (!this.chatContainer) return;

    const messageElement = document.createElement('div');

    // Mapear colores a clases CSS específicas
    const colorClasses = {
      blue: 'bg-blue-500 bg-opacity-20 border-blue-400 text-blue-300',
      purple: 'bg-purple-500 bg-opacity-20 border-purple-400 text-purple-300',
    };

    const colorClass = colorClasses[messageObj.color] || colorClasses.blue;
    const [bgClass, borderClass, textClass] = colorClass.split(' ');

    messageElement.className = `${bgClass} p-3 rounded-lg mb-3 border-l-4 ${borderClass} message-hover cursor-pointer`;

    const timeString = messageObj.timestamp.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });

    messageElement.innerHTML = `
      <div class="flex justify-between items-start mb-2">
        <div class="text-sm font-semibold ${textClass}">${messageObj.user}</div>
        <div class="text-xs text-gray-400 font-mono">${timeString}</div>
      </div>
      <div class="text-sm text-gray-200 leading-relaxed break-words">${messageObj.message}</div>
    `;

    this.chatContainer.appendChild(messageElement);
  }

  scrollToBottom() {
    if (this.chatContainer) {
      requestAnimationFrame(() => {
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
      });
    }
  }

  toggleTTS() {
    this.ttsEnabled = !this.ttsEnabled;
    this.ttsToggleButton.classList.toggle('text-gray-400', !this.ttsEnabled);
    this.ttsToggleButton.classList.toggle('text-blue-400', this.ttsEnabled);
  }

  changeVoiceLanguage(language) {
    this.selectedLanguage = language;
    if (this.recognition) {
      this.recognition.lang = language;
    }
  }

  speakAsAgent(text) {
    if (!this.speechSynthesis || !this.ttsEnabled) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.selectedLanguage;
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 0.8;

    this.speechSynthesis.speak(utterance);
  }
}

// Inicializar chat cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new VideoCallChat();
});

