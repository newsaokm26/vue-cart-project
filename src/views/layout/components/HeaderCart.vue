<script setup>
import { ShoppingCart, CloseBold } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores'

const cartStore = useCartStore()

const currRef = ref()

const openCard = ref(false)
const isOpen = () => {
  openCard.value = !openCard.value
}

// 點擊空白處 關閉card
onMounted(() => {
  document.addEventListener('mouseup', (e) => {
    if (!currRef.value.contains(e.target)) {
      openCard.value = false
    }
  })
})
</script>
<template>
  <div class="cart">
    <div class="curr" ref="currRef">
      <el-icon style="font-size: 24px" @click="isOpen"><ShoppingCart /></el-icon
      ><em>{{ cartStore.allCount }}</em>
    </div>

    <el-card class="layer" v-show="openCard">
      <!-- 購物車有商品 -->
      <template v-if="cartStore.cartList.length > 0">
        <div class="list">
          <div class="item" v-for="i in cartStore.cartList" :key="i">
            <RouterLink to="">
              <img :src="i.picture" alt="" />
              <div class="center">
                <p class="name ellipsis-2">{{ i.name }}</p>
                <p class="count">數量：{{ i.count }}</p>
              </div>
            </RouterLink>
            <el-icon @click="cartStore.delCart(i.skuId)"><CloseBold /></el-icon>
          </div>
        </div>
        <div class="foot">
          <!-- <el-button
            size="large"
            type="primary"
            @click="$router.push('/cartList/manage')"
            >去購物車結算</el-button
          > -->
          <el-button size="large" type="primary"
            ><RouterLink :to="`/cartList/manage`"
              >去購物車結算</RouterLink
            ></el-button
          >
        </div>
      </template>
      <!-- 購物車空 -->
      <template v-else>
        <div class="else-p"><p>目前的購物車是空的 !</p></div>
        <div class="else-foot">
          <el-button
            size="large"
            type="primary"
            @click="$router.push('/cartList/manage')"
            >前往收藏清單</el-button
          >
        </div>
      </template>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.cart {
  position: relative;
  z-index: 600;

  .el-icon {
    cursor: pointer;
  }

  .curr {
    position: relative;
    em {
      position: absolute;
      left: 18px;
      top: -5px;
      padding: 1px 6px;
      line-height: 1;
      background-color: $helpColor;
      color: #fff;
      border-radius: 10px;
      font-size: 15px;
      font-family: Arial;
      font-style: normal;
    }
  }

  .el-card {
    width: 240px;
    border: 1px solid #000;
    position: absolute;
    top: 30px;
    right: 0;

    .foot {
      .el-button {
        width: 200px;
        background: #4bb9b0;
        border: #4bb9b0;
        color: #fff;
      }
    }
  }

  .list {
    padding: 0 10px;

    .item {
      padding: 10px 0;
      width: 200px;
      position: relative;

      // X 按鈕

      i {
        position: absolute;
        bottom: 45px;
        right: 0;
        opacity: 0;
        color: #000;
        transition: all 0.5s;
      }

      &:hover {
        i {
          opacity: 1;
          cursor: pointer;
        }
      }

      a {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #444444;
        margin-bottom: 20px;

        img {
          height: 50px;
          width: 50px;
        }

        .center {
          padding: 0 10px;

          p {
            padding: 4px;
          }
        }
      }
      // ~ .item {
      //   a {
      //     border-bottom: 1px solid #000;
      //   }
      // }
    }
  }

  .else-p {
    padding-top: 12px;
    padding-bottom: 32px;
    p {
      font-size: 14px;
      text-align: center;
    }
  }

  .else-foot {
    .el-button {
      width: 200px;
      background-color: #fff;
      border: 1px solid #4bb9b0;
      color: #4bb9b0;
    }
  }
}
</style>
