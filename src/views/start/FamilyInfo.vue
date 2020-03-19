<template>
  <div>
    <v-text-field
      class="mt-10 px-5"
      v-model="userFamily.companyName"
      label="회사명"
      @change="updateValue"
      required
    ></v-text-field>
    <v-text-field
      class="mt-6 px-5"
      v-model="userFamily.familyName"
      label="점심팸 이름"
      :rules="nameRules"
      @change="updateValue"
      required
    ></v-text-field>
  </div>
</template>

<script>

export default {
  props: ['userFamily'],
  data () {
    return {
      nameRules: [
        v => !!v || '점심팸 이름을 입력해주세요.'
      ]
    }
  },
  methods: {
    updateValue () {
      this.$emit('fetchedUserFamilyInfo', this.userFamily);
    }
  }
}
</script>
