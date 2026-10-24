import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    // Cloud preview hostname for this workspace. If the VM is recreated and
    // the hostname changes, extend this list with
    // __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS in the environment.
    allowedHosts: [
      'pv-5ac230a003bb-64e7ea0d-8293-48f3-ad50-ff4a9712cdbf.style.dev',
      'pv-5ac230a003bb-4c190e16-c87d-445f-8536-6e6218dbba93.style.dev',
    ],
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
  build: {
    target: 'es2020',
    cssMinify: 'lightningcss',
  },
})
