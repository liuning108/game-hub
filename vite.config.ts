import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server : {
  //   host: '127.0.0.1',
  //   port: 8000,
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.rawg.io/api',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})
