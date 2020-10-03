<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    @row-click="playMusicList"
    stripe
  >
    <el-table-column type="index" label=" " width="50px"> </el-table-column>
    <el-table-column label="操作" width="60px">
      <template>
        <div class="caoZuoBtn">
          <img src="~assets/images/geXing/心.png" alt="喜欢" /><img
            src="~assets/images/geXing/下载.png"
            alt="下载"
          />
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="音乐标题" width="333px">
    </el-table-column>
    <el-table-column prop="ar[0].name" label="歌手" width="236px">
    </el-table-column>
    <el-table-column prop="al.name" label="专辑" width="214px">
    </el-table-column>
    <el-table-column prop="dt" label="时长"> </el-table-column>
  </el-table>
</template>

<script>
import { timeFormat } from "common/tool";
import {
  getListDetail,
  getSongListInfoSongs,
  getMusicUrl,
} from "network/children/geXing";

import {} from "network/request";
export default {
  data() {
    return {
      tableData: [],
      musicIds: [],
      playlist: {},
      creators: {},
      count: 0,
    };
  },
  created() {
    this.getMusicList();
  },
  methods: {
    //获取列表
    getMusicList() {
      if (this.tableData) this.tableData = [];
      if (this.musicIds) this.musicIds = [];
      const id = this.$route.params.id;
      getListDetail(id).then((res) => {
        this.playlist = res.playlist;
        this.creators = res.playlist.creator;
        //获取列表前20条数据
        for (let i in this.playlist.trackIds) {
          if (i < 20) {
            this.musicIds.push(this.playlist.trackIds[i].id);
          }
        }
        //获取列表前20条数据每条的信息
        this.musicIds.map((item2) => {
          this.getSongDetail(item2);
        });
      });
    },
    //获取每首歌时长名字歌手
    getSongDetail(item) {
      getSongListInfoSongs(item).then((res) => {
        item += "";
        res.songs[0].dt = timeFormat(res.songs[0].dt);
        //每首歌的信息保存
        this.tableData.push(res.songs[0]);
      });
    },
    //点击某音乐之后播放
    async playMusicList(e) {
      console.log(e);
      this.$store.commit("playMusicList", e);
      //获取url上传到vuex
      // const musicAudio = document.getElementById("musicAudio");
      // const res = await this.$http.post("song/url", { id: e.id });
      this.$store.commit("setMusicUrl");
      getMusicUrl(e.id).then((res) => {
        this.$store.commit("setMusicUrl", res.data[0].url);
      });
    },
  },
  mounted() {},
  watch: {
    $route: function (to, from) {
      if (!this.tableData) {
        this.getMusicList();
      } else {
        this.tableData = [];
        this.getMusicList();
      }
    },
  },
};
</script>

<style lang="less" scoped>
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

.caoZuoBtn {
  width: 100%;
  height: 20px;
  img {
    cursor: pointer;
    position: relative;
    top: 3px;
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }
  :nth-child(2) {
    top: 1px;
  }
  :nth-child(1) {
    left: -2px;
  }
}
</style>