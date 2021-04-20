<template>
  <el-card :body-style="{padding:0}" shadow="hover">
    <el-container class="userinfo-container">
      <el-aside class="asid-bar">
        <el-col v-for="(item,index) in btn_options" class="btn"  :key="item.icon+index">
          <span><i :class=" item.icon" />{{item.title}}</span>
        </el-col>
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
        <el-col v-for="(anotherInfo,index) in anotherInfos" class="history" :key="anotherInfo.device+index">
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
                <p style="text-indent: 2em;margin-bottom: 2em">{{ anotherInfo.content }}</p>
              </el-col>
              <el-col style="text-align: center">
                <el-image :src="require('@/assets/images/p1.jpg')" fit="container" style="width: 50vw;"></el-image>
              </el-col>
              <el-col class="control-bar">
                <el-col><i class="el-icon-share" :class="{'isShare':anotherInfo.isStar}"></i>{{ 100 }}</el-col>
                <el-col><i class="el-icon-chat-line-square" :class="{'isShare':anotherInfo.isStar}"></i></el-col>
                <el-col><i class="iconfont icon-dianzan" :class="{'isShare':anotherInfo.isStar}"></i></el-col>
                <el-col><i class="el-icon-star-on" :class="{'isShare':anotherInfo.isStar}"></i></el-col>
              </el-col>
            </el-card>
          </el-col>
        </el-col>
      </el-main>
    </el-container>
  </el-card>
</template>

<script>
// 导入mock
let Mock = require('mockjs');
//
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
        content: '每次可接待100人次，学习观摩剪纸创作技法；观摩剪纸实物，体验工艺品制作剪、刻流程，以及和代表性传承人零距离接触，交流剪纸艺术心得，参与互动活动。',
        star: 99,
        comments: [],
        isStar: true,
        isFolow: true,
      }, {
        userName: '巴蜀拾艺人1',
        data: '3-2 18:30',
        device: '华为',
        content: '  仪陇民间地域传说，具有强烈的神秘感，表达出对大自然的崇拜，流传的口头性、形式内容的传承丰富，有明显的客家文化的特点：主张惩恶扬善、弘扬孝道、崇尚勤劳朴实、提倡乐观向上，展现了客家人的精神风貌。'
      },],
      btn_options:[{
        icon:'el-icon-potato-strips',
        title:'作品'
      },{
        icon:'iconfont icon-shoucang',
        title:'收藏'
      },{
        icon:'iconfont icon-pinglun',
        title:'讨论贴'
      },{
        icon:'el-icon-user',
        title:'账户'
      },{
        icon:'iconfont icon-liulanlishi',
        title:'浏览历史'
      },{
        icon:'el-icon-question',
        title:'意见反馈'
      },{
        icon:'iconfont icon-shezhi',
        title:'设置'
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
      user-select: none;
      text-align: center;
      &:hover {
        color: #fffae8;
        background: #3e0014;
        cursor: pointer;
      }

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

      .isShare {
        color: #867707;
      }

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
