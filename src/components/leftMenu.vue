<template>
  <!-- 主体 -->
  <el-container class="w">
    <el-row class="tac">
      <el-col :span="100">
        <h3 class="tuiJian">推荐</h3>
        <el-menu
          :default-active="activePath"
          background-color="#f5f5f7"
          text-color="--color-text"
          active-text-color="#000000"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          class="leftMenuWith"
        >
          <el-menu-item
            index="/home/find/geXing"
            @click="SaveNevState('/home/find')"
            :class="activePath == '/home/find' ? 'activeBg' : ''"
          >
            <i class="el-icon-s-opportunity"></i>
            <span slot="title">发现音乐</span>
          </el-menu-item>

          <el-menu-item
            index="/home/myRadio"
            @click="SaveNevState('/home/myRadio')"
            :class="activePath == '/home/myRadio' ? 'activeBg' : ''"
          >
            <i class="el-icon-mic" style="color: #000"></i>
            <span slot="title">私人FM</span>
          </el-menu-item>
          <el-menu-item
            index="/home/live"
            @click="SaveNevState('/home/live')"
            :class="activePath == '/home/live' ? 'activeBg' : ''"
          >
            <i class="el-icon-headset" style="color: #000"></i>
            <span slot="title">LOOK直播</span>
          </el-menu-item>
          <el-menu-item
            index="/home/video"
            @click="SaveNevState('/home/video')"
            :class="activePath == '/home/video' ? 'activeBg' : ''"
          >
            <i class="el-icon-video-camera" style="color: #000"></i>
            <span slot="title">视频</span>
          </el-menu-item>
          <el-menu-item
            index="/home/friends"
            @click="SaveNevState('/home/friends')"
            :class="activePath == '/home/friends' ? 'activeBg' : ''"
          >
            <i class="el-icon-user" style="color: #000"></i>
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
    </el-row>
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
    };
  },
  created() {
    //获取菜单路径
    this.activePath = window.sessionStorage.getItem("activePath");
    //获取音乐信息
    // this.getMusicInfo();
  },
  computed: {
    ...mapGetters(["getNowMusic"]),
    ifImgUndefined() {
      this.pinUrl =
        musicInfo.al.picUrl === undefined
          ? "https://p2.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg"
          : this.musicInfo.al.picUrl;
      // console.log(this.musicInfo.name);
    },
  },
  methods: {
    //获取当前音乐信息
    // getMusicInfo() {
    //   console.log(this.musicInfo.name);
    //   this.musicInfo = this.$store.state.musicInfo;
    //   console.log(this.musicInfo);
    // },

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
.leftMenuWith {
  width: 200px;
}
.activeBg {
  background-color: #e6e7ea !important;
  padding-left: 18px !important;
  border-left: 2px solid #c62f2f;
  color: #000;
}
.el-menu-item {
  height: 40px;
  line-height: 40px;
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
</style>