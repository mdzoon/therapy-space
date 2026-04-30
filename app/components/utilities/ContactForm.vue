<template>
    <div class="form-container">

        <BForm
            v-if="formVisible"
            class="gform"
            @submit="onSubmit"
        >
            <div class="contact-form-elements">
                <BFormGroup
                    id="input-group-name"
                    label-for="name"
                    :class="{invalid: formSubmitted && v$.form.name.$invalid}"
                >
                    <BFormInput
                        id="name"
                        v-model="v$.form.name.$model"
                        name="name"
                        placeholder="Name *"
                        aria-describedby=""
                    />
                    <p v-if="formSubmitted && v$.form.name.required.$invalid" class="alert-danger mt-1" role="alert">
                        This field should not be empty
                    </p>
                    <p v-if="formSubmitted && v$.form.name.minLength.$invalid" class="alert-danger mt-1" role="alert">
                        Your name must contain at least {{v$.form.name.minLength.$params.min}} letters.
                    </p>
                </BFormGroup>

                <BFormGroup
                    id="input-group-email"
                    label-for="email"
                    :class="{invalid: formSubmitted && v$.form.email.$invalid}"
                >
                    <BFormInput
                        id="email"
                        v-model="v$.form.email.$model"
                        name="email"
                        placeholder="Email *"
                    />
                    <p v-if="formSubmitted && v$.form.email.required.$invalid" class="alert-danger mt-1" role="alert">
                        This field should not be empty
                    </p>
                    <p v-if="formSubmitted && v$.form.email.email.$invalid" class="alert-danger mt-1" role="alert">
                        Please provide valid email
                    </p>
                </BFormGroup>

                <BFormGroup
                    id="input-group-phone"
                    label-for="phone"
                    :class="{invalid: formSubmitted && v$.form.phone.$invalid}"
                >
                    <BFormInput
                        id="phone"
                        v-model="v$.form.phone.$model"
                        name="phone"
                        placeholder="Phone"
                    />
                    <p v-if="formSubmitted && v$.form.phone.numeric.$invalid" class="alert-danger mt-1" role="alert">
                        Please enter only numbers
                    </p>
                    <p v-if="formSubmitted && v$.form.phone.minLength.$invalid" class="alert-danger mt-1" role="alert">
                        The phone number must be at least 10 digit long.
                    </p>
                </BFormGroup>

                <BFormGroup
                    id="input-group-message"
                    label-for="message"
                    :class="{invalid: formSubmitted && v$.form.message.$invalid}"
                >
                    <BFormTextarea
                        id="message"
                        v-model="v$.form.message.$model"
                        name="message"
                        placeholder="Message *"
                        rows="3"
                        max-rows="6"
                    />
                    <p v-if="formSubmitted && v$.form.message.required.$invalid" class="alert-danger mt-1" role="alert">
                        This field should not be empty
                    </p>
                    <p v-if="formSubmitted && v$.form.message.minLength.$invalid" class="alert-danger mt-1" role="alert">
                        This message must have at least {{v$.form.message.minLength.$params.min}} characters.
                    </p>
                </BFormGroup>

                <BFormGroup
                    id="input-group-address"
                    label-for="address"
                    class="address"
                >
                    <BFormInput
                        id="address"
                        v-model="address"
                        name="address"
                        placeholder="Your address"
                    />
                </BFormGroup>

                <BFormGroup
                    id="input-group-consent"
                >
                    <BFormCheckbox
                        id="consent"
                        v-model="v$.form.consent.$model"
                        name="consent"
                        :class="{invalid: formSubmitted && v$.form.consent.$invalid}"
                        switch
                    >
                    <label class="consent" for="consent">* I take your privacy seriously. To find out more please visit <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink> page.</label>
                    </BFormCheckbox>
                </BFormGroup>
                <p v-if="formSubmitted && !v$.form.consent.$model" class="alert-danger mt-1 consent" role="alert">
                    Please confirm you want me to contact you
                </p>

                <BButton type="submit">
                    Submit <BIcon name="envelope" />
                </BButton>

            </div>
        </BForm>

        <div class="response-container mt-3">
            <h3 v-if="submitStatus === 'OK'">Thank you for contacting me. I will get back to you soon.</h3>
            <p v-if="submitStatus === 'ERROR'" class="alert-danger" role="alert">Something gone wrong. Please contact website administrator</p>
            <p v-if="submitStatus === 'PENDING'" class="alert-info" role="alert">Sending...</p>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email, numeric } from '@vuelidate/validators'

const state = reactive({
    form: {
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false
    }
})

const rules = {
    form: {
        name: { required, minLength: minLength(3) },
        email: { required, email },
        phone: { numeric, minLength: minLength(10) },
        message: { required, minLength: minLength(5) },
        consent: { required }
    }
}

const v$ = useVuelidate(rules, state)

const address = ref('')
const submitStatus = ref('')
const formSubmitted = ref(false)
const formVisible = ref(true)

function onSubmit (evt) {
    evt.preventDefault()
    v$.value.form.$touch()

    if (v$.value.form.$invalid || !state.form.consent) {
        formSubmitted.value = true
    } else {
        submitStatus.value = 'PENDING'

        if (address.value) {
            return false
        }

        const url = 'https://formspree.io/f/mdojnvaj'

        $fetch(url, {
            method: 'POST',
            body: {
                'Sender Name': state.form.name,
                'Email': state.form.email,
                'Phone': state.form.phone,
                'Consent': state.form.consent,
                'Message': state.form.message
            }
        })
            .then((response) => {
                if (response) {
                    submitStatus.value = 'OK'
                    state.form.name = ''
                    state.form.email = ''
                    state.form.phone = ''
                    state.form.message = ''
                    state.form.consent = false
                    address.value = ''
                    formVisible.value = false
                }
            })
            .catch((error) => {
                submitStatus.value = 'ERROR'
                console.log(error)
            })
    }
}
</script>

<style scoped lang="scss">
.form-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.response-container {
    .alert-danger,
    .alert-info,
    h3 {
        text-align: center;
        background-color: transparent;
        margin: 0;
    }
}

form {
    .b-form-group {
        margin-bottom: 3rem;

        &.address {
            visibility: hidden;
            height: 0;
            margin-bottom: 0;
        }

        &.consent {
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }

    input,
    textarea {
        border: none;
        border-bottom: 1px solid var(--colour-font);
        border-radius: var(--radius-small);
        transition: var(--transition);

        &:focus,
        &:hover,
        &:active {
            outline: none !important;
            border-color: inherit;
            box-shadow: none;
        }

        &:focus {
            border-bottom: 2px solid var(--colour-font);
        }
    }

    button.btn {
        border: 1px solid var(--colour-font);
        border-radius: var(--radius-small);
        background-color: initial;
        color: initial;
        transition: var(--transition);
        padding: .75rem 1.25rem;
        letter-spacing: 2px;
        min-width: 100%;

        &:hover,
        &:active,
        &:focus {
            background-color: var(--background-color);
            border-color: var(--colour-link-hover);
            color: var(--colour-link-hover);
            box-shadow: var(--box-shadow);
        }

        @media only screen and (min-width: 576px) {
            min-width: 50%;
        }

        @media only screen and (min-width: 992px) {
            min-width: 35%;
        }    
    }

    .alert-danger {
        font-size: small;
        color: #bb1c2b;
        background-color: transparent;

        &.consent {
            margin-top: -3rem !important;
            margin-bottom: 3rem !important;
        }
    }
}

:deep(.form-check-input:checked) {
    background-color: var(--colour-link);
    border-color: var(--colour-link);
}
:deep(.form-check-input:focus) {
    border-color: var(--colour-link);
    --bs-form-switch-bg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23006d8b'/%3E%3C/svg%3E");
    box-shadow: 0 0 0 .25rem rgba(0, 109, 139, .25);
}
:deep(.form-check-input:checked:focus) {
    --bs-form-switch-bg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
}
</style>
