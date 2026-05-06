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
    // esnext: smaller output, faster to parse on mobile JS engines
    target: 'esnext',
    // No source maps in production — they add evaluation overhead during audits
    sourcemap: false,
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
          // Lucide icons — large tree-shakeable library, cache separately
          "vendor-lucide": ["lucide-react"],
          // Class-variance tooling
          "vendor-utils": ["class-variance-authority", "clsx", "tailwind-merge"],
        },
      },
    },
  },
}));

