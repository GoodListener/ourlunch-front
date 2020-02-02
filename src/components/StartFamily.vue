<template>
  <div>
    <v-app-bar>
      우리의점심 점심팸 시작하기
    </v-app-bar>
      <Page :page="page">
        <PageContent content-no="1">
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
        </PageContent>

        <PageContent content-no="2">
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
                v-model="family.companyName"
                label="회사명"
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
                v-model="family.familyName"
                label="점심팸 이름"
                required
                @keyup.enter="handleEnter"
              ></v-text-field>
            </v-col>
          </v-row>
        </PageContent>
      </Page>
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
import Page from '@/components/ui/Page'
import PageContent from '@/components/ui/PageContent'
import { mapGetters } from 'vuex'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  name: 'StartFamily',
  components: {
    Page, PageContent
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
      if (this.page > 1) {
        this.$router.push('?page=' + (this.page - 1))
      } else {
        this.$router.push('/')
      }
    },
    handleEnter: function (e) {
      if (e.keyCode === 13) {
        this.nextPage()
      }
    },
    nextPage: function () {
      switch (this.page) {
        case 1:
          Promise.all([
            this.$validator.validate('name'),
            this.$validator.validate('appetite')
          ]).then(res => {
            if (res.reduce((a, b) => a & b)) {
              this.$router.push('?page=' + (this.page + 1))
            }
          })
          break
        case 2:
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
                this.$router.push('startComplete')
              }
            })
          break
      }
    }
  },
  computed: {
    ...mapGetters([
      'getLoginUser'
    ]),
    page: function () {
      if (this.$route.query && this.$route.query.page) {
        return parseInt(this.$route.query.page)
      } else {
        return 1
      }
    }
  }
}
</script>
