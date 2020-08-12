import VueRouter from 'vue-router'
import view from '@/views'
import css from '@/views/css'
Vue.use(VueRouter)
export default {
  {
    path: '/',
    name: 'views',
    component:view,
    children:[
      {
        path:'css',
        name:'css',
        component:css
      }
    ]
  },
}