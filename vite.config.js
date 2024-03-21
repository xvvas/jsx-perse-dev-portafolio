// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ct': fileURLToPath(new URL('./src/components/templates', import.meta.url)),
      '@cg': fileURLToPath(new URL('./src/components/global', import.meta.url)),
      '@ce': fileURLToPath(new URL('./src/components/pages', import.meta.url)),
      '@cu': fileURLToPath(new URL('./src/components/utils', import.meta.url)),
    },
  },
});