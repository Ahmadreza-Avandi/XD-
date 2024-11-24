import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // پلاگین React
  ],
  optimizeDeps: {
    exclude: ['lucide-react'], // در صورتی که `lucide-react` نیاز به بهینه‌سازی نداشته باشد
  },
  build: {
    rollupOptions: {
      external: ['@tonconnect/sdk'], // ماژول `@tonconnect/sdk` را به عنوان external اضافه کنیم
    },
  },
  resolve: {
    alias: {
      // استفاده از path.resolve برای حل مشکل در ESM
      '@tonconnect/sdk': path.resolve(__dirname, 'node_modules/@tonconnect/sdk'),
    },
  },
});

