<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const form = ref()

// 整個用於提交的form數據對象
const formModel = ref({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: '請輸入用戶名', trigger: 'blur' },
    { min: 5, max: 10, message: '必須5-10', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密碼必須6-15非空', trigger: 'blur' }
  ]
}

// 登入
const router = useRouter()

const login = async () => {
  await form.value.validate() // form需綁ref

  router.push('/')
}
</script>

<template>
  <div class="login-page">
    <!-- 麵包屑 -->
    <div class="bread">
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
          <el-breadcrumb-item>會員登入</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- form表單 -->
    <div class="login-container">
      <div class="form">
        <el-form
          :model="formModel"
          :rules="rules"
          ref="form"
          size="large"
          autocomplete="off"
        >
          <p>會員登入</p>

          <hr />

          <el-form-item prop="username" label="帳戶">
            <el-input
              v-model="formModel.username"
              placeholder="請輸入您的帳戶或email"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password" label="密碼">
            <el-input
              v-model="formModel.password"
              name="password"
              type="password"
              placeholder="請輸入您的密碼"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="login">會員登入</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  .bread {
    border-bottom: 1px solid #000000;

    .bread-container {
      width: 1240px;
      height: 60px;
      margin: 0 auto;
      display: flex;
      align-items: center;
    }
  }
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .form {
      width: 730px;
      height: 500px;
      background-color: #f5f5f5;
      margin: 20px 190px;
      padding: 40px 0;
      border-radius: 5px;
      p {
        text-align: center;
        font-size: 20px;
        font-weight: 500;
      }

      hr {
        margin: 20px 30px 30px;
      }

      .el-form-item {
        margin: 0 auto;
        width: 500px;
        margin-bottom: 20px;

        .el-input {
          height: 50px;
        }

        .el-button {
          width: 100%;
          height: 50px;

          font-size: 16px;
          border-radius: 10px;
          background-color: #4bb9b0;
          color: #fff;
        }
      }
    }
  }
}
</style>
