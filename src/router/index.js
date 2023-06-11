import Vue from 'vue'
import VueRouter from 'vue-router'
import ChaView from '../views/ChaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cha',
    // redirect:"/Chinese",
    component: ChaView,
  },
  {
    path: '/us',
    name: 'Us',
    component: () => import('../views/EngView.vue')
  },
  {
    path: '/shang',
    name: 'Shang',
    component: () => import('../views/ShangView.vue')
  },
  {
    path: '/kos',
    name: 'Kos',
    component: () => import('../views/KosovoView.vue')
  },
  {
    path: '/rus',
    name: 'Rus',
    component: () => import('../views/RusView.vue')
  },
  {
    path: '/jan',
    name: 'Jan',
    component: () => import('../views/JanView.vue')
  },
  {
    path: '/hot',
    name: 'Hot',
    component: () => import('../views/HotView.vue')
  },
  {
    path: '/blinken',
    name: 'Blin',
    component: () => import('../views/BlinkenView.vue')
  },
  {
    path: '/tai',
    name: 'Tai',
    component: () => import('../views/TaiView.vue')
  },
  {
    path: '/china-us',
    name: 'Recu',
    component: () => import('../views/RecuView.vue')
  },
  
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  base: "/dist/",
  routes
})

export default router
