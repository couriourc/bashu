<template>
  <el-card class="pWall-container" shadow="hover">
    <el-row type="flex">
      <el-col >
        <el-image style="height: 400px" class="photo" fit="cover" :src="require('@/assets/images/pro2.jpg')" alt="" />
      </el-col>
      <el-col>
        <el-image style="height: 200px" class="photo" fit="cover" :src="require('@/assets/images/pro1.jpg')" alt="" />
        <el-image style="height: 200px" class="photo" fit="cover" :src="require('@/assets/images/pro1.jpg')" alt="" />
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {

  name: "pWall"
}
</script>

<style scoped lang="less">
.pWall-container{
  height: auto;
}

</style>
