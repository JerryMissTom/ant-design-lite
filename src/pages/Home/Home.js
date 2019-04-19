import React, { Component, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import GlobalHeader from '@/components/GlobalHeader';
import styles from './Home.scss';
import SideMenu from '@/components/SideMenu';
import { Layout } from 'antd';
import PageLoading from '@/components/PageLoading';


const { Header, Footer, Content } = Layout;

const routes = [
  {
    path: '/home/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    // hideInMenu: true,
    component: React.lazy(() => import('./Dashboard/Dashboard')),
  },
  {
    path: '/home/analysis',
    name: 'analysis',
    icon: 'line-chart',
    component: React.lazy(() => import('./Analysis/Analysis')),
    // children: [{
    //   path: '/home/analysis/chart',
    //   name: 'chart',
    //   icon: 'dashboard',
    //   // hideInMenu: true,
    //   component: React.lazy(() => import('./Chart/Chart')),
    // }]
  },
]

class Home extends Component {

  state = {
    collapsed: false
  }

  componentDidMount() {
    console.log(this.props.match);
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
        <SideMenu collapsed={this.state.collapsed} handleClick={this.handleSideMenuClick} routes={routes} />
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader
              collapsed={this.state.collapsed}
              onCollapse={this.onHandleCollapse}
              onMenuClick={this.onHandleMenuClick}
            />
          </Header>
          <Content>
            <Suspense fallback={<PageLoading />}>
              <Switch>
                {routes.map(item => <Route key={item.path} path={item.path} component={item.component} />)}
              </Switch>
            </Suspense>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Copyright©2019 JerryMissTom</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home;