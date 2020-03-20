<template>
  <div>
    <v-text-field
      class="mt-10 px-5"
      v-model="restaurantName"
      :rules="nameRules"
      label="식당 이름 입력"
      required
      @keyup.enter="searchRestaurant"
    ></v-text-field>
    <v-list>
      <template
        v-for="restaurant in restaurants"
      >
      <v-list-item
        :key="restaurant.key"
        color="primary"
        @click="selectRestaurant(restaurant)"
      >
        <v-list-item-content>
          <v-list-item-title v-text="restaurant.place_name"></v-list-item-title>
          <v-list-item-subtitle v-text="restaurant.address_name"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text v-text="restaurant.distance + 'm'"></v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
      <v-divider :key="restaurant.key"></v-divider>
    </template>
    </v-list>
  </div>
</template>

<script>
import getSearchRestaurant from '@/api/getRestaurants.js'

export default {
  props: ['selectPlace', 'searchRestaurantName', 'searchRestaurants'],
  data () {
    return {
      restaurantName: '',
      restaurants: [],
      place: {},
      nameRules: [
        v => !!v || '식당 이름을 입력해주세요.',
        v => v.length >= 2 || '이름을 2자 이상 입력해주세요.'
      ]
    }
  },
  created () {
      this.place = this.selectPlace;
      this.restaurantName = this.searchRestaurantName;
      this.restaurants = this.searchRestaurants;
  },
  methods: {
    updateValue () {
      this.$emit('fetchedSearchRestaurant', {
        restaurantName: this.restaurantName,
        restaurants: this.restaurants,
        place: this.place
      });
    },
    searchRestaurant () {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getSearchRestaurant({
          query: this.restaurantName,
          lat: latitude,
          lng: longitude,
          radius: 1500, // 1500m
          category: 'FD6' // kakao category : 음식점
        })
          .then(response => {
            this.restaurants = response.data.documents
          })
      });
      
    },
    selectRestaurant (target) {
      this.place = target;
      this.updateValue();
      this.$router.push('preview');
    }
  }
}
</script>
