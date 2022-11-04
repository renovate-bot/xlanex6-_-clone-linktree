import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  output: 'server',
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url)
  })
});
