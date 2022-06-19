<template>
  <b-container>
    <b-row>
      <b-col sm="6" class="left">
        <div class="contact-box p-4">
          <ContactForm />
        </div>
      </b-col>
      <b-col sm="6" class="right">
        <div class="address-box p-4">
          <h1>Add the address here</h1>
        </div>
      </b-col>
    </b-row>
  </b-container>
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
