import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // پوشه خروجی را به 'build' تنظیم می‌کنیم
  },
});
