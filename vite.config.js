import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(
    ({ command, mode, isSsrBuild, isPreview }) => {
      const config = {
        plugins: [vue()],
          build: {
            outDir:"dist/modify-my-store/"
          },
          base: "/modify-my-store/"
      }
      if (command === 'serve') {

      } else if (command === 'build'){
          config.plugins.outDir="/dist/modify-my-store/"
      }
      return config
    }
)
