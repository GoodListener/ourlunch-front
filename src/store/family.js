const initialState = {
    familyId: -1,
    familyCode: ''
}

const mutations = {
    setFamilyId(state, value) {
        state.familyId = value
    },
    setFamilyCode(state, value) {
        state.familyCode = value
    }
}

const getters = {
    'getFamilyId': state => {return state.familyId},
    'getFamilyCode': state => {return state.familyCode}
}

export default {
    namespaced: true,
    state: { ...initialState  },
    mutations,
    getters
}