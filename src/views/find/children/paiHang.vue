<template>
  <div>
    <Head-title style="margin-top: 25px" :headName="'官方榜'" :show="false" />
    <ItemImg
      :imgInfo="item"
      :indexInfo="index"
      v-for="(item, index) in allMes"
      :key="index"
    />
  </div>
</template>

<script>
import HeadTitle from "components/find/zhuBo/headTitle";
import ItemImg from "components/find/paiHang/itemImg";

export default {
  data() {
    return {
      //所有信息
      allMes: [],
      soarings: {},
      newsongs: {},
      original: {},
      hotsong: {},
      raphotlist: {},
      raplist: {},
      globalList: [],
    };
  },
  components: {
    HeadTitle,
    ItemImg,
  },
  created() {
    this.getPaiHangList();
  },
  methods: {
    async getPaiHangList() {
      const res = await this.$http.post("toplist");
      this.allMes = res.data.list.splice(0, 6);
      console.log(this.allMes);
      this.soarings = this.allMes[0];
      this.newsongs = this.allMes[1];
      this.original = this.allMes[2];
      this.hotsong = this.allMes[3];
      this.raplist = this.allMes[4];
      this.raphotlist = this.allMes[5];
      console.log(res.list);
      this.globalList = res.list;
    },
  },
};
</script>

<style lang='less' scoped>
</style>