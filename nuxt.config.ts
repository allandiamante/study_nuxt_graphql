// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', '@nuxtjs/apollo'],
  runtimeConfig:{
    githubToken: process.env.GITHUB_TOKEN
  },
  content: {
    //https://content.nuxtjs.org/configuration
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'bash', 'json', 'yaml', 'vue']
        }
      },

    apollo:{
      clients:{
        default:{
          tokenName: 'github-token',
          httpEndpoint: 'https://api.github.com/graphql'
        }
      }
    }
})
