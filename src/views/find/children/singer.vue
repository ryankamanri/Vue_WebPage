<template>
  <div>
    <div class="choice">
      <Lable-choice
        :lableTitlt="'语种'"
        :lableList="this.language"
        @lableChange="changeLangle"
      />
      <Lable-choice
        :lableTitlt="'分类'"
        :lableList="this.fenLei"
        @lableChange="changeFenlei"
      />
      <Lable-choice
        :lableTitlt="'筛选'"
        :lableList="this.shaiXuan"
        @lableChange="changeShaixuan"
      />
    </div>
  </div>
</template>

<script>
import { getSingersList } from "network/children/search";

import LableChoice from "components/find/singer/LableChoice";
export default {
  data() {
    return {
      singersList: [],
      //歌手名字
      letter: "-1", //筛选
      type: "-1", //分类
      area: "-1", //语种
      language: ["全部", "华语", "欧美", "日本", "韩国", "其他"],
      fenLei: ["全部", "男歌手", "女歌手", "乐队组合"],
      shaiXuan: [
        "热门",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "#",
      ],
    };
  },
  components: {
    LableChoice,
  },
  created() {
    this.getSingersList();
  },
  methods: {
    //获取歌手列表
    getSingersList() {
      getSingersList(this.letter, this.type, this.area).then((res) => {
        // this.singersList = res.result.artists;
        // console.log(this.songsList);
      });
    },
    //监听语言标签改变
    changeLangle(e) {
      switch (e) {
        case 0:
          this.area = -1;
          break;
        case 1:
          this.area = 7;
          break;
        case 2:
          this.area = 96;
          break;
        case 3:
          this.area = 8;
          break;
        case 4:
          this.area = 16;
          break;
        case 5:
          this.area = 0;
          break;
      }
      console.log(this.area);
    },
    //监听分类标签改变
    changeFenlei(e) {
      if (e == 0) {
        this.type = -1;
      } else {
        this.type = e;
      }
      console.log(this.type);
    },
    //监听筛选标签改变
    changeShaixuan(e) {
      if (e === 0) {
        this.letter = -1;
      } else if (e === this.shaiXuan.length - 1) {
        this.letter = 0;
      } else {
        this.letter = this.shaiXuan[e];
      }
      console.log(this.letter);
    },
  },
};
</script>

<style lang='less' scoped>
.choice {
  padding: 20px 0;
  border-bottom: 1px solid var(--color-line);
}
</style>