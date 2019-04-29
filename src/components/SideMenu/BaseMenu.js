import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
const SubMenu = Menu.SubMenu;
class BaseMenu extends PureComponent {


    constructor(props) {
        super(props)
        const { routes, location: { pathname } } = this.props;
        this.state = {
            openKeys: this.getOpenKeys(routes, pathname)
        }
    }

    // 刷新或者切换页面，被选中MenuItem的SubItem是处于打开状态
    componentWillReceiveProps(nextProps) {
        const { routes, location: { pathname } } = this.props;
        if (pathname !== nextProps.location.pathname) {
            this.setState({
                openKeys: this.getOpenKeys(routes, nextProps.location.pathname)
            });
        }
    }

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

    onOpenChange = (openKeys) => {
        this.setState({
            openKeys: openKeys
        })
    }

    // 获取被选中 MenuItem 的所有父级 SubItem
    getOpenKeys = (routes, currentpath) => {

        let stack = [];
        let going = true;

        let walker = (array, path) => {
            array.forEach(item => {
                if (!going) return;
                stack.push(item['path']);
                if (item['path'] === path) {
                    going = false;
                } else if (item['children']) {
                    walker(item['children'], path);
                } else {
                    stack.pop();
                }
            });
            if (going) stack.pop();
        }
        walker(routes, currentpath);
        return stack;
    }

    render() {
        const { handleClick, routes, location: { pathname } } = this.props;
        return (
            <Menu
                theme='dark'
                onClick={handleClick}
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                selectedKeys={[pathname]}
                mode="inline"
            >
                {this.getNavMenuItems(routes)}
            </Menu>
        );
    }
}

export default BaseMenu;