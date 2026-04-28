<template>
  <header class="header-wrapper">
    <b-navbar toggleable="lg" fixed="top" class="container-fluid">
      <div class="container">

        <b-navbar-brand href="/" class="font-secondary">
          <img src="~/assets/images/therapy-space-logo.svg" alt="Therapy Space Logo">
          <span>Therapy Space</span>
        </b-navbar-brand>

        <b-navbar-toggle @click="hideOverflow" target="nav-text-collapse">
          <img class="listNav" src="~/assets/images/list.svg" />
          <img class="closeNav" src="~/assets/images/close.svg" />
        </b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="ml-auto">

            <li class="nav-item" @click="clearOverflow"><NuxtLink to="/" class="nav-link">About Me</NuxtLink></li>

            <b-nav-item-dropdown text="How I Can Help" right>
              <li role="presentation" @click="[clearOverflow($event), hideDropdown($event)]">
                <NuxtLink to="/services/#cbt" role="menuitem" target="_self" class="dropdown-item">CBT</NuxtLink>
              </li>
              <li role="presentation" @click="[clearOverflow($event), hideDropdown($event)]">
                <NuxtLink to="/services/#counselling" role="menuitem" target="_self" class="dropdown-item">Counselling</NuxtLink>
              </li>
              <li role="presentation" @click="[clearOverflow($event), hideDropdown($event)]">
                <NuxtLink to="/services/#emdr" role="menuitem" target="_self" class="dropdown-item">EMDR</NuxtLink>
              </li>
              <li role="presentation" @click="[clearOverflow($event), hideDropdown($event)]">
                <NuxtLink to="/services/#couples-counselling" role="menuitem" target="_self" class="dropdown-item">Couples Counselling</NuxtLink>
              </li>              
              <li role="presentation" @click="[clearOverflow($event), hideDropdown($event)]">
                <NuxtLink to="/services/#mediation" role="menuitem" target="_self" class="dropdown-item">Mediation</NuxtLink>
              </li>
              <li role="presentation" @click="[clearOverflow($event), hideDropdown($event)]">
                <NuxtLink to="/services/#walk-and-talk" role="menuitem" target="_self" class="dropdown-item">Walk & Talk</NuxtLink>
              </li>              
              <li role="presentation" @click="[clearOverflow($event), hideDropdown($event)]">
                <NuxtLink to="/services/#supervision" role="menuitem" target="_self" class="dropdown-item">Supervision</NuxtLink>
              </li>
            </b-nav-item-dropdown>

            <li class="nav-item" @click="clearOverflow"><NuxtLink to="/what-to-expect" class="nav-link">What to Expect</NuxtLink></li>
            <li class="nav-item" @click="clearOverflow"><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>

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
    },
    hideOverflow() {
      const elBody = document.querySelector('body')
      const classesBody = elBody.classList
      const elNav = document.querySelector('#nav-text-collapse')
      const classesNav = elNav.classList

      Object.values(classesNav).includes("show") ? classesBody.remove("hideOverflow") : classesBody.add("hideOverflow")
    },
    clearOverflow() {
      const el = document.querySelector('body')
      const classes = el.classList
      classes.remove("hideOverflow")      
    },
    hideDropdown() {
      const elNav = document.querySelector('.nav-item.b-nav-dropdown.dropdown')
      const classesNav = elNav.classList
      const a = document.querySelector('a.dropdown-toggle')
      const elMenu = document.querySelector('.dropdown-menu')
      const classesMenu = elMenu.classList
      if ( Object.values(classesNav).includes("show") ) {
        a.setAttribute("aria-expanded", "false")
        classesNav.remove("show")
        classesMenu.remove("show")
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
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .navbar .navbar-nav .nav-item a {
    font-size: smaller;
  }  
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
  min-width: 13.25rem;
}
.navbar .navbar-nav .dropdown-menu.show{
  height: auto;
}

.navbar .navbar-nav .dropdown-menu .dropdown-item {
  padding-top: .75rem;
  padding-bottom: .75rem;
}
.navbar .navbar-nav .dropdown-menu .dropdown-item:hover {
  border-left: 4px solid var(--colour-link-hover);
  padding-left: calc( 1.5rem - 4px );
  background-color: var(--colour-background);
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

  .navbar .navbar-nav .dropdown-menu {
    box-shadow: none;
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
  .navbar-collapse.show {
    height: 86vh;
    overflow: auto;
  }
  .navbar-collapse.collapsing.show {
    overflow: hidden;
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
  position: relative;
}
.navbar-toggler img {
  position: absolute;
  top: -0.75rem;
  right: -0.75rem;
  width: auto;
  height: 2.5rem !important;
  transition: all var(--transition);
}

.navbar-toggler.collapsed img.listNav {
  opacity: 1;
  transform: rotate(0deg);
}
.navbar-toggler.not-collapsed img.listNav {
  opacity: 0;
  transform: rotate(45deg);
}
.navbar-toggler img.closeNav {
  opacity: 0;
  transform: rotate(45deg);
}
.navbar-toggler.not-collapsed img.closeNav {
  opacity: 1;
  transform: rotate(0deg);
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
