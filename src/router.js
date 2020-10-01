import Vue from 'vue'
import VueRouter from 'vue-router'
// 主页
const Home = () => import("views/Home")

//登录页面路由 
const Login = () => import("views/Login")
//左侧菜单一级路由
const find = () => import("views/find/index")
const MyRadio = () => import("views/MyRadio")
const Live = () => import("views/Live")
const Video = () => import("views/Video")
const Friends = () => import("views/Friends")
//右侧find的二级路由
listDetail
const listDetail = () => import("views/find/listDetail")


//右边三级路由：find 发现音乐 
const geXing = () => import("views/find/children/geXing")
const bestNew = () => import("views/find/children/bestNew")
const paiHang = () => import("views/find/children/paiHang")
const singer = () => import("views/find/children/singer")
const songList = () => import("views/find/children/songList")
const zhuBo = () => import("views/find/children/zhuBo")
Vue.use(VueRouter)


const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/home',
    redirect: '/home/find/geXing',
    component: Home,
    children: [{
      path: '/',
      redirect: 'home'
    }, {
      path: 'find',
      component: find,
      children: [{
        path: '/',
        redirect: 'geXing'
      }, {
        path: 'geXing',
        name: 'gexing',
        component: geXing
      }, {
        path: 'bestNew',
        name: 'bestNew',
        component: bestNew
      }, {
        path: 'paiHang',
        name: 'paiHang',
        component: paiHang
      }, {
        path: 'singer',
        name: 'singer',
        component: singer
      }, {
        path: 'songList',
        name: 'songList',
        component: songList
      }, {
        path: 'zhuBo',
        name: 'zhuBo',
        component: zhuBo
      }]
    }, {
      path: 'live',
      component: Live
    }, {
      path: 'video',
      component: Video
    }, {
      path: 'friends',
      component: Friends
    }, {
      path: 'myRadio',
      component: MyRadio
      }, {
        path: 'listDetail:id',
        component:listDetail
    }]
  },

]


//挂载路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === 'login') return next()
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })
const router = new VueRouter({
  routes
})

export default router