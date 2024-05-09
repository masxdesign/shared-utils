import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      formats: ["cjs", "es"],
      entry: {
        index: "./lib/main.js",
        each_password_generator: "./lib/utils/each_password_generator.js"
      }
    }
  }
});