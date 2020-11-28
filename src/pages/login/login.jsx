import React, {Component} from 'react'
import {Form, Input, Button, Checkbox, Avatar, message} from 'antd'
import {UserOutlined} from '@ant-design/icons'

import store from '../../store'
import * as actionType from '../../store/actionTypes'
import './login.less'

/*
* 相关网络请求
* */
import {toLogin} from '../../api/user'


export default class Login extends Component {

  /* 布局 */
  layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 12},
  }
  tailLayout = {
    wrapperCol: {offset: 8, span: 16,},
  }

  constructor(props) {
    super(props);
    store.subscribe(() => {
      console.log(store.getState())
    })
  }

  onFinish = async values => {
    const {username, password} = values
    const {status, userinfo} = await toLogin(username, password)
    console.log("用户状态， 用户信息", status, userinfo)
    store.dispatch({type: actionType.SET_USER_INFO, userinfo})
    store.dispatch({type: actionType.SET_LOGIN_STATUS, value: true})
    store.dispatch({type: actionType.SET_TOKEN, value: userinfo.token})
    this.props.history.replace('/')
    message.success('登录成功~')
  }

  onFinishFailed = (errorInfo) => {
    console.error('🔥🔥🔥 Failed: 🔥🔥🔥', errorInfo)
  }

  validatorPwd = (rule, value) => {
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

  render() {
    return (
      <div className='login'>
        <div className='caption'>Gluttony-admin-react</div>

        <section className='content'>
          <Avatar size={64} icon={<UserOutlined/>}
                  src={'https://scpic.chinaz.net/files/pic/pic9/202011/apic28824.jpg'}/>
          <Form
            {...this.layout}
            name="login"
            initialValues={{remember: true}}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {required: true, whitespace: true, message: '请您填写用户名'},
                {min: 4, message: '用户名最少4位'},
                {max: 16, message: '用户名最多16位'},
                {pattern: /^[a-zA-Z0-9_]+/, message: '用户名仅允许任意字母数字下划线'},
              ]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                // 自定义校验规则 ：
                // {required: true, message: '请您填写密码!'},
                // {min: 4, message: '密码最少4位'},
                // {max: 16, message: '密码最多16位'},
                {validator: this.validatorPwd}
              ]}
            >
              <Input.Password/>
            </Form.Item>

            <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...this.tailLayout}>
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

/* 验证 */
Login.propTypes = {}

/* 传参默认值 */
Login.defaultProps = {}

