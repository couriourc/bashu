<template>
  <div class="home-container">
    <swiper />
    <bar/>
    <el-row type="flex" class="showBar">
      <el-col>
        <news class="card"/>
      </el-col>
      <el-col>
        <pWall/>
      </el-col>
    </el-row>
  </div>


</template>

<script>
export default {
  data() {
    return {
      imgs: [

      ]
    }
  },
  methods: {},
  components: {
    "swiper": () => import("@/components/Swiper/Swiper"),
    "bar": () => import("@/components/bar/bar"),
    "news": () => import("@/components/NewsList/NewList"),
    "pWall": () => import("@/components/pWall/pWall"),

  }
}
</script>

<style lang="less" scoped>
.showBar {
  margin-top: 2em;

}
</style>
