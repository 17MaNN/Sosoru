import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3001,
    strictPort: false,
    // Cloud preview hostnames rotate. Rather than tracking one here, start the
    // dev server with the current host:
    //   __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS=<host> npm run dev
  },
  preview: { host: '0.0.0.0', port: 3001, strictPort: false },
  build: { target: 'es2020' },
})
