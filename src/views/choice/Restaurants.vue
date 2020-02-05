<template>
  <div>
      <v-app-bar>
        오늘의 식당 후보는?
      </v-app-bar>
      <v-list>
        <template v-for="(restaurant, index) in restaurantList">
          <v-list-item-group
            :key="index"
            color="primary"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="restaurant.RestaurantsName"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </template>
      </v-list>
      <v-footer
        app
        class="justify-center"
      >
        <div class="my-5">
          <v-btn
            rounded
            outlined
            color="primary"
            class="mx-2"
            @click="prevPage()"
          >이전</v-btn>
          <v-btn
            rounded
            color="primary"
            class="mx-2"
            @click="nextPage()"
          >다음</v-btn>
        </div>
      </v-footer>
  </div>
</template>

<script>
import { getFamilyRestaurant } from '@/api/index'

export default {
  name: 'ChoiceLunch2',
  components: {
    
  },
  mounted: function () {
    getFamilyRestaurant().then(response => {
      this.restaurantList = response.data
    })
  },
  data: () => ({
    restaurantList: []
  }),
  methods: {
    nextPage: function () {
      this.$router.push('choiceLunchLoading')
    },
    prevPage: function () {
      this.$router.push('choiceLunch1')
    },
    choiceLunch: function () {
      const chooseIndex = parseInt(Math.random() * this.restaurantList.length)
      return this.restaurantList[chooseIndex]
    }
  }
}
</script>

<style scoped>

button.base_button.default {
  width: 20%;
}

button.base_button.primary {
  width: 50%;
}

.title {
  margin-bottom: 50px;
}

.buttons {
  width: 100%;
  position: fixed;
  bottom: 50px;
}

ul{
  padding: 0;
}

li.list{
  list-style: none;
  margin: 5px;
  padding: 5px;
  border: 1px solid #DCDCDC;
  background-color : #fdfdfd;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
