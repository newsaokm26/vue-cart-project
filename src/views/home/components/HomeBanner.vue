<script setup>
// import { ref } from 'vue'

// const imgList = ref([
//   {
//     id: 1,
//     imgUrl: '@/assets/banner/banner01.png'
//   },
//   {
//     id: 2,
//     imgUrl: '@/assets/banner/banner02.png'
//   }
// ])

const testCl = (item) => {
  console.log(item)
}
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in 4" :key="item" @click="testCl(item)">
        <img src="@/assets/banner/banner01.png" alt="" />
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
  }
}
</style>
