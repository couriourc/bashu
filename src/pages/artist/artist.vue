<template>
  <el-card>
    <swiper></swiper>

    <book-list :img-list="bookListInfo"></book-list>

    <el-row :gutter="30" justify="space-around" type="flex" style="margin-top: 2em">
      <el-col :span="10" v-for="card_info in card_infos">
        <el-card  class="box-card" style="text-align: center" shadow="hover">
          <div slot="header" class="clearfix">
            <span style="color: #ff5777;font-weight: bold">{{card_info.title}}</span>
          </div>
          <el-image :src="card_info.src"></el-image>
          <p>{{ card_info.description }}</p>
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

      card_infos:[
        {
          title:'猜你喜欢',
          src:require("@/assets/images/guokui.jpg"),
          description:'锅盔凉粉'
        },{
          title:'爱心帮',
          src:require("@/assets/images/mingjianwenxue.png"),
          description: '花椒'
        }
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
