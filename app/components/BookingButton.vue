<template>
    <NuxtLink :to="link">
        <button class="btn" :class="design" type="button" @click="handleClick">
            <slot>Contact Me</slot>
            <BIcon v-if="design === 'plain'" name="arrow-right" />
        </button>
    </NuxtLink>
</template>


<script setup>
defineProps({
    link: {
        type: String,
        default: ''
    },
    design: {
        type: String,
        default: 'boxed'
    }
})

const emit = defineEmits(['click'])

function handleClick () {
    emit('click')
}
</script>

<style scoped lang="scss">
button {
    &.plain {
        padding: 1rem 0;
        text-align: left;
        color: var(--colour-link);

        &:hover,
        &:active,
        &:focus {
            box-shadow: none;
            color: var(--colour-link-light);
            border-color: transparent;
        }

        svg {
            margin-left: 0.75rem;
            transition: var(--transition);
        }

        &:hover svg {
            margin-left: 1.25rem;
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
