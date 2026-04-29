<template>
    <footer class="footer-wrapper">
        <div class="page-break"/>
        <BContainer>
            <BRow class="mt-5 mb-3">
                <BCol md="6" class="d-flex flex-column justify-content-between col-left">
                    <nav class="nav d-flex d-md-none justify-content-center">
                        <NuxtLink to="/">About Me</NuxtLink>
                        <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
                        <NuxtLink to="/cookies-policy">Cookies Policy</NuxtLink>
                    </nav>
                    <div class="footer-advice text-center">
                        <p>If you are feeling unsafe, or need immediate support, you are advised to contact: Your GP surgery, Out of Hours GP: 111, in case of emergency your local A&E</p>
                        <p>Mental Health Matters  helpline: 08001070160</p>
                        <p>Samaritans helpline : 08457909090 </p>
                    </div>
                    <!--<div class="footer-advice text-center">
                        <p>This is to inform that Grazyna has suddenly become incapacitated and is not able to respond to any queries. Should you need to find any information regarding your past or current treatment please contact Lynne Bennet via e-mail spaceforchange@protonmail.com</p>
                    </div> -->
                    <div class="d-none d-md-block text-center">
                      <small>Created by <a href="https://www.michaeldyczkowski.co.uk" target="_blank">Michael Dyczkowski</a></small>
                    </div>          
                </BCol>
                <BCol md="6" class="col-right d-flex flex-column justify-content-between">
                    <nav class="nav d-none d-md-flex justify-content-center">
                        <NuxtLink to="/">About Me</NuxtLink>
                        <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
                        <NuxtLink to="/cookies-policy">Cookies Policy</NuxtLink>
                    </nav>
                    <div class="logo-wrapper">
                        <a href="https://www.bacp.co.uk" target="_blank">
                            <img src="~/assets/images/BACP-logo.svg" alt="British Association for Counselling and Psychotherapy Logo" width="600" height="268">
                        </a>          
                        <a href="https://babcp.com" target="_blank">
                            <img src="~/assets/images/BABCP-logo.svg" alt="British Association for Behavioural and Cognitive Psychotherapies Logo" width="600" height="600">
                        </a>
                    </div>
                    <div class="footer-credits">
                        <div class="text-center">
                            <small>Copyright &copy; {{ currentYear }} Therapy Space</small>
                        </div>
                        <div class="d-md-none text-center">
                            <small>Created by <a href="https://www.michaeldyczkowski.co.uk" target="_blank">
                                Michael Dyczkowski</a>
                            </small>
                        </div>
                    </div>                 
                </BCol>        
            </BRow>
        </BContainer>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer-wrapper {
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    padding-bottom: 1px;

    a {
        color: var(--colour-link);
        text-decoration: none;

        &:hover {
            color: var(--colour-link-hover);
        }
    }

    > div > div.row {
        flex-direction: row-reverse;
    }

    .page-break {
        margin-top: 2rem;
        margin-bottom: 2rem;
        height: 0.25em;
        background-image: url('~/assets/images/page-break.svg');
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.5;
    }

    .col-left,
    .col-right {
        margin-bottom: 1.5rem;
    }

    .col-right > * {
        margin-bottom: 1.5rem;
    }

    .col-left > *,
    .footer-credits > * {
        font-size: smaller;
        margin: 0;
    }

    nav.nav {
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .logo-wrapper {
        display: flex;
        justify-content: space-around;
        align-content: center;
    }

    .logo-wrapper img {
        height: 5rem;
        width: auto;
        opacity: 0.65;
        margin-bottom: 1.5rem;
    }

    .footer-credits {
        > div:first-child {
            margin-bottom: .5rem;
        }

        @media only screen and (min-width: 768px) {
            margin-bottom: 0;

            > div:first-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>
