<template>
  <div>
    <el-card class="box-card" style="margin: 2em auto;background: #cd9b69" shadow="never" :body-style="{ padding: '1em' }">
      <el-row >
        <el-col>
          <h1 style="color: #fffae8">{{ title }}</h1>
          <hr style="height: 0;width: 100%;margin-bottom: 10px;margin-top: 10px" />
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <el-image
              style="width: 100%"
              :src="bannerSrc"
              class="image"/>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "videoBar",
  props: {
    title: {
      default() {
        return '技艺直播'
      }
    },
    bannerSrc: {
      default() {
        return 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
      }
    }
  }
}
</script>

<style scoped>

</style>
