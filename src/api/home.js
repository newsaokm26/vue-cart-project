import request from '@/utils/request'

// 首頁資料
export const homeGetCategoryApi = () => request.get('/home/category/all')

// 獲取寶可夢
export const homeGetPokeApi = () => request.get('/home/pokemon')

// 獲取馬力歐
export const homeGetMarioApi = () => request.get('/home/Mario')
