import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import pinia from '@/stores/index'

// 引入初始化樣式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
