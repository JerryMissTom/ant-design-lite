import React from 'react';
// 此文件在项目为多Tab模式的情况下使用
const tabs = [
    {
        path: '/home/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        isAuthorized: true,  // 此参数控制页面是否有访问权限，也可以使用isAuthorized: checkPermission(params)
        component: React.lazy(() => import('./Dashboard/Dashboard')),
    },
    {
        path: '/home/setting',
        name: 'setting',
        icon: 'setting',
        children: [
            {
                path: '/home/setting/user',
                name: 'user',
                icon: 'user',
                isAuthorized: false,  // 此参数控制页面是否有访问权限，没有的话，默认显示
                // hideInMenu: true,  通过此参数控制是否在Menu中显示
                component: React.lazy(() => import('./User/User')),
            }
        ]
    }
];

export default tabs;