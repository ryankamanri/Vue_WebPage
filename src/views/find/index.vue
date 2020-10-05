<template>
  <div>
    <div class="maxBox">
      <div class="topBar">
        <tap-bar />
      </div>
      <!-- <keep-alive exclude="bestNew,geXing,paiHang,singer,songList,zhuBo"> -->
      <router-view></router-view>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import tapBar from "components/find/tapBar";

export default {
  components: {
    tapBar,
  },
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