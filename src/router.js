import Vue from 'vue'
import VueRouter from 'vue-router'
// 主页
const Home = () => import("views/Home")

//登录页面路由 
const Login = () => import("views/Login")
//左侧菜单一级路由---推荐
const find = () => import("views/find/index")
const MyRadio = () => import("views/myRadio/MyRadio")
const Live = () => import("views/live/Live")
const Video = () => import("views/video/Video")
const Friends = () => import("views/friends/Friends")
//左侧菜单一级路由---我的音乐
const cloudPan = () => import("views/myMusic/cloudPan")
const dianTai = () => import("views/myMusic/dianTai")
const download = () => import("views/myMusic/download")
const localMusic = () => import("views/myMusic/localMusic")
const shouCang = () => import("views/myMusic/shouCang")
//左侧菜单一级路由---创建的歌单
// const likeMusic = () => import("viewx/foundList/likeMusic")

//右侧find的二级路由
listDetail
const listDetail = () => import("views/find/listDetail")
//右侧歌手详情的二级路由
listDetail
const singerDetail = () => import("views/singerDetail/singerDetail")

//右侧搜索二级路由
const searchList = () => import("components/search/searchList")
//右侧正在播放二级路由
const playing = () => import("components/playing/playing")
//右侧视频播放
const videoing = () => import("views/videoing/videoing")
//右侧视频播放
const mving = () => import("views/videoing/mving")


//右边三级路由：find 发现音乐 
const geXing = () => import("views/find/children/geXing")
const bestNew = () => import("views/find/children/bestNew")
const paiHang = () => import("views/find/children/paiHang")
const singer = () => import("views/find/children/singer")
const songList = () => import("views/find/children/songList")
const zhuBo = () => import("views/find/children/zhuBo")

//右边三级路由：vidoe视频
const mvs = () => import("views/video/children/mvs")
const videos = () => import("views/video/children/videos")



Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}



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
        meta: {
          keepAlive: false //true是保存缓存，false是不保存
        },
        children: [{
          path: '/',
          redirect: 'geXing'
        }, {
          path: 'geXing',
          name: 'gexing',
          component: geXing,
          meta: {

            keepAlive: false //true是保存缓存，false是不保存

          }
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
        component: Video,
        children: [{
          path: '/',
          redirect:'videos'
        },
          {
            path: 'mvs',
            component:mvs
          },
          {
            path: 'videos',
            component:videos
          },
        ]
      }, {
        path: 'friends',
        component: Friends
      }, {
        path: 'myRadio',
        component: MyRadio
      },
      {
        path: 'listDetail:id',
        component: listDetail 
      },
      
      {
        path: 'cloudPan',
        component: cloudPan
      }, {
        path: 'dianTai',
        component: dianTai
      }, {
        path: 'download',
        component: download
      }, {
        path: 'localMusic',
        component: localMusic
      }, {
        path: 'shouCang',
        component: shouCang,
      }, {
        path: 'playing',
        component: playing,
      }, {
        path: 'singer:id',
        component: singerDetail 
      },{
        path: 'videoing:id',
        component: videoing
      }, {
        path: 'mving:id',
        component: mving
      }
    ]
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