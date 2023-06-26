import request from '@/utils/request'

// 登录
export const login = (params: any) => {
  return request.post('/login/passwordWeb', params)
}

// 获取验证码
export const getPassWordCaptcha = () => {
  return request.post('/login/kaptcha')
}
