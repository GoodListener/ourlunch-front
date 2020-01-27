<template>
  <div>
    <v-app-bar>
      <v-btn text small @click="prevPage()">
        <v-icon dark right>mdi-arrow-left</v-icon>&nbsp;
      </v-btn>
      식당 등록하기
    </v-app-bar>
    <Page :page="content">
      <PageContent content-no="searchRestaurant">
        <div>
          <v-row>
            <v-col
              cols="8"
              md="4"
            >
              <v-text-field
                v-model="restaurantName"
                :rules="nameRules"
                label="식당"
                required
                @keyup.enter="searchRestaurant"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <v-list @click="selectRestaurant(restaurant)">
          <li class="list" v-for="restaurant in restaurants" v-bind:key="restaurant.key" @click="selectRestaurant(restaurant)">
            <div>
              <p>{{restaurant.place_name }}</p>
              <p>{{restaurant.address_name}}</p>
            </div>
          </li>
          <template v-for="restaurant in restaurants">
            <v-list-item-group
              :key="restaurant.key"
              color="primary"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="restaurant.place_name"></v-list-item-title>
                  <v-list-item-subtitle v-text="restaurant.address_name"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </template>
        </v-list>
      </PageContent>

      <PageContent content-no="restaurantMap">
        <div>
          <div v-if="!place.id">식당을 검색해주세요.</div>
          <KakaoMap :place="place"></KaKaoMap>
        </div>
      </PageContent>

      <PageContent content-no="pickRestaurant">
        <div class="pick_restaurant_area">
          <div v-if="!place.id">식당을 검색해주세요.</div>
          <div>
            <p>{{place.place_name }}</p>
            <p>{{place.address_name}}</p>
          </div>
          <div v-if="!!place.id">
            <select v-model="selectCategory">
              <option v-for="(category, index) in restaurantCategory" :key="index">{{category}}</option>
            </select>
          </div>
        </div>
      </PageContent>
    </Page>
    <div class="buttons">
      <!-- <Button v-if="page >= 0" class="default" @click="prevPage()">이전</Button> -->
      <Button v-if="page != 0 && page < (contentArray.length - 1)" class="primary" @click="nextPage()">다음</Button>
      <Button v-if="content == 'pickRestaurant' && !!place.id" class="primary" @click="submit()">식당 등록</Button>
    </div>
  </div>
</template>
<script>
import Button from '@/components/ui/Button'
import Page from '@/components/ui/Page'
import PageContent from '@/components/ui/PageContent'
import { getSearchRestaurant } from '../api/index.js'
import KakaoMap from '@/components/KakaoMap'
import RestaurantCategory from '@/data/restaurantCategory.json'
import { mapGetters } from 'vuex'

export default {
  name: 'Restaurant',
  components: {
    Button, Page, PageContent, KakaoMap
  },
  methods: {
    searchRestaurant: function () {
      getSearchRestaurant({
        query: this.restaurantName,
        lat: this.getCompany.lat,
        lng: this.getCompany.lng, // 위치는 브이플렉스
        radius: 1500, // 1500m
        category: 'FD6' // kakao category : 음식점
      })
        .then(response => {
          this.restaurants = response.data.documents
        })
    },
    selectRestaurant: function (target) {
      this.place = target
      this.$router.push('?content=' + this.contentArray[this.page + 1])
    },
    prevPage: function () {
      this.$router.back()
    },
    nextPage: function () {
      this.$router.push('?content=' + this.contentArray[this.page + 1])
    },
    submit: function () {
      // eslint-disable-next-line
      console.log(this.place)
      // eslint-disable-next-line
      console.log(this.selectCategory)
    }
  },
  data: () => ({
    contentArray: ['searchRestaurant', 'restaurantMap', 'pickRestaurant'],
    restaurantName: '',
    restaurants: [],
    place: {},
    restaurantCategory: RestaurantCategory.category,
    selectCategory: '',
    nameRules: [
      v => !!v || '식당 이름을 입력해주세요.',
      v => v.length >= 2 || '식당 이름을 2자 이상 입력해주세요.'
    ]
  }),
  computed: {
    ...mapGetters([
      'getCompany'
    ]),
    content: function () {
      if (this.$route.query && this.$route.query.content) {
        return this.$route.query.content
      } else {
        return this.contentArray[this.page]
      }
    },
    page: function () {
      if (this.contentArray.indexOf(this.$route.query.content) > -1) {
        return this.contentArray.indexOf(this.$route.query.content)
      } else {
        return 0
      }
    }
  }
}

</script>

<style scoped>
.topFixArea{
  position: fixed;
  top: 0px;
  left: 0px;
  width:100%;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
}
li.list{
  list-style: none;
  margin-bottom: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
  border: 1px
  solid #DCDCDC;
  background-color : white;
}

.pick_restaurant_area
{
  height: 300px;
}
.backButton{
  float: left;
  padding: 18px 15px 18px 15px;
  text-align: center;
}
.copy_btn{
  float: right;
  width: auto;
}

</style>
