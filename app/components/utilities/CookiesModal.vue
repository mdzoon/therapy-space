<template>
    <CookieControl>
        <template #modal>
            <h1 class="modal-title">Customise Consent Preferences</h1>
            <p>I use cookies to help you navigate efficiently and perform certain functions. A decision on cookie usage permissions can be changed anytime using the cookie button that will appear after a selection has been made on this modal. You will find detailed information about all cookies on <nuxt-link to="/cookies-policy">Cookies Policy</nuxt-link> page.</p>
        </template>
    </CookieControl>
</template>

<script setup lang="ts">
const { cookiesEnabledIds } = useCookieControl()
const { initialize, enableAnalytics, disableAnalytics } = useGtag()

let isInitialized = false

function clearGaCookies() {
    if (!import.meta.client) return

    const names = document.cookie
        .split('; ')
        .map((c) => c.split('=')[0])
        .filter((n): n is string => !!n && (n.startsWith('_ga') || n === '_gid'))

    const parts = location.hostname.split('.')
    const domains = parts
        .slice(0, -1)
        .map((_, i) => '.' + parts.slice(i).join('.'))

    for (const name of names) {
        document.cookie = `${name}=; Max-Age=0; path=/`
        for (const domain of domains) {
            document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`
        }
    }
}

watch(
    () => cookiesEnabledIds.value,
    (ids) => {
        const consented = ids?.includes('ga') ?? false

        if (consented) {
            if (!isInitialized) {
                initialize()
                isInitialized = true
            } else {
                enableAnalytics()
            }
        } else {
            disableAnalytics()
            clearGaCookies()
        }
    },
    { deep: true, immediate: true },
)
</script>

<style lang="scss">
.cookieControl {
    z-index: 1090;

    &:has(.cookieControl__Modal) &__Bar {
        display: none;
    }

    &__ModalContent {
        border-radius: var(--radius-small);

        & h1, h2 {
            font-size: large;
        }
        & div {
            font-size: small;
        }

        & a {
            color: var(--colour-link);
            text-decoration: none;

            &:hover {
                color: var(--colour-link-hover);
            }
        }

        .cookieControl__ModalClose {
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px;
            font-size: 0;

            &:focus {
                box-shadow: unset;
            }

            &::after {
                content: '✕';
                font-size: 1.5rem;
                line-height: 1;
            }
        }

        .cookieControl__ModalInputWrapper input + button {
            padding-top: 10px;
            padding-bottom: 10px;
        }

        .cookieControl__ModalInputWrapper input:disabled + button {
            background-color: rgba(0, 0, 0, .5);
            &::before {
                background-color: #e9ecef;
            }
        }

        .cookieControl__ModalInputWrapper input:not(:disabled) + button {
            background-color: var(--colour-background);
            border: 1px solid #dee2e6;

            &::before {
                background-color: rgba(0, 0, 0, .25);
            }

            &:focus {
                border-color: var(--colour-link);
                box-shadow: 0 0 0 .25rem rgba(0, 109, 139, .25);

                &::before {
                    background-color: var(--colour-link);
                }
            }
        }

        .cookieControl__ModalInputWrapper input:checked:not(:disabled) + button {
            background-color: var(--colour-link);

            &::before {
                background-color: var(--colour-background);
            }

            &:focus {
                --bs-form-switch-bg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
            }
        }
    }

    .cookieControl__ModalUnsaved {
        font-size: medium;
        bottom: 80px;
    }

    .cookieControl__Bar {
        background: linear-gradient(225deg,rgb(111, 224, 255) 0%, rgb(253, 166, 223) 100%);
        padding: 7px;

        .cookieControl__BarContainer {
            background-color: var(--colour-background);
            padding: 15px;
            gap: 10px;
        }
    }

    .cookieControl__ModalButtons,
    .cookieControl__BarButtons {
        gap: 10px;
        align-items: center;
        justify-content: center;

        button {
            border: 1px solid var(--colour-font);
            border-radius: var(--radius-small);
            background-color: initial;
            color: initial;
            transition: var(--transition);
            padding: .75rem 1.25rem;
            font-size: small;
            margin: 0;

            &:hover,
            &:active,
            &:focus {
                background-color: var(--background-color);
                border-color: var(--colour-link-hover);
                color: var(--colour-link-hover);
                box-shadow: var(--box-shadow);
            }
        }
    }

    .cookieControl__BarButtons {

        @media only screen and (min-width: 769px) {
            width: 50%;
        }

        @media only screen and (min-width: 769px) and (max-width: 1199px) {
            flex-direction: column;

            button {
                width: 100%;
            }
        }
    }
}

button.cookieControl__ControlButton {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 45px;
    height: 45px;
    border: 1px solid var(--colour-font);
    border-radius: var(--radius-small);
    color: var(--colour-font);
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: none;

    &:hover {
        border-color: var(--colour-link-hover);
        color: var(--colour-link-hover);
    }
}
</style>
