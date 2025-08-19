import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  esbuild: { loader: "jsx" },
  resolve: {
    alias: { "@": "/src" },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  server: { port: 3000 },
  build: { outDir: "dist" },
});
