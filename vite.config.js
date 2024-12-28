// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   base:'./',
//   plugins: [react()],
//   build: {
//     outDir: 'build',
//   },
  
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import chromeExtension from 'vite-plugin-chrome-extension'; // No parentheses

export default defineConfig({
  plugins: [chromeExtension, react()],  // No parentheses for chromeExtension
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        background: './public/background.js',
        manifest: './public/manifest.json' // Explicitly add manifest path if needed
      }
    }
  }
});


