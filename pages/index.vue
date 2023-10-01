<template>
  <main class="container">
    <div class="d-none d-lg-block background-holder-right"></div>
    <b-row>
      <b-col lg="6" class="left">
        <div class="column-box">
          <img src="@/assets/images/grazyna-portrait.jpg" alt="default-portrait">
        </div>
      </b-col>
      <b-col lg="6" class="right">
        <div class="column-info">
          <div class="body">
            <p>I am BACP Accredited Integrative Counsellor and BABCP Accredited Cognitive Behavioural Psychotherapist and Supervisor. I am also EMDR practitioner and UK Accredited Mediator.</p>
            <p>I have been working for over 10 years with clients in the NHS and in private setting. My training in different therapeutic approaches combined with my clinical experience allows me to offer in-depth assessment of your issues and provide treatment which is most suitable for your particular needs.</p>
          </div>
          <div class="d-flex footer">
            <BookingButton link='/what-to-expect' design="plain">
              Learn more about my work and my qualifications
              <b-icon icon="arrow-right"></b-icon>
            </BookingButton>
            <BookingButton link='/contact' design="plain">
              Book appointment with me
              <b-icon icon="arrow-right"></b-icon>
            </BookingButton>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2>Testimonials</h2>

        <b-carousel
          id="testimonials-carousel"
          v-model="slide"
          :interval="5000"
          controls
          indicators
          background="transparent"
          img-width="1024"
          img-height="200"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >

          <slider v-for="(testimonial, index) in testimonials" :key="index" :testimonial="testimonial"/>

        </b-carousel>

      </b-col>
    </b-row>
  </main>
</template>

<script>
import slider from '@/components/slider.vue'
import dataMixin from '@/content/dataMixin.js'
export default {
  components: {
    slider
  },
  mixins: [dataMixin],
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
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
</style>
