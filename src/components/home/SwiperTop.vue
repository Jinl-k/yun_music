<template>
  <div style="width: 100%">
    <van-swipe style="margin-left: 10px; margin-right: 10px" :autoplay="4000" :height="150" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <van-image fit="fill" :radius="8" :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { getBanner } from '@/request/api/home';
const state = reactive({
  images: [],
});
onMounted(async () => {
  let res = await getBanner();
  state.images = res.data.banners;
});
</script>

<style lang="scss" scoped></style>
