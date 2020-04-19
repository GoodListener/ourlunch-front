const state = {
  id: -1,
  name: '',
  code: ''
}

const mutations = {
  setFamily(state, family) {
    state.id = family.id;
    state.name = family.name;
    state.code = family.code;
  }
}

const getters = {
  getFamily(state) {
    return state
  }
}

export default {
  namespaced: true,
  state: { ...state },
  mutations,
  getters
}