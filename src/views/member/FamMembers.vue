<template>
  <v-card>
    <v-app-bar>
      <v-btn icon @click="handleMainButton">
        <v-icon dark right>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>멤버</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>
    <v-list>
      <template v-for="(famMember, index) in famMembers">
        <v-list-item :key="index">
          <v-list-item-content>
            <v-list-item-title v-text="famMember.name"></v-list-item-title>
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
  </v-card>
</template>

<script>
  import api from '@/api/v1/index'
  import {mapGetters} from 'vuex'

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
  computed: {
    ...mapGetters('family', [
      'getFamilyId'
    ]),
    ...mapGetters('token', [
      'getToken'
    ])
  },
  mounted: function () {
    api.getMembers(this.getToken, this.getFamilyId).then(response => {
      var result = response.data;
      if (result.code == 200) {
        this.famMembers = result.data.members;
      }
    })
  },
  name: 'FamMembers',
  components: {
    
  }
}
</script>
