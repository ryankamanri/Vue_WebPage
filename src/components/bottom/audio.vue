<template>
  <!-- 首页-底部控制器 -->
  <div class="mainBoxBottom">
    <!-- 上一曲播放暂停下一曲 -->
    <div class="audioBtn">
      <div class="up">
        <img src="~assets/audio/上一首.png" alt="" />
      </div>
      <div class="boFang" @click="switchAudio()">
        <img src="~assets/audio/播放.png" v-if="!ifAudio" alt="" />
        <img src="~assets/audio/暂停.png" v-if="ifAudio" alt="" />
      </div>
      <div class="down">
        <img src="~assets/audio/下一首.png" alt="" />
      </div>
    </div>
    <!-- 时间线 -->
    <div class="audioLine">
      <span class="startTime">{{ musicDuration | filtersTime }}</span>
      <span class="endTime">{{ totalDuration | filtersTime }}</span>

      <el-slider
        v-model="musicDuration"
        :max="totalDuration"
        @change="musicDurationChange"
        :show-tooltip="false"
        :disabled="isUrl"
      >
      </el-slider>
    </div>
    <!-- 声音调节 -->
    <div class="singBox">
      <el-slider
        v-model="voiceAdjust"
        :max="maxVoice"
        @change="voiceChange"
      ></el-slider>
      <img src="~assets/audio/声音.png" alt="" />
    </div>
    <!-- 列表循环歌词按钮 -->
    <div class="buttonBox">
      <div class="xunHuan"><img src="~assets/audio/循环.png" alt="" /></div>
      <div class="biaoZhun"><span>标准</span></div>
      <div class="fenPei"><img src="~assets/audio/调节.png" alt="" /></div>
      <div class="geCi"><span>词</span></div>
      <div class="lieBiao"><img src="~assets/audio/列表.png" alt="" /></div>
    </div>
    <audio
      src="~assets/audio/欢喜.mp3"
      class="playMusicAudio"
      ref="audioRef"
    ></audio>
  </div>
</template>

<script>
import { timeFormat } from "common/tool";
export default {
  data() {
    return {
      // getNowMusic: null,
      //是否显示暂停
      ifAudio: false,
      //当前进度
      musicDuration: 0,
      //最大值
      totalDuration: 0,
      //是否禁用
      isUrl: false,
      //音量调节
      voiceAdjust: 100,
      maxVoice: 100,
    };
  },
  created() {},
  mounted() {
    //初始化音乐
    this.installMusic();
  },
  //改变进度触发事件
  methods: {
    //初始化音乐
    installMusic() {
      const audio = this.$refs.audioRef;
      //初始化进度条时间
      audio.currentTime = this.musicDuration;
      console.log("123");
      console.log(this.$refs.audioRef.volume);
      //监听音频改变
      audio.addEventListener("timeupdate", () => {
        //获得音频长度
        this.totalDuration = audio.duration;
        //获取歌曲时间
        this.musicDuration = audio.currentTime;
        console.log(audio.currentTime);
        console.log("456");
      });
    },
    //进度条点击
    musicDurationChange(e) {
      this.$refs.audioRef.currentTime = e;
    },
    //播放暂停切换
    switchAudio() {
      if (this.ifAudio) {
        this.$refs.audioRef.pause();
      } else {
        this.$refs.audioRef.play();
      }
      console.log(this.$refs.audioRef);

      this.ifAudio = !this.ifAudio;
    },
    //声音调节改变
    voiceChange(e) {
      this.$refs.audioRef.volume = e / 100;
    },
  },
  filters: {
    filtersTime(time) {
      return timeFormat(time);
    },
  },
};
</script>

<style lang="less" scoped>
.mainBoxBottom {
  background-color: #f6f6f8;
  div {
    float: left;
  }
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*之前浏览器呵呵我是傻瓜*/
  user-select: none;
}
.audioBtn {
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: initial;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.up,
.down {
  width: 30px;
  height: 30px;
  background-color: #e83c3c;
  border-radius: 15px;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
}
.up {
  position: relative;
  left: 29px;
}
.down {
  position: relative;
  left: 80px;
}
.boFang {
  position: relative;
  left: 55px;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: #e83c3c;
  cursor: pointer;
  img {
    position: relative;
    left: 1px;
    width: 17px;
    height: 17px;
  }
}

.audioLine {
  position: relative;
  // float: left;
  height: 50px;
  width: 660px;
  .el-slider {
    margin-left: 49px;
    margin-top: 9px;
    width: 563px;
  }
}

.el-slider {
  /deep/ .el-slider__bar {
    height: 4px;
    background-color: #e83c3c;
  }
  /deep/ .el-slider__button {
    border: 1px solid #ccc;
    width: 12px;
    height: 12px;
  }
}
.startTime {
  position: absolute;
  top: 18px;
  left: 7px;
  font-size: 7px;
}
.endTime {
  position: absolute;
  top: 18px;
  right: 10px;
  font-size: 7px;
}

.singBox {
  width: 140px;
  height: 50px;
  .el-slider {
    margin-left: 31px;
    margin-top: 9px;
    width: 92px;
  }
  /deep/ .el-slider__button {
    display: none;
    border: 1px solid #ccc;
    width: 12px;
    height: 12px;
  }
  .el-slider:hover /deep/ .el-slider__button {
    display: inline-block;
  }
  img {
    float: left;
    position: relative;
    width: 20px;
    height: 20px;
    bottom: 30px;
    left: 5px;
  }
}
.buttonBox {
  width: 200px;
  height: 50px;
  div {
    margin-right: 18px;
    margin-top: 15px;
    img {
      cursor: pointer;
      width: 20px;
      height: 20px;
    }
    span {
      cursor: pointer;
      position: relative;
      display: inline-block;
      top: -2px;
      padding: 0px 2px;
      border: 1px solid #666;
      font-size: 10px;
      color: #666;
    }
  }
}
</style>