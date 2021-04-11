<template>
  <el-card>
    <swiper></swiper>

    <book-list :img-list="bookListInfo"></book-list>

    <el-row :gutter="30" justify="space-around" type="flex" >
      <el-col :span="10">
        <el-card class="box-card" style="text-align: center" shadow="hover">
          <div slot="header" class="clearfix">
            <span style="color: #ff5777;font-weight: bold">猜你喜欢</span>
          </div>
          <el-image :src="imgLink[0]"></el-image>
          <p>锅盔凉粉</p>
        </el-card>
      </el-col>

      <el-col :span="10">

        <el-card class="box-card" style="text-align: center" shadow="hover">
          <div slot="header" class="clearfix">
            <span style="color: #ff5777;font-weight: bold">爱心帮</span>
          </div>
          <el-image :src="imgLink[1]"></el-image>
          <p>四川青花椒</p>
        </el-card>

      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import Swiper from "../../components/Swiper/Swiper";
import BookList from "../../components/BookList/BookList";

export default {
  name: "artist",
  components:{
    Swiper,
    BookList
  },

  data(){
    return{
      imgLink:[
        require("@/assets/images/guokui.jpg"),
        require("@/assets/images/huajiao.jpg")
      ],
      bookListInfo:[
        {
          link:require("@/assets/images/mingshu1.png"),
          detail:"民间文学"
        },
        {
          link:require("@/assets/images/mingshu1.png"),
          detail:"传统音乐"
        },{
          link:require("@/assets/images/mingshu1.png"),
          detail:"传统舞蹈"
        },{
          link:require("@/assets/images/mingshu1.png"),
          detail:"民间文学"
        },{
          link:require("@/assets/images/mingshu1.png"),
          detail:"民间文学"
        },{
          link:require("@/assets/images/mingshu1.png"),
          detail:"民间文学"
        },{
          link:require("@/assets/images/mingshu1.png"),
          detail:"民间文学"
        },{
          link:require("@/assets/images/mingshu1.png"),
          detail:"民间文学"
        },{
          link:require("@/assets/images/mingshu1.png"),
          detail:"民间文学"
        },{
          link:require("@/assets/images/mingshu1.png"),
          detail:"民间文学"
        }
      ]
    }
  }
}
</script>

<style scoped>
p{
  text-align: center;
}
</style>
