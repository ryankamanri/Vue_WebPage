<template>
  <div>
    <div class="maxBox">
      <div class="topBar">
        <tap-bar />
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import tapBar from "components/find/tapBar";

export default {
  components: {
    tapBar,
  },
  // <keep-alive exclude="bestNew,geXing,paiHang,singer,songList,zhuBo">
  //
};
</script>

<style scoped>
.maxBox {
  width: 940px;
  margin: 0 auto;
  height: 800px;
  background-color: #fff;
}
.topBar {
  width: 940px;
  height: 50px;
}
</style>