// @ts-nocheck
import Vue from 'vue'
import App from '@/App.vue'
import deps from '@/utils/use-deps'
import { router, RouterMount } from '@/router'

Vue.use(router).use(deps)

const app = new (Vue.extend(App))()
// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifdef H5 || MP-ALIPAY
app.$mount()
// #endif

// #ifdef MP-WEIXIN
new Vue({ ...App }).$mount()
// #endif

// #ifdef APP-PLUS
new Vue({ render: h => h(App) }).$mount()
// #endif
