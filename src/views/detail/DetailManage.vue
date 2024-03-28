<script setup>
import DetailFixed from './components/DetailFixed.vue'
import { detGetGoodsApi } from '@/api/detail'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores'

const cartSotre = useCartStore()

const goods = ref({})
const route = useRoute()
const getGoods = async () => {
  const res = await detGetGoodsApi(route.params.id)
  goods.value = res.data.result
}

onMounted(() => {
  getGoods()
})

// count
const count = ref(1)
const countChange = (count) => {
  console.log(count)
}

// 加入購物車
const addCart = () => {
  if (goods.value) {
    // 已選擇規格
    cartSotre.addCart({
      id: goods.value.id,
      name: goods.value.name,
      picture: goods.value.mainPictures[0],
      price: goods.value.price,
      count: count.value,
      skuId: goods.value.skuData.skuId,
      attresText: goods.value.skuData.attresText,
      selected: true
    })
    ElMessage.success('加入成功')
  } else {
    // 未選擇規格 提示用戶
    ElMessage.warning('請選擇規格')
  }
}
</script>
<template>
  <DetailFixed />
  <div class="xtx-goods-page">
    <div class="bread">
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
          <el-breadcrumb-item
            :to="{ path: `/category/manage/${goods.categories?.[0].id}` }"
            >{{ goods.categories?.[0].name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/detail/manage/${goods.id}` }"
            >{{ goods.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 商品名稱 -->
    <div class="container">
      <div class="info-container">
        <div class="goods-info">
          <div class="media">
            <!-- 圖片預覽區 -->
            <ftpImageView :image-list="goods.mainPictures" />
          </div>
          <!-- 商品信息區 -->
          <div class="spec">
            <!-- 標題 -->
            <h1 class="g-name">{{ goods.name }}</h1>
            <!-- 簡描 -->
            <div class="g-desc">
              <p v-for="i in 3" :key="i.id">★ {{ goods.desc }}</p>
            </div>
            <div class="g-slogan">
              | {{ goods.vendor }} | {{ goods.slogan }}
            </div>

            <div class="g-price">
              <span>建議售價</span>

              <div class="nt-price">NT${{ goods.price }}</div>
            </div>
            <!-- SKU -->
            <!-- 數據組件 -->
            <el-input-number
              v-model="count"
              :min="1"
              :max="10"
              @change="countChange"
            ></el-input-number>
            <!-- 按钮组件 -->
            <div>
              <el-button size="large" class="joinbtn" @click="addCart">
                加入購物車
              </el-button>
              <el-button size="large" class="buybtn"> 立即購買 </el-button>
            </div>
          </div>
        </div>
        <!-- 底下 -->
        <div class="goods-footer">
          <div class="goods-article">
            <!-- 商品詳情 -->
            <div class="goods-tabs">
              <ul>
                <li>
                  <a href="#"><div>商品介紹</div></a>
                </li>
                <li>
                  <a href="#"><div>商品詳情</div></a>
                </li>
                <li>
                  <a href="#"><div>運送方式</div></a>
                </li>
              </ul>
            </div>
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
      </div>
    </div>
  </div>
  <app-gotop></app-gotop>
</template>
<style scoped lang="scss">
.xtx-goods-page {
  color: #444444;
  font-family: 'Noto Sans TC', sans-serif !important;
  font-weight: bold;
  .bread {
    border-bottom: 1px solid #000000;

    .bread-container {
      width: 1240px;
      height: 60px;
      margin: 0 auto;
      display: flex;
      align-items: center;
    }
  }
  .goods-info {
    min-height: 600px;
    display: flex;

    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }

    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }

  .goods-footer {
    margin-top: 20px;
  }

  .goods-tabs {
    height: 42px;

    ul {
      display: flex;
      border: 1px solid #000000;
      border-radius: 10px;
      li {
        flex: 1;
        display: flex;
        justify-content: center;
        line-height: 42px;

        ~ li {
          border-left: 1px solid #000000;
        }
      }
    }
  }

  .g-name {
    font-size: 24px;
    height: 28px;
    margin: 6px 0;
  }

  .g-desc {
    font-size: 14px;
    margin-top: 12px;
  }

  .g-slogan {
    font-size: 14px;
    margin-top: 24px;
    height: 24px;
  }

  .g-price {
    margin-top: 24px;
    margin-bottom: 12px;
    height: 58px;

    span {
      font-size: 14px;
    }

    .nt-price {
      font-size: 24px;
    }
  }

  .goods-detail {
    padding: 40px;

    > img {
      width: 100%;
    }

    h5 {
      margin-bottom: 8px;
      font-size: 20px;
    }
  }

  .el-input-number {
    width: 531px;
    height: 38px;
  }

  .joinbtn {
    margin-top: 20px;
    width: 260px;
    height: 40px;
    color: #4bb9b0;
    font-size: 15px;
    border: 1px solid #4bb9b0;
  }

  .buybtn {
    margin-top: 20px;
    width: 260px;
    height: 40px;
    color: #fff;
    font-size: 15px;
    background-color: #4bb9b0;
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>
