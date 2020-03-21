<template>
  <v-content>
    <v-text-field
      class="mt-10 px-5"
      v-model="userFamily.userName"
      :rules="nameRules"
      label="이름"
      required
    ></v-text-field>
    <v-text-field
      class="mt-6 px-5"
      v-model="userFamily.appetite"
      label="나의 입맛은?"
      required
    ></v-text-field>
  </v-content>
</template>

<script>

export default {
  props: ['userFamily'],
  data () {
    return {
      nameRules: [
        v => !!v || '이름을 입력해주세요.',
        v => v.length >= 2 || '이름을 2자 이상 입력해주세요.'
      ]
    }
  }
}
</script>
