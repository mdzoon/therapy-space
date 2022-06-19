<template>
  <div class="form-container">

    <b-form 
      class="gform"
      method="POST"
      data-email="example@email.net"
      @submit="onSubmit"
      @reset="onReset"
      v-if="formVisible"
    >
      <div class="contact-form-elements">
        <b-form-group
          id="input-group-name"
          label-for="name"
          :class="{invalid: formSubmitted && $v.form.name.$invalid}"
        >
          <b-form-input
            id="name"
            v-model="$v.form.name.$model"
            name="name"
            placeholder="Your name *"
            aria-describedby=""
          ></b-form-input>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !$v.form.name.required">
            This field shoud not be empty!
          </p>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !$v.form.name.minLength">
            Your name must contain at least {{$v.form.name.$params.minLength.min}} letters.
          </p>
        </b-form-group>

        <b-form-group
          id="input-group-email"
          label-for="email"
          :class="{invalid: formSubmitted && $v.form.email.$invalid}"
        >
          <b-form-input
            id="email"
            v-model="$v.form.email.$model"
            name="email"
            placeholder="Your email *"
          ></b-form-input>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !$v.form.email.required">
            This field shoud not be empty!
          </p>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !$v.form.email.email">
            Please provide valid email!
          </p>
        </b-form-group>

        <b-form-group
          id="input-group-phone"
          label-for="phone"
          :class="{invalid: formSubmitted && $v.form.phone.$invalid}"
        >
          <b-form-input
            id="phone"
            v-model="$v.form.phone.$model"
            name="phone"
            placeholder="Your phone number"
          ></b-form-input>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !$v.form.phone.numeric">
            Please enter only numbers!
          </p>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !$v.form.phone.minLength">
            The phone number must be at least 10 digit long.
          </p>
        </b-form-group>

        <b-form-group
          id="input-group-message"
          label-for="message"
          :class="{invalid: formSubmitted && $v.form.message.$invalid}"
        >
          <b-form-textarea
            id="message"
            v-model="$v.form.message.$model"
            name="message"
            placeholder="Your message"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !$v.form.message.required">
            This field shoud not be empty!
          </p>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !$v.form.message.minLength">
            This message must have at least {{$v.form.message.$params.minLength.min}} characters.
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
          label="* I take your privacy seriously. To find out more please visit Privacy Policy page."
          label-for="consent">
          <b-form-checkbox
            id="consent"
            v-model="$v.form.consent.$model"
            name="consent"
            :class="{invalid: formSubmitted && $v.form.consent.$invalid}"
            switch
          >
            Consent
          </b-form-checkbox>
          <p class="alert-danger mt-1" role="alert" v-if="formSubmitted && !$v.form.consent.$model">
            Please confirm you want me to contact you!
          </p>
        </b-form-group>

        <div class="buttons-wrapper">
          <b-button type="submit">
            Submit <b-icon icon="envelope"></b-icon>
          </b-button>
          <b-button type="reset">
            Reset <b-icon icon="arrow-counterclockwise"></b-icon>
          </b-button>
        </div>

      </div>
    </b-form>

    <div class="response-container mt-3">
      <h3 v-if="submitStatus === 'OK'">Thank you for contacting me! I will get back to you soon.</h3>
      <!-- <p class="alert-danger" role="alert" v-if="submitStatus === 'ERROR'">Please fill in the form correctly.</p> -->
      <p class="alert-info" role="alert" v-if="submitStatus === 'PENDING'">Sending...</p>
    </div>
  </div>
</template>

<script>
import { required, minLength, email, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'ContactForm',
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false
      },
    //   action: 'https://script.google.com/macros/s/AKfycbzSRh1hjrIynQQuTK3sVIjP45SoSyo_kz1IhfX_87k4aAJeAH0/exec',
      address: '',
      submitStatus: '',
      formSubmitted: false,
      formVisible: true
    }
  },
  methods: {
    setContactName (value) {
      this.name = value
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.$v.form.$touch()

      if (this.$v.form.$invalid || !this.$v.form.consent.$model) {

        this.submitStatus = 'ERROR'
        this.formSubmitted = true

      } else {

        if (this.address) {
          return false;
        }
        const that = this
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.action, false);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
          that.submitStatus = 'PENDING'
          if (xhr.readyState === 4 && xhr.status === 200) {
            that.submitStatus = 'OK'
          }
        }
        var encoded = Object.keys(that.form).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(that.form[k]);
        }).join('&');
        xhr.send(encoded);
        
        this.form.name = ''
        this.form.email = ''
        this.form.phone = ''
        this.form.message = ''
        this.form.consent = false
        this.address = ''
        this.formVisible = false
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