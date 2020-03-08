<template>
  <div>
    <v-app-bar>
      축하합니다! ??님<br>점심팸 등록 완료!
    </v-app-bar>
    <v-footer
      app
      class="justify-center">
      <div class="my-5">
        <v-btn
          rounded
          color="primary"
          class="mx-2"
          @click="gotoMain"
        >우리의 점심 시작</v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StartComplete',
  mounted: function () {
    
  },
  computed: {
    
  },
  components: {
    
  },
  methods: {
    gotoMain: function () {
      this.$router.push('main')
    }
  }
}
</script>
