<template>
  <b-container>
    <div class="therapy-header">
      <h3>Therapy Header</h3>
    </div>
    <div class="therapy-body">
      <div>Therapy Content</div>
    </div>
    <BookingButton />
  </b-container>
</template>

<script>
import BookingButton from '@/components/utilities/BookingButton.vue'

export default {
  components: {
    BookingButton
  },
  props: {
    service: Object
  }
}
</script>
