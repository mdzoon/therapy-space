const mainBaseURL = 'https://www.therapy-space.uk/'

export default defineNuxtConfig({
    compatibilityDate: '2026-04-27',

    nitro: {
        preset: 'static'
    },

    site: {
        url: mainBaseURL,
        name: 'Therapy Space'
    },

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'Therapy Space',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Grazyna Godlewska-Vernon, CBT therapist and counsellor in Canterbury, Kent. Providing CBT Cognitive Behavioural Therapy and Psychotherapy. Help for people suffering with anxiety, depression, trauma or other emotional or psychosomatic problems.' },
                { hid: 'keywords', name: 'keywords', content: 'CBT, cognitive behaviour therapy, counselling, psychotherapy, Kent, Canterbury' },
                { hid: 'author', name: 'author', content: 'Michael Dyczkowski' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/therapy-space-favicon.ico' }
            ]
        }
    },

    css: [
        '~/assets/bootstrap-custom.scss',
        '~/assets/main.scss'
    ],

    modules: [
        '@bootstrap-vue-next/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/sitemap',
        '@nuxt/eslint',
        '@nuxtjs/fontaine'
        // '@dargmuesli/nuxt-cookie-control'
    ],

    fontMetrics: {
        fonts: ['Montserrat', 'Quicksand']
    },

    features: {
        inlineStyles: true
    },

    experimental: {
        appManifest: false, //  switches off client-side route awareness, turn on if useRouteRules
        payloadExtraction: false // removes the _payload.json files for each route, turn on if useAsyncData 
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: ['color-functions', 'global-builtin', 'import', 'if-function', 'legacy-js-api']
                }
            }
        },
        optimizeDeps: {
            include: [
                'bootstrap-vue-next',
                'bootstrap-vue-next/components/BButton',
                'bootstrap-vue-next/components/BCard',
                'bootstrap-vue-next/components/BCarousel',
                'bootstrap-vue-next/components/BCollapse',                
                'bootstrap-vue-next/components/BContainer',                                
                'bootstrap-vue-next/components/BForm',
                'bootstrap-vue-next/components/BFormCheckbox',
                'bootstrap-vue-next/components/BFormGroup',
                'bootstrap-vue-next/components/BFormInput',
                'bootstrap-vue-next/components/BFormTextarea',
                'bootstrap-vue-next/components/BNavbar',
                'bootstrap-vue-next/components/BNav',   
                '@vuelidate/core',
                '@vuelidate/validators',
                '@vue/devtools-kit',
            ]
        }
    }
})
