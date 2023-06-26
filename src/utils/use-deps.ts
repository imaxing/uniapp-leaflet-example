// @ts-nocheck
import uView from 'uview-ui'
import Actr from 'actr'
import StorePersistence from 'store-persistence'
import QuickAction from '@szlx/quick-action'
import customModal from '@szlx/custom-modal'
import { mapGetters } from 'vuex'
import { customLoading, t } from '@/utils'
import config from '@/config'
import store from '@/store'
import i18n from '@/local'

export default {
  install(Vue) {
    Vue.use(uView)
      .use(QuickAction)
      .mixin({
        props: { customClass: String },
        computed: { ...mapGetters(Object.keys(store.getters)) }
      })
      .use(StorePersistence, {
        update: (name: string, value: any) => store.commit('update', { name, value }),
        removeItem: (name: string) => uni.removeStorageSync(name),
        getItem: (name: string) => uni.getStorageSync(name),
        setItem: (name: string, value: any) => uni.setStorageSync(name, value)
      })

    Vue.prototype.$loading = customLoading
    Vue.prototype.$switchLanguage = (lang: string) => (i18n.locale = lang)
    Vue.prototype.$push = (url: string) => uni.navigateTo({ url })
    Vue.prototype.$message = (v: string) => uni.showToast({ title: v, icon: 'none' })
    Vue.prototype.$i = t
    Vue.prototype.$log = console.info
    Vue.prototype.$confirm = customModal
    Vue.prototype.$tracker = new Actr()
    Vue.prototype.$store = store
    Vue.prototype.$back = uni.navigateBack
    Vue.prototype.$chineseLocal = config.chineseLocal
    Vue.config.productionTip = false
  }
}
