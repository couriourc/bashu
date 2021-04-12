// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/iconfont/iconfont.css"
// 导入百度地图
import BaiduMap from 'vue-baidu-map'
//导入自己封装的axios
import http from './utils/query'

Vue.use(BaiduMap, {
  ak: 'qRLkF77Zro4oe0sBsMfZH5Y0HghBoMOX'
})
Vue.config.productionTip = false;
Vue.use(ElementUi);
Vue.prototype.$http = http;
//
// router.beforeEach((to,from,next)=>{
//
//
// })

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {App},
  template: "<App/>"
});
