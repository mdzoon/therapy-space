<template>
    <main>
        <div class="background-holder-left"/>
        <div class="container">
            <div class="accordion" role="tablist">
                <BCard no-body class="mb-1">
                    <BCardHeader header-tag="div" role="tab">
                        <BButton v-b-toggle.vision class="w-100" variant="info">
                            How I Work
                            <i class="bi bi-plus" />
                            <i class="bi bi-dash" />
                        </BButton>
                    </BCardHeader>
                    <BCollapse
                        id="vision"
                        :model-value="activePanel === 'vision'"
                        role="tabpanel"
                        @update:model-value="(v) => setPanel('vision', v)"
                    >
                        <BCardBody>
                            <BCardText>
                                <p>I see my role as helping you to understand yourself and your interactions with others clearer. This will help you to make better-informed and more beneficial choices in your life. I work in an open, empathic and transparent manner providing a safe and non-judgemental space to explore your issues. I believe that therapeutic relationship is crucial and plays a key role in positive therapy outcomes.</p>
                                <p>I have worked effectively with people who present with a range of issues including depression, social anxiety, low self-esteem, general anxiety, panic attacks, OCD, PTSD and childhood trauma. I provide support for those who have experienced loss or bereavement in their lives. If you have any family problems that impact on your life you might want to address this in therapy. I also offer help with anger management.</p>
                                <p>I have a clinic for face-to-face therapy on the High Street in Tunbridge Wells and I also offer therapy remotely via Zoom. An email address is required for Zoom, as well as access to a webcam on your device. Payment can be made via bank transfer.</p>
                                <p>I offer sessions in English and in Polish.</p>                    
                            </BCardText>
                        </BCardBody>
                    </BCollapse>
                </BCard>

                <BCard no-body class="mb-1">
                    <BCardHeader header-tag="div" role="tab">
                        <BButton v-b-toggle.my-qualifications class="w-100" variant="info">
                            My Qualifications
                            <i class="bi bi-plus" />
                            <i class="bi bi-dash" />
                        </BButton>
                    </BCardHeader>
                    <BCollapse
                        id="my-qualifications"
                        :model-value="activePanel === 'my-qualifications'"
                        role="tabpanel"
                        @update:model-value="(v) => setPanel('my-qualifications', v)"
                    >
                        <BCardBody>
                            <BCardText>
                                <h3>Memberships:</h3>
                                <ul>
                                    <li>2021 - UK Mediation Accredited Mediator</li>
                                    <li>2021 - member of EMDR UK</li>
                                    <li>2020 - member of ACTO (Academy for On-line Counselling and Psychotherapy)</li>
                                    <li>2017 - accredited BABCP Supervisor</li>
                                    <li>2012 - accredited member of BABCP</li>
                                    <li>2010 - accredited member of BACP</li>
                                </ul>
                                <h3>Qualifications:</h3>
                                <ul>
                                    <li>2021 - AIM Qualification Level4 Award in Interpersonal Mediation</li>
                                    <li>2020 - Certificate in an Introduction to Video & Audio Therapy</li>
                                    <li>2018 - CBT for Long Term Persistent & Distressing Health Conditions</li>
                                    <li>2015 - Certificate in IAPT Supervision at University of Surrey</li>
                                    <li>2012 - Postgraduate Diploma in Cognitive Behavioural Therapy at Canterbury Christ Church University</li>
                                    <li>2016 - Certificate in Level3 EMDR</li>
                                    <li>2012 - Certificate in Mindfulness-Based Cognitive Therapy</li>
                                    <li>2010 - Certificate in Level1 & Intermediate EMDR</li>
                                    <li>2008 - Diploma in Counselling at University of Kent</li>
                                    <li>2006 - Certificate in Counselling Studies at University of Kent</li>
                                    <li>2002 - Masters in Psychology at Uniwersytet im. Kard. St. Wyszynskiego in Warsaw, Poland </li>
                                </ul>
                            </BCardText>
                        </BCardBody>
                    </BCollapse>
                </BCard>

                <BCard no-body class="mb-1">
                    <BCardHeader header-tag="div" role="tab">
                        <BButton v-b-toggle.how-do-i-work class="w-100" variant="info">
                            Initial Contact
                            <i class="bi bi-plus" />
                            <i class="bi bi-dash" />
                        </BButton>
                    </BCardHeader>
                    <BCollapse
                        id="how-do-i-work"
                        :model-value="activePanel === 'how-do-i-work'"
                        role="tabpanel"
                        @update:model-value="(v) => setPanel('how-do-i-work', v)"
                    >
                        <BCardBody>
                            <BCardText>
                                <p>I respond to your query by e-mail or telephone according to your stated preference. If you wish I am happy to have a 10-15 min discussion over the phone which is free of charge.</p>
                                <p>I offer an initial assessment of your psychological needs which takes up to 60 minutes and the fee is £70. The assessment gives us an opportunity to meet and discuss how we can work together. I aim to gather some information about yourself, your current problems that you wish to address in therapy and any relevant past information that has contributed to your current issues. I aim to answer any questions you have and clarify your therapy expectations. The assessment helps us both decide how we can continue working together.</p>
                            </BCardText>
                        </BCardBody>
                    </BCollapse>
                </BCard>          

                <BCard no-body class="mb-1">
                    <BCardHeader header-tag="div" role="tab">
                        <BButton v-b-toggle.fees class="w-100" variant="info">
                            My Fees
                            <i class="bi bi-plus" />
                            <i class="bi bi-dash" />
                        </BButton>
                    </BCardHeader>
                    <BCollapse
                        id="fees"
                        :model-value="activePanel === 'fees'"
                        role="tabpanel"
                        @update:model-value="(v) => setPanel('fees', v)"
                    >
                        <BCardBody>
                            <BCardText>
                                <p>My fee is £70 for 50 minutes of therapy session.</p>
                                <p>In case you cancel the appointment with less than 24h notice it would be charged at 100% rate.</p>                
                            </BCardText>
                        </BCardBody>
                    </BCollapse>
                </BCard>

                <BookingButton class="d-flex justify-content-center mt-5" link='/contact' design="boxed">
                    Book Appointment
                </BookingButton>

            </div>
        </div>
    </main>
</template>

<script>
import { mapStores } from 'pinia'
export default {
    data () {
        return {
            activePanel: 'vision'
        }
    },
    computed: {
        ...mapStores(useQualificationsStore)
    },
    mounted () {
        if (this.qualificationsStore.isOpen) {
            this.activePanel = 'my-qualifications'
            this.qualificationsStore.toggle()
        }
    },
    methods: {
        setPanel (name, open) {
            if (open) {
                this.activePanel = name
            } else if (this.activePanel === name) {
                this.activePanel = null
            }
        }
    }
}
</script>

<style scoped lang="scss">
.accordion {
    .card,
    .card .card-header {
        border: none;
        padding: .25rem;
        margin: 0;
        border-radius: 0;
        background-color: transparent;
    }

    .card-header .bi {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }

    .card {
        .card-header button {
            border-radius: 0;
            padding-top: 1em;
            padding-bottom: 1em;
            background-color: var(--colour-backgound);
            font-size: 1.75rem;
            letter-spacing: 5px;
            color: var(--colour-link);
            border: none;
            border-bottom: 2px solid transparent;
            box-shadow: none;
            transition: var(--transition) ease-in-out;
            position: relative;

            &:hover,
            &.not-collapsed {
                border-bottom-color: var(--color-link-hover);
                color: var(--colour-link-hover);
            }

            .bi-plus {
                opacity: 1;
                transition: all var(--transition);
            }

            &.not-collapsed .bi-plus {
                opacity: 0;
            }

            @media only screen and (max-width: 600px) {
                font-size: 1.5rem;
            }

            @media only screen and (max-width: 400px) {
                font-size: 1rem;
            }
        }

        .card-body {
            background: radial-gradient(
                ellipse at 50% 50%,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0.07) 69%,
                rgba(238, 130, 238, 0) 100%
            );

            p {
                margin-top: 3em;
            }

            h3 {
                margin-top: 3em;
                margin-bottom: 1em;
            }
        }

        .card-text {
            @media only screen and (max-width: 600px) {
                h3 {
                    font-size: 1.5rem;
                }

                > * {
                    font-size: 0.9rem;
                }
            }

            @media only screen and (max-width: 400px) {
                h3 {
                    font-size: 1rem;
                }

                > * {
                    font-size: 0.8rem;
                }
            }
        }
    }
}
</style>