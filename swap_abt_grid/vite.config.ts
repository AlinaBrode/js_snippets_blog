import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/js_snippets_blog/swap_abt_grid/',
  plugins: [react()],
})
