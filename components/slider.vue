<template>
    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    <b-carousel-slide img-blank>
      <div class="text-wrapper">
        <div>{{ testimonial.content }}<i> {{ testimonial.author }}</i></div>
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
}

.carousel-control-next-icon {
  display: none;
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

.carousel .carousel-inner {
  display: flex;
  gap: 1rem;
}

.carousel .carousel-inner .carousel-item {
  min-height: 620px;      
}

.carousel .carousel-inner .carousel-caption {
  top: 50%;
  bottom: unset;
  right: unset;
  left: unset;
  transform: translateY(-50%);
  color: var(--colour-font);
  font-size: 14px;
  height: 100%;   
}

.carousel .carousel-inner .carousel-caption .text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--colour-secondary-light);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%);
  height: 100%;
}  

.carousel .carousel-inner .carousel-caption .text-wrapper i {
  white-space: nowrap;
}

@media only screen and (min-width: 400px) {
  .carousel .carousel-inner .carousel-item {
    min-height: 560px;
  }
  .carousel .carousel-inner .carousel-caption {
    font-size: initial;
  }
}

@media only screen and (min-width: 500px) {
  .carousel .carousel-inner .carousel-item {
    min-height: 480px;
  }
}  

@media only screen and (min-width: 768px) {
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: block;
  }

  .carousel .carousel-inner .carousel-caption {
    right: 15%;
    left: 15%;
  }
}
@media only screen and (min-width: 992px) {
  .carousel .carousel-inner .carousel-caption {
    font-size: 1.25rem;
  }

  .carousel .carousel-inner .carousel-caption .text-wrapper {
    background-color: transparent;
  }
}  
</style>