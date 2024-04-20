<script setup>
// import { layoutGetHeadApi } from '@/api/layout'
// import { onMounted } from 'vue'
import { ref } from 'vue'
import linefriend from '@/assets/linefriend.png'

// const headData = ref([])
// const getHeadData = async () => {
//   const res = await layoutGetHeadApi()
//   headData.value = res.data.data
// }

// onMounted(() => getHeadData())

// 準備資料
const headData = ref([
  {
    id: '100100',
    name: '寶可夢⚡️',
    picture: null,
    childer: null,
    goods: [
      {
        id: '1001001000',
        name: '寶可夢',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: '1001001001',
        name: '寶可夢',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: '1001001002',
        name: '寶可夢',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: '1001001003',
        name: '寶可夢',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1612454376902-577cd469d008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: '1001001004',
        name: '寶可夢',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1611931960487-4932667079f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: '1001001005',
        name: '寶可夢',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1627693685101-687bf0eb1222?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: '1001001006',
        name: '寶可夢',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1620451912458-b8233cf0a237?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: '1001001007',
        name: '寶可夢',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  },
  {
    id: '100200',
    name: '超級瑪利歐🔥',
    picture: null,
    childer: null,
    goods: [
      {
        id: '100200100',
        name: '馬力歐',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: '100200101',
        name: '馬力歐',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: '100200102',
        name: '馬力歐',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: '100200103',
        name: '馬力歐',
        price: null,
        desc: '',
        picture:
          'https://images.unsplash.com/photo-1634159779963-4fafda643dac?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  }
])
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
