/// <reference types="vitest" />
import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

export const config=({
  plugins: [
    react()
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  },
  build: {
    minify: 'esbuild', // boolean | 'terser' | 'esbuild'
    esbuild: { loader: { '.js': 'jsx' } },
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true,
    lib: {
      entry: "./src/index.js",
      name: 'React-UI-GM',
      formats: ["esm", "umd","iife"],
      fileName: 'react-ui-gm',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React'
        },
        extend: true,
        assetFileNames:()=> 'style.css'
      }
    },
    outDir: "./dist"
  },
})
export default defineConfig(config as unknown as UserConfig);
