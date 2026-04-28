<template>
    <main class="container">
        <div class="d-none d-lg-block background-holder-right"/>
        <BRow>
            <BCol lg="6" class="left">
                <div class="column-box">
                    <img src="@/assets/images/grazyna-portrait.jpg" alt="Grazyna Godlewska-Vernon portrait">
                </div>
            </BCol>
            <BCol lg="6" class="right">
                <div class="column-info">
                    <div class="body">
                        <p>My name is Grazyna Godlewska-Vernon.</p>
                        <p>I am BACP Accredited Integrative Counsellor and BABCP Accredited Cognitive Behavioural Psychotherapist and Supervisor. I am also EMDR therapist and UK Accredited Mediator.</p>
                        <p>I worked for over 10 years with clients in the NHS. Currently I work in a private setting and I am employed part-time by BUPA. My training in different therapeutic approaches combined with my clinical experience allows me to offer in-depth assessment of your issues and provide treatment which is most suitable for your particular needs.</p>
                    </div>
                    <div class="d-flex footer">
                        <BookingButton link='/what-to-expect' design="plain" @click="onButtonClick">
                            Learn more about my work and my qualifications
                        </BookingButton>
                        <BookingButton link='/contact' design="plain">
                            Book appointment with me
                        </BookingButton>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow>
            <BCol>
                <h2>Success stories:</h2>

                <BCarousel
                    id="testimonials-carousel"
                    class="d-flex justify-content-center"
                    v-model="slide"
                    :interval="8000"
                    ride="carousel"
                    controls
                    indicators
                    background="transparent"
                    @slide="onSlideStart"
                    @slid="onSlideEnd"
                >

                    <BCarouselSlide
                        v-for="(testimonial, index) in testimonials"
                        :key="index"
                    >
                        <template #img />
                        <div class="text-wrapper">
                            <div>{{ testimonial.content }}<i> {{ testimonial.author }}</i></div>
                        </div>
                    </BCarouselSlide>

                </BCarousel>

            </BCol>
        </BRow>
    </main>
</template>

<script>
import { mapStores } from 'pinia'
import dataMixin from '@/mixins/dataMixin.js'
export default {
    mixins: [dataMixin],
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },
    computed: {
        ...mapStores(useQualificationsStore)
    },
    methods: {
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        },
        onButtonClick() {
            this.qualificationsStore.toggle()
        }
    },
}
</script>

<style scoped lang="scss">
.left,
.right {
    display: flex;
    justify-content: center;
    align-items: center;
}

.column-box {
    @media only screen and (max-width: 991px) {
        padding-bottom: 2rem;
    }

    img {
        width: 100%;
        height: auto;
        max-width: 360px;
    }
}

.column-info {
    @media only screen and (max-width: 991px) {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    p {
        font-size: 1.25rem;
    }

    .footer {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-top: 3rem;
    }
}

h2 {
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 1.25rem;

    @media only screen and (min-width: 768px) {
        text-align: center;
    }

    @media only screen and (min-width: 992px) {
        margin-top: 9rem;
        font-size: 2rem;
    }
}
</style>

<style lang="scss">
.carousel-control-prev-icon,
.carousel-control-next-icon {
    display: none;
    transform: rotate(45deg);
}

.carousel-control-prev-icon {
    border-left: 4px solid var(--colour-link);
    border-bottom: 4px solid var(--colour-link);
}

.carousel-control-next-icon {
    border-right: 4px solid var(--colour-link);
    border-top: 4px solid var(--colour-link);
}

.carousel {
    --bs-carousel-indicator-active-bg: var(--colour-link);
}

.carousel-indicators {
    bottom: -30px;
}

.carousel .carousel-inner {
    display: flex;
    gap: 10px;

    > * {
        height: 620px;

        @media only screen and (min-width: 400px) {
            height: 560px;
        }

        @media only screen and (min-width: 500px) {
            height: 480px;
        }
    }

    .carousel-caption {
        top: 50%;
        bottom: unset;
        right: unset;
        left: unset;
        transform: translateY(-50%);
        color: var(--colour-font);
        font-size: 14px;
        height: 100%;

        .text-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            background-color: var(--colour-secondary-light);
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%);
            height: 100%;

            i {
                white-space: nowrap;
            }
        }

        @media only screen and (min-width: 400px) {
            font-size: initial;
        }

        @media only screen and (min-width: 768px) {
            right: 15%;
            left: 15%;
        }

        @media only screen and (min-width: 992px) {
            font-size: 1.25rem;

            .text-wrapper {
                background-color: transparent;
            }
        }
    }
}

@media only screen and (min-width: 768px) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        display: block;
    }
}
</style>