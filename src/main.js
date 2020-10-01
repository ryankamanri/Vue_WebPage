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
/* axios.interceptors.response.use(res => {
  console.log(res.data)
}) */
//配置路由
export function request(config) {
  const conf1 = axios.create({
    baseURL: '/api',
    timeout: 20000
  })
  conf1.interceptors.request.use((config) => {
    return config
  }, err => console.log(err))
  conf1.interceptors.response.use((res) => {
    console.log(res);
    return res.data
  })
  return conf1(config)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')