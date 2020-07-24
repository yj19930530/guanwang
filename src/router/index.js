import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // PC 端
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
    path: '/caseDetails',
    name: 'caseDetails',
    component: () => import('@/views/caseDetails.vue'),
    meta: {
      name: '案例详情'
    }
  },
  {
    path: '/newsDetails',
    name: 'newsDetails',
    component: () => import('@/views/newsDetails.vue'),
    meta: {
      name: '新闻详情'
    }
  },
  // 移動端
  {
    path: '/mobileHome',
    name: 'mobileHome',
    component: () => import('../views/mobile/homePage.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
