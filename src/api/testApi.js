import request from '@/utils/request'

// 測試api
export const testApiService = () => request.get('/UserName')

// 測試api2

export function testResService(params = {}) {
  const { id = 'success' } = params
  return request({
    url: '/UserName',
    params: {
      id
    }
  })
}

// 測試api3

export const testAPI = () => {
  return request({
    url: '/home/cateogry/head'
  })
}

// 測試api4 post
// const reqData = ref({
//   categoryId: route.params.id,
//   page: 1,
//   pageSize: 20,
//   sortFiled: 'publishTime'
// })
// const getTestList = async () => {
//   const res = await testPostAPI(reqData.value)
//   console.log(res)
// }

export const testPostAPI = (data) => {
  return request({
    url: '/testPost',
    method: 'POST',
    data
  })
}
