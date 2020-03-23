<template>
  <v-card>
    <v-app-bar>
      <v-btn icon @click="prevPage()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>식당 등록</v-toolbar-title>
      <v-spacer></v-spacer>
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
    <v-row
    v-if="this.$router.currentRoute.name != 'search'"
    align="center" class="mx-5"
    >
      <v-btn
        v-if="this.$router.currentRoute.name == 'preview'"
        depressed dark large block
        class="mt-6"
        color="#FF6559"
        @click="movePage('pick')"
      >다음</v-btn>
      <v-btn
        v-if="this.$router.currentRoute.name == 'pick' && !!place.id && !!selectCategory"
        depressed dark large block
        class="mt-6"
        color="#FF6559"
        @click="submit"
      >식당 등록</v-btn>
    </v-row>
  </v-card>
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
      console.log(this.place)
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
