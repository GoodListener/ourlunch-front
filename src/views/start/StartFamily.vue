<template>
  <div>
    <v-app-bar>
      우리의점심 점심팸 시작하기
    </v-app-bar>
      <v-row justify="space-around">
        <v-col cols="5">
            <span>{{getToken}}</span>
            <v-img aspect-ratio="1.7"></v-img>
        </v-col>
      </v-row>
      <transition name="fade">
        <router-view
          :userFamily="userFamily"
          @fetchedUserFamilyInfo="fetchedUserFamilyInfo"
        />
      </transition>
      <v-footer
        app
        class="justify-center">
        <div class="my-5">
          <v-btn
            rounded
            color="primary"
            class="mx-2"
            @click="nextPage"
          >다음</v-btn>
        </div>
      </v-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { postFamily } from '../../api/index'
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
    fetchedUserFamilyInfo (userFamily) {
      console.log(userFamily);
    },
    nextPage: function () {
      switch (this.$router.currentRoute.name) {
        case 'myInfo':
          this.$router.push('familyInfo');
          break;
        case 'familyInfo':
          postFamily(this.$store.state.accessToken, this.userFamily).then((result) => {
            console.log(result);
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
