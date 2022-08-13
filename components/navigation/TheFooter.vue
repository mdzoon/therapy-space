<template>
  <footer class="footer-wrapper">
    <div class="page-break"></div>
    <b-container>
      <b-row class="my-5">
        <b-col md="6">
          <nav class="nav flex-column">
            <NuxtLink to="/">About Me</NuxtLink>
            <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
            <NuxtLink to="/cookies-policy">Cookies Policy</NuxtLink>
          </nav>          
        </b-col>
        <div class="col-md-6 text-right logo-wrapper">
          <a href="https://www.bacp.co.uk" target="_blank"><img src="~/assets/images/BACP-logo.svg" alt="British Association for Counselling and Psychotherapy Logo"></a>          
          <a href="https://babcp.com" target="_blank"><img src="~/assets/images/BABCP-logo.svg" alt="British Association for Behavioural and Cognitive Psychotherapies Logo"></a>
        </div>
      </b-row>
      <b-row class="my-5">
        <b-col cols="12" class="text-center footer-advice">
          <p>If you are feeling unsafe, or need immediate support, you are advised to contact:</p>
          <p>Your GP surgery, Out of Hours GP: 111, in case of emergency your local A&E</p>
          <p>Mental Health Matters  helpline: 08001070160</p>
          <p>Samaritans helpline : 08457909090 </p>
        </b-col>
      </b-row>
      <b-row class="my-5 copyright-wrapper">
        <b-col md="6">
          Copyright &copy; {{ currentYear }} Therapy Space
        </b-col>
        <b-col md="6">
          Created by <a href="https://www.michaeldyczkowski.co.uk" target="_blank">Michael Dyczkowski</a>
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
}
.footer-wrapper a:hover {
  color: var(--colour-link-hover);
  text-decoration: none;
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
.logo-wrapper, .copyright-wrapper {
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.logo-wrapper img {
  height: 5rem;
  opacity: 0.65;
}
.footer-advice {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.footer-advice p {
  font-size: smaller;
  margin-bottom: 0.15rem;
}
.copyright-wrapper > div {
  text-align: center;
}
@media only screen and (max-width: 400px) {
  .copyright-wrapper {
    padding-bottom: 2rem;
  }
}
@media only screen and (max-width: 767px) {
  nav.nav.flex-column {
    align-items: center;
    padding-bottom: 4rem;
  }
}
@media only screen and (min-width: 768px) {
  .footer-wrapper > div.container {
    padding-top: 2rem;
  }
}
</style>
