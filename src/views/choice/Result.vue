<template>
  <v-card>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-toolbar-title>식당 후보</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <p>결과 : {{ $route.params.result }}</p>
      <v-btn icon @click="replay">
        <v-icon>mdi-refresh</v-icon>&nbsp;
        다시해!
      </v-btn>
    </v-content>
    <v-footer
      absolute
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
        >가즈아</v-btn>
      </div>
    </v-footer>
  </v-card>
</template>

<script>

export default {
  name: 'ChoiceLunchResult',
  components: {
    
  },
  data: () => ({
    companyName: '',
    newFamilyName: ''
  }),
  methods: {
    nextPage: function () {
    },
    prevPage: function () {
      this.$router.push('../ChoiceLunch2')
    },
    replay: function () {
      this.$router.push('../choiceLunchLoading')
    }
  }
}
</script>
