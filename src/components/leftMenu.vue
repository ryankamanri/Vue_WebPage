<template>
  <!-- 主体 -->
  <el-container>
    <el-row class="tac">
      <el-col>
        <h3 class="tuiJian">推荐</h3>
        <el-menu
          :default-active="activePath"
          text-color="#5c5c5c"
          active-text-color="#000000"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          class="leftMenuWith"
        >
          <el-menu-item
            index="/home/find/geXing"
            @click="SaveNevState('/home/find/geXing')"
            :class="activePath === '/home/find/geXing' ? 'activeBg' : ''"
          >
            <i class="el-icon-s-opportunity"></i>
            <span slot="title">发现音乐</span>
          </el-menu-item>

          <el-menu-item
            index="/home/myRadio"
            @click="SaveNevState('/home/myRadio')"
            :class="activePath === '/home/myRadio' ? 'activeBg' : ''"
          >
            <i class="el-icon-mic"></i>
            <span slot="title">私人FM</span>
          </el-menu-item>
          <el-menu-item
            index="/home/live"
            @click="SaveNevState('/home/live')"
            :class="activePath === '/home/live' ? 'activeBg' : ''"
          >
            <i class="el-icon-headset"></i>
            <span slot="title">LOOK直播</span>
          </el-menu-item>
          <el-menu-item
            index="/home/video"
            @click="SaveNevState('/home/video')"
            :class="activePath == '/home/video' ? 'activeBg' : ''"
          >
            <i class="el-icon-video-camera"></i>
            <span slot="title">视频</span>
          </el-menu-item>
          <el-menu-item
            index="/home/friends"
            @click="SaveNevState('/home/friends')"
            :class="activePath == '/home/friends' ? 'activeBg' : ''"
          >
            <i class="el-icon-user"></i>
            <span slot="title">朋友</span>
          </el-menu-item>
        </el-menu>
        <div class="yuLan">
          <div class="yuLanLi">
            <div class="imgBox">
              <img :src="musicInfo.al.picUrl" alt="" />
            </div>
            <div class="textBox">
              <h5>{{ musicInfo.name }}</h5>
              <h5>正在播放:</h5>
            </div>
          </div>
        </div>
      </el-col>
      <el-col>
        <h3 class="tuiJian">我的音乐</h3>
        <el-menu
          :default-active="activePath"
          text-color="#5c5c5c"
          active-text-color="#000000"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          class="leftMenuWith"
        >
          <el-menu-item
            index="/home/localMusic"
            @click="SaveNevState('/home/localMusic')"
            :class="activePath == '/home/localMusic' ? 'activeBg' : ''"
          >
            <i class="el-icon-bangzhu"></i>
            <span slot="title">本地音乐</span>
          </el-menu-item>

          <el-menu-item
            index="/home/download"
            @click="SaveNevState('/home/download')"
            :class="activePath == '/home/download' ? 'activeBg' : ''"
          >
            <i class="el-icon-download"></i>
            <span slot="title">下载管理</span>
          </el-menu-item>
          <el-menu-item
            index="/home/cloudPan"
            @click="SaveNevState('/home/cloudPan')"
            :class="activePath == '/home/cloudPan' ? 'activeBg' : ''"
          >
            <i class="el-icon-cloudy"></i>
            <span slot="title">我的音乐云盘</span>
          </el-menu-item>
          <el-menu-item
            index="/home/dianTai"
            @click="SaveNevState('/home/dianTai')"
            :class="activePath == '/home/dianTai' ? 'activeBg' : ''"
          >
            <i class="el-icon-coin"></i>
            <span slot="title">我的电台</span>
          </el-menu-item>
          <el-menu-item
            index="/home/shouCang"
            @click="SaveNevState('/home/shouCang')"
            :class="activePath == '/home/shouCang' ? 'activeBg' : ''"
          >
            <i class="el-icon-star-off"></i>
            <span slot="title">我的收藏</span>
          </el-menu-item>
        </el-menu>
        <div class="yuLan">
          <div class="yuLanLi">
            <div class="imgBox">
              <img :src="musicInfo.al.picUrl" alt="" />
            </div>
            <div class="textBox">
              <h5>{{ musicInfo.name }}</h5>
              <h5>正在播放:</h5>
            </div>
          </div>
        </div>
      </el-col>
      <el-col>
        <el-menu
          :default-active="activePath"
          text-color="#5c5c5c"
          active-text-color="#000000"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          class="leftMenuWith"
        >
          <el-submenu index="1">
            <template slot="title">
              <span class="myMusicList">创建的歌单</span>
            </template>

            <el-menu-item
              :index="'/home/listDetail' + item.id"
              v-for="(item, index) in likeMusic"
              :key="index"
              @click="SaveNevState('/home/listDetail' + item.id)"
              :class="
                activePath == '/home/listDetail' + item.id ? 'activeBg' : ''
              "
            >
              <i class="el-icon-star-off"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
            <el-menu-item
              index="/home/cloudPan"
              @click="SaveNevState('/home/cloudPan')"
              :class="activePath == '/home/cloudPan' ? 'activeBg' : ''"
            >
              <i class="el-icon-cloudy"></i>
              <span slot="title">我的音乐云盘</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <el-row class="tac"> </el-row>
  </el-container>
</template>

<script>
// import { getNowMusic } from "store/index";
import { mapGetters } from "vuex";
export default {
  name: "leftMenu",
  data() {
    return {
      //当前活跃的路径
      activePath: "",
      isCollapse: false,
      //音乐信息
      musicInfo: {
        name: "网易云音乐",
        al: {
          picUrl:
            "https://p2.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg",
        },
      },
      pinUrl: "",
      //个人信息
      personInfo: {},
      //喜欢的音乐
      likeMusic: [],
    };
  },
  created() {
    //获取菜单路径
    this.getMenu();
    //获取活跃路径
    this.activePath = window.sessionStorage.getItem("activePath");
    //获取音乐信息
    // this.getMusicInfo();
  },
  computed: {
    ...mapGetters(["getNowMusic"]),
    ifImgUndefined() {
      if (!musicInfo) return;
      this.pinUrl =
        musicInfo.al.picUrl === undefined
          ? "https://p2.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg"
          : this.musicInfo.al.picUrl;
      // console.log(this.musicInfo.name);
    },
  },
  methods: {
    //获取左侧菜单
    async getMenu() {
      this.personInfo = JSON.parse(window.localStorage.getItem("getP"));
      const res = await this.$http.post("user/playlist", {
        uid: this.personInfo.userId,
      });
      this.likeMusic = res.data.playlist;
    },
    handleOpen() {
      console.log("hehe");
    },
    handleClose() {
      console.log("hehe");
    },
    //保存链接的存活状态
    SaveNevState(activePath) {
      this.activePath = "";
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    },
    //菜单的打开与关闭
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },

  ifNameUndefined() {
    return this.musicInfo.name === undefined ? "11" : "222";
  },
  watch: {
    getNowMusic(info) {
      this.musicInfo = info;
    },
  },
};
</script>

<style lang="less" scoped>
.tuiJian {
  font-size: 13px;
  margin: 8px;
  font-weight: 400;
}
.tac /deep/ .el-menu {
  background-color: rgba(0, 0, 0, 0.1);
  border-right: 0;
}
.leftMenuWith {
  width: 200px;
}
.activeBg {
  // background-color: #e6e7ea !important;
  padding-left: 18px !important;
  border-left: 2px solid #c62f2f;
  color: #000;
}
.el-menu /deep/ .el-menu-item {
  height: 33px;
  line-height: 33px;
  font-family: serif;
  font-size: 13px;
  color: #ccc;
  padding-left: 20px;
}

.el-menu /deep/ .el-menu-item span {
  display: inline-block;
  width: 141px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.el-submenu /deep/ .el-menu-item {
  padding-left: 20px !important;
}
.yuLan {
  width: 200px;
  height: 55px;
  position: absolute;
  top: 794px;
  border-top: 1px solid var(--color-line);
  .yuLanLi {
    width: 90%;
    height: 90%;
    margin: 2%;
  }
  .imgBox {
    float: left;
    width: 45px;
    height: 45px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .textBox {
    float: left;
    margin-left: 10px;
    margin-bottom: 5px;
    height: 45px;
    width: 100px;
    :nth-child(1) {
      width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    h5 {
      margin-top: 4px;
      font-weight: 400;
      color: #444;
      font-size: 13px;
    }
  }
}

.el-submenu /deep/ .el-submenu__title {
  width: 200px;
  height: 40px;
  font-size: 15px;
  // background-color: #f5f5f7;
}
.myMusicList {
  position: relative;
  right: 10px;
  bottom: 10px;
}
</style>