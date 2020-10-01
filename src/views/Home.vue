<template>
  <div class="mainBox">
    <div class="topBox">
      <top-head></top-head>
    </div>
    <div class="centerBox">
      <div class="leftBox"><left-menu></left-menu></div>
      <div class="rightBox test-1">
        <!-- <right-content /> -->
        <keep-alive exclude="bestNew,geXing,paiHang,singer,songList,zhuBo">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <div class="footerBox"><bottom-audio /></div>
  </div>
</template>
<script>
import topHead from "components/topHead";
import leftMenu from "components/leftMenu";
import rightContent from "views/find/index";
import bottomAudio from "components/bottom/audio";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    topHead,
    leftMenu,
    rightContent,
    bottomAudio,
  },
  created() {
    // this.ifHasToken();
  },
  methods: {
    // ifHasToken() {
    //   //从store中获取是否显示login页面
    //   this.loginDialog = this.$store.state.showLogin;
    //   console.log("hehe");
    //   const token = window.sessionStorage.getItem("token");
    //   console.log(token);
    //   if (token !== null) {
    //     //从store中获取是否显示login页面
    //     this.$store.commit("getLogin", "false");
    //     console.log(this.$store.state.showLogin);
    //     this.loginDialog = false;
    //     console.log("hehe");
    //     console.log(this.loginDialog);
    //   }
    // },
  },
};
</script>
<style lang="less" scoped>
body {
  background-color: #fafafa;
}
.mainBox {
  width: 1200px !important;
  height: 950px;
  // overflow: hidden;
  margin: 0 auto;
  background-color: #f5f5f7;
  box-shadow: 0 0 30px #ccc;
}
.topBox {
  height: 50px;
}
.centerBox {
  height: 850px;
  width: 1200px;
  // overflow: hidden;
}
.leftBox {
  float: left;
  width: 200px;
  height: 850px;
}
.rightBox {
  float: left;
  width: 1000px;
  height: 850px;
  background-color: #fff;
  max-height: 850px;
  overflow: auto;
}
.footerBox {
  height: 50px;
  width: 100%;
  background-color: #f6f6f8;
  border-top: 1px solid #ccc;
}
</style>
