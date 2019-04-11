import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from "react-router-dom";
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import App from '@/pages/App';
import zhCN from '@/locales/zh-CN';
import enUS from '@/locales/en-US';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.scss';
import configureStore from './store/index';

addLocaleData([...en, ...zh]);
moment.locale('zh-cn');
//moment.locale('en');
const store = configureStore();
export default class Root extends Component {

    constructor(props) {
        super(props);
        this.currLocale = 'zh';
    }

    render() {
        return (
            <IntlProvider locale={this.currLocale} messages={this.currLocale === 'en' ? enUS : zhCN}>
                <LocaleProvider locale={this.currLocale === 'en' ? en_US : zh_CN}>
                    <Router>
                        <App />
                    </Router>
                </LocaleProvider>
            </IntlProvider>
        );
    }
}

ReactDOM.render(<Provider store={store}> <Root /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
