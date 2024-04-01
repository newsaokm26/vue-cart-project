# vue3 購物車網站

基於vue3 + vite 進行開發

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
---

### 項目內容
![image](https://github.com/newsaokm26/vue-cart-project/blob/main/img/%E8%B3%BC%E7%89%A9%E8%BB%8A%E5%85%A7%E5%AE%B9.png)

#### 購物車頁面
---
### 項目簡介
該項目包含從首頁瀏覽商品，分類選取商品種類，商品詳情，加入購物車，在購物車內自動計算選取商品總量及金額

### 使用工具
* 前端框架: Vue3
* 狀態管理: pinia
* 組件庫: element-plus
* Api接口: Apifox

### 演示畫面
影片: [操作畫面](https://share.vidyard.com/watch/7s6WvPhd4VAUt9Uvo5G3su?)

網站: [網站入口](https://newsaokm26.github.io/vue-cart-project/)






## 操作流程

1. 首頁
![image](https://github.com/newsaokm26/vue-cart-project/blob/main/img/%E9%A6%96%E9%A0%81.png)

> 商品首頁 展示主打商品。

![image](https://github.com/newsaokm26/vue-cart-project/blob/main/img/%E9%A6%96%E9%A0%81%E5%95%86%E5%93%81.png)

> 首頁商品 當滑鼠移動到目標商品上方，會顯示商品名稱以及價格，點擊即可進入商品詳細頁面。


2. 分類頁
![image](https://github.com/newsaokm26/vue-cart-project/blob/main/img/%E5%95%86%E5%93%81%E5%88%86%E9%A1%9E.png)

> 商品分類 從導覽列中點取想要的分類，即可進入分類頁面，顯次出此種類所有商品。

![image](https://github.com/newsaokm26/vue-cart-project/blob/main/img/%E5%95%86%E5%93%81%E5%88%86%E9%A1%9E%E9%81%B8%E5%8F%96%E5%95%86%E5%93%81.png)

> 商品分類選取商品 當在分類中滑鼠移動到目標商品上方，可選擇查看該商品詳細資訊，或者直接加入購物車。

3. 詳細頁
![image](https://github.com/newsaokm26/vue-cart-project/blob/main/img/%E5%95%86%E5%93%81%E8%A9%B3%E7%B4%B01.png)

> 詳細頁 進入詳細頁後，即可看到商品詳細資料，可將商加入購物車中。

![image](https://github.com/newsaokm26/vue-cart-project/blob/main/img/%E5%95%86%E5%93%81%E8%A9%B3%E7%B4%B0%E6%BB%BE%E5%8B%95.png)

> 向下滾動 會出現吸頂導航列，以及右下方返回頂部按鈕。

4. 購物車
![image](https://github.com/newsaokm26/vue-cart-project/blob/main/img/%E5%B0%8E%E8%A6%BD%E5%88%97%E8%B3%BC%E7%89%A9%E8%BB%8A.png)

> 點擊右上方購物車圖示，會顯示出購物車內目前商品。

![image](https://github.com/newsaokm26/vue-cart-project/blob/main/img/%E8%B3%BC%E7%89%A9%E8%BB%8A%E5%85%A7%E5%AE%B9.png)

> 進入購物車結算詳細頁面，列出當前購物車內商品，可勾選想要下單的商品，會自動進行商品結算金額及總件。


