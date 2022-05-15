<template>
  <main class="container">
    <b-row>
      <b-col cols="10">
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.vision variant="info">Vision<b-icon icon="plus-square"></b-icon></b-button>
            </b-card-header>
            <b-collapse id="vision" visible accordion="accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <p>I see my role as helping you to understand yourself and your interactions with others clearer. This will help you to make better-informed and more beneficial choices in your life. I believe that therapeutic relationship plays a key role in positive therapy outcomes.</p>
                  <p>I have worked effectively with people who present with a range of issues including depression, social anxiety, low self-esteem, general anxiety, panic attacks, OCD, PTSD and childhood trauma. I provide support for those who have experienced loss or bereavement in their lives. If you have any family problems that impact on your life you might want to address this in therapy. I also offer help with anger management.</p>
                  <p>Since Covid I have been offering therapy using Zoom or WhatsApp. I send secure Zoom link to the session by e-mail and that can be easily accessed on the laptop or smartphone.</p>
                  <p>I offer sessions in English and in Polish.</p>                    
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.my-qualifications variant="info">My Qualifications<b-icon icon="plus-square"></b-icon></b-button>
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
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.how-do-i-work variant="info">How do I work<b-icon icon="plus-square"></b-icon></b-button>
            </b-card-header>
            <b-collapse id="how-do-i-work" accordion="accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <p>I respond to your query by e-mail or telephone according to your stated preference. If you wish I am happy to have 10-15 min discussion over the phone which is free of charge.</p>
                  <p>I offer an initial assessment of your psychological needs which takes up to 60 min. and the fee is £60. The assessment gives us an opportunity to meet and discuss how we can work together. I aim to gather some information about yourself, your current problems that you wish to address in therapy and any relevant past information that have contributed to your current issues. I aim to answer any questions you have and clarify your therapy expectations. The assessment helps us both decide how we can continue working together.</p>
                  <p>My fees for therapy sessions range between £60 and £100 for 50-60 min session.</p>
                  <p>Please contact me to book an assessment.</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>          

        </div>
      </b-col>
      <b-col cols="2">
        <img src="~/assets/images/magnolia-vector.svg" alt="magnolia">  
      </b-col>      
    </b-row>
  </main>
</template>

<style scoped>
.accordion .card,
.accordion .card-header {
  border: none;
}
.accordion .card-header button {
  /* background-color: var(--colour-secondary-light); */
  position: relative;
}
.accordion .card-header svg {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
img {
  border-radius: var(--radius-samll);
}
</style>