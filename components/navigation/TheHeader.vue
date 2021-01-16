<template>
  <div class="header-wrapper">
    <b-navbar toggleable="sm" fixed="top" class="container">
      <b-navbar-toggle target="nav-text-collapse" />

      <b-navbar-brand href="/">
        Therapy Space
      </b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">
            Welcome
          </b-nav-item>
          <b-dropdown split split-href="/services" href="/services" text="Services">
            <b-dropdown-item href="/services/consuelling">
              Consuelling
            </b-dropdown-item>
            <b-dropdown-item href="/services/cbt">
              CBT
            </b-dropdown-item>
            <b-dropdown-item href="/services/emdr">
              EMDR
            </b-dropdown-item>
            <b-dropdown-item href="/services/walk-and-talk">
              Walk & Talk
            </b-dropdown-item>
            <b-dropdown-item href="/services/supervision">
              Supervision
            </b-dropdown-item>
          </b-dropdown>
          <b-nav-item href="/what-to-expect">
            What to Expect
          </b-nav-item>
          <b-nav-item href="/contact">
            Contact
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.navbar').classList.add('on-scroll')
      } else {
        document.querySelector('.navbar').classList.remove('on-scroll')
      }
    }
  }
}
</script>

<style>
.navbar.on-scroll {
  border-bottom: solid 1px var(--veryLight-grayscale);
  background-color: rgba(255 ,255 ,255 , 0.9);
}
</style>
