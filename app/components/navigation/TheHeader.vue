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

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const navOpen = ref(false)
const dropdownOpen = ref(false)

watch(navOpen, (open) => {
    document.body.classList.toggle('hideOverflow', open)
})

function onScroll () {
    const scrolled = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    document.querySelector('.navbar').classList.toggle('on-scroll', scrolled)
}

function closeMenu () {
    navOpen.value = false
}

function closeDropdown () {
    navOpen.value = false
    dropdownOpen.value = false
}

onMounted(() => {
    document.body.classList.remove('hideOverflow')
    window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss">
.navbar {
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 40%, rgba(255, 255, 255, 0.9) 60%, rgba(255, 255, 255, 0) 100%);
    min-height: 8rem;
    font-weight: bolder;

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

        img {
            height: 4.5rem;

            @media only screen and (max-width: 400px) {
                height: 4rem;
            }
        }

        &.font-secondary {
            @media only screen and (max-width: 400px) {
                font-size: 1rem;
            }

            @media only screen and (min-width: 576px) {
                font-size: 2.5rem;
            }
        }
    }

    .navbar-toggler {
        padding: 0.5rem;
        border: none;
        position: relative;

        &:focus {
            box-shadow: none;
        }

        img {
            position: absolute;
            top: -0.75rem;
            right: -0.75rem;
            width: auto;
            height: 2.5rem !important;
            transition: all var(--transition);

            &.listNav {
                opacity: 1;
                transform: rotate(0deg);
            }

            &.closeNav {
                opacity: 0;
                transform: rotate(45deg);
            }
        }

        &.not-collapsed img {
            &.listNav {
                opacity: 0;
                transform: rotate(45deg);
            }

            &.closeNav {
                opacity: 1;
                transform: rotate(0deg);
            }
        }
    }

    .navbar-nav {

        @media only screen and (max-width: 991px) {
            background-color: var(--colour-background);
        }

        .nav-item {
            a,
            button {
                color: var(--colour-link);

                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                    font-size: smaller;
                }

                &:hover,
                &:focus,
                &:active {
                    color: var(--colour-link-hover);
                }
                &:active {
                    background-color: var(--colour-background);
                }                
            }

            .dropdown-toggle::after {
                transition: all var(--transition);
                transform: rotate(0deg);
            }

            .dropdown-toggle.show::after {
                transform: rotate(180deg);
            }
        }

        .dropdown-menu {
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

            &.show {
                opacity: 1;
                pointer-events: auto;
            }

            .dropdown-item {
                padding-top: .75rem;
                padding-bottom: .75rem;

                &:hover {
                    border-left: 4px solid var(--colour-link-hover);
                    padding-left: calc(var(--bs-dropdown-item-padding-x) - 4px);
                    background-color: var(--colour-background);
                }
            }
        }
    }

    &.on-scroll {
        border-bottom: solid 1px var(--veryLight-grayscale);
    }

    @media only screen and (max-width: 991px) {
        display: block;

        .navbar-nav {
            margin: 0;
            padding: 1.5rem 0 0;
            border-radius: 0;
            border: none;

            .dropdown-menu {
                box-shadow: none;
                position: static !important;
                transform: none !important;
                opacity: 1;
                pointer-events: auto;
                max-height: 0;
                overflow: hidden;
                transition: max-height var(--transition);

                &.show {
                    max-height: 600px;
                }
            }

            .nav-link {
                padding-top: 1.5rem;
                padding-bottom: 1.5rem;
            }

            .dropdown-item {
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
        }

        .navbar-overlay {
            background-color: black;
            height: 100vh;
            width: 100vw;
            position: fixed;
            left: 0;
            opacity: 0;
            transition: var(--transition);
        }

        .navbar-collapse {
            &.show {
                height: 86vh;
                overflow: auto;

                .navbar-overlay {
                    opacity: 0.75;
                }
            }

            &.collapsing.show {
                overflow: hidden;
            }
        }
    }
}

@media only screen and (max-width: 991px) {
    ul.dropdown-menu {
        margin: 0;
        padding: 0;
        border-radius: 0;
        border: none;
    }
}

@media only screen and (max-width: 400px) {
    .navbar-toggler-icon {
        width: 1.5em;
        height: 1.5em;
    }
}
</style>
