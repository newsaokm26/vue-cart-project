<script setup>
// vueUse
import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)

const section1Ref = defineProps({
  section1Ref: {}
})

// console.log('談窗', section1Ref)

const scrollToAnchor = (ref) => {
  if (ref) {
    console.log('觸發', ref.section1Ref)
    ref.section1Ref.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<template>
  <div class="det-header-sticky" :class="{ show: y > 800 }">
    <div class="goods-tabs">
      <ul>
        <li>
          <a @click="scrollToAnchor(section1Ref)"><div>商品介紹</div></a>
        </li>
        <li>
          <a href="#"><div>商品詳情</div></a>
        </li>
        <li>
          <a href="#"><div>運送方式</div></a>
        </li>
        <li class="btn">
          <a href="#"><div>加入購物車</div></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.det-header-sticky {
  width: 65.1%;
  height: 42px;
  position: fixed;
  left: 332px;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;

  transform: translateY(-100%);
  opacity: 0;

  font-family: 'Noto Sans TC', sans-serif !important;
  font-weight: bold;

  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .goods-tabs {
    height: 42px;
    cursor: pointer;
    ul {
      display: flex;
      border: 1px solid #000000;

      li {
        flex: 1;
        display: flex;
        justify-content: center;
        line-height: 42px;

        ~ li {
          border-left: 1px solid #000000;
        }
      }

      .btn {
        flex: 4;
        display: flex;
        justify-content: flex-end;

        a {
          width: 171px;
          text-align: center;
          background-color: #4bb9b0;
          color: #fff;
        }
      }
    }
  }
}
</style>
