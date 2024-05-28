// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#'
      },
      titleTemplate: 'Rie Arai',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Rie Araiの個人サイトです。' || '' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Rie Arai' },
        { hid: 'og:title', property: 'og:title', content: 'Rie Arai' },
        { hid: 'og:description', property: 'og:description', content: 'Rie Araiの個人サイトです。' },
      ],
      link: [
        { 
          rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' 
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans+JP:wght@100..900&display=swap'
        }
      ]
    }
  },
  mode: 'universal',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content',
  ]
})