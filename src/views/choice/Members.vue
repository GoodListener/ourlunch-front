<template>
  <v-card>
    <v-app-bar>
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
    <v-footer
      absolute
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
      console.log(result);
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
