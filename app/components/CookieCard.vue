<template>
    <div class="cookie-card">

        <h6>We use the following {{ type }} cookies:</h6>

        <div v-for="cookie in displayedCookies" :key="cookie.name">
            <ul>
                <li>
                    <div>Cookie</div><div>{{ cookie.name }}</div>
                </li>
                <li>
                    <div>Duration</div><div>{{ cookie.duration }}</div>
                </li>
                <li>
                    <div>Description</div><div>{{ cookie.description }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { cookies } from '@/data/cookies.js'

const props = defineProps({
    type: { type: String, required: true }
})

const displayedCookies = computed(() =>
    props.type === 'necessary'
        ? cookies.necessary
        : cookies.optional.filter((cookie) => cookie.type === props.type)
)

</script>

<style scoped lang="scss">
    .cookie-card {
        background-color: #dee2e6;
        border-radius: var(--radius);
        padding: 1rem 2rem;
        margin: 0 2rem 2rem;
        font-size: small;

        div:not(:last-child) ul {
            border-bottom: 1px solid var(--colour-font);
        }

        ul {
            list-style-type: none;
            padding: 1rem 0;
            margin: 0;

            li {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-evenly;
                align-content: stretch;
                flex-wrap: wrap;
                padding: 3px 0;

                div:first-child {
                    width: 100px;
                    font-weight: 600;
                    word-break: break-word;
                    word-wrap: break-word;
                }

                div:last-child {
                    flex: 1;
                    word-break: break-word;
                    word-wrap: break-word;
                }

                @media only screen and (min-width: 576px) {
                    flex-direction: row;
                }
            }
        }
    }
</style>