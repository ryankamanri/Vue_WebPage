import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

const state = {
  profile: '',
  showLogin: 'true',
  musicInfo: {},
  // 播放列表
  musiclistId: [],
  // 播放数量
  musicCount: 0,
  // 正在播放的歌曲
  nowMusic: '',
  // 音乐清单
  nowMusicMenu: [],
  //音乐url
  musicurl: ''
}

const getters = {
  // 个人信息
  profile(state) {
    return state.profile
  },
  // 登录窗口
  showLogin(state) {
    return state.showLogin
  },
  // 音乐
  getNowMusic(state) {
    if (state.musicInfo === null) state.musicInfo = ''
    return state.musicInfo
  },
  getMusicListIds() {
    return state.musiclistId
  },
  getMusicUrl(state) {
    return state.musicurl
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
  },
  // 点击某音乐播放
  playMusicList(state, musicInfo) {
    state.musicInfo = musicInfo
  },
  // 播放音乐列表
  getMusiclistIds(state, list) {
    state.musiclistId = [...list]
  },
  // 播放列表清零
  clearMusicList(state) {
    if (state.musiclistId.length > 0) {
      state.musicCount = 0
    }
  },
  // 正在播放的音乐
  getNowMusic(state, url) {
    state.nowMusic = ''
    state.nowMusic = url
  },
  //
  clearNowMusic(state) {
    state.nowMusic = ''
  },
  // 获取清单
  getNowMusicMenu(state, list) {
    state.nowMusicMenu = [...list]
  },
  //音乐地址
  setMusicUrl(state, url) {
    state.musicurl = url
  }
}

const actions = {}

const store = new vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store