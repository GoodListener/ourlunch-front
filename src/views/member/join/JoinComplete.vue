<template>
  <div>
    <v-app-bar>
      축하합니다. {{getLoginUser.name}}님<br>점심팸에 가입되었습니다.
    </v-app-bar>
    <v-footer
      app
      class="justify-center">
      <div class="my-5">
        <v-btn
          rounded
          color="primary"
          class="mx-2"
          @click="complete"
        >우리의 점심 시작하기</v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'JoinComplete',
  components: {
    
  },
  data: () => ({
    user: {
      userName: '',
      appetite: ''
    }
  }),
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
