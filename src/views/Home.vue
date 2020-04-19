<template>
  <v-card>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-toolbar-title>우리의 점심</v-toolbar-title>
      <v-spacer></v-spacer>
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
          @click="joinFamily"
        >링크 받아서 입장하는
        </v-btn>
        <v-btn
          rounded
          color="primary"
          class="mx-2"
          @click="startFamily"
        >새로운 점심 시작
        </v-btn>
      </div>
    </v-footer>
  </v-card>
</template>

<script>
  import api from '@/api/v1/index'
  import { mapMutations } from 'vuex'

  export default {
    name: 'Home',
    created() {
      /* eslint-disable */
    },
    mounted() {
      this.getProfile()
    },
    methods: {
      ...mapMutations({
        setToken: 'token/setToken',
        setUser: 'user/setUser'
      }),
      getProfile() {
        api.getMyProfile("accessToken")
          .then(response => {
            console.log(response)
            this.setUser(response.data.body)
          })
          .catch(error => {
            console.log(error)
          })
      },
      startFamily() {
        this.$router.push({
          name: "FamilyStartStep01"
        })
      },
      joinFamily() {
        this.$router.push({
          name: "FamilyJoinStep01"
        })
      }
    }
  }
</script>

<style scoped>

</style>
