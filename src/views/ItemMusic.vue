<template>
  <ItemMusicTop :playList='state.playList'/>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { reactive, onMounted } from 'vue';
import { getMusicListDetail } from '@/request/api/item_music.js';

const state = reactive({
  playList: {},

});

onMounted(async () => {
  let id = useRoute().query.id;
  let res = await getMusicListDetail(id);
  state.playList = res.data.playlist;
  //防止页面刷新，数据丢失，将数据保存到sessionstorage中
  sessionStorage.setItem('itemDetail',JSON.stringify(state))
});
</script>

<style lang="less" scoped></style>
