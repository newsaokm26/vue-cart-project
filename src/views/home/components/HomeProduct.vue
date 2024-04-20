<script setup>
// import { homeGetPokeApi } from '@/api/home'
// import { onMounted } from 'vue'
import { ref } from 'vue'
import HomePanel from './HomePanel.vue'

// const pokeData = ref([])
// const getPokeData = async () => {
//   const res = await homeGetPokeApi()
//   pokeData.value = res.data.data
//   console.log(pokeData.value)
// }

// onMounted(() => {
//   getPokeData()
// })

const pokeData = ref([
  {
    id: '1001001000',
    name: '寶可夢 | 精靈球',
    price: '150',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1001001001',
    name: '寶可夢 | 大頭公仔',
    price: '300',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1001001002',
    name: '寶可夢 | 卡牌',
    price: '100',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1001001003',
    name: '寶可夢 | 皮卡丘公仔',
    price: '250',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1612454376902-577cd469d008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1001001004',
    name: '寶可夢 | 噴火龍限量卡牌',
    price: '1000',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1611931960487-4932667079f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1001001005',
    name: '寶可夢 | 皮卡丘線玩偶',
    price: '500',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1627693685101-687bf0eb1222?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1001001006',
    name: '寶可夢 | 遊戲卡帶',
    price: '1200',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1620451912458-b8233cf0a237?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1001001007',
    name: '寶可夢 | 卡比獸陶瓷娃娃',
    price: '310',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
])
</script>
<template>
  <HomePanel title="- 寶可夢 -">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in pokeData" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
          </RouterLink>
          <div class="extra">
            <div class="e-goods">
              <div class="e-title">
                <RouterLink :to="`/detail/manage/${item.id}`">{{
                  item.name
                }}</RouterLink>
              </div>
              <div class="e-price">
                <span>NT${{ item.price }}</span>
              </div>
            </div>
            <div class="e-btn">
              <el-button>加入購物車</el-button>
            </div>
          </div>
        </li>
      </ul>
    </template>
    <template #more>
      <app-more path="/category/manage/100100"></app-more>
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
    position: relative;
    width: 350px;
    height: 350px;
    background: #f0f9f4;
    transition: all 0.5s;
    margin: 10px;

    // &:hover {
    //   transform: translate3d(0, -3px, 0);
    //   box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    // }

    img {
      width: 350px;
      height: 350px;
      border-radius: 10px;
      object-fit: cover; // 等比例縮放
    }

    // 鼠標玄停顯示
    .extra {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 350px;
      height: 350px;
      background-color: #fff;
      padding: 40px;

      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      opacity: 0;
      transition: 0.5s;

      .e-goods {
        width: 270px;
        height: 80px;

        .e-title {
          width: 270px;
          height: 50px;
          font-size: 14px;
          color: #444444;
        }

        .e-price {
          margin-top: 6px;
          width: 270px;
          height: 22.5px;
          font-size: 15px;
          color: #524141;

          span {
            width: 53px;
            height: 22.5px;
          }
        }
      }

      .e-btn {
        padding: 1px 6px;

        .el-button {
          width: 260px;
          height: 40px;
          background: #4bb9b0;
          color: #fff;
        }
      }
    }

    &:hover .extra {
      opacity: 1;
      transition: 0.5s;
    }
  }
}

@media (max-width: 988px) {
}
</style>
