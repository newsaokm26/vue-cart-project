<script setup>
// import { ref } from 'vue'

const homeCarousel = [
  {
    id: '1001001000',
    name: '寶可夢 | 精靈球',
    imgUrl:
      'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1001001001',
    name: '寶可夢 | 大頭公仔',
    imgUrl:
      'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item
        v-for="item in homeCarousel"
        :key="item.id"
        @click="$router.push(`/detail/manage/${item.id}`)"
      >
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  height: 500px;
  margin: 0 auto;
  margin-top: 1.5px;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover; // 等比例縮放
    cursor: pointer;
  }
}
</style>
