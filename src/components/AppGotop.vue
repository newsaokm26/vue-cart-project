<script setup>
import { ArrowUp } from '@element-plus/icons-vue'
// vueUse
import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)

// 返回頂部
const goTop = () => {
  document.documentElement.scrollTop = 0
}
</script>
<template>
  <div class="app-evevator" :class="{ show: y > 300 }">
    <el-icon @click="goTop"><ArrowUp /></el-icon>
  </div>
</template>
<style scoped lang="scss">
.app-evevator {
  position: fixed;
  right: 5%;
  bottom: 100px;
  z-index: 999;

  opacity: 0;
  transition: all 0.5s;

  &.show {
    opacity: 1;
  }

  .el-icon {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: #f5f5f5;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
