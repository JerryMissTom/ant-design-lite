import React from 'react';
// 此文件在项目为非多Tab模式的时候与react-route结合使用

export default routes = [
    { path: '/home', redirect: '/home/dashboard' },
    {
        path: '/home/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        isAuthorized: true,  // 此参数控制页面是否有访问权限，也可以使用isAuthorized: checkPermission(params)
        component: React.lazy(() => import('@/pages/Home/Dashboard/Dashboard')),
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
                component: React.lazy(() => import('@/pages/Home/User/User')),
            }
        ]
    },
    { component: React.lazy(() => import('@/pages/Exception/404')) },
];
