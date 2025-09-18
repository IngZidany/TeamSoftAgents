// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// Configuración específica para GitHub Pages
// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/IngZidany',
  base: '/se-web-skills',
  integrations: [tailwind()],
  // Configuración de rutas y build para GitHub Pages
  trailingSlash: 'never',
  build: {
    assets: '_astro',
    format: 'directory',
  },
});
