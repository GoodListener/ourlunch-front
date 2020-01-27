<template>
  <div>
    <v-app-bar 
      app
      color="indigo"
      dark>
      <v-toolbar-title>우리의점심</v-toolbar-title>
    </v-app-bar>
    <v-content>
      
    </v-content>
    <v-footer
      app
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    
  },
  mounted: function () {
    if (!this.getLoginUser.isLogined) {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters([
      'getLoginUser'
    ])
  },
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
