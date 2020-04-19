<template>
  <div>
    <v-text-field
      class="mt-10 px-5"
      label="회사명"
      v-model="companyName"
      required
    ></v-text-field>
    <v-text-field
      class="mt-6 px-5"
      label="점심팸 이름"
      v-model="familyName"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-row align="center" class="mx-5">
      <v-btn
        depressed dark large block
        class="mt-6 primary"
        @click="createFamily"
      >등록
      </v-btn>
    </v-row>
  </div>
</template>

<script>
  import api from '@/api/v1/index'
  import { mapMutations } from 'vuex'

  export default {
    name: 'FamilyStartStep02',
    created() {
      /* eslint-disable */
      const params = this.$route.params
      this.userName = params.userName
      this.appetite = params.appetite
    },
    data: () => ({
      nameRules: [
        v => !!v || '점심팸 이름을 입력해주세요.'
      ],
      userName: null,
      appetite: null,
      companyName: null,
      familyName: null
    }),
    methods: {
      ...mapMutations({
        setFamily: 'family/setFamily'
      }),
      createFamily() {
        const _this = this
        api.createFamily("", {
          userName: _this.userName,
          appetite: _this.appetite,
          companyName: _this.companyName,
          familyName: _this.familyName
        }).then(response => {
          const family = response.data.body.family
          this.setFamily(family)
          _this.$router.push({
            name: "FamilyStartComplete"
          })
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
