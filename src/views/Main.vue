<template>
  <v-card>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-toolbar-title>우리의 점심</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon v-if="profile.master" color="orange">mdi-crown</v-icon>
      <v-avatar color="orange" size="48" class="white--text ml-5">{{profile.familyName}}</v-avatar>
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
import api from '../api/index'
import { store } from '../store'

export default {
  name: 'Main',
  mounted: function () {
    // 토큰 store에 저장
    this.storeToken();
    // 나의 프로필 저장
    api.getMyProfile(this.getToken).then((result) => {
      if (result.data.code == 200) {
        this.profile = result.data.data;
        window.console.log(this.profile);
        this.storeFamilyId(this.profile.familyId);
        this.storeMaster(this.profile.master)
        // this.storeFamilyCode(this.profile.familyCode);
      }
    })
  },
  computed: {
    // store getter
    ...mapGetters('token', [
      'getToken'
    ])
  },
  data: () => ({
    profile: {}
  }),
  methods: {
    // 저장 함수
    storeToken: function () {
      if (!this.getToken) {
        store.commit('token/setToken', this.$route.query.access_token);
        let query = Object.assign({}, this.$route.query);
        delete query.access_token;
        this.$router.replace({ query });
      }
    },
    storeFamilyId: function (familyId) {
      store.commit('family/setFamilyId', familyId);
    },
    storeFamilyCode: function (familyCode) {
      store.commit('family/setFamilyCode', familyCode);
    },
    storeMaster: function (master) {
      store.commit('profile/setMaster', master);
    },

    // 페이지 이동 함수
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
