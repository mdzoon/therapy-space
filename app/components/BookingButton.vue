<template>
    <NuxtLink :to="link">
        <button class="btn" :class="design" type="button" @click="handleClick">
            <slot>Contact Me</slot>
            <i v-if="design === 'plain'" class="bi bi-arrow-right" />
        </button>
    </NuxtLink>
</template>


<script>
export default {
    props: {
        link: {
            type: String,
            default: ''
        },
        design: {
            type: String,
            default: 'boxed'
        },
    },
    emits: ['click'],
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
}
</script>

<style scoped lang="scss">
button {
    &.plain {
        padding: 0;
        margin-top: 1rem;
        margin-bottom: 1rem;
        text-align: left;
        color: var(--colour-link);

        &:hover,
        &:active,
        &:focus {
            box-shadow: none;
        }

        i {
            margin-left: 0.75rem;
            transition: var(--transition);
        }

        &:hover {
            color: var(--colour-link-light);

            i {
                margin-left: 1.25rem;
            }
        }
    }

    &.boxed {
        border: 1px solid var(--colour-font);
        border-radius: var(--radius-small);
        background-color: initial;
        color: initial;
        transition: var(--transition);
        padding: .75rem 1.25rem;
        letter-spacing: 2px;
        min-width: 35%;

        &:hover,
        &:active,
        &:focus {
            background-color: initial;
            border-color: var(--colour-link-hover);
            color: var(--colour-link-hover);
            box-shadow: var(--box-shadow);
        }
    }
}
</style>
