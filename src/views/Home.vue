<template>
  <v-card>
    <v-app-bar>
      <v-btn icon></v-btn>
      <v-toolbar-title class="pl-5">우리의 점심</v-toolbar-title>
    </v-app-bar>
    <v-content>
      
    </v-content>
    <v-footer
      absolute
      class="justify-center">
      <div class="my-5">
        <v-btn
          rounded
          outlined
          color="primary"
          class="mx-2"
        >링크 받아서 입장하는</v-btn>
        <v-btn
          rounded
          color="primary"
          class="mx-2"
          @click="startFamily"
        >새로운 점심 시작</v-btn>
      </div>
    </v-footer>
  </v-card>
</template>

<script>
import { devLogin } from '../api/index'

export default {
  name: 'Home',
  mounted: function () {
    devLogin().then((result) => {console.log(result)})
  },
  computed: {},
  methods: {
    startFamily: function () {
      this.$router.push('StartFamily')
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 270px;
}

.middle {
  width: 100%;
  position: fixed;
  bottom: 150px;
}

</style>
