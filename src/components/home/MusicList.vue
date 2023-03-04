<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :show-indicators="false" :width="150">
        <van-swipe-item v-for="item in state.musicList" :key="item">
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
            <img :src="item.picUrl" alt="" />
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gl-play-copy"></use>
              </svg>
              {{ changeCount(item.playCount) }}
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { getMusicList } from '@/request/api/home.js';
const state = reactive({
  musicList: [],
});
function changeCount(num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿';
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  }
}
onMounted(async () => {
  let res = await getMusicList();
  console.log(res);
  state.musicList = res.data.result;
});
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5.5rem;
  padding: 0.2rem;
  margin-top: 0.1rem;

  .musicTop {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 0.4rem;
      font-weight: 600;
    }

    .more {
      padding: 0.05rem 0.2rem;
      font-size: 0.25rem;
      color: #999;
      border: 1px solid #999;
      border-radius: 0.4rem;
    }
  }

  .musicContent {
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;

    .van-swipe-item {
      height: 3.8rem;
      padding-right: 0.2rem;
      position: relative;

      img {
        width: 100%;
        border-radius: 0.2rem;
      }

      .playCount {
        position: absolute;
        color: white;
        /* z-index: 100; */
        right: 0.3rem;

        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }

      .name {
        bottom: 0px;
      }
    }
  }
}
</style>
