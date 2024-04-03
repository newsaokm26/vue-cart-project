<script setup>
import { Search, ShoppingCart } from '@element-plus/icons-vue'
import { ref } from 'vue'
import GoodsDialog from './GoodsDialog.vue'
defineProps({
  goods: {
    tpye: Object,
    default: () => {}
  }
})

// 彈窗組件
const dialogRef = ref()
const openDialog = (id) => {
  dialogRef.value.open(id)
}
</script>
<template>
  <div class="body-item">
    <RouterLink to="/" class="goods-item">
      <img :src="goods.picture" alt="" />
    </RouterLink>
    <p>{{ goods.name }}</p>
    <span>NT${{ goods.price }}</span>
    <div class="cover">
      <RouterLink :to="`/detail/manage/${goods.id}`" class="cover-a"
        ><el-icon class="butt search"><Search /></el-icon
      ></RouterLink>

      <button class="cover-a" @click="openDialog(goods.id)">
        <el-icon class="butt shopp"><ShoppingCart /></el-icon>
      </button>
    </div>
    <!-- 彈窗組件 -->
    <GoodsDialog ref="dialogRef"></GoodsDialog>
  </div>
</template>
<style scoped lang="scss">
.body-item {
  width: 254px;
  height: 336px;
  font-size: 15px;

  margin-bottom: 20px;

  position: relative;
  /* 隱藏 cover */
  overflow: hidden;

  // 商品
  .goods-item {
    img {
      width: 254px;
      height: 254px;

      margin-bottom: 18px;
      object-fit: cover; // 等比例縮放
    }
  }
  // 名稱
  p {
    height: 36px;
    margin-bottom: 6px;
  }
  // 價格
  span {
    height: 22px;
  }

  // 按鈕
  .cover {
    position: absolute;
    left: 0;
    bottom: 82px;

    padding-top: 15px;

    width: 254px;
    height: 254px;

    text-align: center;
    font-size: 0;
    color: #000000;

    line-height: 254px;

    .cover-a {
      padding-right: 10px;
    }
  }

  // 滑鼠移到商品顯示 查看及加入按鈕
  &:hover .cover {
    font-size: 16px;
    font-weight: 500px;

    .butt {
      width: 45px;
      height: 45px;
      font-weight: inherit;
      border: 1px solid;
      border-color: #4bb9b0;
      border-radius: 10px;
    }

    .search {
      color: #4bb9b0;

      background-color: #fff;
    }

    .shopp {
      color: #fff;
      background-color: #4bb9b0;
    }
  }
  // 圖片半透明
  &:hover {
    .goods-item {
      opacity: 0.5;
    }
  }
}
</style>
