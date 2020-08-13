import Vue from 'vue'
import VueRouter from 'vue-router'
const view = () => import('../components/views')
const css = () => import('../components/views/css')
const home = () => import('../components/home.vue')

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
  }
]
export default new VueRouter({ routes })
