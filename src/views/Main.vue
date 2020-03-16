<template>
  <div>
    <v-app-bar>
      <span>밥먹자(우점 메인 타이틀)</span>
      <v-spacer></v-spacer>
      <v-avatar color="orange" size="48" class="white--text">스팸</v-avatar>
    </v-app-bar>
    <v-content>
      <p>토큰 : {{getToken}}</p>
      <p>초대 링크: link</p>
      <p>메인 영역을 어떻게 채울까?</p>
    </v-content>
    <v-footer>
      <div>
        <v-btn text small @click="handleRestaurantButton">
          <v-icon>mdi-plus</v-icon>&nbsp;
          식당 등록하기
        </v-btn>
      </div>
      <div>
        <v-btn text small @click="choiceLunch">오늘의 점심은?</v-btn>
      </div>
      <div>
        <div class="float-left">
          <v-btn text small @click="handlefamRestaurantsButton">식당 목록</v-btn>
        </div>
        <div class="float-right">
          <v-btn text small @click="handlefamMembersButton">멤버 목록</v-btn>
        </div>
      </div>
    </v-footer>
  </div>
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
      window.console.log(result);
    })
  },
  computed: {
    ...mapGetters('token', [
      'getToken'
    ])
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
