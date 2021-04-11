<template>
  <el-card>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <book-detail v-for="item in info.thisPage" style="margin-bottom: 10px"></book-detail>
      </el-col>
    </el-row>



    <el-row type="flex" justify="end">
      <span style="font-size: 20px;margin-right: 10px">共{{info.totalPage}}页</span>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="info.totalPage*10"
        ref="pagination"
        @current-change="changePage($event)"
        @prev-click="prePage($event)"
        @next-click="nextPage($event)"
      >
      </el-pagination>
    </el-row>
  </el-card>
</template>

<script>
import BookDetail from "../../components/bookDetail/BookDetail";

export default {
  name: "bookShow",
  components:{
    BookDetail
  },
  props:{
    info: {
      default(){
        return {
          totalPage:7,
          thisPage:[
            {

            },
            {

            },
            {

            }
          ]
        }
      }
    }
  },
  data(){
    return{
      page:1000
    }
  },
  methods:{
    changePage(index){
      console.log(index);
    },
    nextPage(index){
      console.log(index);
    },
    prePage(index){
      console.log(index);
    }
  }
}
</script>

<style scoped>

</style>
