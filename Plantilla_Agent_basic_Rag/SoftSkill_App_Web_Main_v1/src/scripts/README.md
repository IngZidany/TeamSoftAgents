# pizarrabot.js

Este archivo contiene la lógica para manejar dos cuadros de diálogo que interactúan con diferentes APIs de IA. Cada cuadro de diálogo envía mensajes a su respectiva URL y muestra las respuestas en su área correspondiente.

## Funcionalidades

### URLs de las APIs
- `API_URL_1`: URL para la primera IA.
- `API_URL_2`: URL para la segunda IA.

### Envío de mensajes
- **Primer cuadro de diálogo (Whiteboard)**:
  - Envía mensajes a `API_URL_1`.
  - Muestra los mensajes del usuario y las respuestas de la IA en el área de contenido de la pizarra.
- **Segundo cuadro de diálogo (Chat Modal)**:
  - Envía mensajes a `API_URL_2`.
  - Muestra los mensajes del usuario y las respuestas de la IA en el historial del chat.

### Funciones principales
- `sendMessageToAPI(userMessage, apiUrl)`:
  - Envía un mensaje al endpoint especificado por `apiUrl`.
  - Maneja errores y devuelve la respuesta de la IA o un mensaje de error.

### Eventos
- **Whiteboard**:
  - `whiteboardSend`: Escucha el evento de clic para enviar mensajes desde el cuadro de entrada de la pizarra.
- **Chat Modal**:
  - `chatSend`: Escucha el evento de clic para enviar mensajes desde el cuadro de entrada del chat modal.

## Cómo usar
1. Asegúrate de configurar las URLs de las APIs en las constantes `API_URL_1` y `API_URL_2`.
2. Los mensajes y respuestas se mostrarán automáticamente en sus respectivos cuadros de diálogo.

## Ejemplo de configuración
```javascript
const API_URL_1 = "https://example-ia1-url.com";
const API_URL_2 = "https://example-ia2-url.com";
```

## Notas
- Asegúrate de que las APIs estén activas y accesibles desde el frontend.
- Maneja las credenciales y permisos de CORS si es necesario.

---

Si tienes preguntas o necesitas ayuda, no dudes en consultar la documentación del proyecto o contactar al equipo de desarrollo.