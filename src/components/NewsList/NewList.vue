<template>
  <div class="box-card" style="margin-bottom: 1em">
  <el-card shadow="hover">
    <div slot="header" class="clearfix">
      <span style="font-size: 1.5em;color: #ff5777">新闻列表</span>
    </div>
    <div v-for="item in newsContent" class="text item">
      <span>{{item.data}}</span>
      {{item.content}}
    </div>
  </el-card>
  </div>
</template>

<script>
export default {
  name: "NewList",
  data(){
     return{
       newsContent:[
         {
           data:"四月七日",
           content:"文化和自然遗产日子。(只显示一行，多的字省略)"
         },
         {
           data:"四月七日",
           content:"文化和自然遗产日子，感悟习近平的非遗情缘。(只显示一行，多的字省略)"
         },
         {
           data:"四月七日",
           content:"文化和自然遗产日子，感悟习近平的非遗情缘。(只显示一行，多的字省略)"
         },
         {
           data:"四月七日",
           content:"文化和自然遗产日子，感悟习近平的非遗情缘。(只显示一行，多的字省略)"
         }
       ]
     }

  }
}
</script>

<style scoped>
.text {
  font-size: 1em;
  line-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

.box-card
{
  width: 80%;
  margin-right: 1em;

}
.text span{
  margin-right: 20px;
}
</style>
