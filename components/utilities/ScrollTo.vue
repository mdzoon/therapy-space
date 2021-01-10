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
      <i class="material-icons-outlined md-36">expand_less</i>
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
