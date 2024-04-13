import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(
    ({ command, mode, isSsrBuild, isPreview }) => {
      const config = {
        plugins: [vue()],
        // build: {
        //     rollupOptions: {
        //         output: {
        //             entryFileNames: `_redirect`,
        //             chunkFileNames: `_redirect`
        //         },
        //     }
        // }
      }
      if (command === 'serve') {

      } else if (command === 'build'){

      }
      return config
    }
)
