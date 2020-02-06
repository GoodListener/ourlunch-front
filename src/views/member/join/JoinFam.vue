<template>
  <div>
    <v-app-bar>
      {{$route.params.familyName}} 점심팸 시작하기
    </v-app-bar>
    <v-row justify="space-around">
      <v-col cols="5">
        <v-img :src="getLoginUser.profile_image" aspect-ratio="1.7"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="8"
        md="4">
        <v-text-field
          v-model="user.userName"
          :rules="nameRules"
          label="이름"
          required
          @keyup.enter="handleEnter"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="8"
        md="4">
        <v-text-field
          v-model="user.appetite"
          label="나의 입맛은?"
          required
          @keyup.enter="handleEnter"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-footer
      app
      class="justify-center">
      <div class="my-5">
        <v-btn
          rounded
          color="primary"
          class="mx-2"
          @click="complete"
        >완료</v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  name: 'JoinFam',
  components: {
    
  },
  data: () => ({
    user: {
      userName: '',
      appetite: ''
    },
    family: {
      isJoined: false,
      companyName: '',
      familyName: ''
    },
    nameRules: [
      v => !!v || '이름을 입력해주세요.',
      v => v.length >= 2 || '이름을 2자 이상 입력해주세요.'
    ]
  }),
  computed: {
    ...mapGetters([
      'getLoginUser'
    ])
  },
  methods: {
    handleEnter: function (e) {
      if (e.keyCode === 13) {
        this.complete()
      }
    },
    complete: function () {
      this.$validator.validateAll()
        .then(res => {
          if (res) {
            const fullAuthUser = this.getLoginUser
            fullAuthUser.name = this.user.userName
            fullAuthUser.appetite = this.user.appetite
            fullAuthUser.isFullAuth = true
            this.$store.commit('loginUser', fullAuthUser)

            this.family.isJoined = true
            this.family.inviteLink = 'family/' + this.family.familyName
            this.$store.commit('joinFamily', this.family)
            this.$router.push('../joinComplete/' + this.$route.params.familyName)
          }
        })
    }
  }
}
</script>
