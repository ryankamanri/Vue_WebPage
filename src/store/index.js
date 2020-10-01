import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

const state = {
  profile: '',
  showLogin: 'true'
}

const getters = {
  // 个人信息
  profile(state) {
    return state.profile
  },
  // 登录窗口
  showLogin(state) {
    return state.showLogin
  }
}

const mutations = {
  // 上传个人信息
  getProfile(state, profile) {
    console.log(profile)
    state.profile = profile
  },
  // 上传是否显示登录
  getLogin(state, showLogin) {
    state.showLogin = showLogin
  }
}

const actions = {}

const store = new vuex.Store({
  state,
  mutations,
  actions,
getters})
export default store
