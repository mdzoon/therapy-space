export default {
    state() {
        return {
            isQualificationsOpen: false
        }
    },
    mutations: {
        triggerQualifications(state) {
            state.isQualificationsOpen = !state.isQualificationsOpen
        }
    }
}

  
  