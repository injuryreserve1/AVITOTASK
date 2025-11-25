import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import pluginChecker from "vite-plugin-checker";

// https://vite.dev/config/

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@features": path.resolve(__dirname, "./src/features"),
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/shared/TestConfig/setupTest.ts"],
  },
  plugins: [react(), pluginChecker({ typescript: true })],
});
