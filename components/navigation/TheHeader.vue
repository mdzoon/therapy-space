<template>
  <div class="header-wrapper">
    <b-navbar toggleable="sm" fixed="top" class="container">
      <b-navbar-toggle target="nav-text-collapse" />

      <b-navbar-brand href="/" class="font-secondary">
        Therapy Space
      </b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">
            Welcome
          </b-nav-item>
          <b-dropdown split split-href="/services" href="/services" text="| Services">
            <b-dropdown-item href="/services/#cbt">
              CBT
            </b-dropdown-item>
            <b-dropdown-item href="/services/#consuelling">
              Consuelling
            </b-dropdown-item>
            <b-dropdown-item href="/services/#emdr">
              EMDR
            </b-dropdown-item>
            <b-dropdown-item href="/services/#supervision">
              Supervision
            </b-dropdown-item>
            <b-dropdown-item href="/services/#walk-and-talk">
              Walk & Talk
            </b-dropdown-item>
          </b-dropdown>
          <b-nav-item href="/what-to-expect">
            | What to Expect
          </b-nav-item>
          <b-nav-item href="/contact">
            | Contact
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
.navbar {
  min-height: 8rem;
  font-weight: bolder;
  /* transition: 500ms cubic-bezier(0.16, 1, 0.29, 0.99); */
  background-color: #fff;
}
.navbar.on-scroll {
  border-bottom: solid 1px var(--veryLight-grayscale);
  background-color: rgba(255 ,255 ,255 , 0.9);
  /* min-height: 5rem; */
}
.navbar-brand.font-secondary {
  letter-spacing: 3px;
  font-size: 1.5rem;
}
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:active,
.btn-secondary:focus,
.show > .btn-secondary.dropdown-toggle {
  color: initial;
  background-color: initial;
  border: none;
  padding: .5rem 1rem;
}
.navbar-toggler {
  padding: 0.5rem 0.5rem;
  border-radius: 50%;
}
@media only screen and (min-width: 576px) {
  .navbar-brand.font-secondary {
    font-size: 2.5rem;
  }
}

</style>
