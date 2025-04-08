// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'bobby',
      script: [
        {
          src: 'https://telegram.org/js/telegram-web-app.js?56',
          defer: true
        }
      ]
    }
  },
  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts', 'vue3-carousel-nuxt'],
  css: ['~/assets/css/global.css'],
  googleFonts: {
    families: {
      'Raleway': true
    }
  }
})