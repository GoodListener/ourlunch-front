<template>
  <div>
    <v-app-bar>
      오늘의 점심 멤버는?
    </v-app-bar>
    <v-list>
      <template v-for="(famMember, index) in famMembers">
        <v-list-item-group
          :key="index"
          color="primary"
          @click="selectMember(index)"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="famMember.memberName"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </template>
    </v-list>
    <v-footer
      app
      class="justify-center">
      <div class="my-5">
        <v-btn
          rounded
          outlined
          color="primary"
          class="mx-2"
          @click="prevPage()"
        >이전</v-btn>
        <v-btn
          rounded
          color="primary"
          class="mx-2"
          @click="nextPage()"
        >다음</v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
import { getMembers } from '@/api/index'

export default {
  name: 'ChoiceLunch1',
  components: {
    
  },
  data: () => ({
    famMembers: []
  }),
  mounted: function () {
    getMembers().then(response => {
      this.famMembers = response.data
    })
  },
  methods: {
    nextPage: function () {
      // eslint-disable-next-line
      console.log(this.famMembers.filter(famMember => famMember.isSelected))
      this.$router.push('choiceLunch2')
    },
    prevPage: function () {
      this.$router.push('Main')
    },
    selectMember: function (index) {
      this.$set(this.famMembers[index], 'isSelected', !this.famMembers[index].isSelected)
    }
  }
}
</script>
