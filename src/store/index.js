import config from '@/config'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: { name: 'axing' }
  },
  getters: {
    userName: state => state.userInfo.name,
    language: () => uni.getLocale?.() || config.chineseLocal
  },
  mutations: {
    update(state, payload) {
      // 判断是否多层级调用，state中为对象存在的情况，诸如 user.info.score = 1
      const nameArray = payload.name.split('.')
      const len = nameArray.length
      let saveKey = ''
      if (nameArray.length >= 2) {
        let obj = state[nameArray[0]]
        for (let i = 1; i < len - 1; i++) {
          obj = obj[nameArray[i]]
        }
        obj[nameArray[len - 1]] = payload.value
        saveKey = nameArray[0]
      } else {
        state[payload.name] = payload.value
        saveKey = payload.name
      }
    }
  }
})

export default store
