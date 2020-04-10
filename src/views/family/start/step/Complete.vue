<template>
  <div>
    <v-content
      class="justify-center">
      <p class="pa-12 text-center"><span class="display-1">점심팸 등록 완료!</span><br><span>(점심 굶고 다니지 마라 :P)</span></p>
      <p class="pa-12">팸 초대 링크: {{path}}/join/{{getFamily.code}}</p>
    </v-content>
    <v-row align="center" class="mx-5">
      <v-btn
        depressed dark large block
        class="mt-6 primary"
        @click="gotoMain"
      >우점 시작
      </v-btn>
    </v-row>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'FamilyStartComplete',
    data: () => ({
      path: window.location.origin
    }),
    computed: {
      ...mapGetters('family', [
        'getFamily'
      ])
    },
    methods: {
      gotoMain() {
        this.$router.push({
          name: 'Main'
        })
      }
    }
  }
</script>
