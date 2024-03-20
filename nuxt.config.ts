// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  security: {
    headers: {
      contentSecurityPolicy: {
        'form-action': ["'self'", 'data:', 'https://formspree.io'],
        'connect-src': ["'self'", 'data:', 'https://formspree.io'],
      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-aos',
    'nuxt-security',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: '300..900'
      }
  }]
  ]
})