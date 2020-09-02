import Vue from 'vue';
import App from './App.vue';
import './assets/styles/test.css';
import './assets/styles/test.scss';
import router from './router';
import './assets/styles/common.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/styles/iconfont.css';
import Store from './store';
import Directives from './directive';

Vue.use(Store);
Vue.use(Directives);

new Vue({
  render: h => h(App),
  router,
  store: Store.store
}).$mount('#app');
