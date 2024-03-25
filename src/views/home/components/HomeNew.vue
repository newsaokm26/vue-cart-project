<script setup>
import HomePanel from './HomePanel.vue'
import { homeGetMarioApi } from '@/api/home'
import { ref, onMounted } from 'vue'

const marioData = ref([])
const getMarioData = async () => {
  const res = await homeGetMarioApi()
  marioData.value = res.data.data
}

onMounted(() => {
  getMarioData()
})
</script>
<template>
  <HomePanel title="- 超級馬力歐 -">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in marioData" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
          </RouterLink>
        </li>
      </ul>
    </template>
    <template #more>
      <app-more path="/"></app-more>
    </template>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;

  li {
    width: 350px;
    height: 350px;
    background: #f0f9f4;
    transition: all 0.5s;
    margin: 10px;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 350px;
      height: 350px;
      border-radius: 10px;
      object-fit: cover; // 等比例縮放
    }
  }
}
</style>
