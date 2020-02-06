<template>
  <div>
    <v-app-bar>
      우리의점심 점심팸 시작하기
    </v-app-bar>
      <v-row justify="space-around">
        <v-col cols="5">
            <v-img :src="getLoginUser.profile_image" aspect-ratio="1.7"></v-img>
        </v-col>
      </v-row>
      <transition name="fade">
        <router-view
          @fetchedMyInfo="updateMyInfo"
          :user="user"
          @fetchedFamilyInfo="updateFamilyInfo"
          :family="family"
        />
      </transition>
      <v-footer
        app
        class="justify-center">
        <div class="my-5">
          <v-btn
            rounded
            outlined
            color="primary"
            class="mx-2"
            @click="prevPage"
          >이전</v-btn>
          <v-btn
            rounded
            color="primary"
            class="mx-2"
            @click="nextPage"
          >다음</v-btn>
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
  name: 'StartFamily',
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
    }
  }),
  methods: {
    prevPage: function () {
      this.$router.go(-1);
    },
    updateMyInfo (user) {
      this.user = user;
    },
    updateFamilyInfo (family) {
      this.family = family;
    },
    nextPage: function () {
      switch (this.$router.currentRoute.name) {
        case 'myInfo':
          this.$router.push('familyInfo');
          break;
        case 'familyInfo':
          this.$router.push('/startComplete');
          break;
      }
      // switch (this.page) {
      //   case 1:
      //     Promise.all([
      //       this.$validator.validate('name'),
      //       this.$validator.validate('appetite')
      //     ]).then(res => {
      //       if (res.reduce((a, b) => a & b)) {
      //         this.$router.push('?page=' + (this.page + 1))
      //       }
      //     })
      //     break
      //   case 2:
      //     this.$validator.validateAll()
      //       .then(res => {
      //         if (res) {
      //           const fullAuthUser = this.getLoginUser
      //           fullAuthUser.name = this.user.userName
      //           fullAuthUser.appetite = this.user.appetite
      //           fullAuthUser.isFullAuth = true
      //           this.$store.commit('loginUser', fullAuthUser)

      //           this.family.isJoined = true
      //           this.family.inviteLink = 'family/' + this.family.familyName
      //           this.$store.commit('joinFamily', this.family)
      //           this.$router.push('startComplete')
      //         }
      //       })
      //     break
      // }
    }
  },
  computed: {
    ...mapGetters([
      'getLoginUser'
    ])
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
