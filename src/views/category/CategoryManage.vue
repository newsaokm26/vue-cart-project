<script setup>
// import { cateGetCategoryApi } from '@/api/category'
// import { ref, onMounted } from 'vue'
// import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import GoodsItem from './components/GoodsItem.vue'

// const categoryData = ref({})
// const route = useRoute()
// const getCategory = async (id = route.params.id) => {
//   const res = await cateGetCategoryApi(id)
//   categoryData.value = res.data.data
//   console.log(categoryData.value)
// }

// onMounted(() => getCategory())

// // 路由緩存
// onBeforeRouteUpdate((to) => {
//   getCategory(to.params.id)
// })

// 數據
import { useCategoryData } from './components/useCategoryData'

const { categoryData } = useCategoryData()
</script>
<template>
  <div class="cate-container">
    <div class="bread">
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="container">
      <el-container>
        <!-- 側邊 -->
        <el-aside>
          <el-menu
            active-text-color="#000000"
            :default-active="$route.path"
            router
          >
            <el-menu-item index="/"> 首頁 </el-menu-item>
            <el-menu-item index="/"> 活動專區 </el-menu-item>
            <el-menu-item index="/"> NEW </el-menu-item>
            <!-- 多級菜單 -->
            <el-sub-menu index="/">
              <!-- 多級標題 具名 -->
              <template #title>
                <span>商品分類</span>
              </template>
              <!-- 展開內容 默認 -->
              <el-menu-item index="/category/manage/100100">
                商品1
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/category/manage/100100">
              寶可夢
            </el-menu-item>
            <el-menu-item index="/category/manage/100200">
              超級瑪利歐
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 主體 -->
        <el-main>
          <div class="main">
            <h1>{{ categoryData.name }}</h1>
            <el-tabs>
              <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
              <el-tab-pane label="最高人氣" name="orderNum"></el-tab-pane>
              <el-tab-pane label="評論最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body">
              <!-- 商品列表  v-for="i in 8" :key="i" -->
              <GoodsItem
                v-for="i in categoryData.products"
                :key="i.id"
                :goods="i"
              ></GoodsItem>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cate-container {
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

  .container {
    margin-top: 48px;

    .el-aside {
      width: 278px;
      height: 100vh;

      padding: 0 20px;
      font-weight: 500;
      font-style: 14px;

      .el-menu {
        border-top: 1px solid #000000;
      }

      .el-menu-item {
        border-bottom: 1px solid #000000;
      }
      .el-sub-menu {
        border-bottom: 1px solid #000000;
      }
    }

    .el-main {
      width: 833px;

      padding: 0 20px;

      .main {
        h1 {
          margin-bottom: 20px;
        }

        .el-tabs {
          margin-bottom: 15px;
        }

        .body {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
      }
    }
  }
}
</style>
