<template>
  <div>
    <div id="top" style="display: none;" />
    <a
      id="return-top"
      v-scroll-to="{
        el: '#top',
        x: false,
        y: true
      }"
      href="#"
      :class="{ 'return-top--hidden': hideScrollTo }"
    >
      <b-icon icon="chevron-double-up" font-scale="2" />
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hideScrollTo: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.checkPosition)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.checkPosition)
  },
  methods: {
    checkPosition () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.hideScrollTo = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style scoped>
#return-top {
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  width: 50px;
  height: 50px;
  z-index: 9999;
  border: 1px solid var(--colour-primary);
  border-radius: var(--radius);
  color: var(--colour-primary);
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
#return-top:hover,
#return-top:active,
#return-top:focus {
  text-decoration: none;
}
#return-top.return-top--hidden {
  display: none;
}
</style>
