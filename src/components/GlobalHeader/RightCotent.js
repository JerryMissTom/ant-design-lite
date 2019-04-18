import React, { PureComponent } from 'react';
import {  Menu, Icon, Avatar, Dropdown } from 'antd';
import SelectLang from '@/components/SelectLang';
import styles from './index.scss';
import { FormattedMessage } from 'react-intl';

export default class RightContent extends PureComponent {

    render() {
        const {
            onMenuClick,
        } = this.props;
        const menu = (
            <Menu selectedKeys={[]} onClick={onMenuClick}>
                <Menu.Item key="profile">
                    <Icon type="user" />
                    <FormattedMessage id="profile" defaultMessage="My Profile" />
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout">
                    <Icon type="logout" />
                    <FormattedMessage id="logout" defaultMessage="Logout" />
                </Menu.Item>
            </Menu>
        );


        return (
            <div className={styles.right}>
                <Dropdown overlay={menu}>
                    <span className={styles.account}>
                        <Avatar
                            size="small"
                            className={styles.avatar}
                            alt="avatar"
                            icon="user"
                        />
                        <span className={styles.name} title="JerryMissTom">JerryMissTom</span>
                    </span>
                </Dropdown>
                <SelectLang />
            </div>
        );
    }
}
