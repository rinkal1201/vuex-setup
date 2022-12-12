import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/directive',
    name: 'directive',
    component: () => import('../views/directive')
  },
  {
    path: '/inactive-data',
    name: 'mixin',
    component: () => import('../views/mixin/inactive')
  },
  {
    path: '/active-data',
    name: 'mixin',
    component: () => import('../views/mixin/active')
  },
  {
    path: '/toggle-switch',
    name: 'toggle',
    component: () => import('../views/toggle')
  },
  {
    path: '/form-validation',
    name: 'validation',
    component: () => import('../views/validation')
  },
  {
    path: '/props',
    name: 'props',
    component: () => import('../views/props-demo')
  },
  {
    path: '/demo-crud',
    name: 'crud',
    component: () => import('../views/crud')
  },
  {
    path: '/theme',
    name: 'theme',
    component: () => import('../views/theme')
  },
  {
    path: '/themeMode',
    name: 'themeMode',
    component: () => import('../views/themeMode')
  },
  {
    path: '/light',
    name: 'light',
    component: () => import('../views/light')
  },
  {
    path: '/drag-and-drop',
    name: 'drag-and-drop',
    component: () => import('../views/drag-and-drop')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
