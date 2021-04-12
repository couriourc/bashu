import Vue from "vue";
import Router from "vue-router";
import home from "../pages/home/home";
import concat from "../pages/concat/concat";
import about from "../pages/about/about";
import userInfo from "../pages/userInfo/userInfo";
import artist from "../pages/artist/artist";
import bookShow from "../pages/bookShow/bookShow";

Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      alias:'/bashu'
    },
    {
      path: "/concat",
      name: "concat",
      component: concat
    }, {
      path: "/about",
      name: "about",
      component: about
    }, {
      path: '/myInfo',
      name: "myInfo",
      component: userInfo
    }, {
      path: '/artist',
      name: 'artist',
      component: artist
    }, {
      path: '/show',
      name: 'show',
      component: bookShow
    }
  ]
});
