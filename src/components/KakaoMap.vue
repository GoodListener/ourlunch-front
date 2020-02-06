<template>
  <div><div id="map"></div></div>
</template>

<script>
import loadScriptOnce from 'load-script-once'

export default {
  name: 'KakaoMap',
  props: ['placeInfo'],
  data: () => ({
    map: {}
  }),
  created () {
    loadScriptOnce('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9371d0a85e46655cd886905c0cab174c')
      .then(() => {
        window.kakao.maps.load(() => {
          this.map = new window.kakao.maps.Map(document.getElementById('map'), {
            center: new window.kakao.maps.LatLng(this.placeInfo.y, this.placeInfo.x),
            level: 3
          })
        })
      })
      .catch((e) => {
        // eslint-disable-next-line
        console.error(e)
      })
  }
}

</script>

<style scoped>
#map {
  width: 100%;
  height: 300px;
}
</style>
