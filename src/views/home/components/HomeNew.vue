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
