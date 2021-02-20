<template>
  <main>
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
  mounted () {
    const anchor = document.getElementById(window.location.hash)
    anchor.scrollIntoView(window.location.hash)
  }
}
</script>
