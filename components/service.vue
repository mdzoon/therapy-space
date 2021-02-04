<template>
  <div class="service-wrapper" :class="['border-' + service.id]">
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
.service-wrapper:nth-of-type(2n+1) {
  padding-left: 2rem;
  text-align: left;
  border-left: 5px solid;
  border-color: var(--colour-primary);
}
.service-wrapper:nth-of-type(2n) {
  padding-right: 2rem;
  text-align: right;
  border-right: 5px solid;
  border-color: var(--colour-secondary);
}
.service-wrapper h3 {
  letter-spacing: 4px;
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
