<template>
  <div>
    <v-app-bar>
      점심팸 시작하기
    </v-app-bar>
    <v-text-field
      class="mt-6 px-5"
      v-model="family.code"
      label="점심팸 코드"
      required
    ></v-text-field>
    <v-footer
      app
      class="justify-center">
      <div class="my-5">
        <v-btn
          rounded
          color="primary"
          class="mx-2"
          @click="nextStep"
        >다음
        </v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
  import api from '@/api/v1/index'

  export default {
    name: 'FamilyJoinStep01',
    created() {
      /* eslint-disable */
    },
    data: () => ({
      family: {
        code: null
      }
    }),
    methods: {
      nextStep() {
        api.getFamily("", this.family.code)
          .then(response => {
            console.log(response)
            // TODO response code를 보고 유효하지 않은 점심팸이면 팝업 / 유효한 점심팸이면 다음 스텝
            const family = response.data.body
            this.$router.push({
              name: 'FamilyJoinStep02',
              params: {
                familyName: family.name,
                familyCode: this.family.code
              }
            })
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>
