<template>
  <div id="Goods">
    <el-row>
      <el-col :span="22" :offset="1">
        <tab-bar></tab-bar>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :span="10">
        <act-list style="height: 100%"></act-list>
      </el-col>
      <el-col :span="10">
        <new-list></new-list>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :span="10">
        <book-list></book-list>
      </el-col>
      <el-col :span="10">
        <new-list></new-list>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="22" :offset="1">
        <book-list img-height="50px"></book-list>
      </el-col>
    </el-row>
  </div>


</template>

<script>
import BookList from "@/components/BookList/BookList";
import ActList from "@/components/ActList/ActList";
import TabBar from "@/components/TabBar/TabBar";
import NewList from "@/components/NewsList/NewList";
import BookDetail from "@/components/bookDetail/BookDetail";

export default {
  components: {
    NewList,
    BookList,
    ActList,
    TabBar,
    BookDetail
  }
}
</script>

<style scoped>

</style>
