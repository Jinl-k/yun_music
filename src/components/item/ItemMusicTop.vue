<template>
  <div class="itemMusicTop">
    <img :src="props.playList.coverImgUrl" alt="" class="bgimg" />
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="itemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
  </div>
  <div class="itemTopContent">
    <div class="contentLeft">
      <img :src="playlist.coverImgUrl" alt="" />
      <div class="playCount">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gl-play-copy"></use>
        </svg>
        <span>{{ changeCount(playlist.playCount) }}</span>
      </div>
    </div>
    <div class="contentRight">
      <p class="rightP_one">{{ playlist.name }}</p>
      <div class="right_img">
        <img :src="playlist.creator.backgroundUrl" alt="" />
        <span>{{ playlist.creator.nickname }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </div>
      <p class="rightP_two">
        <span>{{ playlist.description }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </p>
    </div>
  </div>
  <div class="itemTopFooter">
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
      </svg>
      <span>{{ playlist.commentCount }}</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <span>{{ playlist.shareCount }}</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
      </svg>
      <span>下载</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-show_duoxuan"></use>
      </svg>
      <span>多选</span>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';
const props = defineProps({
  playList: Object,
});

let playlist = reactive({});
// 通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
if (JSON.stringify(props.playList) == '{}') {
  playlist = JSON.parse(sessionStorage.getItem('itemDetail')).playList;
}else{
  playlist = props.playList;
}
// 对播放量的处理
function changeCount(num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿';
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  }
}
</script>

<style lang="less" scoped>
.itemMusicTop {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .itemLeft,
  .itemRight {
    display: flex;
    width: 25%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.2rem;

    span {
      font-size: 0.4rem;
      color: white;
    }

    .icon {
      fill: white;
    }
  }

  .bgimg {
    width: 100%;
    height: 11rem;
    position: absolute;
    z-index: -1;
    filter: blur(30px);
  }
}

.itemTopContent {
  height: 3rem;
  width: 100%;
  padding: 0.2rem;
  margin-top: 0.4rem;
  display: flex;
  justify-content: space-between;

  .contentLeft {
    width: 36%;
    height: 2.6rem;
    position: relative;

    img {
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 0.2rem;
      position: absolute;
      z-index: -1;
    }

    .playCount {
      position: absolute;
      margin-top: 0.1rem;
      right: 0.1rem;

      span {
        font-size: 0.26rem;
        color: white;
      }

      .icon {
        width: 0.26rem;
        height: 0.26rem;
        margin-top: -0.02rem;
        vertical-align: middle;
      }
    }
  }

  .contentRight {
    height: 2.6rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .rightP_one {
      font-size: 0.3rem;
      font-weight: 600;
      color: white;
    }

    .right_img {
      width: 100%;
      height: 0.6rem;
      color: #ccc;
      line-height: 0.6rem;

      img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        vertical-align: middle;
      }

      span {
        margin-left: 0.15rem;
      }

      .icon {
        width: 0.26rem;
        height: 0.26rem;
      }
    }

    .rightP_two {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 0.6rem;

      span {
        font-size: 0.24rem;
        color: #ccc;
        display: inline-block;
        width: 95%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .icon {
        width: 0.24rem;
        height: 0.24rem;
      }
    }
  }
}

.itemTopFooter {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1.4rem;
  margin-top: 0.1rem;

  .footerItem {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;

    .icon {
      fill: white;
    }

    span {
      margin-top: 0.2rem;
    }
  }
}
</style>
