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
        'bootstrap/dist/css/bootstrap.min.css',
        '~/assets/main.scss'
    ],

    modules: [
        '@bootstrap-vue-next/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/sitemap',
        '@nuxt/eslint'
        // '@dargmuesli/nuxt-cookie-control'
    ]
})
