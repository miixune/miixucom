import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Optional: If your repo is published at a specific GitHub Pages path
  // Set this to the name of your repo if you're not using a custom domain
  // base: '/your-repo-name/',
});