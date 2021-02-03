<template v-slot:modal>
  <CookieControl>
    <template v-slot:modal>
      <h3 class="modal-title">
        Set your preferences
      </h3>
      <p>Bar description (you can use $cookies.text.barDescription)</p>
    </template>
  </CookieControl>
</template>

<style>
.cookieControl__Modal {
  background-color: rgba(0, 0, 0, 0.75);
}
.cookieControl__ModalContent {
  background-color: #fff;
}
button.cookieControl__ControlButton {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 50px;
  height: 50px;
  border: 1px solid var(--colour-primary);
  border-radius: var(--radius);
  color: var(--colour-primary);
  background-color: transparent;
  box-shadow: none;
}

</style>
