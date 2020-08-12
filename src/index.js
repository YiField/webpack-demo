import Vue from 'vue';
import App from './App.vue'
import './assets/styles/test.css'
import './assets/images/011.jpg'
import './assets/styles/test.scss'
import Router from 'vue-router'

const root = document.createElement('div');
document.body.appendChild(root)

new Vue({
  render:(h) => h(App)
}).$mount(root)