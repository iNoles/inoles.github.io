import { defineConfig, fontProviders } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import tailwindcss from "@tailwindcss/vite";
import partytown from "@astrojs/partytown";

export default defineConfig({
  vite: {
    plugins: [yaml(), tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
    ],
  },
  integrations: [partytown({ config: { forward: ["dataLayer.push"] } })],
});
