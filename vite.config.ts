import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      'c3c7-2804-7f0-b9c0-d076-c045-1db8-a317-589a.ngrok-free.app'
    ]
  },
  plugins: [react()],
  base: '/',
})
