<template>
  <div>
    <v-row>
        <v-col
            cols="8"
            md="4">
            <v-text-field
              v-model="myInfo.userName"
              :rules="nameRules"
              label="이름"
              required
              @change="updateValue"
            ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col
            cols="8"
            md="4">
            <v-text-field
              v-model="myInfo.appetite"
              label="나의 입맛은?"
              required
            ></v-text-field>
        </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  props: ['user'],
  data () {
    return {
      myInfo: {
        userName: '',
        appetite: ''
      },
      nameRules: [
        v => !!v || '이름을 입력해주세요.',
        v => v.length >= 2 || '이름을 2자 이상 입력해주세요.'
      ]
    }
  },
  created () {
    this.myInfo.userName = this.user.userName;
    this.myInfo.appetite = this.user.appetite;
  },
  methods: {
    updateValue () {
      this.$emit('fetchedMyInfo', this.myInfo);
    }
  }
}
</script>
