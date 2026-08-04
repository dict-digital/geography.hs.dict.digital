// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '地理探求 - DigiDict',
      htmlAttrs: {
        lang: 'ja'
      }
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  extends: ['@digidict/layer-nuxt'],

  site: {
    url: 'https://geography.hs.dict.digital',
    name: '地理探求 - DigiDict',
    trailingSlash: true
  },

  modules: ['@nuxt/eslint']
});
