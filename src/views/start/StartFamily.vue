<template>
  <v-card>
    <v-app-bar>
      <v-btn icon @click="prevPage()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>점심팸 시작하기</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
      <transition name="fade">
        <router-view
          :userFamily="userFamily"
        />
      </transition>
      <v-row align="center" class="mx-5">
        <v-btn
          depressed dark large block
          class="mt-6"
          color="#FF6559"
          @click="nextPage"
        >다음</v-btn>
      </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../../api/index'
import { store } from '../../store'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  name: 'StartFamily',
  components: {
  },
  data: () => ({
    userFamily: {
      userName: '',
      appetite: '',
      companyName: '',
      familyName: ''
    }
  }),
  mounted: function () {
    this.storeToken();
  },
  methods: {
    storeToken: function () {
      if (!this.getToken) {
        store.commit('token/setToken', this.$route.query.access_token);
        let query = Object.assign({}, this.$route.query);
        delete query.access_token;
        this.$router.replace({ query });
      }
    },
    prevPage: function () {
      this.$router.back();
    },
    nextPage: function () {
      switch (this.$router.currentRoute.name) {
        case 'myInfo':
          this.$router.push('familyInfo');
          break;
        case 'familyInfo':
          api.postFamily(this.$store.state.accessToken, this.userFamily)
          .then((result) => {
            window.console.log(result.data);
            store.commit('family/setFamilyId', result.data.data.familyId);
            store.commit('family/setFamilyCode', result.data.data.familyCode);
            this.$router.push('/startComplete');
          })
          break;
      }
    }
  },
  computed: {
    ...mapGetters('token', [
      'getToken'
    ])
  }
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
