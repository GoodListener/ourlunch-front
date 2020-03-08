<template>
  <div>
    <v-row>
        <v-col
            cols="8"
            md="4">
            <v-text-field
              v-model="familyInfo.companyName"
              label="회사명"
              required
            ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col
            cols="8"
            md="4">
            <v-text-field
              v-model="familyInfo.familyName"
              label="점심팸 이름"
              :rules="nameRules"
              required
            ></v-text-field>
        </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  props: ['family'],
  data () {
    return {
      familyInfo: {
        isJoined: false,
        companyName: '',
        familyName: ''
      },
      nameRules: [
        v => !!v || '점심팸 이름을 입력해주세요.'
      ]
    }
  },
  created () {
    this.familyInfo.companyName = this.family.companyName;
    this.familyInfo.familyName = this.family.familyName;
  },
  methods: {
    
  }
}
</script>
