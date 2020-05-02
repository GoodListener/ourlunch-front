<template>
  <v-card>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-toolbar-title>우리의 점심</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon v-if="profile.master" color="#FF6559">mdi-crown</v-icon>
      <v-avatar color="#FF6559" size="48" class="white--text ml-5">{{profile.family.name}}</v-avatar>
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
  import api from '@/api/v1/index'
  import { mapGetters } from 'vuex'
  import { store } from '../store'

  export default {
    name: 'Main',
    created() {
      /* eslint-disable */
    },
    mounted: function () {
      // 토큰 store에 저장
      this.storeToken();
      // 나의 프로필 저장
      api.getMyProfile(this.getToken).then(response => {
        if (response.data.code === 200) {
          this.profile = response.data.body;
          this.storeFamilyInfo(this.profile.family);
          this.storeMaster(this.profile.master)
        }
      })
    },
    data: () => ({
      profile: {
        family: {}
      }
    }),
    computed: {
      // store getter
      ...mapGetters('token', [
        'getToken'
      ])
    },
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
      storeFamilyInfo: function (familyInfo) {
        store.commit('family/setFamilyInfo', familyInfo);
      },
      storeMaster: function (master) {
        store.commit('profile/setMaster', master);
      },

      // 페이지 이동 함수
      choiceLunch: function () {
        this.$router.push('choiceLunch1')
      },
      handleRestaurantButton: function () {
        this.$router.push({
          name: 'RestaurantList'
        })
      },
      handlefamRestaurantsButton: function () {
        this.$router.push({
          name: 'RestaurantList'
        })
      },
      handlefamMembersButton: function () {
        this.$router.push('famMembers')
      }

    }
  }
</script>
