// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  // Performance optimizations
  routeRules: {
    '/**': { prerender: true },
    '/sitemap.xml': { headers: { 'Content-Type': 'application/xml' } },
    '/robots.txt': { headers: { 'Content-Type': 'text/plain' } }
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
    url: 'https://steegmuellertransporte.de',
    name: 'S. Steegmüller Transportdienstleistungen'
  },

  sitemap: {
    hostname: 'https://steegmuellertransporte.de',
    gzip: true,
    exclude: ['/admin/**', '/test/**'],
    routes: [
      '/transport-renningen-boeblingen',
      '/transport-renningen-sindelfingen',
      '/transport-renningen-leonberg',
      '/transport-renningen-stuttgart',
      '/notfall-transport',
      '/blog',
      '/blog/direktfahrten-tipps',
      '/blog/transportkosten-sparen',
      '/blog/verpackung-transport',
      '/blog/logistik-trends-2025',
      '/blog/umzug-boeblingen',
      '/blog/regionale-transporte'
    ]
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: ['/admin/', '/test/'],
    Sitemap: 'https://steegmuellertransporte.de/sitemap.xml',
    Host: 'https://steegmuellertransporte.de'
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
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover',
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
