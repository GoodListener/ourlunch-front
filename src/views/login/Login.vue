<template>
  <div>
    <v-app-bar 
      app
      color="indigo"
      dark>
      <v-toolbar-title>우리의점심</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <img width="100%" src="../../assets/loginpage_img.png">
    </v-content>
    <v-footer
      app
      class="justify-center">
      <div class="my-5">
        <div id="kakaoLoginButton"></div>
      </div>
    </v-footer>
  </div>
</template>

<script>
import kakaoAuth from '@/utils/kakaoAuth'
import { processLogin, checkStatus } from '@/utils/processAuth'

export default {
  name: 'Login',
  mounted: function () {
    processLogin(this)
    this.$nextTick(function () {
      kakaoAuth('kakaoLoginButton', this.success, this.failure)
    })
  },
  methods: {
    success: function (result) {
      window.Kakao.Auth.getStatusInfo(
        (data) => { checkStatus(data, this) }
      )
      // eslint-disable-next-line 
      console.log(result)
    },
    failure: function (result) {
      // eslint-disable-next-line 
      console.error(result)
    }
  }
}
</script>
