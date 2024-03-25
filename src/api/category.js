import request from '@/utils/request'

// 傳入id 回傳商品列表
export const cateGetCategoryApi = (id) => {
  return request({
    url: '/category1',
    params: {
      id
    }
  })
}
