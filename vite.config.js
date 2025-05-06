import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import critical from 'rollup-plugin-critical'

export default defineConfig({
  plugins: [
    vue(),

    // 🧠 Critical CSS generation
    critical({
      criticalUrl: 'https://gouri.com.pl/', // локальний сервер після білду
      criticalBase: 'dist/', // куди зберігається HTML після білду
      criticalPages: [
        { uri: '', template: 'index' }, // головна сторінка → dist/index.html
      ],
      criticalConfig: {
        inline: true,       // 🟢 Вставити <style> критичного CSS прямо в HTML
        extract: false,     // 🔴 Не видаляти не-критичні стилі
        width: 375,         // 📱 Ширина для мобільного portrait
        height: 812,        // 📱 Висота для мобільного portrait
        penthouse: {
          blockJSRequests: false, // дозволити JS, якщо потрібно для рендеру
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src'),
    },
  },
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})