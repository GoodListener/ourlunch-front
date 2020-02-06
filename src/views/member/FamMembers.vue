<template>
<div>
  <v-app-bar>
    <v-btn text small @click="handleMainButton">
      <v-icon dark right>mdi-arrow-left</v-icon>&nbsp;
    </v-btn>
    팸 명단
    <v-btn text small>
      <v-icon>mdi-plus</v-icon>&nbsp;
      초대링크 복사
    </v-btn>
  </v-app-bar>
  <v-list>
    <template v-for="(famMember, index) in famMembers">
      <v-list-item :key="index">
        <v-list-item-content>
          <v-list-item-title v-text="famMember.memberName"></v-list-item-title>
          <v-list-item-subtitle v-text="famMember.appetite"></v-list-item-subtitle>
          <br>
          <v-list-item-subtitle>
            미평가 식당: {{ famMember.restaurant }}개
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="flex-row align-center">
          <!-- if문에 팸대장여부 체크 -->
          <v-btn
            rounded
            outlined
            color="primary"
            class="me-2"
            @click="evaluateRestaurant(famRestaurant.RestaurantsName)"
          >식당 평가</v-btn>
          <v-btn
            rounded
            outlined
            color="grey darken-1"
          >삭제</v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider
        v-if="index + 1 < famMembers.length"
        :key="index"
      ></v-divider>
    </template>
  </v-list>
</div>
</template>

<script>
import { getMembers } from '@/api/index'

export default {
  props: ['title'],
  methods: {
    handleMainButton: function () {
      this.$router.push('Main')
    }
  },
  data: () => ({
    famMembers: []
  }),
  mounted: function () {
    getMembers().then(response => {
      this.famMembers = response.data
    })
  },
  name: 'FamMembers',
  components: {
    
  }
}
</script>
