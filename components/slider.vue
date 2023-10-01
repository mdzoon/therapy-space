<template>
    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    <b-carousel-slide img-blank>
      <div>
        {{ testimonial.content }}<i> {{ testimonial.author }}</i>
      </div>
    </b-carousel-slide>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      default () {
        return { id: 'Slide', name: 'Testimonial Name', content: 'Testimonial Content' }
      }
    }
  }
}
</script>

<style>
  .carousel-control-prev-icon {
    border-left: 4px solid var(--colour-link);
    border-bottom: 4px solid var(--colour-link);
    transform: rotate(45deg);
  }

  .carousel-control-next-icon {
    border-right: 4px solid var(--colour-link);
    border-top: 4px solid var(--colour-link);
    transform: rotate(45deg);
  }

  .carousel-indicators {
    bottom: -30px;
  }  
  .carousel-indicators li {
    background-color: var(--colour-link);
  }

  .carousel .carousel-inner .carousel-caption {
    top: 50%;
    bottom: unset;
    transform: translateY(-50%);
    color: var(--colour-font);
  }

</style>