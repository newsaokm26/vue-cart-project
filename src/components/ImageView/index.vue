<script setup>
import { ref } from 'vue'

// props
defineProps({
  imageList: {
    type: Array,
    default: () => []
  }
})
// 图片列表
// const imageList = [
//   'https://yanxuan-item.nosdn.127.net/d917c92e663c5ed0bb577c7ded73e4ec.png',
//   'https://yanxuan-item.nosdn.127.net/e801b9572f0b0c02a52952b01adab967.jpg',
//   'https://yanxuan-item.nosdn.127.net/b52c447ad472d51adbdde1a83f550ac2.jpg',
//   'https://yanxuan-item.nosdn.127.net/f93243224dc37674dfca5874fe089c60.jpg',
//   'https://yanxuan-item.nosdn.127.net/f881cfe7de9a576aaeea6ee0d1d24823.jpg'
// ]

// 1. 小圖切換大圖
const activeIndex = ref(0)

const enterhandler = (i) => {
  activeIndex.value = i
}
</script>

<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[activeIndex]" alt="" />
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li
        v-for="(img, i) in imageList"
        :key="i"
        @mouseenter="enterhandler(i)"
        :class="{ active: i === activeIndex }"
      >
        <img :src="img" alt="" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;

    img {
      width: 400px;
      height: 400px;
      object-fit: cover; // 等比例縮放
    }
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      img {
        width: 68px;
        height: 68px;
      }

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
