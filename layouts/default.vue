<template>
  <div>
    <TheHeader />

    <div style="height:8rem;" />

    <nuxt />

    <ScrollTo />

    <CookiesModal />

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader.vue'
import ScrollTo from '@/components/utilities/ScrollTo.vue'
import CookiesModal from '@/components/utilities/CookiesModal.vue'
import TheFooter from '@/components/navigation/TheFooter.vue'

export default {
  components: {
    TheHeader,
    ScrollTo,
    CookiesModal,
    TheFooter
  }
}
</script>

<style>

</style>
