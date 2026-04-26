import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Emit source maps in production so Lighthouse can report accurate diagnostics
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor: React core — cached separately, rarely changes
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Radix UI primitives — large but stable
          "vendor-radix": [
            "@radix-ui/react-tooltip",
            "@radix-ui/react-slot",
          ],
          // Class-variance tooling
          "vendor-utils": ["class-variance-authority", "clsx", "tailwind-merge"],
        },
      },
    },
  },
}));

