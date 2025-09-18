# SoftSkills by CONAUTI - Landing Page

Una landing page moderna y atractiva para el programa de desarrollo de habilidades blandas de CONAUTI, diseñada para ser desplegada en Google Cloud Run.

## 🚀 Características

### Diseño y UX
- **Colores**: Paleta azules, verdes jade y blancos con texturas tech
- **Animaciones**: Efectos de movimiento, cartas animadas y transiciones suaves
- **Responsive**: Diseño adaptativo para todos los dispositivos
- **Performance**: Optimizado para carga rápida y SEO

### Componentes Principales
- **Header**: Logo CONAUTI, navegación sticky con efectos de scroll
- **Hero**: Sección principal con animaciones y botón demo
- **El Problema**: Presentación del problema con estadísticas impactantes
- **El Programa**: Módulos interactivos con sliders
- **Beneficios**: Sliders de beneficios con testimonios
- **Testimonios**: Carrusel de testimonios con videos
- **FAQ**: Preguntas frecuentes con acordeón animado
- **Garantías**: Sección de garantías con estadísticas
- **Contacto**: Formulario de contacto con validación
- **Footer**: Información completa con enlaces y redes sociales

### Tecnologías
- **React 18** - Framework principal
- **TailwindCSS** - Estilos y diseño responsive
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconografía moderna
- **Vite** - Build tool optimizado

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd PlantillaAgentWebBasic

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
# Desarrollo
npm run dev          # Servidor de desarrollo en puerto 8080

# Producción
npm run build        # Build optimizado para producción
npm run preview      # Preview del build de producción

# Linting
npm run lint         # Ejecutar ESLint
```

## 🐳 Despliegue en Google Cloud Run

### Opción 1: Despliegue Automático
```bash
# Configurar proyecto
export PROJECT_ID="tu-proyecto-gcp"

# Ejecutar script de despliegue
./deploy.sh production
```

### Opción 2: Despliegue Manual
```bash
# 1. Configurar proyecto
gcloud config set project YOUR_PROJECT_ID

# 2. Habilitar APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com

# 3. Build y push de la imagen
docker build -t gcr.io/YOUR_PROJECT_ID/softskills-landing .
docker push gcr.io/YOUR_PROJECT_ID/softskills-landing

# 4. Desplegar en Cloud Run
gcloud run deploy softskills-landing \
  --image gcr.io/YOUR_PROJECT_ID/softskills-landing \
  --region europe-west1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10
```

### Opción 3: Cloud Build
```bash
# Usar cloudbuild.yaml para CI/CD
gcloud builds submit --config cloudbuild.yaml
```

## 📁 Estructura del Proyecto

```
PlantillaAgentWebBasic/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.jsx     # Navegación principal
│   │   ├── Hero.jsx       # Sección hero
│   │   ├── Problem.jsx    # Sección del problema
│   │   ├── Program.jsx    # Sección del programa
│   │   ├── Benefits.jsx   # Sección de beneficios
│   │   ├── Testimonials.jsx # Testimonios
│   │   ├── FAQ.jsx        # Preguntas frecuentes
│   │   ├── Guarantees.jsx # Garantías
│   │   ├── Contact.jsx    # Formulario de contacto
│   │   └── Footer.jsx     # Pie de página
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── Dockerfile             # Configuración Docker
├── nginx.conf             # Configuración Nginx
├── cloudbuild.yaml        # Configuración Cloud Build
├── deploy.sh              # Script de despliegue
├── tailwind.config.js     # Configuración TailwindCSS
├── vite.config.js         # Configuración Vite
└── package.json           # Dependencias y scripts
```

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Azules */ },
  jade: { /* Verdes jade */ },
  tech: { /* Grises tech */ }
}
```

### Contenido
- **Textos**: Editar directamente en los componentes
- **Imágenes**: Agregar en la carpeta `public/`
- **Enlaces**: Actualizar URLs en los componentes
- **Formularios**: Configurar endpoints en `Contact.jsx`

### Animaciones
Las animaciones se configuran en `tailwind.config.js` y se usan con Framer Motion.

## 🔧 Configuración de Producción

### Variables de Entorno
```bash
NODE_ENV=production
```

### Optimizaciones
- **Imágenes**: Optimizadas automáticamente por Vite
- **CSS**: Minificado y purgado por TailwindCSS
- **JS**: Minificado y tree-shaking
- **Caching**: Configurado en nginx.conf

## 📊 Performance

### Métricas Objetivo
- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Optimizaciones Implementadas
- Lazy loading de imágenes
- Code splitting automático
- Compresión gzip
- Caching de assets estáticos
- Minificación de CSS/JS

## 🚀 Características Avanzadas

### SEO
- Meta tags optimizados
- Estructura semántica HTML5
- Sitemap automático
- Open Graph tags

### Accesibilidad
- Navegación por teclado
- Screen reader friendly
- Contraste de colores WCAG AA
- Alt text en imágenes

### Analytics
- Google Analytics ready
- Event tracking configurado
- Conversion tracking
- Heatmap integration ready

## 🛡️ Seguridad

### Headers de Seguridad
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Content-Security-Policy

### Validación
- Formularios con validación
- Sanitización de inputs
- Protección CSRF

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Características Mobile
- Touch-friendly navigation
- Optimized images
- Fast loading
- Swipe gestures

## 🔍 Monitoreo

### Health Checks
- Endpoint `/health` para monitoreo
- Logs estructurados
- Error tracking
- Performance monitoring

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto:
- **Email**: soporte@softskills-conauti.com
- **Documentación**: [docs.softskills-conauti.com](https://docs.softskills-conauti.com)
- **Issues**: GitHub Issues

## 📄 Licencia

© 2024 SoftSkills by CONAUTI. Todos los derechos reservados.

---

**Desarrollado con ❤️ por el equipo de CONAUTI**
