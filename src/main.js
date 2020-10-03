import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入全局样式
import './assets/css/globle.css'

// 挂载store
import store from './store/index'

// 导入axios
import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.baseURL = '/api'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')