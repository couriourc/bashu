<template>
  <el-card class="pWall-container" shadow="hover">
    <el-row type="flex">
      <el-col>
        <el-image style="height: 400px" class="photo" fit="cover" :src="left_img" alt=""/>
      </el-col>
      <el-col>
        <el-image style="height: 200px" class="photo" fit="cover" :src="right_img[0]" alt=""/>
        <el-image style="height: 200px" class="photo" fit="cover" :src="right_img[1]" alt=""/>
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
    },right_img: {
      default() {
        return [require('@/assets/images/pro1.jpg'),require('@/assets/images/pro3.jpg')]
      }
    },
  }
}
</script>

<style scoped lang="less">
.pWall-container {
  height: auto;
}

</style>
