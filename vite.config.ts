import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { configDefaults } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    ...configDefaults,
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTest.ts"],
    coverage: {
      provider: "v8",
      reporter: ["lcov", "text"],
    },
  },
});
