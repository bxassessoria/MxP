import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
      "@shared": "/../shared",
    },
  },
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    target: "es2015", // Compatibilidade com navegadores mais antigos
    minify: false,    // Desativar minificação para facilitar leitura do código no browser
    sourcemap: true,  // Gerar mapas de fonte para debug preciso
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
  },
});
