import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/reset.css';
import '@/styles/font.css';
Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif',
  attempt: 1
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.name}`;
  next();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
