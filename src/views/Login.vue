<template>
  <v-card>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-toolbar-title>우리의점심</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <div class="content-wrap">
        <img class="content-img" src="../assets/loginpage_img.png">
      </div>
    </v-content>
    <v-footer
      absolute
      class="justify-center"
    >
      <div class="my-5">
        <a id="loginBtn"
           class="v-btn login-btn"
           v-bind:href="loginUrl">
          <img src="../assets/logo.svg" alt="">
        </a>
      </div>
    </v-footer>
  </v-card>
</template>

<script>
  export default {
    name: 'Login',
    created() {
      /* eslint-disable */
    },
    mounted() {
    },
    data: () => ({
      loginUrl: process.env.VUE_APP_LOGIN_URL
    }),
    methods: {}
  }
</script>
<style scoped>
  .content-wrap {
    padding: 10px;
  }

  .content-img {
    width: 100%;
  }

  .login-btn {
    width: 100%;
  }
</style>
