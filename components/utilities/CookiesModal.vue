<template v-slot:modal>
  <CookieControl>
    <template v-slot:modal>
      <h3 class="modal-title">
        Set your preferences
      </h3>
      <p></p>
    </template>
  </CookieControl>
</template>

<style>
.cookieControl {
  z-index: 1010;
}
.cookieControl__Modal {
  background-color: rgba(0, 0, 0, 0.5);
}
.cookieControl__ModalContent {
  background-color: #FFF;
  border-radius: var(--radius-small);
  padding-top: 40px !important;
}
.cookieControl__ModalContent button {
  color: var(--colour-link);
}
.cookieControl__ModalContent button:hover {
  color: var(--colour-font);
}
.cookieControl__ModalContent .cookieControl__ModalClose {
  padding: 0;
}
.cookieControl__ModalContent .cookieControl__ModalButtons {
  justify-content: center;
}
.cookieControl__ModalContent .cookieControl__ModalButtons button {
  border: 1px solid var(--colour-link);
  min-width: 8rem;
}
.cookieControl__ModalContent .cookieControl__ModalButtons button:hover {
  border: 1px solid var(--colour-font);
}
button.cookieControl__ControlButton {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 45px;
  height: 45px;
  border: 1px solid var(--colour-font);
  border-radius: var(--radius-small);
  color: var(--colour-font);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: none;
}
button.cookieControl__ControlButton:hover {
  border: 1px solid var(--colour-link-hover);
  color: var(--colour-link-hover);
}
.cookieControl__Bar {
  height: 100%;
  background-color: rgba(0,0,0, 0.5);
}
.cookieControl__BarContainer {
  background-color: #FFF;
  margin-top: 80vh;
  height: 20vh;
  align-items: center;
  justify-content: space-around;
}
.cookieControl__BarContainer button {
  color: var(--colour-link);
  border: 1px solid var(--colour-link);
  border-radius: var(--radius-small);
}
.cookieControl__BarContainer button:hover {
  color: var(--colour-font);
  border-color: var(--colour-font);
}


</style>
