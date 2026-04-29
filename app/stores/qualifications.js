export const useQualificationsStore = defineStore('qualifications', () => {
    const isOpen = ref(false)

    function toggle() {
        isOpen.value = !isOpen.value
    }
    
    return { isOpen, toggle }
})
