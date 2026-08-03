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
  atproto: {
    oauth: {
      writeClientMetadata: true,
      clientMetadata: {
        remote: '',
        local: {
          client_id: 'https://geography.hs.dict.digital/client-metadata.json',
          client_uri: 'https://geography.hs.dict.digital',
          redirect_uris: ['https://geography.hs.dict.digital']
        }
      }
    },
    debug: true
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
