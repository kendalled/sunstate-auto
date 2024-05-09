// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  googleAnalytics: {
    id: 'G-QVSBF89JRV'
  },
  vite: {
    server: {
        headers: {
            'Cache-Control': 'max-age=0'
        }
    }
  },
  routeRules: {
    '/contact-us': { redirect: { to: '/contact', statusCode: 301 } },
  },
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-aos',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: '300..900'
      }
  }]
  ]
})