export const useQualificationsStore = defineStore('qualifications', {
    state: () => ({
        isOpen: false
    }),
    actions: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
})
