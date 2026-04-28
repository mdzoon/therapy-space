<template>
    <main>
        <div class="background-holder-left"></div>
        <service v-for="service in services" :key="service.id" :service="service" />
    </main>
</template>

<script>
import dataMixin from '@/mixins/dataMixin.js'
import service from '@/components/service.vue'

export default {
    components: {
        service
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
