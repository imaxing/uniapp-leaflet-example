// @ts-nocheck
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import config from '@/config'
import en from '@/local/en'
import zh from '@/local/zh'

Vue.use(VueI18n)

export default new VueI18n({
  locale: uni.getLocale?.(),
  messages: {
    en,
    [config.chineseLocal]: zh
  }
})
