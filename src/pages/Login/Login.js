import React, { Component } from 'react';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import styles from './Login.css';
class Login extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
      <Button type="primary">Primary</Button>
      </div>
    );
  }
}

export default Login;
