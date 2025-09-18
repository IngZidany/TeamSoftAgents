// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://IngZidany.github.io',
  // base: '/se-web-skills', // Comentado para desarrollo local
  integrations: [tailwind()],
});
