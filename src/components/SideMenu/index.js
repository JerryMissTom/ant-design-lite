import React, { Component, Suspense } from 'react';
import { Layout } from 'antd';
import PageLoading from '@/components/PageLoading';
import BaseMenu from './BaseMenu';
import styles from './index.scss';

const { Sider } = Layout;

class SideMenu extends Component {

  render() {
    const { collapsed } = this.props;
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={180}
        style={{ minHeight: '100vh' }}
      >
        <div className={styles.header}>
          {collapsed ? 'Ant' : 'Ant Design Lite'}
        </div>
        <Suspense fallback={<PageLoading />}>
          <BaseMenu {...this.props} />
        </Suspense>
      </Sider>
    )
  }
}

export default SideMenu;