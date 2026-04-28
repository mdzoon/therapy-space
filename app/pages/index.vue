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
                            <i class="bi bi-arrow-right" />
                        </BookingButton>
                        <BookingButton link='/contact' design="plain">
                            Book appointment with me
                            <i class="bi bi-arrow-right" />
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
                    v-model="slide"
                    :interval="8000"
                    controls
                    indicators
                    background="transparent"
                    img-width="1024"
                    img-height="200"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                >

                    <TestimonialSlide v-for="(testimonial, index) in testimonials" :key="index" :testimonial="testimonial"/>

                </BCarousel>

            </BCol>
        </BRow>
    </main>
</template>

<script>
import { mapStores } from 'pinia'
import TestimonialSlide from '@/components/TestimonialSlide.vue'
import dataMixin from '@/mixins/dataMixin.js'
export default {
    components: {
        TestimonialSlide
    },
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

<style scoped>
.left,
.right {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 991px) {
    .column-box,
    .column-info {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
}
@media only screen and (min-width: 992px) {
    .column-box {
        padding-right: 5rem;
    }
}
.column-box img {
    width: 100%;
    height: auto;  
}
.column-info p {
    font-size: 1.25rem;
}
.column-info .footer {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 3rem;
}

h2 {
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 1.25rem;
}

@media only screen and (min-width: 768px) {
    h2 {
        text-align: center;
    }
}
@media only screen and (min-width: 992px) {
    h2 {
        text-align: center;
        margin-top: 9rem;
        font-size: 2rem;
    }
}
</style>