import axios from 'axios'
import {message} from 'antd'

const servers = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5fb9d0683f90e10d9664665b/gluttony-admin',  /* 基础地址 */
  timeout: 5000,              /* 超时时长 */
})

servers.interceptors.request.use(
  config => {
    /*
    * 请求发送成功前
    * 可以尝试添加请求头信息等 例如 token
    *
    * config : axios.config 配置对象
    * */
    // config.headers['token'] = "kfkl-jkfh-8909-kjfd"   /* 示范 */
    return config
  },
  error => {
    /*
    * 发送请求失败
    * error : 错误对象
    * */
    message.error(`🚀🚀🚀 发送请求失败~ ${new Date().toLocaleDateString()} 🚀🚀🚀`)
    console.error(error)                     /* for debugger */
    return Promise.reject(error)
  }
)


servers.interceptors.response.use(
  value => {
    let {data: res} = value
    return res
  },
  error => {
    message.error(`🚀🚀🚀 获取相应失败~ ${new Date().toLocaleTimeString()} 🚀🚀🚀`)
    console.error(error)                     /* for debugger */
    return Promise.reject(error)
  }
)

function requestGet(config) {
  /*
  * get 方法
  * */
  return servers(config)
}

function requestPost(config) {
  /*
  * post 请求方法
  * */
  return servers({
    method: "post",
    ...config
  })
}

export {
  requestGet,
  requestPost
}
