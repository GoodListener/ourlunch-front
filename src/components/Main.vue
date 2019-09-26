<template>
  <div>
    <v-app-bar>밥먹자</v-app-bar>
    <v-content>
      <p>팸 이름: {{getFamily.familyName}}</p>
      <p>초대 링크: {{getFamily.inviteLink}}</p>
    </v-content>
    <v-footer>
      <div>
        <v-btn text small @click="handleRestaurantButton"><i class="fas fa-plus-circle plus-icon"></i> 식당 등록하기</v-btn>
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

export default {
  name: 'Main',
  computed: {
    ...mapGetters([
      'getLoginUser', 'getFamily'
    ])
  },
  methods: {
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
