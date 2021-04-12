<template>
  <div class="box-card" style="margin-bottom: 1em;">
    <el-card shadow="hover">
      <div slot="header" class="clearfix">
        <span style="font-size: 1.5em;color: #ff5777">近期活动</span>
      </div>
      <el-carousel arrow="never" height="200px">
        <el-carousel-item v-for="(item,index) in actImgs" :label="index+1" :key="item+index">
          <img :src="item" alt="" style="width: 100%">
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ActList",
  props: {
    actImgs: {
      default() {
        return [
          require('@/assets/images/jiyi.png'),
          require('@/assets/images/jiyi.png'),
          require('@/assets/images/jiyi.png'),]
      }
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}


.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
