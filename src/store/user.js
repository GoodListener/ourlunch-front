const state = {
  name: null,
  appetite: null,
  family: {
    id: null,
    code: null,
    name: null
  },
  master: false
}

const mutations = {
  setUser(state, user) {
    state.name = user.name
    state.appetite = user.appetite
    state.family = user.family
    state.master = user.master
  }
}

const getters = {
  getUser(state) {
    return state
  }
}

export default {
  namespaced: true,
  state: { ...state },
  mutations,
  getters
}