<template>
  <el-card :body-style="{padding:0}" shadow="hover">
    <el-container class="userinfo-container">
      <el-aside class="asid-bar">
        <el-col class="btn"><i class="el-icon-potato-strips"></i><span>作品</span>
        </el-col>
        <el-col class="btn"><i class="iconfont icon-shoucang"></i><span>收藏</span>
        </el-col>
        <el-col class="btn"><i class="iconfont icon-pinglun"></i><span>讨论贴</span>
        </el-col>
        <el-col class="btn"><i class="el-icon-user"></i><span>账户</span>
        </el-col>
        <el-col class="btn"><i class="iconfont icon-liulanlishi"></i><span>浏览历史</span>
        </el-col>
        <el-col class="btn"><i class="el-icon-question"></i><span>意见反馈   </span></el-col>
        <el-col class="btn"><i class="iconfont icon-shezhi"></i><span>设置</span></el-col>
      </el-aside>
      <el-main class="main-bar">
        <el-col class="userinfo">
          <el-avatar>Hi</el-avatar>
          <p>{{ userInfo.name }}</p>
          <el-row type="flex">
            <el-col>
              <p>{{ userInfo.follow }}</p>
              <p>关注</p>
            </el-col>
            <el-col>
              <p>{{ userInfo.fans }}</p>
              <p>粉丝</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col v-for="anotherInfo in anotherInfos" class="history" :key="anotherInfo.device">
          <el-col>
            <el-col>
              <el-row type="flex">
                <el-col :span="3">
                  <el-avatar>h1</el-avatar>
                </el-col>
                <el-col :span="6">
                  <span>{{ anotherInfo.userName }}</span>
                  <p>{{ anotherInfo.data }}</p>
                  <p>来自<span style="color: #0081ff">{{ anotherInfo.device }}</span></p>
                </el-col>
              </el-row>
            </el-col>
          </el-col>
          <el-col>
            <el-card shadow="hover">
              <el-col>
                <p>{{ anotherInfo.content }}</p>
              </el-col>
              <el-col style="text-align: center">
                <el-image :src="require('@/assets/images/p1.jpg')" fit="container" style="width: 50vw;"></el-image>
              </el-col>
              <el-col class="control-bar">
                <el-col><i class="el-icon-share"></i>{{ 100 }}</el-col>
                <el-col><i class="el-icon-chat-line-square"></i></el-col>
                <el-col><i class="iconfont icon-dianzan"></i></el-col>
                <el-col><i class="el-icon-star-on"></i></el-col>
              </el-col>
            </el-card>
          </el-col>
        </el-col>
      </el-main>
    </el-container>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        src: '',
        name: '小巴专属客服',
        follow: 999,
        fans: 999,
      },
      anotherInfos: [{
        userName: '巴蜀拾艺人',
        data: '3-2 18:30',
        device: 'xiaomi',
        content: '古代中国是世界中心，诸多技艺均领先世界水平，即使到现代也依然让人叹为观止，榫卯结构就是其中最为华丽的一点。\n' +
          '\n' +
          '榫卯是在两个木构件上所采用的一种凹凸结合的连接方式。'
      }, {
        userName: '巴蜀拾艺人',
        data: '3-2 18:30',
        device: '华为',
        content: '古代中国是世界中心，诸多技艺均领先世界水平，即使到现代也依然让人叹为观止，榫卯结构就是其中最为华丽的一点。\n' +
          '\n' +
          '榫卯是在两个木构件上所采用的一种凹凸结合的连接方式。'
      },]
    }
  }
}
</script>

<style lang="less" scoped>
.userinfo-container {
  color: #381801;

  .asid-bar {
    height: 80vh;
    width: 40vw;
    border-right: solid 1px #874521;
    font-size: 1em;

    .btn {
      border-bottom: solid 1px #874521;
      padding: 0.8em;
      margin-top: 1em;

      i {
        font-size: 1.8em;
        margin-right: 1em;
        color: #9a6e3a;
      }
    }
  }

  .main-bar {
    .userinfo {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;

      .el-avatar {
        margin: 0 auto;
      }
    }

    .history {
      display: flex;
      flex-direction: column;
      margin-top: 2em;

      .el-card {
        .control-bar {
          margin: 1em auto;
          display: flex;
          font-weight: bolder;
          font-size: 1.8em;
        }
      }
    }
  }
}
</style>
