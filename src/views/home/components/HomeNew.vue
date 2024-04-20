<script setup>
// import { homeGetMarioApi } from '@/api/home'
// import { onMounted } from 'vue'
import HomePanel from './HomePanel.vue'
import { ref } from 'vue'

// const marioData = ref([])
// const getMarioData = async () => {
//   const res = await homeGetMarioApi()
//   marioData.value = res.data.data
// }

// onMounted(() => {
//   getMarioData()
// })

const marioData = ref([
  {
    id: '1002001000',
    name: '馬力歐 | 地圖場景',
    price: '2500',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1002001001',
    name: '馬力歐 | 馬力歐玩偶',
    price: '350',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1002001002',
    name: '馬力歐 | 馬力歐公仔',
    price: '250',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1002001003',
    name: '馬力歐 | 超級蘑菇',
    price: '300',
    desc: '',
    picture:
      'https://images.unsplash.com/photo-1634159779963-4fafda643dac?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
])
</script>
<template>
  <HomePanel title="- 超級馬力歐 -">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in marioData" :key="item.id">
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
      <app-more path="/category/manage/100200"></app-more>
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
</style>
