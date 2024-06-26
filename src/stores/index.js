import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia

// import { useUserStore } from './moudles/user'
// export { useUserStore }
export * from './modules/user'
export * from './modules/cartStore'
