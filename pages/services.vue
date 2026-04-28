<template>
    <main>
        <div class="background-holder-left"/>
        <ServiceCard v-for="service in services" :key="service.id" :service="service" />
    </main>
</template>

<script>
import dataMixin from '@/mixins/dataMixin.js'
import ServiceCard from '@/components/ServiceCard.vue'

export default {
    components: {
        ServiceCard
    },
    mixins: [dataMixin],
    mounted() {
        const el = document.querySelector('body')
        const classes = el.classList
        classes.remove("hideOverflow")    
    }
}
</script>

<style scoped>

</style>
