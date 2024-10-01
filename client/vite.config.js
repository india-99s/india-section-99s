import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: "http://api.india99s.com",
        secure: false,
      }
    }
  },
  plugins: [react()]
})




