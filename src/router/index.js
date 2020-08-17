import Vue from 'vue'
import VueRouter from 'vue-router'
const view = () => import('../components/views')
const css = () => import('../components/views/css')
const home = () => import('../components/home.vue')
const eReader = () => import('../components/eReader');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/views',
    name: 'views',
    component: view,
    children: [
      {
        path: 'css',
        name: 'css',
        component: css
      }
    ]
  },
  {
    path: '/eReader',
    name: 'eReader',
    component: eReader
  }
]
export default new VueRouter({ routes })
