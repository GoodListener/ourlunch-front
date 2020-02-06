<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>{{ $route.params.familyName }}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      점심팸에 합류하기 위해 로그인 해주세요
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
  name: 'Join',
  components: {
    
  },
  mounted: function () {
    processLogin(this)
    this.$nextTick(function () {
      kakaoAuth('kakaoLoginButton', this.success, this.failure)
    })
  },
  methods: {
    // eslint-disable-next-line 
    success: function (data) {
      window.Kakao.Auth.getStatusInfo(
        (data) => { checkStatus(data, this) }
      )
    },
    failure: function (result) {
      // eslint-disable-next-line
      console.error(result)
    }
  }
}
</script>
