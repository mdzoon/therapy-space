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
button.plain {
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: left;
}
button.plain:hover,
button.plain:active,
button.plain:focus {
  box-shadow: none;
}

button.boxed {
  border: 1px solid;
  border-color: var(--colour-font);
  border-radius: var(--radius-small);
  background-color: initial;
  color: initial;
  transition: var(--transition);
  padding: .75rem 1.25rem;
  letter-spacing: 2px;
  min-width: 35%;   
}
button.boxed:hover,
button.boxed:active,
button.boxed:focus {
  background-color: initial;
  border-color: var(--colour-link-hover);
  color: var(--colour-link-hover);
  box-shadow: var(--box-shadow);
}
button.boxed span {
  text-transform: uppercase;
}

.column-info .footer .btn.plain {
  color: var(--colour-link);
}
.column-info .footer .btn.plain:hover {
  color: var(--colour-link-light);
}
.column-info .footer .btn.plain svg {
  margin-left: 0.75rem;
    transition: var(--transition);
}
.column-info .footer .btn.plain:hover svg {
  margin-left: 1.25rem;
}
</style>
