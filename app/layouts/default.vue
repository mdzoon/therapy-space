<template>
    <div>
        <NuxtLoadingIndicator
            color="rgba(255, 113, 205, 0.5)"
            :height="3"
            :throttle="0"
        />

        <TheHeader />

        <div style="height:8rem;" />

        <slot />

        <ScrollTo />

        <CookiesModal />

        <TheFooter />
    </div>
</template>

<script setup>
import CookiesModal from '@/components/utilities/CookiesModal.vue'
import ScrollTo from '@/components/utilities/ScrollTo.vue'
import TheHeader from '@/components/navigation/TheHeader.vue'
import TheFooter from '@/components/navigation/TheFooter.vue'
</script>