import Vue from 'vue'
import VueRouter from 'vue-router'
const view = () => import('../components/views')
const css = () => import('../components/views/css')
const home = () => import('../components/home.vue')
const eReader = () => import('../components/eReader');
const better = () => import('../components/better')
const echarts = () => import('../components/views/charts.vue')

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
      },
      {
        path: 'echarts',
        name: 'echarts',
        component: echarts
      }
    ]
  },
  {
    path: '/eReader',
    name: 'eReader',
    component: eReader
  },
  {
    path: '/better',
    name: 'better',
    component: better
  }
]
export default new VueRouter({ routes })
