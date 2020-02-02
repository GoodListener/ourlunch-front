<template>
  <div>
    <v-app-bar>
      패밀리에 가입하시겠습니까?
    </v-app-bar>
    <SubTitle>(회사 이름등 표시)</SubTitle>
    <v-footer
      app
      class="justify-center">
      <div class="my-5">
        <v-btn
          rounded
          outlined
          color="primary"
          class="mx-2"
          @click="exit"
        >이 패밀리가 아닌 것 같아요</v-btn>
        <v-btn
          rounded
          color="primary"
          class="mx-2"
          @click="join"
        >가입하기</v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'JoinFamily',
  components: {
    
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'getLoginUser'
    ])
  },
  methods: {
    complete: function () {
      this.$router.push('../main')
    }
  }
}
</script>
