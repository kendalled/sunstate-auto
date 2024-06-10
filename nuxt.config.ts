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
  gtag: {
    id: 'G-QVSBF89JRV'
  },
  routeRules: {
    '/contact-us': { redirect: { to: '/contact', statusCode: 301 } },
  },
  site: {
    url: 'https://sunstateautoglass.com',
    name: 'SunState AutoGlass',
    description: 'Trust SunState Auto Glass for top-notch windshield repair since 2007, proudly serving Orlando and Tampa. Our experienced team ensures swift, same-day service, prioritizing your safety on the road. Choose SunState for quality repairs and unmatched expertise in the Central Florida area.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-aos', 'nuxt-gtag', ['@nuxtjs/google-fonts', {
    families: {
      Inter: '300..900'
    }
}], "@nuxtjs/seo"]
})