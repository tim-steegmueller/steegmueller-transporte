// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/sitemap'],

  // Performance optimizations
  routeRules: {
    '/': { prerender: true }
  },

  image: {
    provider: 'ipx',
    format: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  site: {
    url: 'https://steegmuellertransporte.de'
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Better compression and minification
  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  // SEO and performance improvements
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'de'
      }
    }
  },

  // Better build performance
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            heroicons: ['@heroicons/vue']
          }
        }
      }
    }
  }
})
