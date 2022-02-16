// 请求模块
// 导入axios模块
import axios from 'axios'

const request = axios.create({
  // 接口的基准路径
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 向外导出
export default request