<template>
  <div>
    <v-app-bar>
      오늘의 점심은?
    </v-app-bar>
    <v-content>
      <p>결과 : {{ $route.params.result }}</p>
      <v-btn text small @click="replay">
        <v-icon>mdi-refresh</v-icon>&nbsp;
        다시해!
      </v-btn>
    </v-content>
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
        >가즈아</v-btn>
      </div>
    </v-footer>
  </div>
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
      // eslint-disable-next-line
      console.log('가즈아')
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
