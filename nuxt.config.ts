// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/i18n'],
  ssr: true,

  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  content: { documentDriven: true },

  i18n: {
    locales: [
      { code: 'en', iso: 'en', domain: 'en.com' },
      { code: 'de', iso: 'de', domain: 'de.de' },
    ],
    differentDomains: true,
    // when ^this is true we dont get /de or /en in output
  },
});
