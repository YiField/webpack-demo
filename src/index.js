import Vue from 'vue';
import App from './App.vue'
import './assets/styles/test.css'
import './assets/images/011.jpg'
import './assets/styles/test.scss'
import router from './router'
import './assets/styles/common.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/styles/iconfont.css'
import Store from './store'
const root = document.createElement('div');
document.body.appendChild(root)

Vue.use(Store);

new Vue({
  render: (h) => h(App),
  router,
  store: Store.store
}).$mount(root)