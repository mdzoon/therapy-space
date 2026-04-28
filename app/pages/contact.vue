<template>
    <main>
        <div class="d-none d-lg-block background-holder-right"/>
        <b-container>
            <div class="image-holder">
                <div class="image-overlay"/>
                <h1>Contact Me</h1>
            </div>
            <b-row>
                <b-col lg="8" class="left">
                    <div class="column-contact">
                        <ContactForm />
                    </div>
                </b-col>
                <b-col lg="4" class="right">
                    <div class="column-address">
                        <h2>Address Details</h2>
                        <div>Get in touch by filling out our contact form, or by using the details provided below.</div>
                        <ul>
                            <li>
                                <a href="tel:7970014122">
                                    <i class="bi bi-telephone" />
                                    <div>(+44) 7970014122</div>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:grazyna@thinkcbt.com">
                                    <i class="bi bi-envelope" />
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
.column-contact,
.column-address  {
    height: 100%;
}
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
.column-address ul li a i {
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