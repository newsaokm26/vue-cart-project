<script setup>
import { layoutGetHeadApi } from '@/api/layout'
import { ref, onMounted } from 'vue'
import linefriend from '@/assets/linefriend.png'

const headData = ref([])
const getHeadData = async () => {
  const res = await layoutGetHeadApi()
  headData.value = res.data.data
}

onMounted(() => getHeadData())
</script>
<template>
  <header class="app-header">
    <div class="container">
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首頁</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/">活動專區</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/">NEW</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/">商品分類</RouterLink>
        </li>
        <li v-for="item in headData" :key="item.id">
          <RouterLink
            active-class="active"
            :to="`/category/manage/${item.id}`"
            >{{ item.name }}</RouterLink
          >
        </li>
        <li class="addline">
          <RouterLink to="/"
            ><img :src="linefriend" alt="" height="36"
          /></RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>
<style scoped lang="scss">
.app-header {
  background: #4bb9b0;
  box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  .app-header-nav {
    display: flex;
    height: 52px;

    li {
      padding: 8px 20px;
      display: flex;
      align-items: center;
      text-align: center;

      a {
        font-size: 14px;

        color: white;

        &:hover {
          color: #565656;
        }
      }

      .active {
        color: #565656;
      }
    }
  }
}
</style>
