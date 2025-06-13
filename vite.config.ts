import { defineConfig, loadEnv } from 'vite'
/* import alias from '@rollup/plugin-alias'; */
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const projectRootDir = path.resolve(__dirname)
  const globalConfig = {
    plugins: [react()],
    base: '/',
    assetsInclude: ['**/*.md'],
    resolve: {
      alias: {
        '@utils': path.resolve(projectRootDir, './src/js/utils'),
        '@services': path.resolve(projectRootDir, './src/js/services'),
        '@views': path.resolve(projectRootDir, './src/js/views'),
        '@common': path.resolve(projectRootDir, './src/js/common'),
        '@styles': path.resolve(projectRootDir, './src/styles'),
        '@assets': path.resolve(projectRootDir, './src/assets'),
      },
    },
  }
  if (command === 'serve') {
    return {
      ...globalConfig,
      publicDir: '/public',
      server: {
        port: 3000,
        open: true,
      },
    }
  }
  if (command === 'build') {
    return {
      ...globalConfig,
      build: {
        outDir: './dist',
        assetsDir: './app',
        cssCodeSplit: true,
        sourcemap: true,
        emptyOutDir: true,
        reportCompressedSize: true,
        chunkSizeWarningLimit: 520,
        rollupOptions: {
          output: {
            dir: 'dist',
            chunkFileNames: (chunkInfo) => {
              const facadeModuleId = chunkInfo.facadeModuleId

              if (facadeModuleId) {
                // Chunk específico para icons
                if (facadeModuleId.includes('src/js/common/icons')) {
                  return 'app/js/icons/[name]-[hash].js'
                }

                if (facadeModuleId.includes('src/js/common/components')) {
                  return 'app/js/components/[name]-[hash].js'
                }

                if (facadeModuleId.includes('src/js/common/patterns')) {
                  return 'app/js/patterns/[name]-[hash].js'
                }

                if (facadeModuleId.includes('src/js/common/layout')) {
                  return 'app/js/layout/[name]-[hash].js'
                }

                if (facadeModuleId.includes('src/js/common/utils')) {
                  return 'app/js/utils/[name]-[hash].js'
                }

                if (facadeModuleId.includes('src/js/common')) {
                  return 'app/js/common/[name]-[hash].js'
                }

                // Handle views/components as separate chunks
                if (facadeModuleId.includes('src/js/views')) {
                  return 'app/js/views/[name]-[hash].js'
                }

                // Vendor chunks
                if (facadeModuleId.includes('node_modules')) {
                  return 'app/js/vendor/[name]-[hash].js'
                }
              }

              return 'app/js/[name]-[hash].js'
            },
            manualChunks: (id) => {
              // Create separate chunks for each component
              if (id.includes('src/js/views/')) {
                const componentName = id.split('/').pop()?.split('.')[0]
                return `view-${componentName.toLowerCase()}`
              }
              if (id.includes('src/js/common/components/')) {
                const componentName = id.split('/').pop()?.split('.')[0]
                return `component-${componentName.toLowerCase()}`
              }
              // Vendor chunks
              if (id.includes('node_modules')) {
                if (id.includes('react-router-dom')) return 'react-router-vendor'
                if (id.includes('react-dom')) return 'react-dom-vendor'
                if (id.includes('react')) return 'react-vendor'
                return 'vendor/vendor-' + Math.floor(Math.random() * 10000000)
              }
            },
          },
        },
      },
      esbuild: {
        treeShaking: true,
      },
    }
  }
})
