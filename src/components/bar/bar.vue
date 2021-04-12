<template>
  <div class="bar-container">
    <el-row align="center" justify="center" type="flex">
      <el-col v-for="url in urls" :key="url.title" :span="13">
        <el-card :body-style="{padding:0}" shadow="hover">
          <el-image :fit="'cover'" :src="url.src" class="img" lazy @click="goPage(url.url)"/>
          <h1 class="title" @click="goPage(url.url)">{{ url.title }}</h1>
          <p class="title info" @click="goPage(url.url)">{{ url.info }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>


export default {
  props: {
    urls: {
      type: Array,
      default() {
        return [

          {
            src: require('@/assets/images/p1.jpg'),
            title: '艺典',
            info: '查询信息',
            url: '/about'
          }, {
            src: require('@/assets/images/p2.png'),
            title: '创艺',
            info: '直播课堂',
            url: '/artist'
          }, {
            src: require('@/assets/images/p3.png'),
            title: '艺淘',
            info: '艺术周边',
            url: '/about'
          }, {
            src: require('@/assets/images/p4.png'),
            title: '本艺',
            info: '个人中心',
            url: '/myinfo'
          },
        ]
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    goPage(e) {
      this.$router.push(e)
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
.bar-container {
  margin-top: 2em;

  .el-card {
    cursor: pointer;
    margin-right: 1em;
    background: #874521;
    color: #fffae8;

    .img {
      height: 14em;
      filter: brightness(0.5);
      z-index: 1;
    }

    .title {
      text-align: center;

      info {

      }
    }
  }
}

</style>
