import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/homePage.vue'),
    meta: {
      name: '网站首页'
    }
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('@/views/homePage.vue'),
    meta: {
      name: '网站首页'
    }
  },
  {
    path: '/case',
    name: 'case',
    component: () => import('@/views/case.vue'),
    meta: {
      name: '成功案例'
    }
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('@/views/business.vue'),
    meta: {
      name: '业务范围'
    }
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news.vue'),
    meta: {
      name: '新闻中心'
    }
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('@/views/contactUs.vue'),
    meta: {
      name: '联系我们'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
