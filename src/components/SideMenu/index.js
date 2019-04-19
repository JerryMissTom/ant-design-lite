import React, { Component } from 'react';
import BaseMenu from './BaseMenu';
import styles from './index.scss';
import { Layout } from 'antd';
const { Sider } = Layout;
class SideMenu extends Component {



  render() {
    const { collapsed } = this.props;
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ minHeight: '100vh' }}
      >
        <div className={styles.header}>
          {collapsed ? 'Ant' : 'Ant Design Lite'}
        </div>
        <BaseMenu {...this.props} />
      </Sider>
    )
  }
}

export default SideMenu;