<template>
  <!-- 发现音乐---个性推荐 -->
  <div>
    <!-- 轮播图 -->
    <swiper></swiper>
    <!-- 推荐歌单 -->
    <div class="tuiJian">
      <h5>推荐歌单</h5>
      <a href="#">更多></a>
    </div>
    <div class="mainBox">
      <!-- 每日推荐 -->
      <!-- <ul class="bigBox">
        <li class="eachBox">
          <div class="picBox">
            <img src="~assets/images/touxiang.jpg" alt="" />
          </div>
          <div class="textBox">每日歌曲推荐</div>
          <div class="topText">
            <p>最好的祝福送给最好的你！</p>
          </div>
        </li>
      </ul> -->
      <ul class="bigBox" v-for="(item, index) in musicList" :key="index">
        <li class="eachBox" @click="eachClick(item.id)">
          <div class="picBox"><img :src="item.coverImgUrl" alt="" /></div>
          <div class="textBox">{{ item.name }}</div>
          <div class="countIcon">
            <span>{{ getMusicCount(item.playCount) }}万</span
            ><i class="el-icon-headset" />
          </div>
          <div class="boFang"><i class="el-icon-video-play"></i></div>
          <div class="topText">
            <p>{{ item.name }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 轮播图
import swiper from "components/find/swiper";
import { Loading } from "element-ui";
export default {
  components: {
    swiper,
  },
  data() {
    return {
      musicList: [
        {
          name: "远方的少年郎，是不是偷偷在想家",
          coverImgUrl:
            "http://p3.music.126.net/xquxGQ_LzASlEifSHjwbUw==/109951165157401202.jpg",
        },
        {
          name: "流行热歌丨神经病，没关系",
          coverImgUrl:
            "http://p3.music.126.net/TNUu47IsLtcy6zywy6IEwg==/109951165112422707.jpg",
        },
        {
          name: "初见姑娘时，花开秋上",
          coverImgUrl:
            "http://p3.music.126.net/85TW1PuLGZ8q_jTEPPlAFg==/109951165077421899.jpg",
        },
        {
          name: "慢慢悠悠压马路，清新歌曲最合拍",
          coverImgUrl:
            "http://p3.music.126.net/TrdTZkZdVtLez3nEn5vf8A==/109951165077511537.jpg",
        },
        {
          name: "夜晚情绪库•总有人黑着眼眶修着仙",
          coverImgUrl:
            "http://p3.music.126.net/CHhDFO7HmsDBE1ois8UqyQ==/109951165246601452.jpg",
        },
        {
          name: "盛夏白瓷梅子汤，碎冰碰壁铛啷响",
          coverImgUrl:
            "http://p3.music.126.net/uRKi7uzwfXCQmoS21u5VJA==/109951165145224508.jpg",
        },
        {
          name: "女孩子少一点胡思乱想就多一份快乐",
          coverImgUrl:
            "http://p4.music.126.net/GamGMkmxUHmYbSmmM2rSeA==/109951165096324064.jpg",
        },
        {
          name: "时光与念想：你是他人无法比拟的糖",
          coverImgUrl:
            "http://p3.music.126.net/kW6OVHGlymbiKSPTmu-RZg==/109951165096293581.jpg",
        },
        {
          name: "走路带风 | 如果你需要音乐来充充电",
          coverImgUrl:
            "http://p3.music.126.net/lIBF8rn57puP3ckIfA6Obg==/109951165294241025.jpg",
        },
        {
          name: "18年夏天 你看一晃两三年 匆匆又夏天",
          coverImgUrl:
            "http://p3.music.126.net/XUtmgGaupOAGLYUaiRvxHQ==/109951164930963831.jpg",
        },
      ],
      //
      loadingInstance: null,
    };
  },
  created() {
    this.getMusicList();
  },
  methods: {
    //获取歌单列表
    async getMusicList() {
      //加载中
      this.loadingInstance = Loading.service({
        target: ".mainBox", // DOM 节点
        text: "QAQ加载中，主人请稍后",
        background: "rgba(255,255, 255, 0.9)",
      });
      //生成随机数
      const num = (Math.random() * 100).toFixed(0);
      //获取随机歌曲
      const res = await this.$http.post(`top/playlist?offset=${num}&limit=10`);
      //赋值给歌单
      this.musicList = res.data.playlists;

      console.log(this.musicList);
      this.loadingInstance.close();
      //
    },

    //歌单图片点击
    eachClick(id) {
      this.$router.push(`/home/listDetail${id}`);
    },
  },
  computed: {
    //赋值听的数量
    getMusicCount() {
      return function (num) {
        if (num === undefined) {
          return 99;
        } else {
          return (num / 10000).toFixed(0);
        }
      };
    },
  },
};
</script>


<style lang="less" scoped>
.tuiJian {
  position: relative;
  bottom: 38px;
  height: 33px;
  width: 100%;
  border-bottom: 1px solid #e1e1e2;
  float: left;
  // background-color: red;
  h5 {
    float: left;
    font-size: 18px;
    font-weight: 400;
  }
  a {
    float: right;
    position: relative;
    top: 7px;
    right: 0;
    color: #000;
  }
}
.mainBox {
  position: relative;
  top: -25px;
}

.eachBox {
  position: relative;
  width: 173px;
  height: 215px;
  margin-right: 15px;
  margin-bottom: 35px;
  float: left;
  cursor: pointer;
  overflow: hidden;

  list-style: none;
}
.eachBox:nth-child(5),
.eachBox:nth-child(10) {
  margin-right: 0;
}
.picBox {
  width: 175px;
  height: 175px;
  img {
    width: 100%;
  }
  margin-bottom: 8px;
}
.textBox {
  width: 175px;
  height: 40px;
  font-size: 13px;
}
.countIcon {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 20px;
  line-height: 20px;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.2),
    rgba(255, 255, 255, 0)
  );
  span,
  i {
    position: relative;
    right: 4px;
    float: right;
    font-size: 12px;
    color: #fff;
  }
  i {
    position: relative;
    top: 5px;
    right: 7px;
  }
}
.boFang {
  position: absolute;
  bottom: 40px;
  right: 0;
  font-size: 31px;
  i {
    color: rgba(255, 255, 255, 0.95);
  }

  transform: translateX(115%);
  transition: 0.3s;
}
.bigBox:hover .boFang {
  transform: translateY(0);
}
.topText {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  transform: translateY(-115%);
  transition: 0.3s;
  p {
    padding: 5px 5px;
    font-size: 12px;
    color: #fff;
  }
}
.bigBox:hover .topText {
  transform: translateX(0);
}
</style>