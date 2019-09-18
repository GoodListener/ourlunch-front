import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VeeValidate from 'vee-validate'
import validateConfig from './veevalidate/config'
import VModal from 'vue-js-modal'
import { store } from './store/index.js'
import MockContainer from '@/apiMock/mockContainer'

Vue.config.productionTip = false
Vue.use(VeeValidate, validateConfig)
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })

new MockContainer().init()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
