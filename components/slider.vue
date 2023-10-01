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
    display: none;
    border-left: 4px solid var(--colour-link);
    border-bottom: 4px solid var(--colour-link);
    transform: rotate(45deg);

    @media only screen and (min-width: 768px) {
      display: block;
    }
  }

  .carousel-control-next-icon {
    display: none;
    border-right: 4px solid var(--colour-link);
    border-top: 4px solid var(--colour-link);
    transform: rotate(45deg);

    @media only screen and (min-width: 768px) {
      display: block;
    }
  }

  .carousel-indicators {
    bottom: -30px;
  }  
  .carousel-indicators li {
    background-color: var(--colour-link);
  }

  .carousel .carousel-inner .carousel-item {
    min-height: 400px;

    @media only screen and (min-width: 400px) {
      min-height: 300px;
    }

    @media only screen and (min-width: 500px) {
      min-height: 250px;
    }      
  }

  .carousel .carousel-inner .carousel-caption {
    top: 50%;
    bottom: unset;
    right: unset;
    left: unset;
    transform: translateY(-50%);
    color: var(--colour-font);
    font-size: smaller;

    @media only screen and (min-width: 768px) {
      right: 15%;
      left: 15%;
    }
    @media only screen and (min-width: 992px) {
      font-size: 1.25rem;
    }        
  }

  .carousel .carousel-inner .carousel-caption div {
    padding: 10px;
    background-color: var(--colour-secondary-light);
  }

</style>