<template>
  <el-card class="box-card-container" shadow="hover">
    <el-row>
      <el-col>
        <h1 style="color: #FF5777">{{ title }}</h1>
      </el-col>
      <el-col v-for="(item, index) in imgList" :key="index" :offset="index%5!==0?1:0" :span="4">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-bottom: 0.5em">
          <el-image :src="item.link" class="image" fit="cover" @click="clickLink(index)"/>
          <div style="text-align: center">
            <span>{{ item.detail }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </el-card>
</template>

<script>
export default {

  data() {
    return {}
  },
  methods: {
    clickLink(index) {
      this.$router.replace("/show");
    }
  },
  props: {
    imgList: {
      type: Array,
      default() {
        return [
          {
            link: require("@/assets/images/p3.png"),
            detail: ""
          }, {
            link: require("@/assets/images/p3.png"),
            detail: ""
          }, {
            link: require("@/assets/images/p3.png"),
            detail: ""
          }, {
            link: require("@/assets/images/p3.png"),
            detail: ""
          }, {
            link: require("@/assets/images/p3.png"),
            detail: ""
          }, {
            link: require("@/assets/images/p3.png"),
            detail: ""
          }, {
            link: require("@/assets/images/p3.png"),
            detail: ""
          }, {
            link: require("@/assets/images/p3.png"),
            detail: ""
          }, {
            link: require("@/assets/images/p3.png"),
            detail: ""
          }, {
            link: require("@/assets/images/p3.png"),
            detail: ""
          },
        ]
      }
    },
    imgHeight: {
      default: "100%"
    }, title: {
      default() {
        return "热门书籍";
      }
    }
  }
}
</script>

<style scoped>
.book-detail-container {
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
