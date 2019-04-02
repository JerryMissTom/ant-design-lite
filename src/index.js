import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { HashRouter as Router } from "react-router-dom";
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import App from '@/pages/App';
import zhCN from '@/locales/zh-CN';
import enUS from '@/locales/en-US';
import './index.scss';
addLocaleData([...en, ...zh]);

export default class Root extends Component {

    constructor(props) {
        super(props);
        this.currLocale = 'zh';
    }

    render() {
        return (
            <IntlProvider locale={this.currLocale} messages={this.currLocale === 'en' ? enUS : zhCN}>
                <Router>
                    <App />
                </Router>
            </IntlProvider>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
