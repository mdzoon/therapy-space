<template>
  <b-container fluid>
    <b-container>
      <b-row>
        <b-col lg="6" class="left">
          <div class="image-box">
            <img src="@/assets/images/grazyna-portrait.jpg" alt="default-portrait" class="portrait-img">
          </div>
        </b-col>
        <b-col lg="6" class="right">
          <div class="info-box">
            <p>I am BACP Accredited Integrative Counsellor and BABCP Accredited Cognitive Behavioural Psychotherapist and Supervisor. I am also EMDR practitioner and UK Accredited Mediator.</p>
            <p>I have been working for over 10 years with clients in the NHS and in private setting. My training in different therapeutic approaches combined with my clinical experience allows me to offer in-depth assessment of your issues and provide treatment which is most suitable for your particular needs.</p>
            <p>I see my role as helping you to understand yourself and your interactions with others clearer. This will help you to make better-informed and more beneficial choices in your life. I believe that therapeutic relationship plays a key role in positive therapy outcomes.</p>
            <p>I have worked effectively with people who present with a range of issues including depression, social anxiety, low self-esteem, general anxiety, panic attacks, OCD, PTSD and childhood trauma. I provide support for those who have experienced loss or bereavement in their lives. If you have any family problems that impact on your life you might want to address this in therapy. I also offer help with anger management.</p>
            <p>Since Covid I have been offering therapy using Zoom or WhatsApp. I send secure Zoom link to the session by e-mail and that can be easily accessed on the laptop or smartphone.</p>
            <p>I offer sessions in English and in Polish.</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {}
</script>

<style scoped>
.container-fluid {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: var(--veryLight-grayscale);
  /* background-image: url("~assets/images/therapy-space-logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
}
.left,
.right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-box,
.info-box {
  padding: 2rem;
}
.portrait-img {
  width: 100%;
  height: auto;
}
</style>
