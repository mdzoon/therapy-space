<template>
  <header class="header-wrapper">
    <b-navbar toggleable="lg" fixed="top" class="container-fluid">
      <div class="container">

        <b-navbar-brand href="/" class="font-secondary">
          <img src="~/assets/images/therapy-space-logo.svg" alt="Therapy Space Logo">
          <span>Therapy Space</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse" />

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/">
              About Me
            </b-nav-item>

            <b-nav-item-dropdown text="How I Can Help" right>
              <b-dropdown-item href="/services/#cbt">
                CBT
              </b-dropdown-item>
              <b-dropdown-item href="/services/#counselling">
                Counselling
              </b-dropdown-item>
              <b-dropdown-item href="/services/#emdr">
                EMDR
              </b-dropdown-item>
              <b-dropdown-item href="/services/#mediation">
                Mediation
              </b-dropdown-item>
              <b-dropdown-item href="/services/#supervision">
                Supervision
              </b-dropdown-item>
              <b-dropdown-item href="/services/#walk-and-talk">
                Walk & Talk
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="/what-to-expect">
              What to Expect
            </b-nav-item>
            <b-nav-item href="/contact">
              Contact
            </b-nav-item>
          </b-navbar-nav>

          <div class="navbar-overlay"></div>

        </b-collapse>

      </div>
    </b-navbar>
  </header>
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
  /* ff 3.6+ */
  background:-moz-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 100%); 
  /* safari 5.1+,chrome 10+ */
  background:-webkit-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 100%);
  /* opera 11.10+ */
  background:-o-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 100%);
  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#FFFFFF', GradientType=1 );
  /* ie 10+ */
  background:-ms-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 100%);
  /* global 94%+ browsers support */
  background:linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 100%);
  min-height: 8rem;
  font-weight: bolder;
}
.navbar .navbar-nav .nav-item a {
  color: var(--colour-link) !important;
}
.navbar .navbar-nav .nav-item:hover a,
.navbar .navbar-nav .nav-item:focus a,
.navbar .navbar-nav .nav-item:active a {
  color: var(--colour-link-hover) !important;
}
.navbar .navbar-nav .nav-item.dropdown a:after {
  transition: all var(--transition);
  transform: rotate(0deg);
}
.navbar .navbar-nav .nav-item.dropdown.show a:after {
  transform: rotate(180deg);
}
.navbar .navbar-nav .dropdown-menu {
  display: block;
  border: none;
  border-radius: 0;
  transition: all var(--transition);
  box-shadow: var(--box-shadow);
  width: 100%;
  margin: 0;
  padding: 0;
  height: 0;
  overflow: hidden;
}
.navbar .navbar-nav .dropdown-menu.show{
  height: 288px;
}

.navbar .navbar-nav .dropdown-menu .dropdown-item {
  padding-top: .75rem;
  padding-bottom: .75rem;
}
.navbar .navbar-nav .dropdown-menu .dropdown-item:hover,
.navbar .navbar-nav .dropdown-menu .dropdown-item:focus,
.navbar .navbar-nav .dropdown-menu .dropdown-item:active {
  border-left: 4px solid var(--colour-link-hover);
  padding-left: calc( 1.5rem - 4px );
}
@media only screen and (max-width: 991px) {
  .navbar {
    display: block;
    background-color: var(--colour-background);
  }
  .navbar .navbar-nav,
  ul.dropdown-menu {
    margin: 0;
    padding: 0;
    border-radius: 0;
    border: none;
  }
  .navbar .navbar-nav {
    padding-top: 1.5rem;
  }
  .navbar .navbar-nav .nav-link {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .navbar .navbar-nav .dropdown-item {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .navbar .navbar-overlay {
    background-color: black;
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    opacity: 0;
    transition: var(--transition);
  }
  .navbar-collapse.show .navbar-overlay {
    opacity: 0.75;
  }
}
.navbar.on-scroll {
  border-bottom: solid 1px var(--veryLight-grayscale);
}
.navbar-brand {
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  font-size: 1.5rem;
  background-image: url("~assets/images/logo-background.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.navbar-brand img {
  height: 4.5rem;
}
.navbar-toggler {
  padding: 0.5rem 0.5rem;
  border: none;
  /* border-radius: 50%; */
}
.navbar-toggler-icon {
  width: 2.5em;
  height: 2.5em;
}
@media only screen and (max-width: 400px) {
  .navbar-brand img {
    height: 4rem;
  }
  .navbar-brand.font-secondary {
    font-size: 1rem;
  }
  .navbar-toggler-icon {
    width: 1.5em;
    height: 1.5em;
  }
}
@media only screen and (min-width: 576px) {
  .navbar-brand.font-secondary {
    font-size: 2.5rem;
  }
}

</style>
