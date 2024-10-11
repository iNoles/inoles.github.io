// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  integrations: [
    tailwind({
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true,
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
    partytown({ config: { forward: ['dataLayer.push'] } }),
  ],
});