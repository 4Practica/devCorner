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
            chunkFileNames: (chunkInfo) => {
              const facadeModuleId = chunkInfo.facadeModuleId
              
              if (facadeModuleId) {
                // Chunk específico para icons
                if (facadeModuleId.includes('src/js/common/icons')) {
                  return 'assets/js/icons/[name]-[hash].js'
                }

                if (facadeModuleId.includes('src/js/common/components')) {
                  return 'assets/js/components/[name]-[hash].js'
                }

                if (facadeModuleId.includes('src/js/common/patterns')) {
                  return 'assets/js/patterns/[name]-[hash].js'
                }
                
                if (facadeModuleId.includes('src/js/common/layout')) {
                  return 'assets/js/layout/[name]-[hash].js'
                }
                
                if (facadeModuleId.includes('src/js/common/utils')) {
                  return 'assets/js/utils/[name]-[hash].js'
                }

                if (facadeModuleId.includes('src/js/common')) {
                  return 'assets/js/common/[name]-[hash].js'
                }
                // Vendor chunks
                if (facadeModuleId.includes('node_modules')) {
                  return 'assets/js/vendor/[name]-[hash].js'
                }
              }
              
              return 'assets/js/[name]-[hash].js'
            },
            
            manualChunks: (id) => {
              // Chunk específico para todos los iconos
              if (id.includes('src/js/common/icons')) {
                return 'icons-bundle'
              }

              // Chunk para componentes comunes
              if (id.includes('src/js/common/components')) {
                return 'common-components'
              }
              
              // Chunk para layout
              if (id.includes('src/js/common/layout')) {
                return 'layout-components'
              }
              
              // Chunk para utilidades
              if (id.includes('src/js/common/utils')) {
                return 'utils'
              }
              
              // Chunk para patrones
              if (id.includes('src/js/common/patterns')) {
                return 'patterns-components'
              }
              
              // Vendors
              if (id.includes('node_modules')) {
                if (id.includes('react-dom')) {
                  return 'react-dom-vendor'
                }
                if (id.includes('react-router-dom')) {
                  return 'react-router-vendor'
                }
                if (id.includes('react')) {
                  return 'react-vendor'
                }
                const chunks = id.split('node_modules/')
                const chunk = chunks[chunks.length -1]
                const packageName = chunk.split('/')[0]

            
                const cleanName = chunk
                  .replace("/", "-")
                  .replace(".", "-")
                  .replace("js", "")
                  .replace(/[^a-zA-Z0-9-]/g, '-') // caracteres especiales
                  .toLowerCase()
                
                return `${cleanName}-vendor`
              }
            }
          }
        }
      },
      esbuild: {
        treeShaking: true,
      },
    }
  }
})
