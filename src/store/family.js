const initialState = {
    familyId: -1
}

const mutations = {
    setFamilyId(state, value) {
        state.familyId = value
    }
}

const getters = {
    'getFamilyId': state => {return state.familyId}
}

export default {
    namespaced: true,
    state: { ...initialState  },
    mutations,
    getters
}