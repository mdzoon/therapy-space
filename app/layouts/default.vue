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

        <!-- <CookiesModal /> -->

        <TheFooter />
    </div>
</template>

<script setup>
import TheHeader from '@/components/navigation/TheHeader.vue'
import ScrollTo from '@/components/utilities/ScrollTo.vue'
import TheFooter from '@/components/navigation/TheFooter.vue'
</script>