// 封裝資料代碼
import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
export const useCategoryData = () => {
  const categoryData = ref({})

  const route = useRoute()
  const getCategory = (id = route.params.id) => {
    if (id === '100100') {
      categoryData.value = {
        id: '100100',
        name: '寶可夢',
        picture: null,
        products: [
          {
            id: '1001001000',
            name: '寶可夢 | 精靈球',
            desc: '',
            price: '150',
            discount: null,
            orderNum: 47,
            picture:
              'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '1001001001',
            name: '寶可夢 | 大頭公仔',
            desc: '',
            price: '300',
            discount: null,
            orderNum: 47,
            picture:
              'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '1001001002',
            name: '寶可夢 | 卡牌',
            desc: '',
            price: '100',
            discount: null,
            orderNum: 47,
            picture:
              'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '1001001003',
            name: '寶可夢 | 皮卡丘公仔',
            desc: '',
            price: '250',
            discount: null,
            orderNum: 47,
            picture:
              'https://images.unsplash.com/photo-1612454376902-577cd469d008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '1001001004',
            name: '寶可夢 | 噴火龍限量卡牌',
            desc: '',
            price: '1000',
            discount: null,
            orderNum: 47,
            picture:
              'https://images.unsplash.com/photo-1611931960487-4932667079f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '1001001005',
            name: '寶可夢 | 皮卡丘線玩偶',
            desc: '',
            price: '500',
            discount: null,
            orderNum: 47,
            picture:
              'https://images.unsplash.com/photo-1627693685101-687bf0eb1222?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '1001001006',
            name: '寶可夢 | 遊戲卡帶',
            desc: '',
            price: '1200',
            discount: null,
            orderNum: 47,
            picture:
              'https://images.unsplash.com/photo-1620451912458-b8233cf0a237?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '1001001007',
            name: '寶可夢 | 卡比獸陶瓷娃娃',
            desc: '',
            price: '310',
            discount: null,
            orderNum: 47,
            picture:
              'https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        ]
      }
    } else {
      categoryData.value = {
        id: '100200',
        name: '超級馬力歐',
        picture: null,
        products: [
          {
            id: '1002001000',
            name: '馬力歐 | 地圖場景',
            desc: '',
            price: '2500',
            discount: null,
            orderNum: 17,
            picture:
              'https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '1002001001',
            name: '馬力歐 | 馬力歐玩偶',
            desc: '',
            price: '250',
            discount: null,
            orderNum: 17,
            picture:
              'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '1002001002',
            name: '馬力歐 | 馬力歐公仔',
            desc: '',
            price: '350',
            discount: null,
            orderNum: 17,
            picture:
              'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '1002001003',
            name: '馬力歐 | 超級蘑菇',
            desc: '',
            price: '300',
            discount: null,
            orderNum: 17,
            picture:
              'https://images.unsplash.com/photo-1634159779963-4fafda643dac?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        ]
      }
    }
  }
  // 調用
  getCategory(route.params.id)
  // 切換路由
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}
