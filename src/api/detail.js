import request from '@/utils/request'

// 獲取商品
export const detGetGoodsApi = (id) => {
  return request({
    url: '/goods1',
    params: {
      id
    }
  })
}
