import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Global from "@/components/Global";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: Global.firmName
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: Global.firmName + ' - 關於我們'
    }
  },
  {
    path: '/partners',
    name: 'Partners',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Partners.vue'),
    meta: {
      title: Global.firmName + ' - 專業團隊'
    }
  },
  {
    path: '/contactus',
    name: 'Contactus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contactus.vue'),
    meta: {
      title: Global.firmName + ' - 聯絡我們'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
})

export default router
