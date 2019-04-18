import React, { Component } from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import styles from './Home.scss';
import SideMenu from '@/components/SideMenu';

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

  handleClick = ({key}) => {
    console.log(key);
  }

  render() {
    return (
      <div className={styles.container}>
        <SideMenu collapsed={this.state.collapsed} handleClick={this.handleClick} />
        <section className={styles.rightContent}>
          <GlobalHeader
            collapsed={this.state.collapsed}
            onCollapse={this.onHandleCollapse}
            onMenuClick={this.onHandleMenuClick}
          />
          <main>
            我是Main
        </main>
          <footer>我是Footer</footer>
        </section>
      </div>
    )
  }
}

export default Home;