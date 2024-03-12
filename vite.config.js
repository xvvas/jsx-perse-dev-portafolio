// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import path from 'path';

// __dirname es una variable en Node.js que no está disponible en módulos ES
// Convierte import.meta.url a __dirname equivalente
// eslint-disable-next-line no-unused-vars
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Configura el alias '@' para referenciar el directorio 'src'
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});