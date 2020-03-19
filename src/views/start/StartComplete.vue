<template>
  <v-card>
    <v-app-bar>
       <v-btn icon></v-btn>
      <v-toolbar-title class="pl-5">점심팸 시작하기</v-toolbar-title>
    </v-app-bar>
    <v-content
      class="justify-center">
      <p class="pa-12 text-center"><span class="display-1">점심팸 등록 완료!</span><br><span>(점심 굶고 다니지 마라 :P)</span></p>
    </v-content>
    <v-footer
      absolute
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
  </v-card>
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
