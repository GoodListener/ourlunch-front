<template>
  <div>
    <v-app-bar>
      <v-btn icon @click="prevPage()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>식당 등록</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "RestaurantAddContainer"
  }
</script>

<style scoped>

</style>