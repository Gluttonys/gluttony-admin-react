import React, {Component} from 'react'
/* 按需加载组件 */
import {Form, Input, Button, Checkbox, Avatar} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import './login.less'

export default class Login extends Component {

  /* 布局 */
  layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 12},
  }
  tailLayout = {
    wrapperCol: {offset: 8, span: 16,},
  }

  onFinish = (values) => {
    console.log('Success:', values)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }


  render() {
    return (
      <div className={'login'}>
        <div className={'caption'}>Gluttony admin</div>

        <section className={'content'}>
          <Avatar size={64} icon={<UserOutlined/>}
                  src={'https://scpic.chinaz.net/files/pic/pic9/202011/apic28824.jpg'}/>
          <Form
            {...this.layout}
            name="basic"
            initialValues={{remember: true}}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{required: true, message: 'Please input your username!'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{required: true, message: 'Please input your password!'}]}
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
Login.propTypes = {

}

/* 传参默认值 */
Login.defaultProps = {

}

