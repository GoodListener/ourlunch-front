<template>
  <div>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ $route.params.familyName }}</v-toolbar-title>
      <v-spacer></v-spacer>
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
import { processLogin, checkStatus } from '@/utils/processAuth'

export default {
  name: 'Join',
  components: {
    
  },
  mounted: function () {
    processLogin(this)
  },
  methods: {
  }
}
</script>
