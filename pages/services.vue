<template>
  <main>
    <div class="background-holder-left"></div>
    <service v-for="service in services" :key="service.id" :service="service" />
  </main>
</template>

<script>
import treatmentsMixin from '@/content/servicesMixin.js'
import service from '@/components/service.vue'

export default {
  components: {
    service
  },
  mixins: [treatmentsMixin],
  // mounted () {
  //   const anchor = document.getElementById(window.location.hash)
  //   anchor.scrollIntoView(window.location.hash)
  // }
  mounted() {
    const el = document.querySelector('body')
    const classes = el.classList
    classes.remove("hideOverflow")    
  }
}
</script>

<style scoped>

</style>
