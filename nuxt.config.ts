import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Therapy Space' || process.env.npm_package_name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Grazyna Godlewska-Vernon, CBT therapist and counsellor in Canterbury, Kent. Providing CBT Cognitive Behavioural Therapy and Psychotherapy. Help for people suffering with anxiety, depression, trauma or other emotional or psychosomatic problems.' || process.env.npm_package_description },
        { name: 'keywords', content: 'CBT, cognitive behaviour therapy, counselling, psychotherapy, Kent, Canterbury' },
        { name: 'author', content: 'Michael Dyczkowski' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/therapy-space-favicon.ico' }
      ]
    },
  },
  // Customize the progress-bar color
  loading: {
    color: 'rgba(255, 113, 205, 0.5)',
    height: '3px',
    throttle: 0
  },
  css: [
    '~/assets/main.css',
    '~/assets/fonts.css',
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  plugins: [
    { src: '~/plugins/vuelidate.js' }
  ],
  modules: [
    '@bootstrap-vue-next/nuxt',
    // 'vue-scrollto/nuxt'
  ],
  vite: {
    plugins: [
        svgLoader()
    ]
  }  
})
