// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    { extensions: ['.vue'], global: true, path: './components', pathPrefix: false },
  ],
})
