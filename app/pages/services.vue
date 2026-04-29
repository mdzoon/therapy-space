<template>
    <main>
        <div class="background-holder-left"/>
        <ServiceCard v-for="service in services" :key="service.id" :service="service" />
    </main>
</template>

<script>
import { services } from '@/data/services.js'
import ServiceCard from '@/components/ServiceCard.vue'

export default {
    components: {
        ServiceCard
    },
    data () {
        return {
            services
        }
    }
}
</script>