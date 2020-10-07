<template>
  <div>
    <div :class="(indexInfo + 1) % 3 ? ' maxBox ' : 'maxBox clearMargin'">
      <div
        class="imgBox"
        :style="{
          background:
            'url(' + imgInfo.coverImgUrl + ') no-repeat 0 -65px/300px 215px',
          height: '90px',
        }"
      >
        <!-- <img :src="imgInfo.coverImgUrl" alt="" /> -->
      </div>

      <div class="musicList">
        {{ imgInfo.id }}
      </div>
      <!-- <div class="musicList"> -->
      <!-- <el-table
          :data="listData"
          style="width: 100%"
          @row-click="playMusicList"
          stripe
          :row-class-name="tableRowClassName"
        >
          <el-table-column type="index" label=" " width="40px">
          </el-table-column>
          <el-table-column prop="name" label="音乐标题" width="200px">
          </el-table-column>
          <el-table-column prop="ar[0].name" label="歌手" width="110px">
          </el-table-column>
        </el-table> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicId: "",
      musicList: [],
      // thisImgInfo:this.imgInfo
    };
  },
  props: {
    imgInfo: {
      type: Object,
      default: "",
    },
    indexInfo: {
      type: Number,
      default: "",
    },

    // listData: {
    //   type: Array,
    //   default: "",
    // },
  },
  components: {},
  created() {
    this.getMusicId();
  },
  methods: {
    //点击某音乐之后播放
    playMusicList(e) {
      console.log(e.index);
      this.$store.commit("playMusicList", e);
      this.$store.commit("setMusicUrl");
      //获取该音乐url并上传到store
      getMusicUrl(e.id)
        .then((res) => {
          this.$store.commit("setMusicUrl", res.data[0].url);
        })
        .catch((err) => console.log(err));
    },
    //获取每行索引
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    //获取
    async getMusicId() {
      console.log(this.imgInfo.id);
      const res = await this.$http.post("playlist/detail", {
        id: this.imgInfo.id,
      });
      console.log(res.data);
    },
  },
  watch: {
    imgInfo(val, oldVal) {
      console.log("id: " + val, oldVal);
    },
  },
};
</script>

<style lang='less' scoped>
.maxBox {
  background-color: #fff;
  float: left;
  width: 300px;
  height: 380px;
  margin-top: 20px;
  margin-right: 20px;
  .imgBox {
    // background: "url(" + imgInfo.coverImgUrl + ")";
    // width: 100%;
    // height: 90px;
    // img {
    //   width: 300px;
    //   height: 90px;
    // }
  }
}

.clearMargin {
  margin-right: 0;
}

//列表
.musicList {
  // position: absolute;
  width: 410px;
  height: 400px;
  background-color: #fff;
  // bottom: 2px;
  // right: 10px;
  // border: 2px solid #ccc;
  box-shadow: 0 0 7px #888;

  overflow-x: hidden;
  overflow-y: scroll;
}

//列表样式
.el-tabs__content /deep/ .el-table td {
  padding: 6px;
}
thead {
  /deep/ .el-table th {
    padding: 0;
  }
  /deep/ .el-table td {
    padding: 0;
  }
}

.el-table /deep/ th,
td {
  padding: 3px;
  border-right: 1px solid var(--color-line);
  font-weight: 400;
  color: #000;
  font-size: 12px;
  .cell {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.el-table/deep/ td,
th {
  padding: 3px 0;
  font-size: 11px;
}
.el-table /deep/ td,
th.is-leaf {
  border: 0;
}
.el-table /deep/ .el-table__row {
  cursor: pointer;
}
tr /deep/ el-table__row:hover {
  color: #000;
}
</style>