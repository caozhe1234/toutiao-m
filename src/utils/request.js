// 请求模块
// 导入axios模块
import axios from 'axios'
import store from '@/store/index.js'

const request = axios.create({
  // 接口的基准路径
  baseURL: 'http://toutiao.itheima.net/'
})

// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // 请求发起会经过这里
  // config：本次请求配置对象
  // console.log(config)
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // 如果请求出错了（还没有发出去）会进入这里
  return Promise.reject(error)
})
// 向外导出
export default request
