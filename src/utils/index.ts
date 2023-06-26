// @ts-nocheck
import i18n from '@/local'

// ios 环境判断
export const isIos = uni.getSystemInfoSync().platform === 'ios'

// 国际化转换
export const t = (key: string, options?: any) => i18n.t(key, options)

/**
 * 封装$loading
 * @param v
 * @returns
 */
export const customLoading = (v: string) => {
  uni.showLoading({ title: v || '加载中', mask: true })
  return uni.hideLoading
}
