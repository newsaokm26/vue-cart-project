<script setup>
// 通用的組件
defineProps({
  path: {
    type: String,
    default: '/'
  }
})
</script>
<template>
  <router-link :to="path" class="more">
    <span>查看更多</span>
  </router-link>
</template>
<style scoped lang="scss">
.more {
  span {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
