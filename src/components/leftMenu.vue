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
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "leftMenu",
  data() {
    return {
      //当前活跃的路径
      activePath: "",
      isCollapse: false,
    };
  },
  created() {
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
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
};
</script>

<style scoped>
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
</style>