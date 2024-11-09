// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
  ],
  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        },
      ],
      "link": [
        { rel: 'icon', href: 'https://raw.githubusercontent.com/axuata/.materials/refs/heads/main/images/axuata/project-logos/nuxtart/logo.svg', type: 'image/svg+xml' },
      ],
      "title": "ウェブサイトの名前をここに"
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
