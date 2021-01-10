<template>
  <div>
    <nuxt />

    <CookiesModal />

    <TheFooter />
  </div>
</template>

<script>
import CookiesModal from '@/components/utilities/CookiesModal.vue'
import TheFooter from '@/components/navigation/TheFooter.vue'

export default {
  components: {
    // TheHeader,
    // ScrollTo,
    CookiesModal,
    TheFooter
  }
}
</script>
