import axios from 'uni-axios-ts'
import config from '@/config'

const instance = axios.create({
  baseURL: config.baseURL,
  timeout: 100000
})

instance.interceptors.request.use(
  (config: any) => config,
  (error: any) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response: any) => response,
  error => Promise.reject(error)
)
export default instance
