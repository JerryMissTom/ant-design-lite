import React from 'react';
import { Route } from "react-router-dom";
import Exception403 from '@/pages/Exception/403';
/*
 * 页面权限检查
 * @param { 权限判定 Boolean } isAuthorized，没有的话界面默认可见
*/
export default function PrivateRoute({ isAuthorized: isAuthorized, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            component={isAuthorized === undefined || isAuthorized ? Component : Exception403}
        />
    );
}

// 用法
/**
 * let isAuthorized = checkPermission(params)
 * <PrivateRoute isAuthorized={isAuthorized} path='/home/dashboard' component={React.lazy(() => import('./Dashboard/Dashboard'))} />
 */