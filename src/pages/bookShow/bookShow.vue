<template>
  <el-card>
    <el-row justify="center" type="flex">
      <el-col :span="20">
        <book-detail v-for="item in info.thisPage" :bookcontent="item" :key="item.name" style="margin-bottom: 10px"></book-detail>
      </el-col>
    </el-row>


    <el-row justify="end" type="flex">
      <span style="font-size: 20px;margin-right: 10px">共{{ info.totalPage }}页</span>
      <el-pagination
        ref="pagination"
        :total="info.totalPage*10"
        background
        layout="prev, pager, next"
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
  components: {
    BookDetail
  },
  props: {
    info: {
      default() {
        return {
          totalPage: 7,
          thisPage: [
            {
              imageLink: require("@/assets/images/quyi.png"),
              name: "《红高粱》",
              date: "2020.01.02",
              writer: "小明",
              detail: "阆中悠久的历史，孕育了灿烂的文化，其中最有特色的莫过于民间传统文化。阆中的民间传统文化包括皮影、巴渝舞、川北灯戏、傩戏、竹马、剪纸、龙舟赛、竹枝词、民歌、木雕等。阆中要在旅游发展中有自己的特色，就必须要把最淳朴的巴渝遗风展现给世人；要把最淳朴的巴渝遗风展现给世人，保护和利用这些民间传统文化，是重要的途径。"
            },
            {
              imageLink: require("@/assets/images/mingjianwenxue.png"),
              name: "《Big art》",
              date: "2020.01.02",
              writer: "world",
              detail: "阆中悠久的历史，孕育了灿烂的文化，其中最有特色的莫过于民间传统文化。阆中的民间传统文化包括皮影、巴渝舞、川北灯戏、傩戏、竹马、剪纸、龙舟赛、竹枝词、民歌、木雕等。阆中要在旅游发展中有自己的特色，就必须要把最淳朴的巴渝遗风展现给世人；要把最淳朴的巴渝遗风展现给世人，保护和利用这些民间传统文化，是重要的途径。"
            },
            {
              imageLink: require("@/assets/images/mingshu1.png"),
              name: "《Boom Boom Boom》",
              date: "2020.01.02",
              writer: "CourierC",
              detail: "阆中悠久的历史，孕育了灿烂的文化，其中最有特色的莫过于民间传统文化。阆中的民间传统文化包括皮影、巴渝舞、川北灯戏、傩戏、竹马、剪纸、龙舟赛、竹枝词、民歌、木雕等。阆中要在旅游发展中有自己的特色，就必须要把最淳朴的巴渝遗风展现给世人；要把最淳朴的巴渝遗风展现给世人，保护和利用这些民间传统文化，是重要的途径。"
            }
          ]
        }
      }
    }
  },
  data() {
    return {
      page: 1000
    }
  },
  methods: {
    changePage(index) {
      console.log(index);
    },
    nextPage(index) {
      console.log(index);
    },
    prePage(index) {
      console.log(index);
    }
  }
}
</script>

<style scoped>

</style>
