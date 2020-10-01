<template>
  <el-table :data="tableData" style="width: 100%" class="" stripe>
    <el-table-column type="index" label=" " width="50px"> </el-table-column>
    <el-table-column prop="caoZuo" label="操作" width="60px"> </el-table-column>
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
import { timeFormat, getSongListInfoSongs } from "common/tool";
export default {
  data() {
    return {
      tableData: [],
      //
      musicIds: [],
    };
  },
  created() {
    this.getMusicList();
  },
  methods: {
    //获取列表
    async getMusicList() {
      const id = this.$route.params.id;
      const res = await this.$http.post("playlist/detail", { id: id });
      res.data.playlist.trackIds.forEach((item1) => {
        this.musicIds.push(item1.id);
      });
      // const res1 = await this.$http.post("song/detail", { ids: "5102638245" });
      this.musicIds.map((item2) => {
        // item2 += "";
        // console.log(item2);
        // const res1 = await this.$http.post("song/detail", { ids: item2 });
        // console.log(res1);
        // res1.data.songs[0].dt = timeFormat(res1.data.songs[0].dt);
        // this.tableData.push(res1.data.songs[0]);
        //
        this.getSongDetail(item2);
      });
    },
    //获取每首歌时长名字歌手
    getSongDetail(item) {
      // console.log(item);
      // item += "";
      // const res = await this.$http
      //   .post("song/detail", { ids: item })
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {});
      // console.log(err);

      // res.data.songs[0].dt = timeFormat(res.data.songs[0].dt);
      // this.tableData.push(res.data.songs[0]);
      getSongListInfoSongs(item).then((res) => {
        item += "";
        res.songs[0].dt = timeFormat(res.songs[0].dt);
        //每首歌的信息保存
        this.tableData.push(res.songs[0]);
      });
    },
  },
  mounted() {},
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

tr /deep/ el-table__row:hover {
  color: #000;
}
</style>