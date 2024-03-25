<script setup>
import { Search } from '@element-plus/icons-vue'
import HeaderCart from './HeaderCart.vue'
import HeaderUser from './HeaderUser.vue'
</script>
<template>
  <nav class="app-topnav">
    <div class="container">
      <nav class="logotitle">
        <a href="">FUN</a>
      </nav>
      <nav class="logo">
        <h1>
          <RouterLink to="/">FUN</RouterLink>
        </h1>
      </nav>
      <nav class="navlist">
        <ul>
          <li>
            <HeaderUser />
          </li>
          <li>
            <HeaderCart />
          </li>
          <li>
            <el-icon style="font-size: 24px"><Search /></el-icon>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.app-topnav {
  background: #fff;
  height: 86px;

  .container {
    display: flex;
    justify-content: space-between;
    height: 86px;

    .logotitle {
      text-indent: -9999px;
    }

    .logo {
      width: 200px;

      a {
        display: block;
        height: 80px;
        width: 100%;
        line-height: 86px;
        text-indent: -9999px;
        background: url('@/assets/logoo.png') no-repeat center 18px / contain;
      }
    }

    .navlist {
      display: flex;
      align-items: center;
    }

    ul {
      display: flex;

      justify-content: flex-end;

      li {
        font-size: 16px;
        padding: 0 15px;
      }
    }
  }
}
</style>
