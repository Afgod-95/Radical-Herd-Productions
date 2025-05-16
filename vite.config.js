import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isSSR = process.env.SSR === 'true';
  const isProd = mode === 'production';
  
  return {
    plugins: [react()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development')
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    optimizeDeps: {
      include: ['react-router-dom']
    },
    build: {
      rollupOptions: {
        input: isSSR 
          ? resolve(__dirname, 'src/entry-server.js')
          : resolve(__dirname, 'index.html'),
        output: {
          // Prevent MUI naming conflicts
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('@mui')) {
                return 'vendor_mui';
              }
              return 'vendor';
            }
          }
        }
      }
    },
    ssr: {
      // This ensures all @mui packages are properly bundled
      // for server-side rendering
      noExternal: ['@mui/**', '@emotion/**']
    }
  };
});