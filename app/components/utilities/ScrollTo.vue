<template>
    <div>
        <a
            id="return-top"
            href="#"
            :class="{ 'return-top--hidden': hideScrollTo }"
            @click.prevent="scrollToTop"
        >
            <i class="bi bi-chevron-double-up" />
        </a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            hideScrollTo: true,
            lastScrollPosition: 0
        }
    },
    mounted () {
        window.addEventListener('scroll', this.checkPosition)
    },
    beforeUnmount () {
        window.removeEventListener('scroll', this.checkPosition)
    },
    methods: {
        scrollToTop () {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        checkPosition () {
            const currentScrollPosition = window.scrollY
            if (currentScrollPosition < 0) {
                return
            }
            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                return
            }
            this.hideScrollTo = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        }
    }
}
</script>

<style scoped lang="scss">
#return-top {
    position: fixed;
    left: 1rem;
    bottom: 1rem;
    width: 45px;
    height: 45px;
    z-index: 1010;
    border: 1px solid var(--colour-font);
    border-radius: var(--radius-small);
    color: var(--colour-font);
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.25);
    font-size: 1.5rem;

    &:hover {
        text-decoration: none;
        border: 1px solid var(--colour-link-hover);
        color: var(--colour-link-hover);
    }

    .return-top--hidden {
        display: none;
    }
}
</style>
