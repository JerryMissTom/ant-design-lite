import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
const SubMenu = Menu.SubMenu;
class BaseMenu extends PureComponent {

    /**
     * 获得菜单子节点
     * @memberof SiderMenu
     */
    getNavMenuItems = (routes) => {
        if (!routes) {
            return [];
        }
        return routes
            .filter(item => item.name && !item.hideInMenu)
            .map(item => this.getSubMenuOrItem(item))
            .filter(item => item);
    }

    /**
     * get SubMenu or Item
     */
    getSubMenuOrItem = item => {
        if (item.children && item.children.some(child => child.name)) {

            return (
                <SubMenu
                    title={item.icon ?
                        (<span><Icon type={item.icon} /> <FormattedMessage id={'menu.' + item.name} defaultMessage={item.name} /></span>)
                        :
                        (<FormattedMessage id={'menu.' + item.name} defaultMessage={item.name} />)}
                    key={item.path}
                >
                    {this.getNavMenuItems(item.children)}
                </SubMenu>
            );
        }
        return <Menu.Item key={item.path}>
            <Link to={item.path}>
                <span>
                    <Icon type={item.icon} />
                    <FormattedMessage id={'menu.' + item.name} defaultMessage={item.name} />
                </span>
            </Link>
        </Menu.Item>;
    }


    render() {
        const { handleClick, routes, location: { pathname } } = this.props;

        return (
            <Menu
                theme='dark'
                onClick={handleClick}
                selectedKeys={[pathname]}
                mode="inline"
            >
                {this.getNavMenuItems(routes)}
            </Menu>
        );
    }
}

export default BaseMenu;