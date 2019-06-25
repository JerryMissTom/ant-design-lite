import React, { Component } from 'react';
import { Button, Form, Input, Icon, Alert } from 'antd';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { loginAction } from '@/actions/login';
import SelectLang from '@/components/SelectLang';
import styles from './Login.scss';

@Form.create()
class Login extends Component {

  constructor(props) {
    super(props)
    console.log(props.loginStatus);

  }

  handleSubmit = (e) => {
    const { login } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // login(values, () => {
        //   console.log('callback');
          this.props.history.replace('/home')
        // });
      }
    });
  }

  render() {
    const { loginStatus } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.loginField}>
          <div className={styles.title}>Ant Design Lite</div>
          {loginStatus === false && <Alert style={{ marginBottom: 24 }} message='账号或密码错误' type="error" showIcon />}
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: <FormattedMessage id="login.username-hint" defaultMessage="Please input your username!" /> }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: <FormattedMessage id="login.pwd-hint" defaultMessage="Please input your password!" /> }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                <FormattedMessage id="login.login" />
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.login.loginStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (values, callback) => {
      dispatch(loginAction(values, callback))// 这个是推荐写法，调用Action 创建函数
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
