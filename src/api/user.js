// eslint-disable-next-line
import {requestGet, requestPost} from '../config/request'

export function toLogin(username, password) {
  /*
  * 请求登录接口
  * */
  return requestGet({
    url: '/login',
    params: {username, password}
  })
}

