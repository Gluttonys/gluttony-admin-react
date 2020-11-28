/* 验证 */
import {toLogin} from '../../api/user'
import store from '../../store'
import * as actionType from '../../store/actionTypes'
import {message} from 'antd'
import {connect} from 'react-redux'
import {LoginUi} from './login-ui'

LoginUi.propTypes = {}

/* 传参默认值 */
LoginUi.defaultProps = {}


const mapStateToProps = (state) => {
  return {
    layout: {
      labelCol: {span: 8},
      wrapperCol: {span: 12},
    },
    tailLayout: {
      wrapperCol: {offset: 8, span: 16,},
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFinish: async values => {
      const {username, password} = values
      // eslint-disable-next-line
      const {status, userinfo} = await toLogin(username, password)
      store.dispatch({type: actionType.SET_USER_INFO, userinfo})
      store.dispatch({type: actionType.SET_LOGIN_STATUS, value: true})
      store.dispatch({type: actionType.SET_TOKEN, value: userinfo.token})
      //  props.history.replace('/')
      // document.open('/')
      // 路由跳转
      message.success('登录成功~')
    },

    onFinishFailed: (errorInfo) => {
      console.error('🔥🔥🔥 Failed: 🔥🔥🔥', errorInfo)
    },

    validatorPwd: (rule, value) => {
      /*
      * ant 表单自定义验证 密码框 的值
      *
      * rule : 校验规则对象
      * value: 需要校验的值
      * return Promise
      *
      * 模拟 require 属性， 不过前面的哪个小点点消失了。。。
      * */
      if (value.length) {
        if (value.length < 4) return Promise.reject('密码长度不能小于 4 位')
        if (value.length > 16) return Promise.reject('密码长度不能大于 16 位')
        return Promise.resolve('OK')
      }
      return Promise.reject('请填写密码')
    }
  }
}

/* 连接器 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginUi)
