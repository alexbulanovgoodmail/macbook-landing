import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { checker } from 'vite-plugin-checker'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    checker({
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./**/*.{ts,tsx,js,jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "**/*.{css,scss}"',
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
