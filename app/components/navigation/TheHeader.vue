<template>
    <header class="header-wrapper">
        <BNavbar toggleable="lg" fixed="top">
            <div class="container d-flex flex-wrap align-items-center justify-content-between">

                <BNavbarBrand to="/" class="font-secondary">
                    <img src="~/assets/images/therapy-space-logo.svg" alt="Therapy Space Logo">
                    <span>Therapy Space</span>
                </BNavbarBrand>

                <BNavbarToggle target="nav-text-collapse" :class="{ 'not-collapsed': navOpen }">
                    <img class="listNav" src="~/assets/images/list.svg" >
                    <img class="closeNav" src="~/assets/images/close.svg" >
                </BNavbarToggle>

                <BCollapse id="nav-text-collapse" v-model="navOpen" is-nav>
                    <BNavbarNav class="ms-auto">

                        <li class="nav-item" @click="closeMenu">
                            <NuxtLink to="/" class="nav-link">About Me</NuxtLink>
                        </li>

                        <BNavItemDropdown v-model="dropdownOpen" text="How I Can Help" end>
                            <li role="presentation" @click="closeDropdown">
                                <NuxtLink to="/services/#cbt" role="menuitem" target="_self" class="dropdown-item">CBT</NuxtLink>
                            </li>
                            <li role="presentation" @click="closeDropdown">
                                <NuxtLink to="/services/#counselling" role="menuitem" target="_self" class="dropdown-item">Counselling</NuxtLink>
                            </li>
                            <li role="presentation" @click="closeDropdown">
                                <NuxtLink to="/services/#emdr" role="menuitem" target="_self" class="dropdown-item">EMDR</NuxtLink>
                            </li>
                            <li role="presentation" @click="closeDropdown">
                                <NuxtLink to="/services/#couples-counselling" role="menuitem" target="_self" class="dropdown-item">Couples Counselling</NuxtLink>
                            </li>              
                            <li role="presentation" @click="closeDropdown">
                                <NuxtLink to="/services/#mediation" role="menuitem" target="_self" class="dropdown-item">Mediation</NuxtLink>
                            </li>
                            <li role="presentation" @click="closeDropdown">
                                <NuxtLink to="/services/#walk-and-talk" role="menuitem" target="_self" class="dropdown-item">Walk & Talk</NuxtLink>
                            </li>              
                            <li role="presentation" @click="closeDropdown">
                                <NuxtLink to="/services/#supervision" role="menuitem" target="_self" class="dropdown-item">Supervision</NuxtLink>
                            </li>
                        </BNavItemDropdown>

                        <li class="nav-item" @click="closeMenu">
                            <NuxtLink to="/what-to-expect" class="nav-link">What to Expect</NuxtLink>
                        </li>
                        <li class="nav-item" @click="closeMenu">
                            <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
                        </li>

                    </BNavbarNav>

                    <div class="navbar-overlay"/>

                </BCollapse>

            </div>
        </BNavbar>
    </header>
</template>

<script>
export default {
    data () {
        return {
            navOpen: false,
            dropdownOpen: false
        }
    },
    watch: {
        navOpen (open) {
            document.body.classList.toggle('hideOverflow', open)
        }
    },
    mounted () {
        document.body.classList.remove('hideOverflow')
        window.addEventListener('scroll', this.onScroll)
    },
    beforeUnmount () {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll () {
            const scrolled = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
            document.querySelector('.navbar').classList.toggle('on-scroll', scrolled)
        },
        closeMenu () {
            this.navOpen = false
        },
        closeDropdown () {
            this.navOpen = false
            this.dropdownOpen = false
        }
    }
}
</script>

<style>
.navbar {
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 100%);
    min-height: 8rem;
    font-weight: bolder;
}
.navbar .navbar-nav .nav-item a,
.navbar .navbar-nav .nav-item button {
    color: var(--colour-link) !important;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .navbar .navbar-nav .nav-item a,
    .navbar .navbar-nav .nav-item button {
        font-size: smaller;
    }  
}
.navbar .navbar-nav .nav-item:hover a,
.navbar .navbar-nav .nav-item:focus a,
.navbar .navbar-nav .nav-item:active a,
.navbar .navbar-nav .nav-item:hover button,
.navbar .navbar-nav .nav-item:focus button,
.navbar .navbar-nav .nav-item:active button {
    color: var(--colour-link-hover) !important;
}
.navbar .navbar-nav .nav-item .dropdown-toggle:after {
    transition: all var(--transition);
    transform: rotate(0deg);
}
.navbar .navbar-nav .nav-item .dropdown-toggle.show:after {
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
    min-width: 13.25rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition);
}
.navbar .navbar-nav .dropdown-menu.show {
    opacity: 1;
    pointer-events: auto;
}

.navbar .navbar-nav .dropdown-menu .dropdown-item {
    padding-top: .75rem;
    padding-bottom: .75rem;
}
.navbar .navbar-nav .dropdown-menu .dropdown-item:hover {
    border-left: 4px solid var(--colour-link-hover);
    padding-left: calc( var(--bs-dropdown-item-padding-x) - 4px );
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
        position: static !important;
        transform: none !important;
        opacity: 1;
        pointer-events: auto;
        max-height: 0;
        overflow: hidden;
        transition: max-height var(--transition);
    }
    .navbar .navbar-nav .dropdown-menu.show {
        max-height: 600px;
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
    background-image: url("~/assets/images/logo-background.svg");
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
.navbar-toggler:focus {
    box-shadow: none;
}
.navbar-toggler img {
    position: absolute;
    top: -0.75rem;
    right: -0.75rem;
    width: auto;
    height: 2.5rem !important;
    transition: all var(--transition);
}

.navbar-toggler img.listNav {
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
