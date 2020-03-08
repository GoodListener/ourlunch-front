const initialState = {
    token: ''
}

const mutations = {
    setToken(state, value) {
        state.token = value
    }
}

const getters = {
    'getToken': state => {return state.token}
}

export default {
    namespaced: true,
    state: { ...initialState  },
    mutations,
    getters
}