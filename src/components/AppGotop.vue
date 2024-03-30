<script setup>
import { ArrowUp } from '@element-plus/icons-vue'
// vueUse
import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)

// 返回頂部
const scollTop = () => {
  // 設置定時器
  const upRoll = setInterval(() => {
    // 每次獲取頁面被捲去的部分
    const top = document.documentElement.scrollTop
    // 每次滾動多少
    const speed = Math.ceil(top / 10)
    if (document.documentElement.scrollTop > 0) {
      // 不在頂部 每次滾動到的位置
      document.documentElement.scrollTop -= speed
    } else {
      // 返回頂部清除定時器
      clearInterval(upRoll)
    }
  }, 10)
}
</script>
<template>
  <div class="app-evevator" :class="{ show: y > 300 }">
    <el-icon @click="scollTop"><ArrowUp /></el-icon>
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
