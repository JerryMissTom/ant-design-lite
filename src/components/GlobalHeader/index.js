import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import styles from './index.scss';
import RightContent from './RightCotent';

export default class GlobalHeader extends PureComponent {


  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
  };

  render() {
    const { collapsed } = this.props;
    return (
      <div className={styles.header}>
        <span className={styles.trigger} onClick={this.toggle}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </span>
        <RightContent {...this.props} />
      </div>
    );
  }
}
