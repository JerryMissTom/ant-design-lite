import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { addTabAction, removeTabAction, clearTabAction } from '@/actions/operateTab';
import GlobalHeader from '@/components/GlobalHeader';
import SideMenu from '@/components/SideMenu';
import Exception403 from '@/pages/Exception/403';
import { Layout, Tabs } from 'antd';
import PageLoading from '@/components/PageLoading';
import PrivateRoute from '@/components/Authorized/PrivateRoute';
import tabs from './tabs';
import { changeTabAction } from '../../actions/operateTab';
const { TabPane } = Tabs;
const { Header, Footer, Content } = Layout;

class Home extends Component {

  state = {
    collapsed: false,
  }

  addDashboard = () => {
    const { addTab } = this.props;
    addTab({
      path: '/home/dashboard',
      name: 'dashboard',
      component: React.lazy(() => import('./Dashboard/Dashboard')),
      isAuthorized: true,
      closable: false
    })
  }

  componentDidMount() {
    this.addDashboard();
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
    const { addTab } = this.props;
    let tab = this.getTab(key, tabs)
    addTab({
      ...tab
    });
  }

  getTab = (path, tabList) => {
    for (const item of tabList) {
      if (path.startsWith(item.path) && !item.children) {
        return item;
      } else if (item.children) {
        return this.getTab(path, item.children)
      }
    }
  }

  //  这个函数在非多Tab模式下使用 ，<Redirect />必须加上 exact，from 和to，否则会报错
  renderRoutes = (routes) => {
    return routes.map(item => {
      if (item.redirect) {
        return <Redirect exact key={item.path} from={item.path} to={item.redirect} />
      } else if (item.children) {
        return <Route key={item.path} path={item.path}>{this.renderRoutes(item.children)}</Route>
      } else if (item.path) {
        // 假如不需要页面权限的话， 可以使用如下方式
        //  return <Route key={item.path}  path={item.path} component={item.component} />
        return <PrivateRoute key={item.path} isAuthorized={item.isAuthorized} path={item.path} component={item.component} />
      } else {
        return <Route key={Math.random(100)} component={item.component} />
      }
    })
  }

  onTabChange = (activeTabKey) => {
    const { changeTab } = this.props;
    changeTab(activeTabKey);
  }

  onTabEdit = (tabKey) => {
    const { removeTab } = this.props;
    removeTab(tabKey);
  }

  render() {
    const { tabList, activeTabKey } = this.props;
    return (
      <Layout>
        <SideMenu
          collapsed={this.state.collapsed}
          handleClick={this.handleSideMenuClick}
          routes={tabs}
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
          <Content style={{ paddingLeft: 5, paddingTop: 5 }}>
            {/* 下面注释的代码在非多Tab 模式下可以使用 */}
            {/* <Suspense fallback={<PageLoading />}>
              <Switch>
                {this.renderRoutes(routes)}
              </Switch>
            </Suspense> */}
            {/* 下面的代码在多Tab模式下可以使用 */}
            <Suspense fallback={<PageLoading />}>
              <Tabs
                hideAdd
                onChange={this.onTabChange}
                activeKey={activeTabKey}
                type="editable-card"
                onEdit={this.onTabEdit}
              >
                {tabList.map(item => (
                  <TabPane tab={<FormattedMessage id={'menu.' + item.name} defaultMessage={item.name} />} key={item.path} closable={item.closable}>
                    {
                      item.isAuthorized ? <item.component /> : <Exception403 />
                    }
                  </TabPane>
                ))}
              </Tabs>
            </Suspense>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Copyright©2019 JerryMissTom</Footer>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    tabList: state.operateTab.tabList,
    activeTabKey: state.operateTab.activeTabKey
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTab: (values) => {
      dispatch(addTabAction(values))
    },
    removeTab: (values) => {
      dispatch(removeTabAction(values))
    },
    changeTab: (values) => {
      dispatch(changeTabAction(values))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);


