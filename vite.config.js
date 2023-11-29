import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  content: ['./src/**/*/{html,js,svelte}'],
  plugins: [svelte()],
})
