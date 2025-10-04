// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/eslint'],

  typescript: {
    strict: false,
    typeCheck: false
  },

  eslint: {
    config: {
      standalone: false
    }
  },

  // Runtime Config für EmailJS
  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
    }
  },

  // Performance optimizations
  routeRules: {
    '/': { prerender: true, headers: { 'Cache-Control': 's-maxage=31536000' } },
    '/kontakt': { prerender: true, headers: { 'Cache-Control': 's-maxage=86400' } },
    '/impressum': { prerender: true, headers: { 'Cache-Control': 's-maxage=31536000' } },
    '/datenschutz': { prerender: true, headers: { 'Cache-Control': 's-maxage=31536000' } },
    '/blog/**': { prerender: true, headers: { 'Cache-Control': 's-maxage=86400' } },
    '/transport-**': { prerender: true, headers: { 'Cache-Control': 's-maxage=86400' } },
    '/sitemap.xml': {
      headers: { 'Content-Type': 'application/xml', 'Cache-Control': 's-maxage=86400' }
    },
    '/sitemap-images.xml': {
      headers: { 'Content-Type': 'application/xml', 'Cache-Control': 's-maxage=86400' }
    },
    '/robots.txt': { headers: { 'Content-Type': 'text/plain', 'Cache-Control': 's-maxage=86400' } }
  },

  site: {
    url: 'https://steegmuellertransporte.de',
    name: 'S. Steegmüller Transportdienstleistungen'
  },

  sitemap: {
    // hostname moved to site.url
    gzip: true,
    exclude: ['/admin/**', '/test/**'],
    // Fix für doppeltes HTML-Encoding in Bild-URLs
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    },
    // Bild-Sitemap deaktivieren um Encoding-Probleme zu vermeiden
    excludeImages: true,
    urls: [
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
    // UserAgent moved to groups
    groups: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/test/']
      }
    ],
    sitemap: [
      'https://steegmuellertransporte.de/sitemap.xml',
      'https://steegmuellertransporte.de/sitemap-images.xml'
    ]
    // Host is now defined in site.url above
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // Better compression and minification
  nitro: {
    compressPublicAssets: true,
    minify: true,
    experimental: {
      wasm: true
    }
  },

  // SEO and performance improvements
  app: {
    head: {
      charset: 'utf-8',
      viewport:
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover',
      htmlAttrs: {
        lang: 'de'
      },
      link: [
        { rel: 'canonical', href: 'https://steegmuellertransporte.de' },
        { rel: 'alternate', hreflang: 'de', href: 'https://steegmuellertransporte.de' },
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' }
      ],
      meta: [
        {
          name: 'robots',
          content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'author', content: 'S. Steegmüller Transportdienstleistungen' },
        { name: 'generator', content: 'Nuxt 4' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#1f8a6e' },
        { name: 'msapplication-TileColor', content: '#1f8a6e' },
        { property: 'og:site_name', content: 'S. Steegmüller Transportdienstleistungen' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:site', content: '@steegmuellertransporte' },
        { name: 'twitter:creator', content: '@steegmuellertransporte' }
      ]
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
