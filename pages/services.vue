<template>
  <main class="container">
    <h1>This is services page</h1>
    <service v-for="service in services" :key="service.name" :service="service" />
  </main>
</template>

<script>
import treatmentsMixin from '@/assets/data/servicesMixin.js'
import service from '@/components/service.vue'

export default {
  components: {
    service
  },
  mixins: [treatmentsMixin]
}
</script>
