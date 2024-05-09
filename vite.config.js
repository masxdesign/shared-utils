import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      // name: 'utils',
      // fileName: (format) => `utils.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      input: {
        'index': 'lib/main.js',
        'each_password_generator': 'lib/utils/each_password_generator.js',
        'misc': 'lib/utils/misc.js',
      },
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  }
});