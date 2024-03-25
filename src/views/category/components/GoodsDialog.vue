<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const openDialog = () => {
  dialogVisible.value = true
}

defineExpose({
  openDialog
})
</script>
<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="900">
    <span>This is a message</span>
  </el-dialog>
</template>
