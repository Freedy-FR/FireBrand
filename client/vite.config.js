import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← add this
  ],
  server: {
    allowedHosts: [
      '5173-freedyfr-firebrand-rgzh834x8x7.ws-eu121.gitpod.io'
    ]
  }
});