import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/reset.css';
import '@/styles/font.css';
// import { isMobile } from './utils/common';
Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif',
  attempt: 1
})
// const navList = [
//   {
//     name: "网站首页",
//     type: false,
//     router: "/mobileHome",
//   },
//   {
//     name: "成功案例",
//     type: false,
//     router: "/mobileCase",
//   },
//   {
//     name: "业务范围",
//     type: false,
//     router: "/mobileBusiness",
//   },
//   {
//     name: "新闻中心",
//     type: false,
//     router: "/mobileNews",
//   },
//   {
//     name: "联系我们",
//     type: false,
//     router: "/mobileUs",
//   },
// ];
// console.log(isMobile(), 'in')
// let isphone = isMobile();
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.name}`;
  next()
  // if (isphone && to.path !== '/mobileHome') {
  //   isphone = false;
  //   next('/mobileHome');
  //   // navList.forEach(item => {
  //   //   // if(item.router===to.path){
  //   //   //   next()
  //   //   // }else {
  //   //   //   next('/mobileHome');
  //   //   // }
  //   // })
  // } else {
  //   next();
  // }

});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
