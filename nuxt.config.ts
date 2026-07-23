const mainBaseURL = 'https://www.therapy-space.uk/'
const gaId = 'G-KNXXZ2K9TK'
const gaSessionCookie = `_ga_${gaId.replace(/^G-/, '')}`

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
                { rel: 'icon', type: 'image/x-icon', href: '/therapy-space-favicon.ico' },
                { rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: '', href: '/fonts/montserrat-v31-latin-regular.woff2' },
                { rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: '', href: '/fonts/quicksand-v37-latin-regular.woff2' },
                { rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: '', href: '/fonts/quicksand-v37-latin-700.woff2' }
            ]
        }
    },

    css: [
        '~/assets/bootstrap-custom.scss',
        '~/assets/main.scss'
    ],

    modules: ['@bootstrap-vue-next/nuxt', '@pinia/nuxt', '@nuxtjs/sitemap', '@nuxt/eslint', '@nuxtjs/fontaine', '@dargmuesli/nuxt-cookie-control', 'nuxt-gtag'],

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
    },

    gtag: {
        id: gaId,
        initMode: "manual",
    },

    cookieControl: {
        locales: ['en'],

        declineAllAcceptsNecessary: true,

        localeTexts: {
            en: {
                accept: 'Accept All',
                decline: 'Reject All',
                acceptAll: 'Accept All',
                declineAll: 'Reject All',
                save: 'Confirm My Choices',
            },
        },

        // barPosition: 'bottom-left',

        colors: {
            barBackground: '#FFF',
            barButtonBackground: '#FFF',
            barButtonColor: '#004e65',
            barButtonHoverBackground: '#FFF',
            barButtonHoverColor: '#006d8b',
            barTextColor: '#444',
            controlButtonIconColor: '#444',
            controlButtonHoverBackground: '#FFF',
            controlButtonIconHoverColor: '#006d8b',
            modalButtonBackground: '#FFF',
            modalButtonColor: '#004e65',
            modalButtonHoverBackground: '#FFF',
            modalButtonHoverColor: '#006d8b',
            modalOverlayOpacity: 0.35,
        },

        cookies: {
            necessary: [
                {
                    description: {
                        en: 'Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data and cannot be disabled.'
                    },
                    id: 'n',
                    name: {
                        en: 'Strictly Necessary'
                    },
                }
            ],
            optional: [
                {
                    description: {
                        en: 'Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.'
                    },
                    id: 'ga',
                    isPreselected: false,
                    name: {
                        en: 'Analytics'
                    },
                    targetCookieIds: ['_ga', gaSessionCookie],
                }
            ],
        },
    }
})