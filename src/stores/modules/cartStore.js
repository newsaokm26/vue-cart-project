import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore(
  'ftp-cart',
  () => {
    // 1. 定義 state - cartList
    const cartList = ref([])
    // 2. 定義 action - addCart
    const addCart = (goods) => {
      // 本地邏輯
      // 添加購物車操作
      // 已添加過 count + 1
      // 未添加過 push
      // 思路: 通過匹配傳遞過來的商品對象中的skuId能不能在cartList中找到，找到了就是添加過
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        // 找到了
        // item.count++
        if (goods.count !== 1) {
          item.count = item.count + goods.count
        } else {
          item.count++
        }
      } else {
        // 沒找到
        cartList.value.push(goods)
      }
    }

    // 刪除購物車
    const delCart = (skuId) => {
      // 思路: 找到要刪除的下標值
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }

    // 單選功能
    const singleCheck = (skuId, selected) => {
      // 通過skuId找到要修改的哪一項，然後把它的selected改為傳過來的selected
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }

    // 全選功能
    const allCheck = (selected) => {
      // 把 cartList 的每一項的selected都設置為全選框的狀態
      cartList.value.forEach((item) => (item.selected = selected))
    }

    // 計算屬性
    // 1. 總數 所有項的 count 之和
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    )
    // 2. 總價 所有項的 count * price之和
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    )

    // 3. 已選擇數量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    )
    // 4. 已選擇商品價錢合計
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0)
    )

    // 是否全選
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice,
      addCart,
      delCart,
      singleCheck,
      allCheck
    }
  },
  {
    persist: true
  }
)
