<template>
  <div class="form-container">

    <b-form 
      class="gform"
      @submit="onSubmit"
      @reset="onReset"
      v-if="formVisible"
    >
      <div class="contact-form-elements">
        <b-form-group
          id="input-group-name"
          label-for="name"
          :class="{invalid: formSubmitted && v$.form.name.$invalid}"
        >
          <b-form-input
            id="name"
            v-model="v$.form.name.$model"
            name="name"
            placeholder="Name*"
            aria-describedby=""
          ></b-form-input>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !v$.form.name.required">
            This field should not be empty
          </p>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !v$.form.name.minLength">
            Your name must contain at least {{v$.form.name.$params.minLength.min}} letters.
          </p>
        </b-form-group>

        <b-form-group
          id="input-group-email"
          label-for="email"
          :class="{invalid: formSubmitted && v$.form.email.$invalid}"
        >
          <b-form-input
            id="email"
            v-model="v$.form.email.$model"
            name="email"
            placeholder="Email*"
          ></b-form-input>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !v$.form.email.required">
            This field should not be empty
          </p>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !v$.form.email.email">
            Please provide valid email
          </p>
        </b-form-group>

        <b-form-group
          id="input-group-phone"
          label-for="phone"
          :class="{invalid: formSubmitted && v$.form.phone.$invalid}"
        >
          <b-form-input
            id="phone"
            v-model="v$.form.phone.$model"
            name="phone"
            placeholder="Phone"
          ></b-form-input>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !v$.form.phone.numeric">
            Please enter only numbers
          </p>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !v$.form.phone.minLength">
            The phone number must be at least 10 digit long.
          </p>
        </b-form-group>

        <b-form-group
          id="input-group-message"
          label-for="message"
          :class="{invalid: formSubmitted && v$.form.message.$invalid}"
        >
          <b-form-textarea
            id="message"
            v-model="v$.form.message.$model"
            name="message"
            placeholder="Type your message here"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !v$.form.message.required">
            This field should not be empty
          </p>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !v$.form.message.minLength">
            This message must have at least {{v$.form.message.$params.minLength.min}} characters.
          </p>
        </b-form-group>

        <b-form-group
          id="input-group-address"
          label-for="address"
          class="address"
        >
          <b-form-input
            id="address"
            v-model="address"
            name="address"
            placeholder="Your address"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-consent"
        >
          <b-form-checkbox
            id="consent"
            v-model="v$.form.consent.$model"
            name="consent"
            :class="{invalid: formSubmitted && v$.form.consent.$invalid}"
            switch
          >
          <label class="consent" for="consent">* I take your privacy seriously. To find out more please visit <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink> page.</label>
          </b-form-checkbox>
        </b-form-group>
        <p class="alert-danger mt-1 consent" role="alert" v-if="formSubmitted && !v$.form.consent.$model">
          Please confirm you want me to contact you
        </p>

        <div class="buttons-wrapper">
          <b-button variant="outline-dark" type="submit">
            Submit <b-icon icon="envelope"></b-icon>
          </b-button>
          <b-button variant="outline-dark" type="reset">
            Reset <b-icon icon="arrow-counterclockwise"></b-icon>
          </b-button>
        </div>

      </div>
    </b-form>

    <div class="response-container mt-3">
      <h3 v-if="submitStatus === 'OK'">Thank you for contacting me. I will get back to you soon.</h3>
      <p class="alert-danger" role="alert" v-if="submitStatus === 'ERROR'">Something gone wrong. Please contact website administrator</p>
      <p class="alert-info" role="alert" v-if="submitStatus === 'PENDING'">Sending...</p>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email, numeric } from '@vuelidate/validators'

export default {
  name: 'ContactForm',
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false
      },

      address: '',
      submitStatus: '',
      formSubmitted: false,
      formVisible: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.v$.form.$touch()
      

      if (this.v$.form.$invalid || !this.v$.form.consent.$model) {

        this.formSubmitted = true

      } else {

        this.submitStatus = 'PENDING'

        if (this.address) {
          return false;
        }

        const url = 'https://formspree.io/f/mdojnvaj'
        const that  = this

        this.$axios.post(url, {
          'Sender Name': that.form.name,
          'Email': that.form.email,
          'Phone': that.form.phone,
          'Consent': that.form.consent,
          'Message': that.form.message
        })
        .then(function (response) {
          if (response) {

            that.submitStatus = 'OK'
            that.form.name = ''
            that.form.email = ''
            that.form.phone = ''
            that.form.message = ''
            that.form.consent = false
            that.address = ''
            that.formVisible = false
          }
        })
        .catch(function (error) {
          that.submitStatus = 'ERROR'
          console.log(error);
        })
      }
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset form values
      this.form.name = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.message = ''
      this.form.consent = false
      this.address = ''
      // Trick to reset/clear native browser form validation state
      this.formVisible = false
      this.$nextTick(() => {
        this.formVisible = true
      })      
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      phone: {
        numeric,
        minLength: minLength(10)
      },
      message: {
        required,
        minLength: minLength(5)
      },
      consent: {
        required
      }
    }
  }
}
</script>

<style scoped>
.form-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.response-container .alert-danger,
.response-container .alert-info,
.response-container h3 {
  text-align: center;
  background-color: transparent;
  margin: 0;
}

form .form-group {
  margin-bottom: 3rem;
}
form input,
form textarea {
  border: none;
  border-bottom: 1px solid var(--colour-font);
  border-radius: var(--radius-small);
  transition: var(--transition);
}
form input:focus,
form input:hover,
form input:active,
form textarea:focus,
form textarea:active,
form textarea:hover {
  outline: none !important;
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
form input:focus,
form textarea:focus {
  border-bottom: 2px solid var(--colour-font);
}
form .form-group.address {
  visibility: hidden;
  height: 0;
  margin-bottom: 0;
}
form .form-group.consent {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: flex-start;
}
form .alert-danger.consent {
  margin-top: -3rem !important;
  margin-bottom: 3rem !important;
}
form .alert-danger {
  font-size: small;
  color: #bb1c2b;
  background-color: transparent;
}
.buttons-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  border: 1px solid;
  border-color: var(--colour-font);
  border-radius: var(--radius-small);
  background-color: initial;
  color: initial;
  transition: var(--transition);
  padding: .75rem 1.25rem;
  letter-spacing: 2px;
  min-width: 35%;   
}
button:hover,
button:active,
button:focus {
  background-color: initial;
  border-color: var(--colour-link-hover);
  color: var(--colour-link-hover);
  box-shadow: var(--box-shadow);
}
</style>