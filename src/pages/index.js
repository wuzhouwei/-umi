import React, { Component } from 'react';
import style from './index.less';
import { connect } from 'dva';
import { Link } from 'umi';
import { Layout, Menu, Modal, Form, Icon, Input, Button, message } from 'antd';
import Body from '@/component/body/body';
const { Header } = Layout;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleLogin: false,
      visibleReg: false,
    };
    props.dispatch({
      type:'bannerList/bannerff'
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.form.validateFields(['username', 'password'], (err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'loginORreg/loginle',
          payload: { username: values.username, password: values.password },
        });
        this.setState({
          visibleLogin:false
        }, ()=>{
          this.props.form.resetFields()
        });
      }
    });
  };
  handleReg = (e) => {
    e.preventDefault();
    this.props.form.validateFields(['use', 'pwd', 'pwd2'], (err, values) => {
      if (!err) {
        if (values.pwd !== values.pwd2) {
          this.props.form.resetFields()
          return message.error('密码不一致,请从新输入');
        } else {
          this.props.dispatch({
            type: 'loginORreg/regle',
            payload: { username: values.use, password: values.pwd },
          });
          this.setState({
            visibleReg:false
          }, ()=>{
            this.props.form.resetFields()
          });
        }
      }
    });
  };

  render() {
    const { visibleLogin, visibleReg } = this.state;
    const { getFieldDecorator } = this.props.form;
    console.log(this.props,'010')
    return (
      <Layout>
        <Header style={{ height: '50px' }}>
          <div className={style.logo}/>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '50px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">功能2</Menu.Item>
            <Menu.Item key="3">功能3</Menu.Item>
            <Menu.Item key="4">功能4</Menu.Item>
          </Menu>
          <Link className={style.login} onClick={() => {
            this.setState({ visibleLogin: true });
          }}>登录</Link>
          <Link className={style.reg} onClick={() => {
            this.setState({ visibleReg: true });
          }}>注册</Link>

        </Header>
        <Body  banners={this.props.banners}/>

        <Modal
          title="登录"
          width={300}
          visible={visibleLogin}
          footer={null}
          maskClosable={false}
          onCancel={() => {this.setState({ visibleLogin: false }, ()=>{this.props.form.resetFields() }); }}
        >
          <Form onSubmit={this.handleLogin}>
            <Form.Item>
              {getFieldDecorator('username')(
                <Input
                  style={{ width: 250 }}
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                  placeholder="账号"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password')(
                <Input
                  style={{ width: 250 }}
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: 250 }}>
              登录
            </Button>
          </Form>
        </Modal>
        <Modal
          title="注册"
          visible={visibleReg}
          width={300}
          footer={null}
          maskClosable={false}
          onCancel={() => {this.setState({ visibleReg: false }, ()=>{this.props.form.resetFields() }); }}
        >
          <Form onSubmit={this.handleReg}>
            <Form.Item>
              {getFieldDecorator('use')(
                <Input
                  style={{ width: 250 }}
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                  placeholder="账号"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('pwd')(
                <Input
                  style={{ width: 250 }}
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('pwd2')(
                <Input
                  style={{ width: 250 }}
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                  type="password"
                  placeholder="确认密码"
                />,
              )}
            </Form.Item>

            <Button type="primary" htmlType="submit" style={{ width: 250 }}>
              注册
            </Button>

          </Form>
        </Modal>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lo: state.loginORreg.lo,
    re: state.loginORreg.re,
    banners:state.bannerList.banners
  };
};
export default connect(mapStateToProps)(Form.create()(Index));
