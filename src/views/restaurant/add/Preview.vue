<template>
  <v-content class="map_content">
    <div v-if="!selectPlace.id">식당을 검색해주세요.</div>
    <KakaoMap :placeInfo="selectPlace"></KaKaoMap>
  </v-content>
</template>

<script>
import KakaoMap from '@/components/KakaoMap'

export default {
  props: ['selectPlace'],
  components: {
    KakaoMap
  }
}
</script>

<style scoped>
.map_content {
  height: calc(100% - 64px - 88px);
}
</style>