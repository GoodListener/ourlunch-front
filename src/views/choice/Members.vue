<template>
  <v-card>
    <v-app-bar>
      <v-btn icon @click="prevPage()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>점심 멤버</v-toolbar-title>
      <v-spacer></v-spacer>
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
              <v-list-item-title v-text="famMember.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </template>
    </v-list>
    <v-row align="center" class="mx-5">
      <v-col cols="2">
        <v-btn
          depressed dark large block
          class="mt-6"
          color="#342A29"
          @click="prevPage"
        >이전</v-btn>
      </v-col>
      <v-col cols="10">
        <v-btn
          depressed dark large block
          class="mt-6"
          color="#FF6559"
          @click="nextPage"
        >다음</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import api from '@/api/index'
import { mapGetters } from 'vuex'

export default {
  name: 'ChoiceLunch1',
  mounted: function () {
    api.getMembers(this.getToken, this.getFamilyId).then(response => {
      var result = response.data;
      if (result.code == 200) {
        this.famMembers = result.data.members;
      }
    })
  },
  data: () => ({
    famMembers: []
  }),
  computed: {
    ...mapGetters('family', [
      'getFamilyId',
      'getFamilyCode'
    ]),
    ...mapGetters('token', [
      'getToken'
    ])
  },
  methods: {
    nextPage: function () {
      // eslint-disable-next-line
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
