<template>
  <el-card shadow="hover">
    <el-container>
      <el-aside width="200px" style="text-align: center">
        <div class="imgStyle">
          <img :src="bookcontent.imageLink" alt="">
        </div>
      </el-aside>

      <el-main style="line-height: 30px">
        <el-row><span style="color: red">{{bookcontent.name}}</span></el-row>
        <el-row>
          <span>作者：</span>
          {{bookcontent.writer}}
        </el-row>
        <el-row>
          <span>日期：</span>
          {{bookcontent.date}}
        </el-row>
        <el-row class="contentDe">
          <span>简介：</span>
          {{bookcontent.detail}}
        </el-row>

      </el-main>
    </el-container>
  </el-card>




</template>

<script>
export default {
name: "BookDetail",
  props:{
    bookcontent:{
      default(){
        return{
            imageLink:require("@/assets/images/avatar.png"),
            name:"《红高粱》",
            date:"2020.01.02",
            writer:"小明",
            detail:"写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。写满两行，然后出现省略号。"
        }
      }
    }
  }
}
</script>

<style scoped>
img{
  width: 100px;
}
.contentDe{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.imgStyle{
  margin-top: 20px;
}
</style>
