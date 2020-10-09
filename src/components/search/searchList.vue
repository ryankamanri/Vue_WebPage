<template>
  <div>
    <Song-lists :musicLists="songsList" />
  </div>
</template>

<script>
import SongLists from "components/search/songLists";
import { getSearchList } from "network/children/search";
export default {
  data() {
    return {
      songsList: [],
    };
  },
  components: {
    SongLists,
  },
  created() {
    this.getMusicList();
  },
  methods: {
    getMusicList() {
      const x = this.$route.params.id;
      if (!x) return;
      console.log(x);
      getSearchList(x)
        .then((res) => {
          console.log(res);
          // this.songsList = res.result.songs;
        })
        .catch((err) => console.log(err));
      console.log(res);
    },
  },
  watch: {
    $route: function (to, from) {
      this.getMusicList();
      console.log("发生了改变");
    },
  },
};
</script>

<style lang='less' scoped>
.bottomBox {
  width: 100%;
  float: left;
  overflow: auto;
}

.el-tabs /deep/ .el-tabs__nav {
  margin-left: 70px;
}
.el-tabs /deep/ .el-tabs__active-bar {
  background-color: #c62f2f;
  height: 4px;
}
.el-tabs /deep/ .el-tabs__item.is-active {
  color: #c62f2f;
}
.el-tabs /deep/ .el-tabs__nav-wrap::after {
  height: 1px;
  color: var(--color-line);
}
.el-tabs /deep/ .el-tabs__header {
  margin: 0;
}
.title {
  // margin-top: 4px;
  height: 30px;
  span {
    display: inline-block;
    width: 35px;
    height: 18px;
    border: 1px solid red;
    color: red;
    border-radius: 3px;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
    margin-right: 14px;
  }
  h3 {
    position: relative;
    top: 4px;
    display: inline-block;
    font-size: 20px;
    font-weight: 400;
  }
}
</style>