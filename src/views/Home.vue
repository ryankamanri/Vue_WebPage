<template>
  <div class="backgrand" id="backgrand">
    <div class="mainBox">
      <div class="topBox">
        <top-head></top-head>
      </div>
      <div class="centerBox">
        <div class="leftBox"><left-menu></left-menu></div>
        <div class="rightBox test-1" ref="rightBoxRef" id="Right_box">
          <!-- <right-content /> -->
          <transition :name="slideOut">
            <!-- <keep-alive exclude="bestNew,geXing,paiHang,singer,songList,zhuBo"> -->
            <router-view></router-view>
            <!-- </keep-alive> -->
          </transition>
        </div>
      </div>
      <div class="footerBox"><bottom-audio /></div>
    </div>
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
    return {
      slideOut: "",
    };
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
  mounted() {
    this.slideOut = "slide-com";
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
  // background-color: #fafafa;
}
.mainBox {
  width: 1200px !important;
  height: 950px;
  // overflow: hidden;
  margin: 0 auto;
  // background-color: #f5f5f7;
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
  overflow: hidden;
}
.rightBox {
  float: left;
  width: 1000px;
  height: 850px;
  // background-color: #fff;
  max-height: 850px;
  overflow: auto;
  transition: all 3s;
  // overflow: hidden;
}
.footerBox {
  height: 50px;
  width: 100%;
  // background-color: #f6f6f8;
  border-top: 1px solid #ccc;
}

.mainBox {
  background-color: rgba(255, 255, 255, 0.6);
}
.backgrand {
  // background: url("~assets/images/download/壁纸3.jpg") no-repeat;

  background-color: rgb(255, 255, 255);
  background-size: 100% 100%;
  overflow: hidden;
  height: 100vh;
}
.colorChange {
  position: absolute;
  right: 0;
  top: 0;
}

/* 动画效果 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-com-enter-active,
.slide-com-leave-active,
.slide-back-enter-active,
.slide-back-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 100%, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 100%, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(-100%, 100%, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 100%, 0);
}
.slide-com-enter {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.slide-com-leave-active {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.slide-back-enter {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.slide-back-leave-active {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
</style>
