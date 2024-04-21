<script setup>
import { ref } from 'vue'
// import { detGetGoodsApi } from '@/api/detail'
import { useCartStore } from '@/stores'

const cartSotre = useCartStore()
// 彈窗打開關閉方法
const dialogVisible = ref(false)

// count
const count = ref(1)
// 商品詳細資料
const goods = ref({})
// const open = async (id) => {
//   dialogVisible.value = true
//   const res = await detGetGoodsApi(id)
//   goods.value = res.data.result
// }

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

// 準備資料
const open = (id) => {
  dialogVisible.value = true
  if (id === '1001001000') {
    goods.value = {
      id: '1001001000',
      name: '寶可夢 | 精靈球',
      desc: '超可愛精靈球',
      price: '150',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '寶可夢',
      slogan: '正版授權',
      categories: [
        {
          id: '100100',
          layer: 1,
          name: '寶可夢'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9000',
        attresText: '寶可夢 | 精靈球'
      }
    }
  } else if (id === '1001001001') {
    goods.value = {
      id: '1001001001',
      name: '寶可夢 | 大頭公仔',
      desc: '好看大頭公仔',
      price: '300',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '寶可夢',
      slogan: '正版授權',
      categories: [
        {
          id: '100100',
          layer: 1,
          name: '寶可夢'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9001',
        attresText: '寶可夢 | 大頭公仔'
      }
    }
  } else if (id === '1001001002') {
    goods.value = {
      id: '1001001002',
      name: '寶可夢 | 卡牌',
      desc: '驚喜超強卡牌包',
      price: '150',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '寶可夢',
      slogan: '正版授權',
      categories: [
        {
          id: '100100',
          layer: 1,
          name: '寶可夢'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9002',
        attresText: '寶可夢 | 卡牌'
      }
    }
  } else if (id === '1001001003') {
    goods.value = {
      id: '1001001003',
      name: '寶可夢 | 皮卡丘公仔',
      desc: '可愛多變皮卡丘',
      price: '250',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1612454376902-577cd469d008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '寶可夢',
      slogan: '正版授權',
      categories: [
        {
          id: '100100',
          layer: 1,
          name: '寶可夢'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1612454376902-577cd469d008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9003',
        attresText: '寶可夢 | 皮卡丘公仔'
      }
    }
  } else if (id === '1001001004') {
    goods.value = {
      id: '1001001004',
      name: '寶可夢 | 噴火龍限量卡牌',
      desc: '稀有噴火龍卡牌',
      price: '1000',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1611931960487-4932667079f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '寶可夢',
      slogan: '正版授權',
      categories: [
        {
          id: '100100',
          layer: 1,
          name: '寶可夢'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1611931960487-4932667079f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9004',
        attresText: '寶可夢 | 噴火龍限量卡牌'
      }
    }
  } else if (id === '1001001005') {
    goods.value = {
      id: '1001001005',
      name: '寶可夢 | 皮卡丘線玩偶',
      desc: '手織皮卡丘可愛玩偶',
      price: '500',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1627693685101-687bf0eb1222?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '寶可夢',
      slogan: '正版授權',
      categories: [
        {
          id: '100100',
          layer: 1,
          name: '寶可夢'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1627693685101-687bf0eb1222?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9005',
        attresText: '寶可夢 | 皮卡丘線玩偶'
      }
    }
  } else if (id === '1001001006') {
    goods.value = {
      id: '1001001006',
      name: '寶可夢 | 遊戲卡帶',
      desc: '好玩寶可夢遊戲卡帶',
      price: '1200',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1620451912458-b8233cf0a237?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '寶可夢',
      slogan: '正版授權',
      categories: [
        {
          id: '100100',
          layer: 1,
          name: '寶可夢'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1620451912458-b8233cf0a237?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9006',
        attresText: '寶可夢 | 遊戲卡帶'
      }
    }
  } else if (id === '1001001007') {
    goods.value = {
      id: '1001001007',
      name: '寶可夢 | 卡比獸陶瓷娃娃',
      desc: '人氣寶可夢卡比獸',
      price: '310',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '寶可夢',
      slogan: '正版授權',
      categories: [
        {
          id: '100100',
          layer: 1,
          name: '寶可夢'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9007',
        attresText: '寶可夢 | 人氣寶可夢卡比獸'
      }
    }
  } else if (id === '1002001000') {
    goods.value = {
      id: '1002001000',
      name: '馬力歐 | 地圖場景',
      desc: '懷舊馬力歐背景',
      price: '2500',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '超級馬力歐',
      slogan: '正版授權',
      categories: [
        {
          id: '100200',
          layer: 1,
          name: '超級瑪力歐'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9100',
        attresText: '馬力歐 | 場景地圖'
      }
    }
  } else if (id === '1002001001') {
    goods.value = {
      id: '1002001001',
      name: '馬力歐 | 馬力歐玩偶',
      desc: '馬力歐超級主角',
      price: '250',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '超級馬力歐',
      slogan: '正版授權',
      categories: [
        {
          id: '100200',
          layer: 1,
          name: '超級瑪利歐'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9101',
        attresText: '馬力歐 | 馬力歐玩偶'
      }
    }
  } else if (id === '1002001002') {
    goods.value = {
      id: '1002001002',
      name: '馬力歐 | 馬力歐公仔',
      desc: '經典主角團公仔',
      price: '350',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '超級馬力歐',
      slogan: '正版授權',
      categories: [
        {
          id: '100200',
          layer: 1,
          name: '超級瑪力歐'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9102',
        attresText: '馬力歐 | 馬力歐公仔'
      }
    }
  } else {
    goods.value = {
      id: '1002001003',
      name: '馬力歐 | 超級蘑菇',
      desc: '充滿力量經典蘑菇',
      price: '300',
      discount: null,
      orderNum: 47,
      picture:
        'https://images.unsplash.com/photo-1634159779963-4fafda643dac?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vendor: '超級馬力歐',
      slogan: '正版授權',
      categories: [
        {
          id: '100200',
          layer: 1,
          name: '超級瑪力歐'
        }
      ],
      details: [{}],
      mainPictures: [
        'https://images.unsplash.com/photo-1634159779963-4fafda643dac?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      skuData: {
        skuId: '9103',
        attresText: '馬力歐 | 超級蘑菇'
      }
    }
  }
}

// 組件對外暴露方法
defineExpose({
  open
})
</script>
<template>
  <el-dialog v-model="dialogVisible" width="1000">
    <div class="dialog-container">
      <div class="goods-info">
        <!-- 商品圖片 -->
        <div class="media">
          <ftpImageView :image-list="goods.mainPictures" />
        </div>
        <!-- 商品信息 -->
        <div class="spec">
          <h4 class="g-name">{{ goods.name }}</h4>
          <div class="g-desc">
            <p v-for="i in 3" :key="i">★ {{ goods.desc }}</p>
          </div>
          <div class="g-slogan">| {{ goods.vendor }} | {{ goods.slogan }}</div>
          <div class="g-price">
            <span>建議售價</span>

            <div class="nt-price">NT${{ goods.price }}</div>
          </div>
          <!-- 組件 -->
          <el-input-number v-model="count" :min="1" :max="10">
          </el-input-number>
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
      width: 560px;
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
