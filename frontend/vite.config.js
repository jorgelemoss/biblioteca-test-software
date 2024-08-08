import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  mode: 'development',
  build: {
    cssMinify: "lightningcss",
    minify: "esbuild",
    manifest: true
  },
  server: {
    port: 3000
  }
})
