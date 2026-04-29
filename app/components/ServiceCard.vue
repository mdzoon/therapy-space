<template>
    <div class="container service-wrapper">
        <div class="mb-5 mt-5 therapy-card">
            <div :id="service.id" class="anchor"/>
            <div :class="['container-' + service.id]" class="therapy-header w-100">
                <h3>{{ service.name }}</h3>
            </div>
            <div class="therapy-body">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div v-html="service.content"/>
                <div v-if="service.testimonial" class="testimonial">
                    <span style="font-weight:500;">Success story: </span>
                    <q><i>{{ service.testimonial.content }}</i></q>
                    <i> {{ service.testimonial.author }}</i>
                </div>
            </div>
            <BookingButton link='/contact' design="boxed">
                Ask me about <span>{{service.id.replace(/-/g, ' ')}}</span>
            </BookingButton>
        </div>
    </div>
</template>

<script setup>
defineProps({
    service: {
        type: Object,
        default: () => ({ id: 'Service', name: 'Therapy Name', content: 'Therapy Description' })
    }
})
</script>

<style scoped lang="scss">
.container {
    margin-top: 6rem;
    margin-bottom: 6rem;
}

.service-wrapper {
    border-radius: var(--radius-small);

    h3 {
        letter-spacing: 8px;
        font-size: 1.75rem;
    }

    &:nth-of-type(2n+1) {
        text-align: left;
        border-left: 5px solid var(--colour-primary);
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);

        @media only screen and (min-width: 576px) {
            background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
        }

        @media only screen and (min-width: 768px) {
            padding-left: 2rem;
            background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%);
        }
    }

    &:nth-of-type(2n) {
        text-align: right;
        border-right: 5px solid var(--colour-secondary);
        background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);

        @media only screen and (min-width: 576px) {
            background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
        }

        @media only screen and (min-width: 768px) {
            padding-right: 2rem;
            background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%);
        }
    }
}

.therapy-card {
    padding-top: 5em;
    padding-bottom: 5em;
    background: radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.07) 69%, rgba(238, 130, 238, 0) 100%);

    .anchor {
        display: block;
        position: relative;
        top: -150px;
        visibility: hidden;
    }

    .therapy-body {
        margin-top: 5em;
        margin-bottom: 5em;

        .testimonial {
            margin-top: 3em;
            font-size: smaller;
        }

        :deep(p) {
            margin-top: 3em;
        }

        :deep(a) {
            margin: auto;
        }

        :deep(ul) {
            list-style-type: none;
            text-align: justify;
            padding: 0 10% 0;

            @media only screen and (min-width: 992px) {
                text-align: inherit;
                padding: 0;
            }
        }
    }

    @media only screen and (max-width: 575px) {
        padding-top: 2em;
        padding-bottom: 2em;

        .therapy-header h3 {
            letter-spacing: 6px;
            font-size: 1.5rem;
        }

        .therapy-body {
            margin-top: 2em;
            margin-bottom: 2em;
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 499px) {
        :deep(button) {
            width: 100%;
        }
    }
}
</style>
