export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Therapy Space' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Grazyna Godlewska-Vernon, CBT therapist and counsellor in Canterbury, Kent. Providing CBT Cognitive Behavioural Therapy and Psychotherapy. Help for people suffering with anxiety, depression, trauma or other emotional or psychosomatic problems.' || process.env.npm_package_description },
      { hid: 'keywords', name: 'keywords', content: 'CBT, cognitive behaviour therapy, counselling, psychotherapy, Kent, Canterbury' },
      { hid: 'author', name: 'author', content: 'Michael Dyczkowski' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/therapy-space-favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&family=Quicksand&display=swap' }
    ]
  },

  // Customize the progress-bar color
  loading: {
    color: 'blue',
    height: '5px'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@plugins/global.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-cookie-control',
    'vue-scrollto/nuxt'
  ],

  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
