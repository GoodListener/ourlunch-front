<template>
  <div id="map"></div>
</template>

<script>
import Vue from 'vue'
import loadScriptOnce from 'load-script-once'

export default {
  name: 'KakaoMap',
  props: ['placeInfo'],
  data: () => ({
    map: {}
  }),
  created () {
    console.log(this.placeInfo);
    loadScriptOnce('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9371d0a85e46655cd886905c0cab174c')
      .then(() => {
        window.kakao.maps.load(() => {
          this.map = new window.kakao.maps.Map(document.getElementById('map'), {
            center: new window.kakao.maps.LatLng(this.placeInfo.y, this.placeInfo.x),
            level: 3
          })
          var markerPosition  = new kakao.maps.LatLng(this.placeInfo.y, this.placeInfo.x); 

          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
              position: markerPosition
          });

          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(this.map);

          var iwContent = `<div style="padding: 10px 10px;line-height:1.0;width:160px;height:100px;">
                <p style="font-size:13px;">${this.placeInfo.place_name}</p>
                <p style="font-size:12px;">${this.placeInfo.address_name}</p>
                <p style="font-size:10px;color:#535353;">${this.placeInfo.category_name}</p></div>`,
              iwPosition = new kakao.maps.LatLng(this.placeInfo.y, this.placeInfo.x); //인포윈도우 표시 위치입니다

          // 인포윈도우를 생성합니다
          var infowindow = new kakao.maps.InfoWindow({
              position : iwPosition, 
              content : iwContent 
          });
            
          // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
          infowindow.open(this.map, marker); 
        })
      })
      .catch((e) => {
        console.error(e)
      })
  }
}

</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
