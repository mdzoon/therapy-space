<template>
    <div>
        <div id="indicator" :class="{ isLoading: loading }" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
    const nuxtApp = useNuxtApp();
    const loading = ref(true);
    nuxtApp.hook("page:start", () => {
        loading.value = true;
    });
    nuxtApp.hook("page:finish", () => {
        setTimeout(() => {
            loading.value = false;
        }, 200);
    });
</script>


<style>
#indicator {
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    pointer-events: none;
    width: auto;
    height: 3px;
    opacity: 0;
    background: rgba(255, 113, 205, 0.5);
    transform: scaleX(0);
    transform-origin: left center 0px;
    transition: transform 0.1s ease 0s, height 0.4s ease 0s, opacity 0.4s ease 0s;
    z-index: 999999;
}
#indicator.isLoading {
    opacity: 1;
    transform: scaleX(1);
}
</style>
