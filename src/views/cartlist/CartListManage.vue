<script setup>
import { useCartStore } from '@/stores'

const cartStore = useCartStore()

// 單選回調
const singleCheck = (i, selected) => {
  // console.log(i, selected)
  // store cartList 數組 無法知道改誰的選中
  cartStore.singleCheck(i.skuId, selected)
}

// 全選框
const allCheck = (selected) => {
  cartStore.allCheck(selected)
}

// 刪除
const delCart = (i) => {
  cartStore.delCart(i.skuId)
}
</script>

<template>
  <div class="xtx-cart-page">
    <div class="container m-top-20">
      <div class="cart">
        <h2>購物車內容</h2>
        <table>
          <thead>
            <tr>
              <th width="120">
                <!-- 全選框 -->
                <el-checkbox
                  :model-value="cartStore.isAll"
                  @change="allCheck"
                />
              </th>
              <th width="400">商品明細</th>
              <th width="220">單價</th>
              <th width="180">數量</th>
              <th width="180">小計</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 商品列表 -->
          <tbody>
            <tr v-for="i in cartStore.cartList" :key="i.id">
              <td>
                <!-- 單選框 -->
                <el-checkbox
                  :model-value="i.selected"
                  @change="(selected) => singleCheck(i, selected)"
                />
              </td>
              <td>
                <div class="goods">
                  <RouterLink to="/"
                    ><img :src="i.picture" alt=""
                  /></RouterLink>
                  <div>
                    <p class="name ellipsis">
                      {{ i.name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>NT${{ i.price }}</p>
              </td>
              <td class="tc">
                <el-input-number :min="1" v-model="i.count" />
              </td>
              <td class="tc">
                <p class="f16 red">NT${{ i.price * i.count }}</p>
              </td>
              <td class="tc">
                <p>
                  <el-popconfirm
                    title="確認要刪除嗎?"
                    confirm-button-text="確認"
                    cancel-button-text="取消"
                    @confirm="delCart(i)"
                  >
                    <template #reference>
                      <a href="javascript:;">删除</a>
                    </template>
                  </el-popconfirm>
                </p>
              </td>
            </tr>
            <tr v-if="cartStore.cartList.length === 0">
              <td colspan="6">
                <div class="cart-none">
                  <el-empty description="購物車列表為空">
                    <el-button @click="$router.push('/')">隨便逛逛</el-button>
                  </el-empty>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
          共 {{ cartStore.allCount }} 件商品，已選擇
          {{ cartStore.selectedCount }} 件，商品合計：
          <span class="red">NT$ {{ cartStore.selectedPrice }} </span>
        </div>
        <div class="total">
          <el-button>下單結算</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.xtx-cart-page {
  margin-top: 20px;
  .cart {
    background: #fff;
    color: #565656;

    h2 {
      margin-bottom: 10px;
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;

      thead {
        tr {
          background-color: #f0f1f3;
        }
      }

      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;

        // 勾選
        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }

      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }

  // 空購物車
  .cart-none {
    text-align: center;
    padding: 120px 0;
    background: #fff;

    p {
      color: #999;
      padding: 20px 0;
    }
  }

  .tc {
    text-align: center;

    a {
      color: $xtxColor;
    }

    // 未用
    .xtx-numbox {
      margin: 0 auto;
      width: 120px;
    }
  }

  // 樣式
  .red {
    color: $priceColor;
  }

  .green {
    color: $xtxColor;
  }

  .f16 {
    font-size: 16px;
  }

  // 商品
  .goods {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
    }

    > div {
      width: 280px;
      font-size: 16px;
      padding-left: 10px;

      // 未用
      .attr {
        font-size: 14px;
        color: #999;
      }
    }
  }

  // 底下操作欄
  .action {
    display: flex;
    background: #fff;
    margin-top: 20px;
    height: 80px;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
    padding: 0 30px;

    .xtx-checkbox {
      color: #999;
    }

    .batch {
      a {
        margin-left: 20px;
      }
    }

    .el-button {
      width: 200px;
      height: 36px;
      font-size: 16px;
      background-color: #444444;
      color: #fff;
    }

    // 未用
    .red {
      font-size: 18px;
      margin-right: 20px;
      font-weight: bold;
    }
  }

  // 未用
  .tit {
    color: #666;
    font-size: 16px;
    font-weight: normal;
    line-height: 50px;
  }

  .el-button {
    width: 200px;
    background: #4bb9b0;
    border: #4bb9b0;
    color: #fff;
  }

  // 改變組件樣式
  :deep() .el-checkbox__inner {
    border-color: $xtxColor;
  }

  :deep() .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #fff;
    border-color: $xtxColor;

    &::after {
      border-color: $xtxColor;
    }
  }
}
</style>
