import React, { Component } from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import styles from './Home.scss';
import SideMenu from '@/components/SideMenu';
import { Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;

class Home extends Component {

  state = {
    collapsed: false
  }

  onHandleCollapse = (collapsed) => {
    this.setState({
      collapsed: collapsed
    })
  }

  onHandleMenuClick = ({ key }) => {
    console.log(key);
    if (key === 'profile') {
      console.log('个人中心');
    }
    if (key === 'logout') {
      console.log('登出');
    }
  }

  handleSideMenuClick = ({ key }) => {
    console.log(key);
  }

  render() {
    return (
      <Layout>
        <SideMenu collapsed={this.state.collapsed} handleClick={this.handleSideMenuClick} />
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader
              collapsed={this.state.collapsed}
              onCollapse={this.onHandleCollapse}
              onMenuClick={this.onHandleMenuClick}
            />
          </Header>
          <Content>Content</Content>
          <Footer style={{textAlign:'center'}}>Copyright@2019 JerryMissTom</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home;