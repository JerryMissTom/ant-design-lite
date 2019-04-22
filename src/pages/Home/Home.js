import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import GlobalHeader from '@/components/GlobalHeader';
import SideMenu from '@/components/SideMenu';
import { Layout } from 'antd';
import PageLoading from '@/components/PageLoading';

const { Header, Footer, Content } = Layout;

const routes = [
  {
    path: '/home/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    component: React.lazy(() => import('./Dashboard/Dashboard')),
  },
  {
    path: '/home/analysis',
    name: 'analysis',
    icon: 'line-chart',
    children: [
      {
        path: '/home/analysis/chart',
        name: 'chart',
        icon: 'dashboard',
        // hideInMenu: true,  通过此参数控制是否在Menu中显示
        component: React.lazy(() => import('./Chart/Chart')),
      }
    ]
  },
  { path: '/home', redirect: '/home/dashboard' }, // 重定向必须放在后面，否则会报错
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

  renderRoutes = (routes) => {
    return routes.map(item => {
      if (item.redirect) {
        return <Redirect exact key={item.path} to={item.redirect} />
      }
      if (item.children) {
        return (<Route key={item.path} path={item.path}>
          {this.renderRoutes(item.children)}
        </Route>)
      } else {
        return <Route key={item.path} path={item.path} component={item.component} />
      }
    })
  }

  render() {
    return (
      <Layout>
        <SideMenu
          collapsed={this.state.collapsed}
          handleClick={this.handleSideMenuClick}
          routes={routes}
          {...this.props}
        />
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
                {this.renderRoutes(routes)}
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