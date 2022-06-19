<template>
  <NuxtLink :to="link">
    <button class="btn" :class="design" type="button">
      <slot>Contact Me</slot>
    </button>
  </NuxtLink>
</template>


<script>
export default {
  props: {
    link: String,
    design: String
  }  
}
</script>

<style>
button.boxed {
  border: 1px solid;
  border-radius: var(--radius-small);
  padding: .75rem 1.25rem;
  letter-spacing: 2px;
}
button.plain {
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.column-info .footer .btn.plain {
  color: var(--colour-link);
}
.column-info .footer .btn.plain:hover {
  color: var(--colour-link-light);
}
.column-info .footer .btn.plain svg {
  margin-left: 0.75rem;
}
</style>
