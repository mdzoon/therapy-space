export default {
    state: {
        isQualificationsOpen: false
    },
    mutations: {
        triggerQualifications(state) {
            state.isQualificationsOpen = !state.isQualificationsOpen
        }
    }
}
  
  