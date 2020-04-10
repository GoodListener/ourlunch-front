<template>
  <div>
    <label>
      <input type="text" v-model="id" class="input-id">
    </label>
    <button @click="login">로그인</button>
  </div>
</template>

<script>
  import api from '@/api/v1/index'

  export default {
    name: "LoginProxy",
    created() {
      /* eslint-disable */
    },
    data: () => ({
      id: null
    }),
    methods: {
      login() {
        api.devLogin(this.id)
          .then(response => {
            console.log(response)
            const dataBody = response.data.body
            this.$router.push({
              name: dataBody.path,
              query: {
                "accessToken": dataBody.accessToken
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

<style scoped>
  input, button {
    border: 1px solid black;
  }

  .input-id {
    width: 100px;
  }
</style>