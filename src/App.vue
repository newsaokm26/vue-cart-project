<script setup></script>

<template>
  <!-- 一級路由出口組件 -->
  <RouterView />
</template>

<style>
@media screen and (max-width: 1200px) {
  body .goods-list {
    width: 50%;
  }
}

@media screen and (max-width: 1024px) {
  body .goods-list {
    width: 33.33%;
  }
}

@media screen and (max-width: 768px) {
  body .goods-list {
    width: 25%;
  }
}
</style>
