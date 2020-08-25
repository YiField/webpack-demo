import Vue from 'vue'
import Vuex from 'vuex'

import loading from './modules/loading'
export default {
  install(Vue) {//???
    Vue.use(Vuex);
    this.store = new Vuex.Store({
      modules: {
        loading
      }
    });
    store: null//???
  }
}
