<template>
  <div class="maxBox1">
    <div class="topBox">
      <div class="mainBox">
        <div class="imgBox">
          <img :src="musicList.coverImgUrl" alt="" />
        </div>
        <div class="desc">
          <div class="title">
            <span>歌单</span>
            <h3>[华语速爆新歌] 最新华语音乐推荐</h3>
          </div>
          <div class="logoTime">
            <img src="~assets/images/touxiang.jpg" alt="" />
            <a class="d" href="#">网易云音乐</a>
            <span class="d">2020-2-2创建</span>
            <div class="start">
              <img src="~assets/images/geXing/星星.png" alt="" />
            </div>
          </div>
          <div class="btnList">
            <div class="playAll d">
              <i class="el-icon-video-play" />播放全部<i class="el-icon-plus" />
            </div>
            <div class="shouCang d">收藏(99999)</div>
            <div class="share d">分享(19999)</div>
            <div class="downAll d">下载全部</div>
          </div>
          <div class="bottomText">
            <span>标签:<a>华语</a></span>
            <div>
              优质华语新歌，网易云音乐每周二精选推荐。<br />
              本周封面：吴宣仪
            </div>
          </div>
          <div class="count">
            <div>歌曲数</div>
            <div>播放数</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomBox">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="歌曲列表" name="first"
            ><song-lists></song-lists
          ></el-tab-pane>
          <el-tab-pane label="评论(999)" name="second"
            ><critic></critic
          ></el-tab-pane>
          <el-tab-pane label="收藏者" name="third"
            ><shou-cang></shou-cang
          ></el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>


<script>
import songLists from "components/find/listDetail/songLists";
import shouCang from "components/find/listDetail/shouCang";
import critic from "components/find/listDetail/critic";
export default {
  data() {
    return {
      //顶部资料
      musicList: {},
      activeName: "first",
    };
  },
  components: { songLists, shouCang, critic },
  created() {
    //获取列表
    this.getMusicList();
  },
  methods: {
    //获取列表
    async getMusicList() {
      var id = this.$route.params.id;
      console.log(id);
      const res = await this.$http.post("playlist/detail", { id: id });
      this.musicList = res.data.playlist;
      console.log(res);
    },
    //切换栏
    handleClick(vel) {
      console.log(vel);
    },
  },
};
</script>

<style lang="less" scoped>
.topBox {
  // background-color: red;
  width: 100%;
  height: 250px;
}

.mainBox {
  // background-color: blue;
  width: 940px;
  height: 200px;
  margin: 0 auto;
  margin-top: 30px;
}

.imgBox {
  float: left;
  height: 200px;
  width: 200px;
  background-color: pink;

  /* margin-right: 30px; */
  /* z-index: 999; */
  img {
    width: 100%;
  }
}

.desc {
  position: relative;
  display: inline-block;
  width: 710px;
  margin-left: 30px;
  height: 100%;
  // background-color: skyblue;
}
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
    display: inline-block;
    font-size: 20px;
    font-weight: 400;
  }
}

.logoTime {
  position: relative;
  height: 32px;
  margin-top: 10px;
  // text-align: center;
  line-height: 32px;
  img {
    height: 29px;
    width: 29px;
    border-radius: 50%;
    vertical-align: middle;
  }
  a {
    height: 32px;
    color: #000;
    margin-left: 6px;
    margin-right: 16px;
    font-size: 15px;
  }
  span {
    height: 32px;
    font-size: 11px;
    color: #999;
  }
}
.start {
  position: absolute;
  top: 23px;
  left: 20px;
  width: 10px;
  height: 10px;
  background-color: #ffbd20;
  border-radius: 50%;
  img {
    position: relative;
    bottom: 13px;
    // background-color: red;
    width: 10px;
    height: 10px;
  }
}

.playAll {
  margin-top: 14px;
  width: 120px;
  height: 25px;
  background-color: #c62f2f;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  line-height: 26px;
  i {
    color: #fff;
    margin: 0 5px;
  }
}
.btnList {
  font-size: 14px;
}
.bottomText {
  margin-top: 25px;
  font-size: 12px;
  div {
    margin-top: 16px;
  }
}
.count {
  position: absolute;
  top: 0;
  right: 0;
}
</style>