<!-- TODO: when re-enabling cookie control, verify slot name and `cookieControl__*` class hooks against @dargmuesli/nuxt-cookie-control v9 docs -->
<template>
    <CookieControl>
        <template #modal>
            <h3 class="modal-title">
                Set your preferences
            </h3>
            <p/>
        </template>
    </CookieControl>
</template>

<style lang="scss">
.cookieControl {
    z-index: 1010;

    &__Modal {
        background-color: rgba(0, 0, 0, 0.5);
    }

    &__ModalContent {
        background-color: #FFF;
        border-radius: var(--radius-small);
        padding-top: 40px !important;

        button {
            color: var(--colour-link);

            &:hover {
                color: var(--colour-font);
            }
        }

        .cookieControl__ModalClose {
            padding: 0;
        }

        .cookieControl__ModalButtons {
            justify-content: center;

            button {
                border: 1px solid var(--colour-link);
                min-width: 8rem;

                &:hover {
                    border-color: var(--colour-font);
                }
            }
        }
    }

    &__Bar {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &__BarContainer {
        background-color: #FFF;
        margin-top: 80vh;
        height: 20vh;
        align-items: center;
        justify-content: space-around;

        button {
            color: var(--colour-link);
            border: 1px solid var(--colour-link);
            border-radius: var(--radius-small);

            &:hover {
                color: var(--colour-font);
                border-color: var(--colour-font);
            }
        }
    }
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

    &:hover {
        border-color: var(--colour-link-hover);
        color: var(--colour-link-hover);
    }
}
</style>
