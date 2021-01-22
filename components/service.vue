<template>
  <div class="text-center pt-5 pb-5 therapy-card">
    <div :id="service.id" class="therapy-header w-100">
      <h3>{{ service.name }}</h3>
    </div>
    <div class="mt-3 mb-3 therapy-body">
      <div>{{ service.content }}</div>
    </div>
    <BookingButton />
  </div>
</template>

<script>
import BookingButton from '@/components/utilities/BookingButton.vue'

export default {
  components: {
    BookingButton
  },
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

<style>
.therapy-card h3 {
  letter-spacing: 4px;
}
.therapy-card a {
  margin: auto;
}
</style>
