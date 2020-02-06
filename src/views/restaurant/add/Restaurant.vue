<template>
  <div>
    <v-app-bar>
      <v-btn text small @click="prevPage()">
        <v-icon dark right>mdi-arrow-left</v-icon>&nbsp;
      </v-btn>
      식당 등록하기
    </v-app-bar>
    <transition name="fade">
      <router-view
        @fetchedSearchRestaurant="updateSearchRestaurant"
        :selectPlace="place"
        :searchRestaurantName="restaurantName"
        :searchRestaurants="restaurants"
        @fetchedCategory="updateCategory"
      />
    </transition>
    <v-footer
      app
      class="justify-center">
      <div class="my-5">
        <v-btn
          v-if="this.$router.currentRoute.name == 'preview'"
          rounded
          color="primary"
          class="mx-2"
          @click="movePage('pick')"
        >다음</v-btn>
        <v-btn
          v-if="this.$router.currentRoute.name == 'pick' && !!place.id && !!selectCategory"
          rounded
          color="primary"
          class="mx-2"
          @click="submit"
        >식당 등록</v-btn>
      </div>
    </v-footer>
  </div>
</template>
<script>

export default {
  name: 'Restaurant',
  components: {
  },
  methods: {
    prevPage: function () {
      this.$router.back()
    },
    movePage: function (path) {
      this.$router.push(path);
    },
    submit: function () {
      // eslint-disable-next-line
      console.log(this.place)
      // eslint-disable-next-line
      console.log(this.selectCategory)
    },
    updateSearchRestaurant (searchRestaurantInfo) {
      this.restaurantName = searchRestaurantInfo.restaurantName;
      this.restaurants = searchRestaurantInfo.restaurants;
      this.place = searchRestaurantInfo.place;
      this.selectCategory = '';
    },
    updateCategory (category) {
      this.selectCategory = category;
    }
  },
  data: () => ({
    restaurantName: '',
    restaurants: [],
    place: {},
    selectCategory: ''
  })
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
