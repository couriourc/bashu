<template>
  <div class="live-container">
    <el-container>
      <el-header class="live-header live-banner" style="height: 40vh;">
        <el-row  type="flex">
          <el-card class="video-container">
          </el-card>
          <el-card class="aside-video-container">
            侧边视频容器
          </el-card>
        </el-row>

      </el-header>
      <el-main>
        <video-bar></video-bar>
        <video-bar></video-bar>
        <video-bar></video-bar>
        <video-bar></video-bar>
      </el-main>
    </el-container>
  </div>
</template>

<script>

import VideoBar from "./live_components/videoBar";

const fs = require('fs');
console.log(fs)

export default {
  components: {VideoBar},
  data() {
    return {}
  }, mounted() {
    const files = require.context('./live_assets/image', false, /.png$/).keys();

    console.log(files)
  }

}
</script>

<style scoped lang="less">
.live-container {
  width: 100vw;
  .live-header {
    height: auto;
    margin-top: 2em;

    .video-container {
      width: 80%;
      height: 40vh;
      color: #874521;
      border-radius: 2em 0 0 0;
    }

    .aside-video-container {
      margin-left: 3em;
      color: #874521;
      border-radius:  0 2em 0 0;

    }
  }
}
</style>
