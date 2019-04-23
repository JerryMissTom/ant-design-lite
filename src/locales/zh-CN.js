import login from './zh-CN/login';
import menu from './zh-CN/menu';
import error from './zh-CN/error';

export default {
    'loading': '加载中',
    'profile': '个人中心',
    'logout': '登出',
    'back': '返回',
    ...login,
    ...menu,
    ...error
}