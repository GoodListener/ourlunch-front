const initialState = {
    master: false
}

const mutations = {
    setMaster(state, value) {
        state.master = value
    }
}

const getters = {
    'isMaster': state => {return state.master}
}

export default {
    namespaced: true,
    state: { ...initialState  },
    mutations,
    getters
}