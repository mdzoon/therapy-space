<template>
  <div class="container service-wrapper">
    <div class="mb-5 mt-5 therapy-card">
      <div :id="service.id" class="anchor"></div>
      <div :class="['container-' + service.id]" class="therapy-header w-100">
        <h3>{{ service.name }}</h3>
      </div>
      <div class="therapy-body">
        <div v-html="service.content"></div>
        <div class="testimonial" v-if="service.testimonial">
          <b>Success story: </b>
          <q><i>{{ service.testimonial.content }}</i></q>
          <i> {{ service.testimonial.author }}</i>
        </div>
      </div>
      <BookingButton link='/contact' design="boxed">Ask me about <span>{{service.id.replace(/-/g, ' ')}}</span></BookingButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      default () {
        return { id: 'Service', name: 'Therapy Name', content: 'Therapy Description' }
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.service-wrapper:nth-of-type(2n+1) {
  text-align: left;
  border-left: 5px solid;
  border-color: var(--colour-primary);
  /* box-shadow: var(--box-shadow, var(--webkit-box-shadow)); */
  border-radius: var(--radius-small);
  /* ff 3.6+ */
  background:-moz-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%); 
  /* safari 5.1+,chrome 10+ */
  background:-webkit-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
  /* opera 11.10+ */
  background:-o-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#FFFFFF', GradientType=0 );
  /* ie 10+ */
  background:-ms-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
  /* global 94%+ browsers support */
  background:linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
}
.service-wrapper:nth-of-type(2n) {
  text-align: right;
  border-right: 5px solid;
  border-color: var(--colour-secondary);
  /* box-shadow: var(--box-shadow, var(--webkit-box-shadow)); */
  border-radius: var(--radius-small);
  /* ff 3.6+ */
  background:-moz-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%); 
  /* safari 5.1+,chrome 10+ */
  background:-webkit-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
  /* opera 11.10+ */
  background:-o-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#FFFFFF', GradientType=0 );
  /* ie 10+ */
  background:-ms-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
  /* global 94%+ browsers support */
  background:linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
}
.service-wrapper h3 {
  letter-spacing: 8px;
  font-size: 1.75rem;
}
.service-wrapper:nth-of-type(2n+1) h3 {
  text-align: left;
}
.service-wrapper:nth-of-type(2n) h3 {
  text-align: right;
}

@media only screen and (max-width: 499px) {
  .therapy-card :deep(button) {
    width: 100%;
  }
}

.therapy-card {
  padding-top: 5em;
  padding-bottom: 5em;
  /* ff 3.6+ */
  background:-moz-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.07) 69%, rgba(238, 130, 238, 0) 100%);
  /* safari 5.1+,chrome 10+ */
  background:-webkit-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.07) 69%, rgba(238, 130, 238, 0) 100%);
  /* opera 11.10+ */
  background:-o-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.07) 69%, rgba(238, 130, 238, 0) 100%);
  /* ie 10+ */
  background:-ms-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.07) 69%, rgba(238, 130, 238, 0) 100%);
  /* global 92%+ browsers support */
  background:radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.07) 69%, rgba(238, 130, 238, 0) 100%);
}

.therapy-card .anchor {
  display: block;
  position: relative;
  top: -150px;
  visibility: hidden;  
}

.therapy-card .therapy-body {
  margin-top: 5em;
  margin-bottom: 5em;
}
.therapy-card .therapy-body .testimonial {
  margin-top: 3em;
  font-size: smaller;
}

.therapy-card .therapy-body :deep(p) {
  margin-top: 3em;
}
.therapy-card .therapy-body :deep(a) {
  margin: auto;
}
.therapy-card .therapy-body :deep(ul) {
  list-style-type: none;
  text-align: justify;
  padding: 0 10% 0;
}
@media only screen and (min-width: 992px) {
  .therapy-card .therapy-body :deep(ul) {
    text-align: inherit;
    padding: 0;
  } 
}

@media only screen and (max-width: 575px) {
  .therapy-card {
    padding-top: 2em;
    padding-bottom: 2em;
  }
  .therapy-card .therapy-header h3 {
    letter-spacing: 6px;
    font-size: 1.5rem;
  }
  .therapy-card .therapy-body {
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .therapy-card .therapy-body {
    font-size: 1rem;
  }  
}
@media only screen and (min-width: 576px) {
  .service-wrapper:nth-of-type(2n+1) {
    /* ff 3.6+ */
    background:-moz-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%); 
    /* safari 5.1+,chrome 10+ */
    background:-webkit-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
    /* opera 11.10+ */
    background:-o-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#FFFFFF', GradientType=0 );
    /* ie 10+ */
    background:-ms-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
    /* global 94%+ browsers support */
    background:linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
  }
  .service-wrapper:nth-of-type(2n) {
    /* ff 3.6+ */
    background:-moz-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%); 
    /* safari 5.1+,chrome 10+ */
    background:-webkit-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
    /* opera 11.10+ */
    background:-o-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#FFFFFF', GradientType=0 );
    /* ie 10+ */
    background:-ms-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
    /* global 94%+ browsers support */
    background:linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
  }
}
@media only screen and (min-width: 768px) {
  .service-wrapper:nth-of-type(2n+1) {
    padding-left: 2rem;
    /* ff 3.6+ */
    background:-moz-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%); 
    /* safari 5.1+,chrome 10+ */
    background:-webkit-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%);
    /* opera 11.10+ */
    background:-o-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%);
    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EE82EE', endColorstr='#FFFFFF', GradientType=0 );
    /* ie 10+ */
    background:-ms-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%);
    /* global 94%+ browsers support */
    background:linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%);    
  }
  .service-wrapper:nth-of-type(2n) {
    padding-right: 2rem;
    /* ff 3.6+ */
    background:-moz-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%); 
    /* safari 5.1+,chrome 10+ */
    background:-webkit-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%);
    /* opera 11.10+ */
    background:-o-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%);
    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#EE82EE', GradientType=0 );
    /* ie 10+ */
    background:-ms-linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%);
    /* global 94%+ browsers support */
    background:linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 25%, rgba(238, 130, 238, 0) 100%);    
  }  
}
</style>
