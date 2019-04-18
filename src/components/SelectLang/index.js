import React, { PureComponent } from 'react';
import { Menu, Icon, Dropdown } from 'antd';
import styles from './index.scss';

export default class SelectLang extends PureComponent {
    changeLang = ({ key }) => {
        localStorage.setItem('lang', key);
        // 切换语言需要重新加载界面
        window.location.reload();
    };

    render() {
        const selectedLang = localStorage.getItem('lang')||'zh-CN';
        const locales = ['zh-CN', 'en-US'];
        const languageLabels = {
            'zh-CN': '简体中文',
            'en-US': 'English'
        };
        const languageIcons = {
            'zh-CN': '🇨🇳',
            'en-US': '🇺🇸',
        };
        const langMenu = (
            <Menu selectedKeys={[selectedLang]} onClick={this.changeLang}>
                {locales.map(locale => (
                    <Menu.Item key={locale}>
                        <span role="img" aria-label={languageLabels[locale]}>
                            {languageIcons[locale]}
                        </span>{' '}
                        {languageLabels[locale]}
                    </Menu.Item>
                ))}
            </Menu>
        );
        return (
            <Dropdown overlay={langMenu} placement="bottomLeft">
                <span>
                    <Icon type="global" title='切换语言' />
                </span>
            </Dropdown>
        );
    }
}
