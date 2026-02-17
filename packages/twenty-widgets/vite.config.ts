import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/twenty-widgets',
  server: {
    port: 4175
  },
  build: {
    outDir: 'build'
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react'
    }),
    tsconfigPaths({
      root: __dirname,
      projects: ['tsconfig.json']
    })
  ]
});

