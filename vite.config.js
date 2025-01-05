import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // The backend server
        changeOrigin: true, // Changes the origin of the request to match the target URL
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
