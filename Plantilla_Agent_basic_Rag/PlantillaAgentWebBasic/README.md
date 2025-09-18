# 🌟 Agente IA - Interfaz Web

Una interfaz web moderna y elegante para conversar con tu agente de IA personalizado desplegado en Google Cloud Run.

## ✨ Características

- 🎨 **Interfaz moderna** con diseño responsive y animaciones suaves
- ⌨️ **Efecto de tipeo en tiempo real** para las respuestas del agente
- 🔧 **Configuración dinámica** de la URL de la API
- 📱 **Completamente responsive** - funciona en móviles, tablets y desktop
- 🎭 **Animaciones fluidas** con Framer Motion
- 🎨 **Diseño con Tailwind CSS** y componentes personalizados
- 💾 **Persistencia de configuración** en localStorage
- 🔄 **Indicador de estado de conexión** en tiempo real
- 🧹 **Función de limpiar chat** para empezar conversaciones nuevas

## 🚀 Instalación

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- Tu agente desplegado en Google Cloud Run

### Pasos de instalación

1. **Clona o descarga el proyecto**
   ```bash
   cd PlantillaAgentWebBasic
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura la URL de tu agente**
   
   Opción A: Crear archivo `.env`
   ```bash
   # Crea un archivo .env en la raíz del proyecto
   echo "VITE_API_URL=https://tu-agente-url.cloud.run.app" > .env
   ```
   
   Opción B: Configurar desde la interfaz web
   - Ejecuta la aplicación y usa el botón de configuración (🌐) en el header

4. **Ejecuta la aplicación en modo desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador**
   - La aplicación se abrirá automáticamente en `http://localhost:3000`

## 🏗️ Construcción para producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`.

## 🔧 Configuración

### Variables de entorno

- `VITE_API_URL`: URL de tu agente desplegado en Cloud Run

### Configuración desde la interfaz

1. Haz clic en el icono 🌐 en el header del chat
2. Ingresa la URL de tu agente (ej: `https://mi-agente-123456-uc.a.run.app`)
3. Haz clic en "Guardar"

## 📱 Uso

1. **Iniciar conversación**: Escribe tu mensaje en el campo de texto
2. **Enviar mensaje**: Presiona Enter o haz clic en el botón de enviar
3. **Configurar API**: Usa el botón 🌐 para cambiar la URL del agente
4. **Efecto de tipeo**: Usa el botón ⚙️ para activar/desactivar el efecto
5. **Limpiar chat**: Usa el botón 🗑️ para empezar una nueva conversación

## 🎨 Personalización

### Colores

Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores personalizados
      }
    }
  }
}
```

### Animaciones

Las animaciones se pueden ajustar en los componentes usando Framer Motion:

```javascript
// Ejemplo de personalización de animación
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

## 🏗️ Estructura del proyecto

```
PlantillaAgentWebBasic/
├── src/
│   ├── components/
│   │   ├── AnimatedMessage.jsx    # Mensajes con animaciones
│   │   ├── ApiConfig.jsx          # Configuración de API
│   │   ├── ChatInterface.jsx      # Interfaz principal del chat
│   │   ├── ConnectionStatus.jsx   # Estado de conexión
│   │   ├── Header.jsx             # Header de la aplicación
│   │   ├── Message.jsx            # Componente de mensaje básico
│   │   ├── TypingAnimation.jsx    # Animación de tipeo
│   │   └── TypewriterText.jsx     # Efecto de máquina de escribir
│   ├── services/
│   │   └── api.js                 # Servicios de API
│   ├── App.jsx                    # Componente principal
│   ├── main.jsx                   # Punto de entrada
│   └── index.css                  # Estilos globales
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔌 API del Agente

La aplicación espera que tu agente tenga el siguiente endpoint:

### POST /chat

**Request:**
```json
{
  "user_id": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "response": "string"
}
```

### GET /health (opcional)

Para verificar el estado de la conexión.

## 🚀 Despliegue

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura las variables de entorno
3. Despliega automáticamente

### Vercel

1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Configura las variables de entorno

### GitHub Pages

1. Ejecuta: `npm run build`
2. Sube la carpeta `dist/` a tu repositorio
3. Configura GitHub Pages

## 🐛 Solución de problemas

### Error de conexión

1. Verifica que la URL de la API sea correcta
2. Asegúrate de que tu agente esté desplegado y funcionando
3. Revisa la consola del navegador para errores

### Problemas de CORS

Si tienes problemas de CORS, asegúrate de que tu agente tenga configurado:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, especifica tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles del problema

---

¡Disfruta conversando con tu agente de IA! 🤖✨
