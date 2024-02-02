<template>
  <main>
    <div class="background-holder-left"></div>
    <div class="container">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="div" role="tab">
            <b-button block v-b-toggle.vision variant="info">
              How I Work
              <b-icon icon="plus"></b-icon>
              <b-icon icon="dash"></b-icon>
            </b-button>
          </b-card-header>
          <b-collapse id="vision" visible accordion="accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <p>I see my role as helping you to understand yourself and your interactions with others clearer. This will help you to make better-informed and more beneficial choices in your life. I believe that therapeutic relationship plays a key role in positive therapy outcomes.</p>
                <p>I have worked effectively with people who present with a range of issues including depression, social anxiety, low self-esteem, general anxiety, panic attacks, OCD, PTSD and childhood trauma. I provide support for those who have experienced loss or bereavement in their lives. If you have any family problems that impact on your life you might want to address this in therapy. I also offer help with anger management.</p>
                <p>I have a clinic for face-to-face therapy on the High Street in Tunbridge Wells and I also offer therapy remotely via Zoom. An email address is required for Zoom, as well as access to a webcam on your device. Payment can be made via bank transfer.</p>
                <p>I offer sessions in English and in Polish.</p>                    
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="div" role="tab">
            <b-button block v-b-toggle.my-qualifications variant="info">
              My Qualifications
              <b-icon icon="plus"></b-icon>
              <b-icon icon="dash"></b-icon>
            </b-button>
          </b-card-header>
          <b-collapse id="my-qualifications" accordion="accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
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
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="div" role="tab">
            <b-button block v-b-toggle.how-do-i-work variant="info">
              Initial Contact
              <b-icon icon="plus"></b-icon>
              <b-icon icon="dash"></b-icon>
            </b-button>
          </b-card-header>
          <b-collapse id="how-do-i-work" accordion="accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <p>I respond to your query by e-mail or telephone according to your stated preference. If you wish I am happy to have a 10-15 min discussion over the phone which is free of charge.</p>
                <p>I offer an initial assessment of your psychological needs which takes up to 60 minutes and the fee is £70. The assessment gives us an opportunity to meet and discuss how we can work together. I aim to gather some information about yourself, your current problems that you wish to address in therapy and any relevant past information that has contributed to your current issues. I aim to answer any questions you have and clarify your therapy expectations. The assessment helps us both decide how we can continue working together.</p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>          

        <b-card no-body class="mb-1">
          <b-card-header header-tag="div" role="tab">
            <b-button block v-b-toggle.fees variant="info">
              My Fees
              <b-icon icon="plus"></b-icon>
              <b-icon icon="dash"></b-icon>
            </b-button>
          </b-card-header>
          <b-collapse id="fees" accordion="accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <p>My fee is £70 for 50 minutes of therapy session.</p>
                <p>In case you cancel the appointment with less than 24h notice it would be charged at 100% rate.</p>                
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <BookingButton class="d-flex justify-content-center mt-5" link='/contact' design="boxed">Book Appointment</BookingButton>

      </div>
    </div>
  </main>
</template>

<style scoped>
.accordion .card,
.accordion .card .card-header {
  border: none;
  padding: .25rem;
  margin: 0;
  border-radius: 0;
  background-color: transparent;
}
.accordion .card .card-header button {
  border-radius: 0;
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: var(--colour-backgound);
  font-size: 1.75rem;
  letter-spacing: 5px;
  color: var(--colour-link);
  border: none;
  box-shadow: none;
  transition: var(--transition) ease-in-out;
  border-bottom: 2px solid transparent;
  position: relative;
}
@media only screen and (max-width: 600px) {
  .accordion .card .card-header button {
    font-size: 1.5rem;
  }
  .accordion .card .card-text h3 {
    font-size: 1.5rem;
  }
  .accordion .card .card-text > * {
    font-size: 0.9rem;
  } 
}
@media only screen and (max-width: 400px) {
  .accordion .card .card-header button {
    font-size: 1rem;
  }
  .accordion .card .card-text h3 {
    font-size: 1rem;
  }
  .accordion .card .card-text > * {
    font-size: 0.8rem;
  } 
}
/* .accordion .card .card-header button:active, */
.accordion .card .card-header button:hover {
/* .accordion .card .card-header button:focus { */
  /* box-shadow: var(--box-shadow); */
  border-bottom-color: var(--color-link-hover);
  color: var(--colour-link-hover);
}
.accordion .card .card-header button .bi-plus {
  opacity: 1;
  transition: all var(--transition);
}
.accordion .card .card-header button.not-collapsed {
  border-bottom-color: var(--color-link-hover);
  color: var(--colour-link-hover);  
}
.accordion .card .card-header button.not-collapsed .bi-plus {
  opacity: 0;
}
.accordion .card-header svg {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.card-body {
  /* ff 3.6+ */
  background:-moz-radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
  /* safari 5.1+,chrome 10+ */
  background:-webkit-radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
  /* opera 11.10+ */
  background:-o-radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
  /* ie 10+ */
  background:-ms-radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
  /* global 92%+ browsers support */
  background:radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
}
.accordion .card .card-body p {
 margin-top: 3em;
}
.accordion .card .card-body h3 {
  margin-top: 3em;
  margin-bottom: 1em;    
}
</style>