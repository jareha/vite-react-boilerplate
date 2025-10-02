/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import eslint from "@nabla/vite-plugin-eslint";
import { NodePackageImporter } from "sass-embedded";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        importers: [new NodePackageImporter()],
      },
    },
  },
  plugins: [
    eslint(),
    react(),
  ],
  server: {
    allowedHosts: [
      ".ngrok-free.dev", // Serve for testing on different devices
    ],
    port: 8080,
  },
  test: {
    include: ['**/*.spec.tsx'],
    environment: "jsdom",
    globals: true,
  },
});
