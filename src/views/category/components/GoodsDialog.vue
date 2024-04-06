<script setup>
import { ref } from 'vue'
import { detGetGoodsApi } from '@/api/detail'

// 彈窗打開關閉方法
const dialogVisible = ref(false)
// 商品詳細資料
const goods = ref({})
const open = async (id) => {
  dialogVisible.value = true
  const res = await detGetGoodsApi(id)
  goods.value = res.data.result
}

// 組件對外暴露方法
defineExpose({
  open
})
</script>
<template>
  <el-dialog v-model="dialogVisible" width="900">
    <div class="dialog-container">
      <div class="goods-info">
        <!-- 商品圖片 -->
        <div class="media">
          <img src="https://fakeimg.pl/383/" />
        </div>
        <!-- 商品信息 -->
        <div class="spec">
          <h4 class="g-name">商品名稱</h4>
          <div class="g-desc">
            <p v-for="i in 3" :key="i">★ 商品描述</p>
          </div>
          <div class="g-slogan">正版授權 | 寶可夢</div>
          <div class="g-price">
            <span>建議售價</span>

            <div class="nt-price">NT$199</div>
          </div>
          <!-- 組件 -->
          <el-input-number :min="1" :max="10"> </el-input-number>
          <!-- 加入 -->
          <el-button size="large" class="joinbtn" @click="addCart">
            加入購物車
          </el-button>
        </div>
      </div>
      <!-- 底部 -->
      <div class="goods-footer">
        <div class="goods-detail">
          <!-- 商品介紹 -->

          <h5>| 商品介紹</h5>
          <h1 style="text-align: center">
            {{ goods.name }}
          </h1>
          <br />
          <!-- \n\n -->
          <h3 style="text-align: center">隨身攜帶寶可夢</h3>
          <br />
          <!-- \n\n -->
          <h3 style="text-align: center">大師級收藏家一定要擁有!</h3>
          <br />
          <!-- \n\n -->
          <hr />

          <!-- 图片 -->

          <!-- 運送方式 -->
          <h5>| 運送方式</h5>
          <img src="@/assets/buyknow.png" />
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss">
.dialog-container {
  padding: 20px 40px;
  color: #444444;

  .goods-info {
    display: flex;

    .media {
      width: 425px;
      height: 442px;
      padding: 0 15px;
    }

    .spec {
      width: 425px;
      height: 442px;
      padding: 0 15px;
    }

    .g-name {
      font-size: 20px;
      margin-bottom: 8px;
    }

    .g-desc {
      font-size: 14px;
      margin-bottom: 10px;
    }

    .g-slogan {
      margin-bottom: 8px;
    }

    .g-price {
      margin-bottom: 10px;
      span {
        font-size: 14px;
      }

      .nt-price {
        font-size: 24px;
      }
    }
  }

  .el-input-number {
    width: 364px;
    height: 38px;
  }

  .joinbtn {
    margin-top: 20px;
    width: 364px;
    height: 38px;
    color: #fff;
    font-size: 15px;
    background-color: #4bb9b0;
  }

  .goods-detail {
    > img {
      width: 100%;
    }

    h5 {
      margin-bottom: 8px;
      font-size: 20px;
    }
  }
}
</style>
