<template>
  <div>
    <v-text-field
      class="mt-10 px-5"
      v-model="userName"
      :rules="nameRules"
      label="이름"
      required
    ></v-text-field>
    <v-text-field
      class="mt-6 px-5"
      v-model="appetite"
      label="나의 입맛은?"
      required
    ></v-text-field>
    <v-row align="center" class="mx-5">
      <v-btn
        depressed dark large block
        class="mt-6 primary"
        @click="nextPage"
      >다음
      </v-btn>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'FamilyStartStep01',
    created() {
      /* eslint-disable */
    },
    data: () => ({
      nameRules: [
        v => !!v || '이름을 입력해주세요.',
        v => v.length >= 2 || '이름을 2자 이상 입력해주세요.'
      ],
      userName: "",
      appetite: null
    }),
    methods: {
      nextPage() {
        this.$router.push({
          name: 'FamilyStartStep02',
          params: {
            userName: this.userName,
            appetite: this.appetite
          }
        })
      }
    }
  }
</script>
