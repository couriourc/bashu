<template>
  <div class="box-card" style="margin-bottom: 1em">
    <el-card shadow="hover">
      <div slot="header" class="clearfix">
        <span style="font-size: 1.5em;color: #ff5777">新闻列表</span>
      </div>
      <div v-for="item in newsContent" class="text item">
        <span>{{ item.data }}</span>
        <a :href="item.url" style="color: #8c939d;text-decoration: none" target="_blank">{{ item.content }}</a>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "NewList",
  data() {
    return {
      newsContent: [
        {
          data: "2020-06-04",
          content: "岁月失语，惟石能言——我们是巴蜀拾艺人",
          url: 'https://mp.weixin.qq.com/s?__biz=MzI0NDQ4NTA3MQ==&mid=2247483678&idx=1&sn=e57b12a56780d9f48617d2e3cb5f3103&chksm=e95c5fbede2bd6a803959dc8e23aa779e5cae256f1df6e86270668d4e7900116bff4d66d53a9&mpshare=1&scene=23&srcid=0411I6DISPLWfmon6peJ6bR0&sharer_sharetime=1618121558217&sharer_shareid=cd8785559c1e1f30e230c5bd56eff26d#rd'
        },{
          data: "2021-01-08",
          content: "镂金作胜，剪彩为人——中国民间艺术之剪纸",
          url: 'https://mp.weixin.qq.com/s?__biz=MzI0NDQ4NTA3MQ==&mid=2247487929&idx=1&sn=46d5672c991689fe2b79fc9dfbc384a1&chksm=e95c4f19de2bc60f5565b514ba1d752f8df904c5d10b54249614942cdec651669f30739a5ce4&mpshare=1&scene=23&srcid=0411xypZKDxarKla3wNZ6wmO&sharer_sharetime=1618121506496&sharer_shareid=cd8785559c1e1f30e230c5bd56eff26d#rd'
        },{
          data: "2020-07-31",
          content: "是什么神奇的“Chinese 功夫”，让63岁的中国老爷爷火遍外网？",
          url: 'https://mp.weixin.qq.com/s?__biz=MzI0NDQ4NTA3MQ==&mid=2247483678&idx=1&sn=e57b12a56780d9f48617d2e3cb5f3103&chksm=e95c5fbede2bd6a803959dc8e23aa779e5cae256f1df6e86270668d4e7900116bff4d66d53a9&mpshare=1&scene=23&srcid=0411I6DISPLWfmon6peJ6bR0&sharer_sharetime=1618121558217&sharer_shareid=cd8785559c1e1f30e230c5bd56eff26d#rd'
        },{
          data: "1 week ago",
          content: "你不知道的“巴蜀拾艺人”",
          url: 'https://mp.weixin.qq.com/s?__biz=MzI0NDQ4NTA3MQ==&mid=2247487618&idx=1&sn=20b9b44d52c59fef4be0c86fa9c06674&chksm=e95c4e22de2bc734c1729e599b9eda659ed9cfc33ab226d2b0e81d7c0ba21ac84e74a147cd26&mpshare=1&scene=23&srcid=0411loG9BU1IbwdO8nqPyvuy&sharer_sharetime=1618121525564&sharer_shareid=cd8785559c1e1f30e230c5bd56eff26d#rd'
        },{
          data: "1 week ago",
          content: "民俗精华之川北皮影——光影下的艺术人生",
          url: 'https://mp.weixin.qq.com/s?__biz=MzI0NDQ4NTA3MQ==&mid=2247487929&idx=1&sn=46d5672c991689fe2b79fc9dfbc384a1&chksm=e95c4f19de2bc60f5565b514ba1d752f8df904c5d10b54249614942cdec651669f30739a5ce4&mpshare=1&scene=23&srcid=0411xypZKDxarKla3wNZ6wmO&sharer_sharetime=1618121506496&sharer_shareid=cd8785559c1e1f30e230c5bd56eff26d#rd'
        },
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

.box-card {
  width: 80%;
  margin-right: 1em;

}

.text span {
  margin-right: 20px;
}
</style>
