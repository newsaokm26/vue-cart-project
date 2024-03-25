// 把components中的所有組件都進行全局化註冊
// 通過插件的方式
// 不過此專案已使用element-plus 可以全局使用組件，不用在使用此方法全局註冊
import ImageView from './ImageView/index.vue'

export const componentPlugin = {
  install(app) {
    // app.各種方法
    // app.component('組件名字', 組件配置對象)
    app.component('ftpImageView', ImageView)
  }
}
