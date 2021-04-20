<template>
  <el-card shadow="hover" >
    <el-container >
      <el-aside style="text-align: center" width="200px">
        <img :src="bookcontent.imageLink" alt="图片" style="width: 100%;height: 100%"/>
      </el-aside>

      <el-main style="line-height: 30px" >
        <el-row><span style="color: red">{{ bookcontent.name }}</span></el-row>
        <el-row><span>作者：{{ bookcontent.writer }}</span></el-row>
        <el-row><span>日期： {{ bookcontent.date }}</span></el-row>
        <el-row class="contentDe"><span>简介：{{ bookcontent.detail }}</span></el-row>
      </el-main>
    </el-container>
  </el-card>


</template>

<script>
export default {
  name: "BookDetail",
  props: {
    bookcontent: {
      default() {
        return {
          imageLink: require("@/assets/images/avatar.png"),
          name: "《红高粱》",
          date: "2020.01.02",
          writer: "小明",
          detail: "阆中悠久的历史，孕育了灿烂的文化，其中最有特色的莫过于民间传统文化。阆中的民间传统文化包括皮影、巴渝舞、川北灯戏、傩戏、竹马、剪纸、龙舟赛、竹枝词、民歌、木雕等。阆中要在旅游发展中有自己的特色，就必须要把最淳朴的巴渝遗风展现给世人；要把最淳朴的巴渝遗风展现给世人，保护和利用这些民间传统文化，是重要的途径。"
        }
      }
    }
  }
}
</script>

<style scoped>
.contentDe {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.imgStyle {
  margin-top: 20px;
}
</style>
