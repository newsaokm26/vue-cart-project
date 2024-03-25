import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'
const baseURL = 'http://127.0.0.1:4523/m1/4174163-0-default'
// apifox: http://127.0.0.1:4523/m1/4174163-0-default
// postman:  https://c2f26d53-c062-4ed7-a9c7-dc45f8f003ff.mock.pstmn.io

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

// 請求攔截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token (tokn 在 pinia 裡)
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 響應攔截器
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    // 根據文檔 code = 0 成功
    if (res.data.code === 200) {
      return res
    }
    // 處理業務失敗，給錯誤提示，並且拋出錯誤
    ElMessage.error(res.data.message || '服務異常')
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    // 錯誤的特殊情況 => 401 權限不足 or Toke過期 => 攔截到登入
    if (err.response?.status === 401) {
      router.push('/login')
    }

    // 錯誤的默認情況 => 只要給提示
    ElMessage.error(err.response.data.message || '服務異常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
