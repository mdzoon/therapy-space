<template>
  <b-row class="pt-4 pb-4">
    <div :id="service.id" class="therapy-header">
      <h3>{{ service.name }}</h3>
    </div>
    <div class="mt-3 mb-3 therapy-body">
      <div>{{ service.content }}</div>
    </div>
    <BookingButton />
  </b-row>
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
