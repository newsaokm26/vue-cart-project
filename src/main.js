import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import pinia from '@/stores/index'

// 引入初始化樣式文件
import '@/styles/common.scss'

// Vuetify
import vuetify from '@/plugins/vuetify.js'

// 引入全局組件
import { componentPlugin } from '@/components'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(componentPlugin)
app.mount('#app')

// 每次換頁 回到頂部
router.afterEach(() => {
  window.scrollTo(0, 0)
})
