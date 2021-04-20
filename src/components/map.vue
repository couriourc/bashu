<template>
  <div class="map-container">
    <baidu-map :center="point" :scroll-wheel-zoom="true" :zoom="zoom" class="map" @ready="mapReady">
      <bm-marker :position="point" animation="BMAP_ANIMATION_BOUNCE"/>
      <bm-geolocation
        :autoLocation="true"
        :showAddressBar="true"
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
      />
    </baidu-map>

  </div>
</template>
<script>
export default {
  data() {
    return {
      point: {lng: 106.073086, lat: 30.823736},
      zoom: 10,
    }
  },
  methods: {
    mapReady({BMap, map}) {
      // 选择一个经纬度作为中心点
      this.point = new BMap.Point(106.073086, 30.823736);
      console.log(this.point)
      map.centerAndZoom(this.point, 12);
    },
  }
}
</script>

<style>
.map-container{
  margin-bottom: 4em;
}
.map {
  margin-top: 4em;
  display: inline-block;
  width: 80vw;
  height: 35vh;
}
</style>
