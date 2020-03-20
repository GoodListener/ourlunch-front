import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import token from './token'
import family from './family'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    token : token,
    familyId : family
  },
  plugins: [createPersistedState()]
})
