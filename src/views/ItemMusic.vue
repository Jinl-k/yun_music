<template>
  <ItemMusicTop :playList="state.playList" />
  <ItemMusicList :itemList="state.itemList" :subscribedCount='state.playList.subscribedCount'/>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { reactive, onBeforeMount } from 'vue';
import { getMusicListDetail, getMusicItemList } from '@/request/api/item_music.js';

const state = reactive({
  playList: {}, // 歌单详情
  itemList: [], // 歌单歌曲
});

onBeforeMount(async () => {
  let id = useRoute().query.id;
  // 获取歌单详情 let res = await getMusicListDetail(id);
  let res = await getMusicListDetail(id);
  state.playList = res.data.playlist;

  // 获取歌单歌曲
  let result = await getMusicItemList(id);
  state.itemList = result.data.songs;

  //防止页面刷新，数据丢失，将数据保存到sessionstorage中
  sessionStorage.setItem('itemDetail', JSON.stringify(state));
});
</script>

<style lang="less" scoped>

</style>
