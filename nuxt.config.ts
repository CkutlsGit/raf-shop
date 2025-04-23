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
  runtimeConfig: {
    public: {
      backendUrl: 'https://tgshop.chasman.engineer'
    }
  },
  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/global.css'],
  googleFonts: {
    families: {
      'Raleway': [500, 600]
    }
  }
})