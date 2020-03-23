const initialState = {
    id: -1,
    name: '',
    code: ''
}

const mutations = {
    setFamilyInfo(state, familyInfo) {
        state.id = familyInfo.id;
        state.name = familyInfo.name;
        state.code = familyInfo.code;
    }
}

const getters = {
    'getFamilyId': state => {return state.id},
    'getFamilyCode': state => {return state.code},
    'getFamily': state => {return state}
}

export default {
    namespaced: true,
    state: { ...initialState  },
    mutations,
    getters
}