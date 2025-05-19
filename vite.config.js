import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import critical from 'rollup-plugin-critical'

export default defineConfig({
  plugins: [
    vue(),

    // ⚙️ Генерація критичного CSS після білду
    // critical({
    //   criticalUrl: 'https://gouri.com.pl/',
    //   criticalBase: 'dist/',
    //   criticalPages: [
    //     { uri: '', template: 'index' },
    //   ],
    //   criticalConfig: {
    //     inline: true,
    //     extract: false,
    //     width: 375,
    //     height: 812,
    //     penthouse: {
    //       blockJSRequests: false,
    //     },
    //   },
    // }),
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
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
