<template>
  <el-card class="box-card-container"  shadow="hover">
    <el-row>
      <el-col :span="4" v-for="(item, index) in imgList" :offset="index%5!==0?1:0" :key="index">
        <el-card :body-style="{ padding: '0px' }"  style="margin-bottom: 0.5em"  shadow="hover" >
          <el-image :src="item.link" class="image" fit="cover"  @click="clickLink(index)" />
          <div style="text-align: center">
            <span>{{item.detail}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </el-card>
</template>

<script>
export default {
  name: "BookList",
  data(){
    return{

    }
  },
  methods:{
    clickLink(index){
      this.$router.replace("/show");
    }
  },
  props:{
    imgList:{
      type:Array,
      default(){
        return [
         {
            link:require("@/assets/images/p3.png"),
            detail:""
          },{
            link:require("@/assets/images/p3.png"),
            detail:""
          },{
            link:require("@/assets/images/p3.png"),
            detail:""
          },{
            link:require("@/assets/images/p3.png"),
            detail:""
          },{
            link:require("@/assets/images/p3.png"),
            detail:""
          },{
            link:require("@/assets/images/p3.png"),
            detail:""
          },{
            link:require("@/assets/images/p3.png"),
            detail:""
          },{
            link:require("@/assets/images/p3.png"),
            detail:""
          },{
            link:require("@/assets/images/p3.png"),
            detail:""
          },{
            link:require("@/assets/images/p3.png"),
            detail:""
          },
        ]
      }
    },
    imgHeight:{
      default:"100%"
      }
    }
}
</script>

<style scoped>
.book-detail-container
{
  margin-bottom: 1em;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}


.image {
  width: 100%;
}
</style>
