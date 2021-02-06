<template>
  <div class="container service-wrapper" :class="['border-' + service.id]">
    <div class="pt-5 pb-5 mt-5 mb-5 therapy-card">
      <div :id="service.id" class="therapy-header w-100">
        <h3>{{ service.name }}</h3>
      </div>
      <div class="mt-5 mb-5 therapy-body">
        <div>
          {{ service.content }}
        </div>
      </div>
      <BookingButton />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      default () {
        return { id: 'Service', name: 'Therapy Name', content: 'Therapy Description' }
      }

      // validator: (value) => {
      //   return [
      //     'syncing',
      //     'synced',
      //     'version-conflict',
      //     'error'
      //   ].includes(value)
      // }
    }
  }
}
</script>

<style scoped>
.container-fluid:nth-of-type(2n+1) {
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#00c6ff+0,00c6ff+100&0+5,0.03+90,0.08+97,0.15+100 */
background: -moz-linear-gradient(left,  rgba(0,198,255,0) 0%, rgba(0,198,255,0) 5%, rgba(0,198,255,0.03) 90%, rgba(0,198,255,0.08) 97%, rgba(0,198,255,0.15) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left,  rgba(0,198,255,0) 0%,rgba(0,198,255,0) 5%,rgba(0,198,255,0.03) 90%,rgba(0,198,255,0.08) 97%,rgba(0,198,255,0.15) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right,  rgba(0,198,255,0) 0%,rgba(0,198,255,0) 5%,rgba(0,198,255,0.03) 90%,rgba(0,198,255,0.08) 97%,rgba(0,198,255,0.15) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0000c6ff', endColorstr='#2600c6ff',GradientType=1 ); /* IE6-9 */

}
.container-fluid:nth-of-type(2n) {

}
.container {
  margin-top: 6rem;
  margin-bottom: 6rem;
}
.service-wrapper:nth-of-type(2n+1) {
  padding-left: 2rem;
  text-align: left;
  border-left: 5px solid;
  border-color: var(--colour-primary);
  box-shadow: var(--box-shadow, var(--webkit-box-shadow));
  border-radius: var(--radius-small);
  background: -moz-linear-gradient(left,  rgba(0,198,255,0) 0%, rgba(0,198,255,0) 5%, rgba(0,198,255,0.03) 90%, rgba(0,198,255,0.08) 97%, rgba(0,198,255,0.15) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left,  rgba(0,198,255,0) 0%,rgba(0,198,255,0) 5%,rgba(0,198,255,0.03) 90%,rgba(0,198,255,0.08) 97%,rgba(0,198,255,0.15) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right,  rgba(0,198,255,0) 0%,rgba(0,198,255,0) 5%,rgba(0,198,255,0.03) 90%,rgba(0,198,255,0.08) 97%,rgba(0,198,255,0.15) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0000c6ff', endColorstr='#2600c6ff',GradientType=1 ); /* IE6-9 */
}
.service-wrapper:nth-of-type(2n) {
  padding-right: 2rem;
  text-align: right;
  border-right: 5px solid;
  border-color: var(--colour-secondary);
  box-shadow: var(--box-shadow, var(--webkit-box-shadow));
  border-radius: var(--radius-small);
  background: -moz-linear-gradient(left,  rgba(255,113,205,0.15) 0%, rgba(255,113,205,0.08) 3%, rgba(255,113,205,0.03) 10%, rgba(255,113,205,0) 95%, rgba(255,113,205,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left,  rgba(255,113,205,0.15) 0%,rgba(255,113,205,0.08) 3%,rgba(255,113,205,0.03) 10%,rgba(255,113,205,0) 95%,rgba(255,113,205,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right,  rgba(255,113,205,0.15) 0%,rgba(255,113,205,0.08) 3%,rgba(255,113,205,0.03) 10%,rgba(255,113,205,0) 95%,rgba(255,113,205,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#26ff71cd', endColorstr='#00ff71cd',GradientType=1 ); /* IE6-9 */
}
.service-wrapper h3 {
  letter-spacing: 8px;
  font-size: 1rem;
}
.service-wrapper:nth-of-type(2n+1) h3 {
  text-align: left;
}
.service-wrapper:nth-of-type(2n) h3 {
  text-align: right;
}
.therapy-card a {
  margin: auto;
}
.border-cbt {
}
</style>
