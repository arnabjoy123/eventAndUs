import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createPagesSitemap } from "vite-plugin-pages-sitemap";
// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react(),
    createPagesSitemap({
      hostname: "https://eventandus.com", // ✅ change this to your domain
    }),
  ],
  server: {
    host: true,
  },
});
