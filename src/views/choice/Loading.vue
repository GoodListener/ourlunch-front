<template>
  <v-card>
    <v-row
      class="fill-height"
      align-content="center"
      justify="center"
    >
      <v-col
        class="subtitle-1 text-center"
        cols="12"
      >
        오늘의 점심은........
      </v-col>
      <v-col cols="6">
        <v-progress-linear
          color="deep-purple accent-4"
          :active="loading"
          :indeterminate="loading"
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import api from '@/api/index'

export default {
  name: 'ChoiceLunchLoading',
  components: {
    
  },
  mounted: function () {
    api.getFamilyRestaurant().then(response => {
      this.restaurantList = response.data
      this.nextPage()
    })
  },
  data: () => ({
    restaurantList: [],
    loading: true
  }),
  methods: {
    nextPage: function () {
      setTimeout(() => {
        this.$router.push('choiceLunchResult/' + this.choiceLunch().RestaurantsName)
      }, 50000)
    },
    choiceLunch: function () {
      const chooseIndex = parseInt(Math.random() * this.restaurantList.length)
      return this.restaurantList[chooseIndex]
    }
  }
}

</script>
