// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/pa-tuhogar-app/', // Añade esta línea
  plugins: [react()],
});
