// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://hlhs-scientific-research-society.vercel.app',
  integrations: [
    react(),
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'zbnhj067',
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2026-03-01',
      useCdn: false,
      perspective: 'published',
      studioBasePath: '/admin',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['styled-components'],
    },
  },
});
