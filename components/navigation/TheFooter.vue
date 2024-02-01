<template>
  <footer class="footer-wrapper">
    <div class="page-break"></div>
    <b-container>
      <b-row class="mt-5 mb-3">
        <b-col md="6" class="d-flex flex-column justify-content-between col-left">
          <nav class="nav d-flex d-md-none justify-content-center">
            <NuxtLink to="/">About Me</NuxtLink>
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
            Created by <a href="https://www.michaeldyczkowski.co.uk" target="_blank">Michael Dyczkowski</a>
          </div>          
        </b-col>
        <b-col md="6" class="col-right d-flex flex-column justify-content-between">
          <nav class="nav d-none d-md-flex justify-content-center">
            <NuxtLink to="/">About Me</NuxtLink>
            <NuxtLink to="/cookies-policy">Cookies Policy</NuxtLink>
          </nav>
          <div class="logo-wrapper">
            <a href="https://www.bacp.co.uk" target="_blank"><img src="~/assets/images/BACP-logo.svg" alt="British Association for Counselling and Psychotherapy Logo"></a>          
            <a href="https://babcp.com" target="_blank"><img src="~/assets/images/BABCP-logo.svg" alt="British Association for Behavioural and Cognitive Psychotherapies Logo"></a>
          </div>
          <div class="footer-credits">
            <div class="text-center">
              Copyright &copy; {{ currentYear }} Therapy Space
            </div>
            <div class="d-md-none text-center">
              Created by <a href="https://www.michaeldyczkowski.co.uk" target="_blank">Michael Dyczkowski</a>
            </div>
          </div>                 
        </b-col>        
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer-wrapper {
  /* ff 3.6+ */
  background:-moz-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%); 
  /* safari 5.1+,chrome 10+ */
  background:-webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  /* opera 11.10+ */
  background:-o-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#FFFFFF', GradientType=1 );
  /* ie 10+ */
  background:-ms-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  /* global 94%+ browsers support */
  background:linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  padding-bottom: 1px;
}
.footer-wrapper a {
  color: var(--colour-font);
  text-decoration: none;
}
.footer-wrapper a:hover {
  color: var(--colour-link-hover);
}
.footer-wrapper > div > div.row {
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

.col-left > *,
.col-right > * {
  margin-bottom: 1.5rem;
}

nav.nav {
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.logo-wrapper, .copyright-wrapper {
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.logo-wrapper img {
  margin-bottom: 1.5rem;
}
.logo-wrapper img {
  height: 5rem;
  opacity: 0.65;
}

.col-left > *,
.footer-credits > *  {
  font-size: smaller;
  margin: 0;
}
.footer-credits > div:first-child {
  margin-bottom: .5rem;
}
@media only screen and (min-width: 768px) {
  .footer-credits {
    margin-bottom: 0;
  }
  .footer-credits > div:first-child {
    margin-bottom: 0;
  }
}
</style>
