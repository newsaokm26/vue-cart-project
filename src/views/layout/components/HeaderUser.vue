<script setup>
import { User } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'

const iconRef = ref()

const openCard = ref(false)
const isOpen = () => {
  openCard.value = !openCard.value
}

// 點擊空白處 關閉card
onMounted(() => {
  document.addEventListener('mouseup', (e) => {
    if (!iconRef.value.contains(e.target)) {
      openCard.value = false
    }
  })
})
</script>
<template>
  <div class="user">
    <div ref="iconRef">
      <el-icon style="font-size: 24px" @click="isOpen"><User /></el-icon>
    </div>

    <el-card class="layer" v-show="openCard">
      <template v-if="false">
        <p>用戶者</p>
        <p>您好 !</p>
      </template>
      <template v-else>
        <div class="laybtn">
          <div>
            <el-button class="loginbtn" @click="$router.push('/login')"
              >會員登入</el-button
            >
          </div>
          <div><el-button class="regbtn">註冊新會員</el-button></div>
        </div>
      </template>
      <div class="laylist">
        <ul>
          <li><a href="">我的帳戶</a></li>
          <li><a href="">訂單查詢</a></li>
          <li><a href="">專屬優惠券</a></li>
          <li><a href="">收藏清單</a></li>
          <li v-if="false"><a href="">會員登出</a></li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.user {
  position: relative;
  z-index: 600;

  .el-icon {
    cursor: pointer;
  }

  .el-card {
    position: relative;
    width: 240px;
    border: 1px solid #000;
  }

  .layer {
    position: absolute;
    top: 30px;
    right: 0;

    p {
      font-size: 14px;
    }
  }

  .laybtn {
    // border-bottom: 1px solid #000;

    .el-button {
      margin-bottom: 10px;
      width: 200px;
      font-size: 16px;
    }

    .loginbtn {
      color: #fff;
      background-color: #4bb9b0;
    }

    .regbtn {
      color: #4bb9b0;
      border: 1px solid #4bb9b0;
    }
  }

  .laylist {
    margin-top: 10px;
    border-top: 1px solid #000;
    padding-top: 10px;

    li {
      padding: 8px;

      &:hover {
        background-color: #f1f1f1;
        border-radius: 10px;
      }

      a {
        font-size: 14px;
      }
    }
  }
}
</style>
