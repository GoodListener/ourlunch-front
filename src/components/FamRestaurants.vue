<template>
<div>
  <v-app-bar>
    <v-btn text small @click="handleMainButton">
      <v-icon dark right>mdi-arrow-left</v-icon>&nbsp;
    </v-btn>
    식당 목록
    <v-btn text small @click="handleRestaurantButton">
      <v-icon>mdi-plus</v-icon>&nbsp;
      식당 추가
    </v-btn>
  </v-app-bar>
  <v-list>
    <template v-for="(famRestaurant, index) in famRestaurants">
      <v-list-item :key="index">
        <v-list-item-content>
          <v-list-item-title v-text="famRestaurant.RestaurantsName"></v-list-item-title>
          <v-list-item-subtitle v-text="famRestaurant.type"></v-list-item-subtitle>
          <v-list-item-subtitle>
            평점: {{ famRestaurant.grade }}점
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="flex-row align-center">
          <span v-if="famRestaurant.grade">
            <i v-for="index in 5" :key="index"
              :class="index <= famRestaurant.grade / 2 ? 'fas fa-star star' :
                      index <= Math.ceil(famRestaurant.grade / 2) && famRestaurant.grade % 2 ? 'fas fa-star-half-alt star' : 'far fa-star emptyStar'"></i>
            <v-btn
              rounded
              outlined
              color="primary"
              class="mx-2"
              @click="evaluateRestaurant(famRestaurant.RestaurantsName)"
            >식당 평가</v-btn>
            <v-btn
              rounded
              outlined
              color="grey darken-1"
              @click="deleteRestaurant(famRestaurant.RestaurantsName)"
            >삭제</v-btn>
          </span>
        </v-list-item-action>
      </v-list-item>
    </template>
  </v-list>
  <modals-container/>
</div>
</template>

<script>
import { getFamilyRestaurant } from '@/api/index'
import evaluateRestaurantModal from './modals/evaluateRestaurant'
import confirmDeleteModal from './modals/confirmDelete'

export default {
  name: 'FamRestaurants',
  components: {
    
  },
  props: ['title'],
  methods: {
    handleMainButton: function () {
      this.$router.push('Main')
    },
    handleRestaurantButton: function () {
      this.$router.push('restaurant')
    },
    evaluateRestaurant (restaurantName) {
      this.$modal.show(evaluateRestaurantModal, {
        restaurantName: restaurantName
      }, {
        width: '330px',
        height: '160px',
        draggable: false
      })
    },
    deleteRestaurant (restaurantName) {
      this.$modal.show(confirmDeleteModal, {
        restaurantName: restaurantName
      }, {
        width: '330px',
        height: '160px',
        draggable: false
      })
    }
  },
  data: () => ({
    famRestaurants: [],
    showGradeModal: false
  }),
  mounted: function () {
    getFamilyRestaurant().then(response => {
      this.famRestaurants = response.data
    })
  }
}
</script>
<style scoped>
.star{
  color: #f7e63b;
}
.emptyStar{
  color: rgba(55, 53, 47, 0.4);
}
</style>
