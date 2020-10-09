<template>
  <div>
    <el-table
      :data="musicLists"
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
      <el-table-column prop="artists[0].name" label="歌手" width="236px">
      </el-table-column>
      <el-table-column prop="album.name" label="专辑" width="214px">
      </el-table-column>
      <el-table-column prop="duration" label="时长">
        <template slot-scope="scope">
          {{ scope.row.duration | timeFormatFilter }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { timeFormat } from "common/tool";
import { getMusicUrl } from "network/children/geXing";
export default {
  data() {
    return {};
  },
  props: {
    musicLists: {
      type: Array,
    },
  },
  components: {},
  created() {},
  methods: {
    //播放音乐
    playMusicList(e) {
      var audio = document.getElementById("musicAudio");
      audio.loop = true;
      console.log(e);
      this.$store.commit("playMusicList", e);

      this.$store.commit("setMusicUrl");
      getMusicUrl(e.id)
        .then((res) => {
          this.$store.commit("setMusicUrl", res.data[0].url);
        })
        .catch((err) => console.log(err));
    },
  },
  filters: {
    timeFormatFilter: function (time) {
      return timeFormat(time);
    },
  },
};
</script>

<style lang='less' scoped>
.el-table /deep/ th {
  padding: 3px;
  border-right: 1px solid var(--color-line);
  font-weight: 400;
  color: #000;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}
.el-table /deep/ tr {
  background-color: rgba(0, 0, 0, 0.1px);
  white-space: nowrap;
}
.el-table/deep/ td {
  padding: 3px 0;
  font-size: 11px;
}
.el-table /deep/ td,
th.is-leaf {
  border: 0;
  white-space: nowrap;
}
.el-table /deep/ .el-table__row {
  // background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.el-table /deep/ .el-table__row:hover {
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

.playing {
  position: absolute;
  left: -50px;
  top: 3px;
  img {
    width: 25px;
    height: 21px;
  }
}
</style>