# SoftSkill Landing Page

Una landing page moderna y responsive para presentar SoftSkill, una plataforma de desarrollo de habilidades blandas con agentes de IA inteligentes.

## 🚀 Características

- **Diseño Moderno**: Colores azules metálicos, negro y blanco con texturas tech
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Componentes Modulares**: Arquitectura escalable y mantenible
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **SEO Optimizado**: Meta tags y estructura semántica
- **Rendimiento**: Optimizado para velocidad y Core Web Vitals

## 🛠️ Tecnologías

- **React 18** - Framework principal
- **Vite** - Build tool y dev server
- **TailwindCSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **Swiper** - Sliders y carruseles

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React modulares
│   ├── Header.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección hero con CTA
│   ├── Promise.jsx     # La promesa de SoftSkill
│   ├── Program.jsx     # Cómo funciona el programa
│   ├── Testimonials.jsx # Testimonios de usuarios
│   ├── Problem.jsx     # El problema que resuelve
│   ├── Benefits.jsx    # Beneficios del producto
│   ├── Pricing.jsx     # Planes y precios
│   ├── Guarantees.jsx  # Garantías y confianza
│   └── Footer.jsx      # Pie de página
├── styles/
│   └── index.css       # Estilos globales
├── assets/             # Recursos estáticos
└── App.jsx            # Componente principal
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd SoftSkill_Landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:8080`

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Linter de código
```

## 🐳 Despliegue con Docker

### Build Local

```bash
# Construir imagen
docker build -t softskill-landing .

# Ejecutar contenedor
docker run -p 8080:8080 softskill-landing
```

### Despliegue en Google Cloud Run

#### Opción 1: Script Automatizado

```bash
# Configurar variables de entorno
export PROJECT_ID="tu-project-id"
export REGION="us-central1"

# Ejecutar script de despliegue
chmod +x deploy.sh
./deploy.sh
```

#### Opción 2: Google Cloud Build

```bash
# Configurar proyecto
gcloud config set project YOUR_PROJECT_ID

# Habilitar APIs necesarias
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com

# Ejecutar build
gcloud builds submit --config cloudbuild.yaml
```

#### Opción 3: Despliegue Manual

```bash
# Build y push de imagen
docker build -t gcr.io/PROJECT_ID/softskill-landing .
docker push gcr.io/PROJECT_ID/softskill-landing

# Desplegar en Cloud Run
gcloud run deploy softskill-landing \
  --image gcr.io/PROJECT_ID/softskill-landing \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080
```

## 🎨 Personalización

### Colores

Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Azules principales */ },
  metallic: { /* Grises metálicos */ },
  steel: { /* Tonos de acero */ }
}
```

### Contenido

El contenido se puede modificar directamente en los componentes React. Cada sección es un componente independiente que se puede editar fácilmente.

### Imágenes

Las imágenes se pueden agregar en la carpeta `public/` y referenciar desde los componentes.

## 📱 Responsive Design

La landing page está optimizada para:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuración Avanzada

### Variables de Entorno

Crear archivo `.env`:

```env
VITE_APP_TITLE=SoftSkill
VITE_APP_DESCRIPTION=Desarrolla habilidades blandas con IA
VITE_DEMO_URL=https://demo.softskill.ai
```

### Nginx

La configuración de Nginx está optimizada para:
- Compresión Gzip
- Headers de seguridad
- Cache de assets estáticos
- SPA routing

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas:

- Email: hola@softskill.ai
- GitHub Issues: [Crear issue](https://github.com/your-repo/issues)

---

Desarrollado con ❤️ para el futuro del trabajo
