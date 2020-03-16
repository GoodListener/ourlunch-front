<template>
  <div>
    <v-row>
        <v-col
            cols="8"
            md="4">
            <v-text-field
              v-model="userFamily.companyName"
              label="회사명"
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
              v-model="userFamily.familyName"
              label="점심팸 이름"
              :rules="nameRules"
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
