<template>
  <b-container>
    <b-row>
      <b-col sm="6" class="left">
        <div class="contact-box p-4">
          <div class="contact-header mb-3">
            <h1>Contact Me</h1>
            <div class="contact-header-email">
              grazyna@thinkcbt.com
            </div>
          </div>
          <div class="contact-body">
            <b-form
              v-if="show"
              name="contact"
              netlify-honeypot="input-phone"
              action="/thank-you"
              method="post"
              netlify
              @submit.prevent="onSubmit"
              @reset="onReset"
            >
              <b-row>
                <input type="hidden" name="form-name" value="contact">
                <b-col cols="6">
                  <b-form-group id="input-group-name" label="" label-for="input-name">
                    <b-form-input
                      id="input-name"
                      v-model="form.name"
                      placeholder="Name"
                      required
                    />
                  </b-form-group>
                </b-col>
                <b-col style="display:none;" cols="6">
                  <b-form-group id="input-group-phone" label="" label-for="input-phone">
                    <b-form-input
                      id="input-phone"
                      v-model="form.phone"
                      type="phone"
                      name="input-phone"
                    />
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group id="input-group-email" label="" label-for="input-email">
                    <b-form-input
                      id="input-email"
                      v-model="form.email"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-group id="input-group-subject" label="" label-for="input-subject">
                <b-form-input
                  id="input-subject"
                  v-model="form.subject"
                  placeholder="Subject"
                  required
                />
              </b-form-group>

              <div class="contact-textarea-wrapper">
                <b-form-textarea
                  id="contact-textarea"
                  v-model="form.message"
                  placeholder="Type your message here..."
                  rows="3"
                  max-rows="6"
                />
              </div>

              <b-button type="submit" variant="primary">
                Submit
              </b-button>
              <b-button type="reset" variant="danger">
                Reset
              </b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
            </b-card>
          </div>
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
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        phone: '',
        subject: '',
        message: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.subject = ''
      this.form.message = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
