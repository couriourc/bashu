<template>
  <el-card class="pWall-container" shadow="hover">
    <el-row type="flex">
      <el-col>
        <el-image :src="left_img" alt="" class="photo" fit="cover" style="height: 400px"/>
      </el-col>
      <el-col>
        <el-image :src="right_img[0]" alt="" class="photo" fit="cover" style="height: 200px"/>
        <el-image :src="right_img[1]" alt="" class="photo" fit="cover" style="height: 200px"/>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    left_img: {
      default() {
        return require('@/assets/images/pro2.jpg')
      }
    }, right_img: {
      default() {
        return [require('@/assets/images/pro1.jpg'), require('@/assets/images/pro3.jpg')]
      }
    },
  }
}
</script>

<style lang="less" scoped>
.pWall-container {
  height: auto;
}

</style>
