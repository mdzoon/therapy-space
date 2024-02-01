<template>
  <main>
    <div class="background-holder-left"></div>
    <service v-for="service in services" :key="service.id" :service="service" />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import service from '@/components/service.vue'
const services = useServices()

onMounted(() => {
    const el = document.querySelector('body')
    const classes = el.classList
    classes.remove("hideOverflow")  
})
</script>