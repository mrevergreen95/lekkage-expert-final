// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://www.lekkageexpert.nl',
  integrations: [
    react(),
    tailwind({ configFile: './tailwind.config.mjs' }),
    sitemap(),
  ],
});
