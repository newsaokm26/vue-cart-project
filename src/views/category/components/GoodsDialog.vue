<script setup>
import { ref } from 'vue'
import { detGetGoodsApi } from '@/api/detail'

// 彈窗打開關閉方法
const dialogVisible = ref(false)
// 商品詳細資料
const goods = ref({})
const open = async (id) => {
  dialogVisible.value = true
  const res = await detGetGoodsApi(id)
  goods.value = res.data.result
}

// 組件對外暴露方法
defineExpose({
  open
})
</script>
<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="900">
    <span>{{ goods.id }} </span>
  </el-dialog>
</template>
