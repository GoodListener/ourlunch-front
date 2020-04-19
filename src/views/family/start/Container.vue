<template>
  <div>
    <v-app-bar>
      <v-btn icon @click="prevPage()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>점심팸 시작하기</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    name: 'FamilyStartContainer',
    computed: {
      ...mapGetters('token', [
        'getToken'
      ])
    },
    methods: {
      storeToken: function () {
        if (!this.getToken) {
          // store.commit('token/setToken', this.$route.query.accessToken);
          // let query = Object.assign({}, this.$route.query);
          // delete query.access_token;
          // this.$router.replace({query});
        }
      },
      prevPage: function () {
        this.$router.back();
      },
    },

  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
