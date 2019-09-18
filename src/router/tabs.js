import React from 'react';
// 此文件在项目为多Tab模式的情况下使用
const tabs = [
    {
        path: '/home/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        isAuthorized: true,  // 此参数控制页面是否有访问权限，也可以使用isAuthorized: checkPermission(params)
        component: React.lazy(() => import('@/pages/Home/Dashboard/Dashboard')),
    },
    {
        path: '/home/device',
        name: 'device',
        icon: 'mobile',
        isAuthorized: true,  // 此参数控制页面是否有访问权限，也可以使用isAuthorized: checkPermission(params)
        component: React.lazy(() => import('@/pages/Home/Device/Device')),
    },
    {
        path: '/home/devicedetail',
        name: 'detail',
        hideInMenu: true, // 通过此参数控制是否在Menu中显示
        isAuthorized: true,  // 此参数控制页面是否有访问权限，也可以使用isAuthorized: checkPermission(params)
        component: React.lazy(() => import('@/pages/Home/Device/Detail')),
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
                isAuthorized: false,  // 此参数控制页面是否有访问权限，没有的话，默认显示403页面
                // hideInMenu: true,  通过此参数控制是否在Menu中显示
                component: React.lazy(() => import('@/pages/Home/Setting/User')),
            },
            {
                path: '/home/setting/organization',
                name: 'organization',
                icon: 'team',
                isAuthorized: true,  // 此参数控制页面是否有访问权限，没有的话，默认显示403页面
                // hideInMenu: true,  通过此参数控制是否在Menu中显示
                component: React.lazy(() => import('@/pages/Home/Setting/Organization')),
            }
        ]
    }
];

export default tabs;