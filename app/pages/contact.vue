<template>
    <main>
        <div class="d-none d-lg-block background-holder-right"/>
        <BContainer>
            <div class="image-holder">
                <div class="image-overlay"/>
                <h1>Contact Me</h1>
            </div>
            <BRow>
                <BCol lg="8" class="left">
                    <div class="column-contact">
                        <ClientOnly>
                            <ContactForm />
                        </ClientOnly>
                    </div>
                </BCol>
                <BCol lg="4" class="right">
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
                </BCol>
            </BRow>
        </BContainer>
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

<style scoped lang="scss">
.column-contact,
.column-address {
    height: 100%;

    @media only screen and (max-width: 991px) {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
}

.column-address {
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        margin-top: 1rem;

        li a {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-top: .5rem;
            padding-bottom: .5rem;

            i {
                margin-right: 1rem;
            }
        }
    }
}
</style>