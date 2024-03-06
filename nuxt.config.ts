// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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