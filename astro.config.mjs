import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import svelte from '@astrojs/svelte';
// Tailwind v4: uncomment when @tailwindcss/vite is compatible with Astro's Vite version
// import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [svelte()],
  vite: {
    // plugins: [tailwindcss()],
  },
});
