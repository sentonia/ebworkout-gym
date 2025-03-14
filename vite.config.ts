import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compress from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),compress({ algorithm: "brotliCompress" })],
  build: {
    minify: "esbuild", // ✅ Uses esbuild for minification
    target: "esnext",  // ✅ Modern JS output
    sourcemap: false,  // ❌ No source maps for smaller size
    cssMinify: true,   // ✅ Minify CSS too
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"], // ✅ Separate React from the app code
        },
      },
    },
  },
});
