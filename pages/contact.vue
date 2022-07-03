<template>
  <main>
    <h1>Contact Us</h1>
    <b-container>
      <b-row>
        <b-col lg="6" class="left">
          <div class="column-contact">
            <h2>Get In Touch</h2>
            <ContactForm />
          </div>
        </b-col>
        <b-col lg="6" class="right">
          <div class="column-address">
            <h2>Address Details</h2>
            <div>Get in touch by filling out our contact form, or by using the details provided below.</div>
            <ul>
              <li>
                <a href="tel:7970014122">
                  <b-icon icon="telephone"></b-icon>
                  <div>(+44) 7970014122</div>
                </a>
              </li>
              <li>
                <a href="mailto:grazyna@thinkcbt.com">
                  <b-icon icon="envelope"></b-icon>           
                  <div>grazyna@thinkcbt.com</div>
                </a>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import ContactForm from '@/components/utilities/ContactForm.vue'

export default {
  name: "Contact",
  components: {
    ContactForm
  }
}
</script>

<style scoped>
.column-address ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
}
.column-address ul li a {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: .5rem;
  padding-bottom: .5rem;
}
.column-address ul li a svg {
  margin-right: 1rem;
}
@media only screen and (max-width: 991px) {
  .column-contact,
  .column-address {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>