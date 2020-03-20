<template>
  <v-card>
    <v-app-bar>
      <v-toolbar-title class="pl-5">우리의 점심</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar color="orange" size="48" class="white--text">{{profile.familyName}}</v-avatar>
    </v-app-bar>
    <v-content>
      <div>
        <v-btn @click="handleRestaurantButton">
          <v-icon>mdi-plus</v-icon>
            식당 등록하기
          </v-btn>
      </div>
      <div>
        <v-btn @click="choiceLunch">오늘의 점심은?</v-btn>
      </div>
      <div>
        <v-btn @click="handlefamRestaurantsButton">식당 목록</v-btn>
        <v-btn @click="handlefamMembersButton">멤버 목록</v-btn>
      </div>
    </v-content>
    <v-footer
      absolute
    >
      
    </v-footer>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { getMyProfile } from '../api/index'
import { store } from '../store'

export default {
  name: 'Main',
  mounted: function () {
    this.storeToken();
    getMyProfile(this.getToken).then((result) => {
      if (result.data.code == 200) {
        this.profile = result.data.data;
        window.console.log(this.profile)
      }
    })
  },
  computed: {
    ...mapGetters('token', [
      'getToken'
    ])
  },
  data: () => ({
    profile: {}
  }),
  methods: {
    storeToken: function () {
      if (!this.getToken) {
        store.commit('token/setToken', this.$route.query.access_token);
        let query = Object.assign({}, this.$route.query);
        delete query.access_token;
        this.$router.replace({ query });
      }
    },
    choiceLunch: function () {
      this.$router.push('choiceLunch1')
    },
    handleRestaurantButton: function () {
      this.$router.push('restaurant')
    },
    handlefamRestaurantsButton: function () {
      this.$router.push('famRestaurants')
    },
    handlefamMembersButton: function () {
      this.$router.push('famMembers')
    }

  }
}
</script>
