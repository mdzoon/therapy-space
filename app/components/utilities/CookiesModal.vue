<template>
    <CookieControl>
        <template #modal>
            <h3 class="modal-title">Customize Consent Preferences</h3>
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

    &__ModalContent {
        border-radius: var(--radius-small);

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
    }

    .cookieControl__Bar {
        background: linear-gradient(225deg,rgba(0, 198, 255, .75) 0%, rgba(255, 113, 205, .75) 100%);
    }

    .cookieControl__ModalButtons,
    .cookieControl__BarButtons {
        gap: 10;

        button {
            border: 1px solid var(--colour-font);
            border-radius: var(--radius-small);
            background-color: initial;
            color: initial;
            transition: var(--transition);
            padding: .75rem 1.25rem;
            letter-spacing: 2px;
            min-width: 150px;

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
