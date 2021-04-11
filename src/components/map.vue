<template>
  <div class="map-container">
    <baidu-map class="map" :center="point" :scroll-wheel-zoom="true" :zoom="zoom" @ready="mapReady" >
      <bm-marker :position="point" animation="BMAP_ANIMATION_BOUNCE" />
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      />
    </baidu-map>

    <p style="color: #39200f">地址:四川省南充市顺庆区师大路1号(华凤校区)</p>
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
.map {
  margin-top: 4em;
  display: inline-block;
  width: 80vw;
  height: 35vh;
}
</style>
