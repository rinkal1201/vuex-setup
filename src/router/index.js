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
    path: '/dynamic-form',
    name: 'dynamic-form',
    component: () => import('../views/dynamic-form')
  },
  {
    path: '/drag-and-drop',
    name: 'drag-and-drop',
    component: () => import('../views/drag-and-drop')
  },
  {
    path: '/design-page',
    name: 'design-page',
    component: () => import('../views/design/home-page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
