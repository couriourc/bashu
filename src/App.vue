<template>
  <div id="app">
    <el-container style="background: #E3DCD4;">
      <el-header class="header" height="auto">
        <el-image
          :src="banner"
          class="banner"
          fit="cover"
          style="height: 20vw"
        />
        <el-row :gutter="20" align="middle" justify="center" type="flex" style="padding: 1em;"
        >
          <el-col :span="10" align="middle" justify="center"
          >
            <i class="el-icon-mobile-phone" style="font-size: 2em"></i>
            <el-link :underline="false" style="line-height: 1em;color: black" type="info">APP下载
            </el-link>
          </el-col>
          <el-col :span="24" align="middle">
            <el-input v-model="keywords" prefix-icon="el-icon-search" size="small"
                      suffix-icon="el-icon-enter"></el-input>
          </el-col>

          <el-col :span="24" align="right" style="margin-bottom: 10px">
            <button :key="1" ref="homeBtn" class="cu-btn  button_header animation-fade" @click="goNext('/')">官网首页
            </button>
            <button :key="2"
                    class="cu-btn button_header animation-fade"
                    @click="goNext('/concat')">联系我们
            </button>
            <button :key="3" class="cu-btn button_header animation-fade" @click="goLogin">登陆注册</button>
          </el-col>

        </el-row>
      </el-header>
      <el-main >
        <transition enter-active-class="animation-fade" name="faded">
          <router-view class="main-window"></router-view>
        </transition>
      </el-main>
      <el-footer class="_footer" height="180px">
        <el-row align="middle" justify="center" type="flex">
          <el-col :span="10" align="left">
            <el-row style="margin-top: 7px">
              <el-col :span="10">
                <el-link :underline="false" style="color:#fdfff4 ;" @click="goNext('/')"> 官网首页</el-link>
              </el-col>
            </el-row>
            <el-row style="margin-top: 7px">
              <el-col :span="10" align="left">
                <el-link :underline="false" style="color: #fdfff4;" @click="goNext('/concat')"> 关于我们</el-link>
              </el-col>
            </el-row>
            <el-row style="margin-top: 7px">
              <el-col :span="10" align="left">
                <el-link :underline="false" style="color: #fdfff4;">
                  <a href="http://www.ihchina.cn/#page9"
                     style="color: inherit;text-decoration: none"
                     target="_blank">
                    中国非物质文化遗产网</a></el-link>
              </el-col>
            </el-row>
            <el-row style="margin-top: 7px; margin-bottom: 7px">
              <el-col :span="10" align="left">
                <el-link :underline="false" style="color: #fdfff4;">
                  <a href="http://ichsichuan.cn/"
                     style="color: inherit;text-decoration: none"
                     target="_blank">
                    中国·四川非物质文化遗产网</a></el-link>
              </el-col>
            </el-row>
            <el-row style="margin-top: 7px; margin-bottom: 7px">
              <el-col :span="10">
                <el-link :underline="false" style="color: #fdfff4;">
                  <a href="http://whlyw.cq.gov.cn/"
                     style="color: inherit;text-decoration: none"
                     target="_blank">重庆市文化研究院</a></el-link>
              </el-col>

            </el-row>
          </el-col>
          <el-col :span="10" align="middle" justify="center" type="flex">
            <el-row>
              <el-image :src="require('@/assets/images/qrcode.jpg')" fit="cover" style="width: 100px">
              </el-image>
            </el-row>
            <el-row>
              <span style="color: #fdfff4;">扫描二维码</span>
            </el-row>
            <el-row>
              <span style="color: #fdfff4;">关注公众号了解更多</span>
            </el-row>
          </el-col>
        </el-row>
      </el-footer>
      <el-dialog :visible.sync="loginShow" width="35%">
        <span slot="title" :class="{'is-active':loginBar}" class="title" style="text-align: center; "
              @click="loginBar =true;registBar=false;">登陆</span>
        <span slot="title" :class="{'is-active':registBar}" class="title" style="text-align: center;"
              @click="loginBar =false;registBar=true;">注册</span>
        <el-form v-show="loginBar" ref="loginInfo" :model="loginForm">
          <el-form-item>
            <el-input v-model="loginForm.usernameOrEmailOrPhone" autocomplete="off" placeholder="请输入手机号或者邮箱"
                      type="username"
                      width="50%"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" autocomplete="off" placeholder="密码" show-password
                      width="50%"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.code" placeholder="验证码">
              <template slot="append">
                <span ref="login_code" class="validStatus" @click="getCode(loginForm,`login_code`)">获取验证码</span>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <el-form v-show="registBar" :model="registerForm">
          <el-form-item>
            <el-input v-model="registerForm.usernameOrEmailOrPhone" autocomplete="off" placeholder="昵称" type="username"
                      width="50%"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="registerForm.usernameOrEmailOrPhone" autocomplete="off" placeholder="填写手机号"
                      type="username"
                      width="50%"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="registerForm.password" autocomplete="off" placeholder="设置密码" show-password
                      width="50%"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="registerForm.code" placeholder="验证码">
              <template slot="append">
                <span ref="register_code" class="validStatus"
                      @click="getCode(registerForm,`register_code`)">获取验证码</span>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <el-row slot="footer" align="middle" justify="center" type="flex">
          <el-col :span="20">
            <span v-show="loginBar"
                  :class=" {'icon-jizhumimaxuanzhong':loginForm.rememberMe}"
                  class="iconfont icon-jizhumima"
                  style="display: inline-block;width:100%;text-align: left;color: #39200f;user-select: none"
                  @click="loginForm.rememberMe = !loginForm.rememberMe">记住密码</span>
            <span v-show="registBar"
                  :class=" {'icon-jizhumimaxuanzhong':agree}"
                  class="iconfont icon-jizhumima"
                  style="display: inline-block;width:100%;text-align: left;color: #39200f;user-select: none"
                  @click="agree= !agree">同意条款</span>
          </el-col>
          <el-col :span="20">
            <button v-show="loginBar" class="cu-btn submit_btn" @click="toSubmit(loginForm)">登陆</button>
            <button v-show="registBar" class="cu-btn submit_btn" @click="toSubmit(registerForm)">注 册</button>
          </el-col>
        </el-row>
      </el-dialog>
    </el-container>
    <copyright></copyright>
  </div>
</template>

<script>

import Copyright from "./components/copyright/copyright";

export default {
  name: "App",
  data() {
    return {
      keywords: "",
      banner: 'https://uploadfile.bizhizu.cn/2014/1119/20141119102021452.jpg',
      registBar: false,
      loginBar: true,
      loginShow: false,
      isRember: false,
      loginForm: {
        "code": "",
        "password": "",
        "rememberMe": false,
        "usernameOrEmailOrPhone": ""
      },
      registerForm: {
        "code": "",
        "password": "",
        "usernameOrEmailOrPhone": "",

      },
      agree: true
    };
  },
  watch: {},

  methods: {
    animation() {
    },
    goNext(api) {
      this.$router.replace(api).catch((e) => {
        return null;
      })
    },
    goLogin() {
      this.loginShow = true
    },
    async getCode(e, btn_index) {
      let count = 0;
      let btn = this.$refs[btn_index];

      if (btn.disabled === false) return this.$message.warning("请不要重复点击");
      let phone = e.usernameOrEmailOrPhone;
      if (!phone) return this.$message.error('请输入手机号或邮箱');
      const res = await this.$http.sendCode(phone);
      // 设置 防抖节流
      btn.disabled = false;
      let setTimer = function () {
        return setInterval(function () {
          if (count >= 60) {
            // 将属性恢复到起始
            btn.disabled = true;
            btn.innerText = "获取验证码";
            count = 0;
            return clearInterval(timer);
          }
          console.log(timer)
          count = count + 1;
          btn.innerText = count + '秒';
        }, 1000)
      };
      let timer = setTimer();
    },
    async toSubmit(e) {
      // 提交表单
      if (!(e.usernameOrEmailOrPhone || e.password)) return this.$message.warning("请输入账号或者密码！");
      if (!e.code) return this.$message.warning("Please send the code !!")
      const res = await this.$http.loginRequest(e);
    },
  },
  components: {Copyright}
};
</script>

<style lang="less">
@import "./assets/colorui/colorui.css";
@import "./assets/colorui/animation.css";
@import "./assets/colorui/icon.css";

@primary-color: #1890ff; // 全局主色
@link-color: #1890ff; // 链接色
@success-color: #52c41a; // 成功色
@warning-color: #faad14; // 警告色
@error-color: #f5222d; // 错误色
@font-size-base: 14px; // 主字号
@heading-color: rgba(0, 0, 0, 0.85); // 标题色
@text-color: rgba(0, 0, 0, 0.65); // 主文本色
@text-color-secondary: rgba(0, 0, 0, 0.45); // 次文本色
@disabled-color: rgba(0, 0, 0, 0.25); // 失效色
@border-radius-base: 4px; // 组件/浮层圆角
@border-color-base: #d9d9d9; // 边框色
@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
// 使用iconfont 初始化iconfont
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  list-style: none;

  background-size: cover;
  .header {
    width: 100%;
    background-color: #edebec;
  }

  .banner {
    width: 100%;
    margin-top: 10px;

    &::after {
      content: "传承文化 · 守望艺术";
      font-family: "細明體-ExtB", serif;
      display: block;
      width: 100%;
      font-size: 4em;
      position: absolute;
      top: 0;
      text-align: center;
      right: 0;
      color: #3e0014;
      z-index: 10;
    }
  }

  .grid-content {
    border-radius: 2em;
    min-height: 40px;

  }

  .search-input {
    outline: none;
    border: 0;
    border-radius: 2em;
    height: 2em;
    width: 90%;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
    transition: all .8s linear;
  }

  .fade-enter-active, .fade-leave-to {
    opacity: 1;

  }

  .main-window {
    height: auto;
    width: 100%;
  }

  .submit_btn {
    border: 0;
    background-color: #874521;
    height: 3em;
    line-height: 3em;
    width: 5em;
    border-radius: 2em;
    color: #e7ebed;
    outline: none;
  }

  .button_header {
    display: inline-block;
    border: none;
    background-color: #874521;
    color: #fdfff4;
    box-shadow: @box-shadow-base;
    border-radius: 2em;
    padding: 5px;
    width: 7em;
    outline: none;
  }

  .cu-btn {
    background-size: cover;
    color: rgb(134, 64, 64);
  }

  .cu-btn:hover {
    background-size: cover;
    color: #e7ebed;
    background: linear-gradient(to left, rgb(134, 64, 64) 10%, rgb(134, 64, 64) 10%);

  }

  .el-dialog__title {
    color: #381801 !important;
  }

  .el-icon-mobile-phone:hover {
    animation: shake 1s linear;
  }

  .el-image {
    box-shadow: @box-shadow-base;
  }

  .el-input__inner {
    border-radius: 2em;
  }

  ._footer {
    background-color: #972626;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .el-image {
      display: inline-block;
    }
  }

  .anchorBL {
    display: none;
  }

  .el-dialog__header {
    background-image: linear-gradient(to top, #c79081 0%, #dfa579 100%);
  }

  .validStatus {
    cursor: pointer;

    user-select: none;
  }

  .el-dialog {
    border-radius: 1em 0 1em 0;

    .el-dialog__header {
      border-radius: 1em 0 0 0;
    }

    .title {
      cursor: pointer;
      color: #fffdef;
      margin-right: 1em;
      padding: 12px;
    }

    .is-active {
      margin-right: 1em;
      padding: 12px;
      background: #FFFFFF;
      color: #402f20;
      border-radius: 2em 2em 0 0;
    }
  }

}
</style>
