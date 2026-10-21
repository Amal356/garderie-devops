import { defineConfig } from "vitest/config";

export default defineConfig({
  // Transforme le JSX des composants React pendant les tests
  esbuild: { jsx: "automatic" },
  test: { include: ["tests/**/*.test.jsx"] },
});
