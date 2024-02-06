<template>
  <header class="header-wrapper">
    <BNavbar toggleable="lg" fixed="top" class="container">

        <BNavbarBrand href="/" class="font-secondary">
          <img src="/images/therapy-space-logo.svg" alt="Therapy Space Logo">
          <span>Therapy Space</span>
        </BNavbarBrand>

        <BNavbarToggle @click="hideOverflow" target="nav-collapse">
          <listNav class="listNav" />
          <closeNav class="closeNav" />
        </BNavbarToggle>

        <BCollapse id="nav-collapse" is-nav>
          <BNavbarNav class="nav-left">

            <li class="nav-item" @click="clearOverflow"><NuxtLink to="/" class="nav-link">About Me</NuxtLink></li>

            <BNavItemDropdown text="How I Can Help">
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
                    <NuxtLink to="/services/#mediation" role="menuitem" target="_self" class="dropdown-item">Mediation</NuxtLink>
                </li>
                <li role="presentation" @click="[clearOverflow($event), hideDropdown($event)]">
                    <NuxtLink to="/services/#supervision" role="menuitem" target="_self" class="dropdown-item">Supervision</NuxtLink>
                </li>
                <li role="presentation" @click="[clearOverflow($event), hideDropdown($event)]">
                    <NuxtLink to="/services/#walk-and-talk" role="menuitem" target="_self" class="dropdown-item">Walk & Talk</NuxtLink>
                </li>
            </BNavItemDropdown>

            <li class="nav-item" @click="clearOverflow"><NuxtLink to="/what-to-expect" class="nav-link">What to Expect</NuxtLink></li>
            <li class="nav-item" @click="clearOverflow"><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>

          </BNavbarNav>

          <div class="navbar-overlay"></div>

        </BCollapse>

    </BNavbar>
  </header>
</template>

<script setup>

import listNav from '../assets/icons/list.svg?component'
import closeNav from '../assets/icons/close.svg?component'

function onScroll (e) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.navbar').classList.add('on-scroll')
    } else {
    document.querySelector('.navbar').classList.remove('on-scroll')
    }
}

function hideOverflow() {
    console.log('hide ov')
    const elBody = document.querySelector('body')
    const classesBody = elBody.classList
    const elNav = document.querySelector('#nav-text-collapse')
    const classesNav = elNav.classList

    Object.values(classesNav).includes("show") ? classesBody.remove("hideOverflow") : classesBody.add("hideOverflow")
}

function clearOverflow() {
    console.log('clear')
    const el = document.querySelector('body')
    const classes = el.classList
    classes.remove("hideOverflow")      
}

function hideDropdown () {
    console.log('hide DR')
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

// onMounted (() => window.addEventListener('scroll', this.onScroll))
// onBeforeUnmount (() => window.removeEventListener('scroll', this.onScroll))

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
.navbar-nav.nav-left {
    margin-left: auto;
}
.navbar .navbar-nav .nav-item a,
.navbar .navbar-nav .btn-group button {
  color: var(--colour-link) !important;
  font-weight: normal;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .navbar .navbar-nav .nav-item a,
  .navbar .navbar-nav .btn-group button {
    font-size: smaller;
  }  
}
.navbar .navbar-nav .nav-item:hover a,
.navbar .navbar-nav .nav-item:focus a,
.navbar .navbar-nav .nav-item:active a {
    color: var(--colour-link-hover) !important;
}
.navbar .navbar-nav .nav-item.dropdown button:after {
    transition: all var(--transition);
    transform: rotate(0deg);
}
.navbar .navbar-nav .nav-item.dropdown button.show:after {
    transform: rotate(180deg);
}
.navbar .navbar-nav .dropdown-menu {
    display: block;
    border: none;
    border-radius: 0;
    box-shadow: var(--box-shadow);
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    transition: height var(--transition);
    height: 0;
}
.navbar .navbar-nav .dropdown-menu.show {
  height: 288px;
}

.navbar .navbar-nav .dropdown-menu .dropdown-item {
  padding-top: .75rem;
  padding-bottom: .75rem;
}
.navbar .navbar-nav .dropdown-menu .dropdown-item:hover {
  border-left: 4px solid var(--colour-link-hover);
  padding-left: calc( 1rem - 4px );
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
  background-image: url("/images/logo-background.svg");
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
  box-shadow: none !important;
}
.navbar-toggler .listNav,
.navbar-toggler .closeNav {
  position: absolute;
  top: -0.75rem;
  right: -0.75rem;
  width: auto;
  height: 2.5rem;
  transition: all var(--transition);
}

.navbar-toggler.collapsed .listNav {
  opacity: 1;
  transform: rotate(0deg);
}
.navbar-toggler.not-collapsed .listNav {
  opacity: 0;
  transform: rotate(45deg);
}
.navbar-toggler .closeNav {
  opacity: 0;
  transform: rotate(45deg);
}
.navbar-toggler.not-collapsed .closeNav {
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
