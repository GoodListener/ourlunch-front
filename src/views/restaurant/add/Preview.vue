<template>
  <div>
    <div v-if="!selectPlace.id">식당을 검색해주세요.</div>
    <KakaoMap :placeInfo="selectPlace"></KaKaoMap>
  </div>
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
