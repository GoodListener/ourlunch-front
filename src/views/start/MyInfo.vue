<template>
  <div>
    <v-row>
        <v-col
            cols="8"
            md="4">
            <v-text-field
              v-model="userFamily.userName"
              :rules="nameRules"
              label="이름"
              @change="updateValue"
              required
            ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col
            cols="8"
            md="4">
            <v-text-field
              v-model="userFamily.appetite"
              label="나의 입맛은?"
              @change="updateValue"
              required
            ></v-text-field>
        </v-col>
    </v-row>
  </div>
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
  },
  methods: {
    updateValue () {
      this.$emit('fetchedUserFamilyInfo', this.userFamily);
    }
  }
}
</script>
