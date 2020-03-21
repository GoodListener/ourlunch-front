<template>
  <v-card>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-toolbar-title>점심팸 시작하기</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content
      class="justify-center">
      <p class="pa-12 text-center"><span class="display-1">점심팸 등록 완료!</span><br><span>(점심 굶고 다니지 마라 :P)</span></p>
      <p class="pa-12">팸 초대 링크: {{path}}/join/{{getFamilyCode}}</p>
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
  data: () => ({
    path: window.location.origin
  }),
  computed: {
    ...mapGetters('family', [
      'getFamilyCode'
    ])
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
