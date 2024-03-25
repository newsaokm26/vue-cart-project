<script setup>
// 通用的組件
defineProps({
  title: {
    tpye: String,
    default: ''
  }
})
</script>
<template>
  <div class="home-panel">
    <div class="panel-container">
      <div class="head">
        <!-- 主標題和副標題 -->
        <h3>{{ title }}</h3>
      </div>
      <!-- 內容 -->
      <slot name="main" />
      <div class="more">
        <slot name="more" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home-panel {
  margin-bottom: 20px;
  .panel-container {
    width: 1540px;
    margin: 0 auto;

    .head {
      h3 {
        text-align: center;
        font-size: 32px;
        line-height: 100px;
      }
    }
    .more {
      text-align: center;
    }
  }
}
</style>
