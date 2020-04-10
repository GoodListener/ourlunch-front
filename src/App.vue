<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App'
};
</script>

<style>
.v-application--wrap {
  background-color: #E6E6E6 !important;
}

.v-card {
  padding: 0 !important;
  height: 100%;
}

@media (min-width: 720px) {
  .v-card {
    width: 720px !important;
    margin: 0 auto;
  }
}

</style>