<template>
  <main class="container">
    <div class="d-none d-lg-block background-holder-right"></div>
    <b-row>
      <b-col lg="6" class="left">
        <div class="column-box">
          <img src="@/assets/images/grazyna-portrait.jpg" alt="Grazyna Godlewska-Vernon portrait">
        </div>
      </b-col>
      <b-col lg="6" class="right">
        <div class="column-info">
          <div class="body">
            <p>My name is Grazyna Godlewska-Vernon.</p>
            <p>I am BACP Accredited Integrative Counsellor and BABCP Accredited Cognitive Behavioural Psychotherapist and Supervisor. I am also EMDR practitioner and UK Accredited Mediator.</p>
            <p>I have been working for over 10 years with clients in the NHS and in private setting. My training in different therapeutic approaches combined with my clinical experience allows me to offer in-depth assessment of your issues and provide treatment which is most suitable for your particular needs.</p>
          </div>
          <div class="d-flex footer">
            <BookingButton link='/what-to-expect' design="plain">
              Learn more about my work and my qualifications
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                <path fill="currentColor" fill-rule="evenodd" d="M9.854 3.146L14.207 7.5l-4.353 4.354l-.708-.708L12.293 8H1V7h11.293L9.146 3.854z" clip-rule="evenodd" />
              </svg>
            </BookingButton>
            <BookingButton link='/contact' design="plain">
              Book appointment with me
              <ArrowRight />
            </BookingButton>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2>Success stories:</h2>

        <BCarousel
          id="testimonials-carousel"
          :interval="8000"
          controls
          indicators
          ride="carousel"
          background="transparent"
        >
          <BCarouselSlide v-for="(testimonial, index) in testimonials" :key="index" img-blank>
            <slide :testimonial="testimonial" />
          </BCarouselSlide>
        </BCarousel>

      </b-col>
    </b-row>
  </main>
</template>

<script>
import slide from '~/components/slide.vue'
import dataMixin from '@/content/dataMixin.js'

import ArrowRight from '../assets/icons/arrow-right.svg?component'

export default {
  components: {
    slide
  },
  mixins: [dataMixin]
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