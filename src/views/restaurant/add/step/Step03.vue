<template>
  <div>
    <div v-if="!selectPlace.id">식당을 검색해주세요.</div>
    <div>
      <p>{{ selectPlace.place_name }}</p>
      <p>{{ selectPlace.address_name }}</p>
    </div>
    <v-col class="d-flex" cols="12" sm="6">
      <v-select
        v-model="selectCategory"
        :items="restaurantCategory"
        filled
        label="카테고리 선택"
        @change="updateValue"
      ></v-select>
    </v-col>
  </div>
</template>

<script>
  import RestaurantCategory from '@/data/restaurantCategory.json'

  export default {
    name: 'RestaurantAddStep03',
    props: ['selectPlace'],
    data() {
      return {
        restaurantCategory: RestaurantCategory.category,
        selectCategory: ''
      }
    },
    methods: {
      updateValue() {
        this.$emit('fetchedCategory', this.selectCategory);
      }
    }
  }
</script>
