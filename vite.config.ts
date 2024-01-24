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
    resolve: {
      alias: {
        '@utils': path.resolve(projectRootDir, '/src/js/utils'),
        '@services': path.resolve(projectRootDir, '/src/js/services'),
        '@views': path.resolve(projectRootDir, '/src/js/views'),
        '@common': path.resolve(projectRootDir, '/src/js/common'),
        '@styles': path.resolve(projectRootDir, '/src/styles'),
        '@assets': path.resolve(projectRootDir, '/src/assets'),
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
      },
    }
  }
})
