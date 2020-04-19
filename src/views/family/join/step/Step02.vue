<template>
  <div>
    <v-app-bar>
      {{ this.family.name }} 점심팸 시작하기
    </v-app-bar>
    <v-row justify="space-around">
      <v-col cols="5">
        <!--        <v-img :src="getLoginUser.profile_image" aspect-ratio="1.7"></v-img>-->
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="8"
        md="4">
        <v-text-field
          v-model="user.name"
          label="이름"
          required
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
          @click="joinFamily"
        >완료
        </v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
  import api from '@/api/v1/index'

  export default {
    name: 'FamilyJoinStep02',
    created() {
      /* eslint-disable */
      this.family.name = this.$route.params.familyName
      this.family.code = this.$route.params.familyCode
    },
    data: () => ({
      user: {
        name: null,
        appetite: null
      },
      family: {
        name: null,
        code: null
      }
    }),
    methods: {
      joinFamily() {
        api.joinFamily("accessToken", {
          familyCode: this.family.code,
          name: this.user.name,
          appetite: this.user.appetite
        }).then(response => {
          console.log(response)
          this.$router.push({
            name: 'FamilyJoinComplete'
          })
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
