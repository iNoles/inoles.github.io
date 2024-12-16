// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';

export default defineConfig({
  vite: {
    plugins: [yaml(), tailwindcss()]
  },
  integrations: [
    partytown({ config: { forward: ['dataLayer.push'] } }),
  ],
});