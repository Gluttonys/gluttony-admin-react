import React from 'react'
import {Form, Input, Button, Checkbox, Avatar, message} from 'antd'
import {UserOutlined} from '@ant-design/icons'

import './login.less'

export function LoginUi(props) {
  return (
    <div className='login'>
      <div className='caption'>Gluttony-admin-react</div>

      <section className='content'>
        <Avatar size={64} icon={<UserOutlined/>}
                src={'https://scpic.chinaz.net/files/pic/pic9/202011/apic28824.jpg'}/>
        <Form
          {...props.layout}
          name="login"
          initialValues={{remember: true}}
          onFinish={props.onFinish}
          onFinishFailed={props.onFinishFailed}
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
              {validator: props.validatorPwd}
            ]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item {...props.tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...props.tailLayout}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  )
}


